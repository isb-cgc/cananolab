if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export CANANODIR=${HOME}/staged/caNanoLab
fi

wget http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.9-bin.tar.gz \
    && tar xvfz apache-ant-1.9.9-bin.tar.gz \
    && mv apache-ant-1.9.9 /opt

export ANT_HOME=/opt/apache-ant-1.9.9
export PATH=${PATH}:${ANT_HOME}/bin

wget https://archive.apache.org/dist/maven/maven-3/3.5.3/binaries/apache-maven-3.5.3-bin.tar.gz \
    && tar xvfz apache-maven-3.5.3-bin.tar.gz \
    && mv apache-maven-3.5.3 /opt \
    && ln -s /opt/apache-maven-3.5.3 /opt/apache-maven

cp -v ${HOME}/maven-settings.xml /opt/apache-maven-3.5.3/conf/settings.xml

mkdir -p ${CANANODIR} \
    && mkdir -p ${CANANODIR}/artifacts \
    && mkdir -p ${CANANODIR}/config

#sudo gcloud auth activate-service-account --key-file ${HOME}/${SECURE_LOCAL_PATH}/${GOOGLE_APPLICATION_CREDENTIALS}
#sudo gcloud config set project "${GCLOUD_PROJECT_ID}"
#sudo gsutil cp "gs://${GCLOUD_BUCKET_DEV_SQL}/${JAR_FOLDER}" ${HOME}/lib/${JAR_FOLDER}

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
cp -v mysql-connector-java-8.0.18.jar bcprov-jdk15on-1.69.jar ${CANANODIR}/artifacts
cd ${HOME}/software/cananolab-webapp/target/dist/common
cp -v caNanoLab_modules.cli caNanoLab_setup.cli caNanoLab_deploy.cli ${CANANODIR}/artifacts
cp -v wikihelp.properties ${CANANODIR}/config

cp -v ${HOME}/shell/run-wildfly.sh ${HOME}/staged/
chmod ug+x ${HOME}/staged/run-wildfly.sh