#!/bin/bash

if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
    export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
else
    exit 1
fi

export WILDFLY_HOME=/opt/wildfly-23.0.2.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin

${WILDFLY_BIN}/standalone.sh -Dapp.props.path=${APPLICATION_PROPERTIES_PATH} --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0