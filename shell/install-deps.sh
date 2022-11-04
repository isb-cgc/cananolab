#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

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
apt-get -y --allow-downgrades install software-properties-common
apt-get update -qq

# Install apt-get dependencies
echo "Installing Dependencies..."
apt-get install -y --allow-downgrades debconf-utils ca-certificates lsb-release
apt-get install -y --allow-downgrades unzip libffi-dev libssl-dev git g++ curl dos2unix
apt-get install -y --allow-downgrades build-essential

if [ -n "$CI" ]; then
  curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
  apt-get install -y nodejs
fi

# Wildfly and Java installation are done in the Dockerfile for cloud deployments; for the local VM, we do that here
if [ -z "$CI" ]; then
  apt-get update
  wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add -
  add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
  apt-get update && apt-get -y install adoptopenjdk-8-hotspot
  export JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/jre/
  echo "Java Version:"
  java -version

  wget https://download.jboss.org/wildfly/23.0.2.Final/wildfly-23.0.2.Final.tar.gz \
      && tar xfz wildfly-23.0.2.Final.tar.gz \
      && mv wildfly-23.0.2.Final /opt
fi

echo "Libraries Installed"

# Run dos2unix on the files in shell/ because of line terminator shenanigans with Windows
echo "Running dos2unix on shell/*.sh and .env files..."
dos2unix ${HOMEROOT}/shell/*.sh
doc2unix ${HOMEROOT}/localDev/.env
if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
    dos2unix ${ENV_FILE_PATH}
fi

# If we have any git hooks, drop them into place.
echo "Loading Git Hooks"
if [ -z "${CI}" ] && [ -d "${HOME}/git-hooks/" ]; then
    cp -r ${HOME}/git-hooks/* ${HOME}/.git/hooks/
fi
