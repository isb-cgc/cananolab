#!/bin/bash

if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export SETTINGS=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export ENV_FILE_PATH=${SETTINGS}/.env
else
    export HOME=/home/vagrant/cananolab
    export SETTINGS=/home/vagrant/cananolab/localDev
    if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
        export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
    else
        exit 1
    fi
    export JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/jre/
    export JBOSS_HOME=/opt/wildfly-23.0.2.Final
    export PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH
fi

#
# Ww enable or disable synthesis based on an env variable. This is a quick hack. There are deployment
# mechanisms in Angular to do this
#

SYNTHESIS_ENABLED=$(grep "SYNTHESIS_ENABLED" "${ENV_FILE_PATH}" | sed 's#^SYNTHESIS_ENABLED=##')
# Undefined or blank or "False" means make the change
if [ -z "${SYNTHESIS_ENABLED}" ] || [ "${SYNTHESIS_ENABLED}" = "False" ]; then
  TARGET_FILE="${HOME}/software/cananolab-client-new/src/app/constants.ts"
  TMP_FILE=$(mktemp header.XXXXXXXXXX)
  cp ${TARGET_FILE} ${TMP_FILE}
  cat ${TMP_FILE} | sed "s#ENABLE_SYNTHESIS: true#ENABLE_SYNTHESIS: false#" > ${TARGET_FILE}
  rm ${TMP_FILE}
else
  echo "Synthesis remains enabled"
fi

#
# We vary the announcement (or don't show it) based upon the env var
#

ANNOUNCEMENT=$(grep "ANNOUNCEMENT" "${ENV_FILE_PATH}" | sed 's#^ANNOUNCEMENT=##')
# Undefined or blank or "NONE" means do nothing
if [ -z "${ANNOUNCEMENT}" ] || [ "${ANNOUNCEMENT}" = "NONE" ]; then
  echo "Not installing announcement"
else
  TARGET_FILE="${HOME}/software/cananolab-client-new/src/app/cananolab-client/header/header.component.html"
  TMP_FILE=$(mktemp header.XXXXXXXXXX)
  cp ${TARGET_FILE} ${TMP_FILE}
  cat ${TMP_FILE} | grep -v "___CGC_START_ANNOUNCE___" | grep -v "___CGC_END_ANNOUNCE___" \
                  | sed "s#___CGC_ANNOUNCE_MESSAGE___#${ANNOUNCEMENT}#" > ${TARGET_FILE}
  rm ${TMP_FILE}
fi

export CANANODIR=${HOME}/staged/caNanoLab
cd ${HOME}/software/cananolab-client-new/

if [ -n "$CI" ]; then
  # Build the Angular front end
  echo "[STATUS] Building Angular front end"
  npm i
  # Install Angular CLI globally
  npm install -g @angular/cli@latest
  ng build --base-href / --output-path ./build/

  cp -av ./build/. ${HOME}/software/cananolab-webapp/web/
else
  if [ ! -d "${HOME}/software/cananolab-client-new/build" ]; then
    echo "Remember to build Angular on your local file system and copy the results into cananolab-webapp/web"
  else
    cp -av ./build/. ${HOME}/software/cananolab-webapp/web/
  fi
  cp -av ${SETTINGS}/build.properties ${HOME}/software/cananolab-webapp/
fi

if [[ "$?" -ne 0 ]] ; then
  echo "<<<ANGULAR BUILD FAILED - CHECK THE BUILD LOGS>>>"
  exit 1
fi

cd ${HOME}

echo "[STATUS] Installing Libraries for build: Ant"

wget http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.9-bin.tar.gz \
    && tar xfz apache-ant-1.9.9-bin.tar.gz \
    && mv apache-ant-1.9.9 /opt \
    && rm apache-ant-1.9.9-bin.tar.gz

export ANT_HOME=/opt/apache-ant-1.9.9
export PATH=${PATH}:${ANT_HOME}/bin

echo "[STATUS] Installing Libraries for build: Maeven"

wget https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz \
    && tar xfz apache-maven-3.6.3-bin.tar.gz \
    && mv apache-maven-3.6.3 /opt \
    && ln -s /opt/apache-maven-3.6.3 /opt/apache-maven \
    && rm apache-maven-3.6.3-bin.tar.gz

cp -v ${SETTINGS}/maven-settings.xml ${ANT_HOME}/etc/settings.xml
cp -v ${SETTINGS}/maven-settings.xml /opt/apache-maven/conf/settings.xml
cp -v ${ENV_FILE_PATH} ${HOME}/software/cananolab-webapp/web/WEB-INF/
if [ -n "$CI" ] || [ ! -d "${HOME}/software/cananolab-webapp/lib/sdk" ]; then
  if [ ! -d "${HOME}/software/cananolab-webapp/lib" ] || [ -d "${HOME}/software/cananolab-webapp/lib/sdk"]; then
    mkdir -p ${HOME}/software/cananolab-webapp/lib/sdk
  fi
  cp -v ${SETTINGS}/jars/*.jar ${HOME}/software/cananolab-webapp/lib/
  cp -v ${SETTINGS}/jars/sdk/*.jar ${HOME}/software/cananolab-webapp/lib/sdk/
fi

SEMVER="${TIER}"
if [ -n "$CIRCLE_TAG" ]; then
  SEMVER=$CIRCLE_TAG
  echo "[STATUS] Tag for production release deployment: ${SEMVER}"
else
  COUNT=`git rev-list --count HEAD`
  SEMVER="${SEMVER}.${COUNT}"
  echo "[STATUS] Version for merge build: ${SEMVER}"
fi

sed -i "s/\[\[RELEASE_AND_BUILD_INFO\]\]/caNanoLab Release ${SEMVER} Build cananolab-${SEMVER}-${APP_SHA}/g" ${HOME}/software/cananolab-webapp/web/main.js
sed -i "s/\[\[RELEASE_VERSION\]\]/${SEMVER}/g" ${HOME}/software/cananolab-webapp/web/main.js

cd ${HOME}/software/cananolab-webapp/

echo "[STATUS] Building Web Application"

if [ -n "$CI" ]; then
  ant dist
else
  ant deploy_local
fi

if [[ "$?" -ne 0 ]] ; then
  echo "<<<ANT BUILD FAILED - CHECK THE BUILD LOGS>>>"
  exit 1
fi

# For cloud deployment, stage all necessary files to be loaded onto the deployment image
if [ -n "$CI" ]; then
  mkdir -p ${CANANODIR} \
    && mkdir -p ${CANANODIR}/artifacts \
    && mkdir -p ${CANANODIR}/config
  cp -v ${HOME}/software/cananolab-webapp/target/dist/caNanoLab.war ${CANANODIR}/artifacts
  cd ${HOME}/software/cananolab-webapp/lib/sdk
  cp -v csmapi* ${CANANODIR}/artifacts
  cd ${HOME}/software/cananolab-webapp/lib
  cp -v mysql-socket*.jar bcprov*.jar ${CANANODIR}/artifacts
  cd ${HOME}/software/cananolab-webapp/target/dist/common
  cp -v *.cli ${CANANODIR}/artifacts
  cp -v wikihelp.properties ${CANANODIR}/config

  cp -v ${SETTINGS}/.env ${HOME}/staged/
  cp -v ${SETTINGS}/log4j2.xml ${HOME}/staged/
  cp -v ${SETTINGS}/shell/*wildfly*.sh ${HOME}/staged/
  cp -v ${SETTINGS}/standalone-full.xml ${HOME}/staged/
  cp -v ${SETTINGS}/standalone.conf ${HOME}/staged/
  chmod ug+x ${SETTINGS}/staged/*wildfly*.sh
fi
