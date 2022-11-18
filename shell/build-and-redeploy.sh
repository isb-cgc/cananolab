#!/bin/bash

if [ -z "$CI" ]; then
    export HOME=/home/vagrant/cananolab
    export SETTINGS=/home/vagrant/cananolab/localDev
    if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
        export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
    else
        exit 1
    fi
    export JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/jre/
    export PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH
    export WILDFLY_HOME=/opt/wildfly-23.0.2.Final
    export WILDFLY_BIN=$WILDFLY_HOME/bin
    export JBOSS_CLI=$WILDFLY_BIN/jboss-cli.sh
    export ARTIFACTS=/home/vagrant/cananolab/software/cananolab-webapp/local_build/artifacts

    if [[ ! "$1" == "d" ]]; then
      ant deploy_local
      if [[ "$?" -ne 0 ]] ; then
        echo "<<<ANT BUILD FAILED - CHECK THE BUILD LOGS>>>"
        exit 1
      fi
    fi

    echo "[STATUS] Deploying caNanoLab via CLI script. Make sure Wildfly is up and running or this won't work!"

    ${JBOSS_CLI} --file=${ARTIFACTS}/caNanoLab_deploy.cli
else
  echo "This script is not meant for use in CircleCI -- exiting!"
  exit 1
fi
