#!/bin/bash

if [ -z "$CI" ]; then
  echo "[ERROR] This script is only for use in CircleCI!"
  exit 1
fi

export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null

export WILDFLY_HOME=/opt/wildfly-23.0.2.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin

# Call the setup script which will load up the modules and stage the WAR file.
# It will then shut down Wildfly so we can start it up here.
/local/content/wildfly-setup.sh

${WILDFLY_BIN}/standalone.sh -Dapp.props.path=${APPLICATION_PROPERTIES_PATH} --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0