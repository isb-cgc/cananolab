#!/bin/bash

if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
    export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
else
    export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null
fi

export WILDFLY_HOME=/opt/wildfly-23.0.2.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin

# Call the setup script which will load up the modules and stage the WAR file.
# It will then shut down Wildfly so we can start it up here.
# This is only run from this spot in a cloud deployment. A VM build will run this
# via the Vagrant file.
if [ "${IS_DEV,,}" != "true" ]; then
  /local/content/wildfly-setup.sh
fi

${WILDFLY_BIN}/standalone.sh -Dapp.props.path=${APPLICATION_PROPERTIES_PATH} --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0