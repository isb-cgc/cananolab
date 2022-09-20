if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export CANANODIR=${HOME}/staged/caNanoLab
fi

# Build the Angular front end
cd ${HOME}/software/cananolab-client-new/
npm i
ng build --base-href / --ouput-path ${HOME}/software/cananolab-webapp/web/

cd ${HOME}

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

sed -i "s/\[\[RELEASE_AND_BUILD_INFO\]\]/caNanoLab Release 3.1.0 Build cananolab-3.1.0-${APP_SHA}/g" ${HOME}/software/cananolab-webapp/web/main.js

cd ${HOME}/software/cananolab-webapp/
ant dist

if [[ "$?" -ne 0 ]] ; then
  echo "<<<BUILD FAILED - CHECK THE BUILD LOGS>>>"
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
