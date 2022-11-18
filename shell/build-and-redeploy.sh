#!/bin/bash

############## Helper functions ##############

# Wait for something server-related.
# $1 - the JBoss CLI command to perform eg. "read-attribute server-state"
# $2 - the text to grep for in the command's result which indicates success
# $3 - the text to use in the reporting echo statement
function wait_for_server() {
  COMMAND=$1
  CHECK=$2
  CHECK_FOR=$3
  counter=0
  result=`${JBOSS_CLI} -c --commands="${COMMAND}"`
  echo "${CHECK_FOR} status: ${result}"
  echo "$result" | grep -q "${CHECK}"
  while [ $? -ne 0 ] && [ $counter -lt 5 ]; do
    echo "${CHECK_FOR} isn't ready yet. Continuing to wait..."
    result=`${WILDFLY_BIN}/jboss-cli.sh -c --commands="${COMMAND}"`
    echo "$result" | grep -q "${CHECK}"
    ((counter=counter+1))
    sleep 6
  done
  echo "${CHECK_FOR} status: ${result}"
  return $?
}

# Check to see if wildfly's process is still running
function check_for_wildfly() {
  pids=$(ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh" | grep -v "start-wildfly.sh" | awk '{print $2}')
  echo "${pids}"
}

############## END Helper Functions ##############

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

    if [ "$1" == "-d" ]; then
      ant deploy_local
      if [[ "$?" -ne 0 ]] ; then
        echo "<<<ANT BUILD FAILED - CHECK THE BUILD LOGS>>>"
        exit 1
      fi
    fi

  WILDFLY_PID=`check_for_wildfly`
  if [ -z "${WILDFLY_PID}" ]; then
    echo "[STATUS] Wildfly isn't running - starting it."
    ${WILDFLY_BIN}/standalone.sh -Dapp.props.path=${APPLICATION_PROPERTIES_PATH} --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 &

    # Wait for Wildfly to start before we do anything else (this can take a while)
    echo "[STATUS] Waiting while Wildfly starts:"
    wait_for_server "read-attribute server-state" "running" "Wildfly"

    if [ $? -ne 0 ]; then
      echo "Didn't see Wildfly start within 30 seconds!"
      exit 1
    fi

  fi
  echo "[STATUS] Deploying caNanoLab via CLI script."
  ${JBOSS_CLI} --file=${ARTIFACTS}/caNanoLab_deploy.cli
else
  echo "This script is not meant for use in CircleCI -- exiting!"
  exit 1
fi
