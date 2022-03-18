#!/bin/bash

export WILDFLY_HOME=/opt/wildfly-13.0.0.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin

# Call the setup script which will ensure we have the right logging, modules, and run the deployment.
# It will then shut down Wildfly so we can start it up here.
/local/content/wildfly-setup.sh

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0