#!/bin/bash

export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null

export WILDFLY_HOME=/opt/wildfly-13.0.0.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin
export JBOSS_CLI=$WILDFLY_BIN/jboss-cli.sh

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 &

# Helper functions

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
  ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh" | grep -v "start-wildfly.sh" | awk '{print $2}'
}

echo "Waiting while Wildfly starts:"
wait_for_server "read-attribute server-state" "running" "Wildfly"

if [ $? -ne 0 ]; then
  echo "Didn't see Wildfly start within 30 seconds!"
  exit 1
fi

echo "Wildfly is now running - continuing setup and deployment:"
# If this is a new database, uncomment these lines *once* to add an admin user
#echo "Adding admin console user."
#${WILDFLY_BIN}/add-user.sh -a -u "${WILDFLY_ADMIN}" -p "${WILDFLY_ADMIN_PASSWORD}" -g "admin"
echo "Adding BouncyCastle and JDBC driver to Wildfly"
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
echo "Setting up logging and data sources."
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli

wait_for_server "read-attribute server-state" "running" "Wildfly"

if [ $? -ne 0 ]; then
  echo "Didn't see Wildfly restart within 30 seconds!"
  exit 1
fi

echo "Testing data source setup and connection"
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_checks.cli
echo "Deploying caNano WAR"
cp -v /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-13.0.0.Final/standalone/deployments

wait_for_server "deployment-info --name=caNanoLab.war" "OK" "Deployment"

if [ $? -ne 0 ]; then
  echo "Didn't see caNano complete deployment within 30 seconds!"
  exit 1
fi

# We need to halt Wildfly here to start it in the main entrypoint process, so that the shell
# which is running is that one and not this script.
echo "Deployment completed - stopping Wildfly"
${JBOSS_CLI} -c --controller=localhost:9990 ":shutdown"
counter=0
WILDFLY_PID=check_for_wildfly
echo "${pids}"
while [ ! -z "${WILDFLY_PID}" ] && [ $counter -lt 5 ]; do
  echo "JBoss is still running. Continuing to wait..."
  WILDFLY_PID=check_for_wildfly
  ((counter=counter+1))
  sleep 6
done

if [ ! -z "${WILDFLY_PID}" ]; then
  echo "Wildfly failed to stop in time!"
  exit 1
fi

echo "Wildfly has stopped."