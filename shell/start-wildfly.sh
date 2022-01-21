#!/bin/bash

export WILDFLY_HOME=/opt/wildfly-8.2.1.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin

/local/content/wildfly-setup.sh

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0