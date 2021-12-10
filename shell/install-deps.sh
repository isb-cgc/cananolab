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

#sudo gcloud auth activate-service-account --key-file ${HOMEROOT}/${SECURE_LOCAL_PATH}/${GOOGLE_APPLICATION_CREDENTIALS}
#sudo gcloud config set project "${GCLOUD_PROJECT_ID}"
#sudo gsutil cp "gs://${GCLOUD_BUCKET_DEV_SQL}/${JAR_FOLDER}" ${HOMEROOT}/lib/${JAR_FOLDER}


echo "Libraries Installed"

# Run dos2unix on the files in shell/ because of line terminator shenanigans with Windows
echo "Running dos2unix on shell/*.sh..."
dos2unix ${HOMEROOT}/shell/*.sh

echo "Loading Git Hooks"
if [ -z "${CI}" ] && [ -d "${HOMEROOT}/git-hooks/" ]; then
    cp -r ${HOMEROOT}/git-hooks/* ${HOMEROOT}/.git/hooks/
fi
