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

if [ "${IS_DEV,,}" == "true" ]; then
  if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
    export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
  else
    exit 1
  fi
  export HOME=/home/vagrant/cananolab
  export SETTINGS=${HOME}/localDev
  export CANANODIR=${HOME}/software/cananolab-webapp/local_build
else
  export HOME=/home/circleci/${CIRCLE_PROJECT_REPONAME}
  export SETTINGS=/local/content
  export CANANODIR=${SETTINGS}/caNanoLab
  export $(cat ${SETTINGS}/.env | grep -v ^# | xargs) 2> /dev/null
fi

export ARTIFACTS=${CANANODIR}/artifacts

export WILDFLY_HOME=/opt/wildfly-23.0.2.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin
export JBOSS_CLI=$WILDFLY_BIN/jboss-cli.sh

cp -v ${SETTINGS}/standalone-full.xml ${WILDFLY_HOME}/standalone/configuration/
cp -v ${SETTINGS}/standalone.conf ${WILDFLY_BIN}/
cp -v ${SETTINGS}/log4j2.xml ${WILDFLY_HOME}/standalone/configuration/

${WILDFLY_BIN}/standalone.sh -Dapp.props.path=${APPLICATION_PROPERTIES_PATH} --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 &

# Wait for Wildfly to start before we do anything else (this can take a while)
echo "Waiting while Wildfly starts:"
wait_for_server "read-attribute server-state" "running" "Wildfly"

if [ $? -ne 0 ]; then
  echo "Didn't see Wildfly start within 30 seconds!"
  exit 1
fi

echo "Wildfly is now running - continuing setup and deployment:"
# If this is a new database, uncomment these lines *once* to add an admin user
# echo "Adding admin console user."
# ${WILDFLY_BIN}/add-user.sh -a -u "${WILDFLY_ADMIN}" -p "${WILDFLY_ADMIN_PASSWORD}" -g "admin"
echo "Adding BouncyCastle and JDBC driver to Wildfly"
${JBOSS_CLI} --file=${ARTIFACTS}/caNanoLab_modules.cli
# Note that unlike the other scripts, module addition scripts DO change the filesystem and so will
# persist between VM cycling. Most other .cli scripts will modify only in-memory files and be lost
# at the end of this script.

# Wait for Wildfly to reload...
wait_for_server "read-attribute server-state" "running" "Wildfly"

if [ $? -ne 0 ]; then
  echo "Didn't see Wildfly restart within 30 seconds!"
  exit 1
fi

# Run the check script to log the status
echo "Testing data source setup and connection"
${JBOSS_CLI} --file=${ARTIFACTS}/caNanoLab_checks.cli

# Drop the WAR file into standalone/deployments, which will start a deployment
echo "Deploying caNano WAR"
cp -v ${ARTIFACTS}/caNanoLab.war /opt/wildfly-23.0.2.Final/standalone/deployments

wait_for_server "deployment-info --name=caNanoLab.war" "OK" "Deployment"

if [ $? -ne 0 ]; then
  echo "Didn't see caNano complete deployment within 30 seconds!"
  exit 1
fi

# Check filesystem access for Lucene index writing. If we don't have filesystem write acces, indexed searches will fail.
touch /tmp/checkFS
ls -la /tmp
if [ ! -f /tmp/checkFS ]; then
  echo "[WARNING] Didn't see /tmp/checkFS! Index writes may not succeed."
else
  echo "[STATUS] /tmp/checkFS seen - File system appears writeable."
fi

# We need to halt Wildfly here to start it in the main entrypoint process, so that the shell
# which is running is that one and not this script.
echo "Deployment completed - stopping Wildfly"
${JBOSS_CLI} -c --controller=localhost:9990 ":shutdown"
counter=0
WILDFLY_PID=`check_for_wildfly`
echo "WILDFLY_PID(s) seen:"
echo "${WILDFLY_PID}"
while [ ! -z "${WILDFLY_PID}" ] && [ $counter -lt 5 ]; do
  echo "JBoss is still running. Continuing to wait..."
  WILDFLY_PID=`check_for_wildfly`
  ((counter=counter+1))
  sleep 6
done

if [ ! -z "${WILDFLY_PID}" ]; then
  echo "[WARNING] Wildfly failed to stop in time! Processes still seen:"
  ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh" | grep -v "start-wildfly.sh"
  echo "[WARNING] This may cause problems when Wildfly is launched in the entrypoint script."
  exit 1
fi

echo "Wildfly has stopped - setup is complete."