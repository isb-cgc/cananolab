if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export CANANODIR=${HOME}/staged/caNanoLab
fi

# Build the Angular front end
echo "[STATUS] Building Angular front end"
cd ${HOME}/software/cananolab-client-new/
npm i
# Install Angular CLI globally
npm install -g @angular/cli@latest
ng build --base-href / --output-path ./front-end/

cp -av ./front-end/. ${HOME}/software/cananolab-webapp/web/

if [[ "$?" -ne 0 ]] ; then
  echo "<<<ANGULAR BUILD FAILED - CHECK THE BUILD LOGS>>>"
  exit 1
fi

cd ${HOME}

echo "[STATUS] Building Web Application"
wget http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.9-bin.tar.gz \
    && tar xvfz apache-ant-1.9.9-bin.tar.gz \
    && mv apache-ant-1.9.9 /opt

export ANT_HOME=/opt/apache-ant-1.9.9
export PATH=${PATH}:${ANT_HOME}/bin

wget https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz \
    && tar xvfz apache-maven-3.6.3-bin.tar.gz \
    && mv apache-maven-3.6.3 /opt \
    && ln -s /opt/apache-maven-3.6.3 /opt/apache-maven

mkdir -p ${CANANODIR} \
    && mkdir -p ${CANANODIR}/artifacts \
    && mkdir -p ${CANANODIR}/config

cp -v ${HOME}/maven-settings.xml ${ANT_HOME}/etc/settings.xml
cp -v ${HOME}/maven-settings.xml /opt/apache-maven/conf/settings.xml
cp -v ${HOME}/jars/*.jar ${HOME}/software/cananolab-webapp/lib/
cp -v ${HOME}/jars/sdk/*.jar ${HOME}/software/cananolab-webapp/lib/sdk/
cp -v ${HOME}/.env ${HOME}/software/cananolab-webapp/web/WEB-INF/

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

cd ${HOME}/software/cananolab-webapp/
ant dist

if [[ "$?" -ne 0 ]] ; then
  echo "<<<ANT BUILD FAILED - CHECK THE BUILD LOGS>>>"
  exit 1
fi

cp -v ${HOME}/software/cananolab-webapp/target/dist/caNanoLab.war ${CANANODIR}/artifacts
cd ${HOME}/software/cananolab-webapp/lib/sdk
cp -v csmapi* ${CANANODIR}/artifacts
cd ${HOME}/software/cananolab-webapp/lib
cp -v mysql-socket*.jar bcprov*.jar ${CANANODIR}/artifacts
cd ${HOME}/software/cananolab-webapp/target/dist/common
cp -v *.cli ${CANANODIR}/artifacts
cp -v wikihelp.properties ${CANANODIR}/config

cp -v ${HOME}/shell/*wildfly*.sh ${HOME}/staged/
cp -v ${HOME}/.env ${HOME}/staged/
cp -v ${HOME}/standalone-full.xml ${HOME}/staged/
cp -v ${HOME}/standalone.conf ${HOME}/staged/
cp -v ${HOME}/log4j2.xml ${HOME}/staged/
chmod ug+x ${HOME}/staged/*wildfly*.sh
