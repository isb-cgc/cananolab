if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
fi

apt-get update -qq

# Install and update apt-get info
echo "Preparing System..."
apt-get -y --force-yes install software-properties-common
apt-get install ca-certificates

apt-get update -qq

# Install apt-get dependencies
echo "Installing Dependencies..."
apt-get install -y --force-yes unzip libffi-dev libssl-dev git ruby g++ curl dos2unix
apt-get install -y --force-yes libmysqlclient-dev build-essential
apt-get install -y --force-yes mysql-client

wget http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.9-bin.tar.gz \
    && tar xvfz apache-ant-1.9.9-bin.tar.gz \
    && mv apache-ant-1.9.9 /opt

wget https://archive.apache.org/dist/maven/maven-3/3.5.3/binaries/apache-maven-3.5.3-bin.tar.gz \
    && tar xvfz apache-maven-3.5.3-bin.tar.gz \
    && mv apache-maven-3.5.3 /opt \
    && ln -s /opt/apache-maven-3.5.3 /opt/apache-maven

mkdir -p /local/content/caNanoLab \
    && mkdir -p /local/content/caNanoLab/artifacts \
    && mkdir -p /local/content/caNanoLab/config \
    && mkdir -p /opt/wildfly-8.2.1.Final/modules/com/mysql/main

#sudo gcloud auth activate-service-account --key-file ${HOMEROOT}/${SECURE_LOCAL_PATH}/${GOOGLE_APPLICATION_CREDENTIALS}
#sudo gcloud config set project "${GCLOUD_PROJECT_ID}"
#sudo gsutil cp "gs://${GCLOUD_BUCKET_DEV_SQL}/${JAR_FOLDER}" ${HOMEROOT}/lib/${JAR_FOLDER}

cd ${HOME}/software/cananolab-webapp/
ant dist
cp caNanoLab.war /local/content/caNanoLab/artifacts
cd ${HOME}/software/cananolab-webapp/lib/sdk
cp  bcprov-jdk15on-1.66.jar csmapi*  /local/content/caNanoLab/artifacts
cd ${HOME}/software/cananolab-webapp/lib
cp mysql-connector-java-8.0.18.jar /local/content/caNanoLab/artifacts
cd ${HOME}/cananolab-webapp/target/dist/common
cp caNanoLab_modules.cli caNanoLab_setup.cli caNanoLab_deploy.cli /local/content/caNanoLab/artifacts
cp wikihelp.properties /local/content/caNanoLab/config


echo "Libraries Installed"

# Run dos2unix on the files in shell/ because of line terminator shenanigans with Windows
echo "Running dos2unix on shell/*.sh..."
dos2unix ${HOMEROOT}/shell/*.sh

echo "Loading Git Hooks"
if [ -z "${CI}" ] && [ -d "${HOMEROOT}/git-hooks/" ]; then
    cp -r ${HOMEROOT}/git-hooks/* ${HOMEROOT}/.git/hooks/
fi
