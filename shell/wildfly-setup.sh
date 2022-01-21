#!/bin/bash

export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null

export WILDFLY_HOME=/opt/wildfly-8.2.1.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin
export JBOSS_CLI=$WILDFLY_BIN/jboss-cli.sh

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 &

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

echo "Waiting while Wildfly starts:"
wait_for_server "read-attribute server-state" "running" "Wildfly"

if [ $? -ne 0 ]; then
  echo "Didn't see Wildfly start within 30 seconds!"
  exit 1
fi

echo "Wildfly is now running - continuing setup and deployment:"
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
cp -v /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-8.2.1.Final/standalone/deployments

wait_for_server "deployment-info --name=caNanoLab.war" "OK" "Deployment"

if [ $? -ne 0 ]; then
  echo "Didn't see caNano complete deployment within 30 seconds!"
  exit 1
fi

echo "Deployment completed - stopping Wildfly"
${JBOSS_CLI} -c --controller=localhost:9990 ":shutdown"
counter=0
WILDFLY_PID=`ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh" | grep -v "start-wildfly.sh" | awk '{print $2}'`
pids=`ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh"`
echo "${pids}"
while [ ! -z "${WILDFLY_PID}" ] && [ $counter -lt 5 ]; do
  echo "JBoss is still running. Continuing to wait..."
  WILDFLY_PID=`ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh" | grep -v "start-wildfly.sh" | awk '{print $2}'`
  pids=`ps -ef | grep wildfly | grep -v grep | grep -v "wildfly-setup.sh"`
  echo "${pids}"
  ((counter=counter+1))
  sleep 6
done

if [ ! -z "${WILDFLY_PID}" ]; then
  echo "Wildfly failed to stop in time!"
  exit 1
fi
