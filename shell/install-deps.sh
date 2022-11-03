if [ -n "$CI" ]; then
    export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
    export CANANODIR=${HOME}/staged/caNanoLab
else
    export HOME=/home/vagrant
    export HOMEROOT=/home/vagrant/cananolab
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

curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

# Wildfly installation is done in the Dockerfile for deployments; for the local VM, we do that here
if [ -z "$CI" ]; then
  wget https://download.jboss.org/wildfly/23.0.2.Final/wildfly-23.0.2.Final.tar.gz \
      && tar xvfz wildfly-23.0.2.Final.tar.gz \
      && mv wildfly-23.0.2.Final /opt
fi

echo "Libraries Installed"

# Run dos2unix on the files in shell/ because of line terminator shenanigans with Windows
echo "Running dos2unix on shell/*.sh..."
dos2unix ${HOME}/shell/*.sh

# If we have any git hooks, drop them into place.
echo "Loading Git Hooks"
if [ -z "${CI}" ] && [ -d "${HOME}/git-hooks/" ]; then
    cp -r ${HOME}/git-hooks/* ${HOME}/.git/hooks/
fi
