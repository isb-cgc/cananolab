#!/bin/bash

export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null

export WILDFLY_HOME=/opt/wildfly-8.2.1.Final
export WILDFLY_BIN=$WILDFLY_HOME/bin
export JBOSS_CLI=$WILDFLY_BIN/jboss-cli.sh

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 &

echo "Waiting while JBoss starts:"

counter=0
result=`${JBOSS_CLI} -c --commands="read-attribute server-state"`
echo "JBoss status: ${result}"
echo "$result" | grep -q "running"
while [ $? -ne 0 ] && [ $counter -lt 5 ]; do
  echo "JBoss isn't ready yet. Continuing to wait..."
  result=`${WILDFLY_BIN}/jboss-cli.sh -c --commands="read-attribute server-state"`
  echo "$result" | grep -q "running"
  ((counter=counter+1))
  sleep 6
done

if [ $? -ne 0 ]; then
  echo "Didn't see JBoss start within 30 seconds!"
  exit 1
fi

echo "JBoss is now running - continuing setup and deployment:"
#echo "Adding admin console user."
#${WILDFLY_BIN}/add-user.sh -a -u "${WILDFLY_ADMIN}" -p "${WILDFLY_ADMIN_PASSWORD}" -g "admin"
echo "Adding BouncyCastle and JDBC driver to Wildfly"
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
echo "Setting up logging and data sources."
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli

counter=0
result=`${JBOSS_CLI} -c --commands="read-attribute server-state"`
echo "JBoss status: ${result}"
echo "$result" | grep -q "running"
while [ $? -ne 0 ] && [ $counter -lt 5 ]; do
  echo "JBoss isn't ready yet. Continuing to wait..."
  result=`${WILDFLY_BIN}/jboss-cli.sh -c --commands="read-attribute server-state"`
  echo "$result" | grep -q "running"
  ((counter=counter+1))
  sleep 6
done

if [ $? -ne 0 ]; then
  echo "Didn't see JBoss restart within 30 seconds!"
  exit 1
fi

echo "Testing data source setup and connection"
${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_checks.cli
echo "Deploying caNano WAR"
# ${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
cp -v /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-8.2.1.Final/standalone/deployments

result=`${JBOSS_CLI} -c --commands="deployment-info --name=caNanoLab.war"`
counter=0
echo "Deployment status: ${result}"
echo "$result" | grep -q "OK"
while [ $? -ne 0 ] && [ $counter -lt 5 ]; do
  echo "Deployment isn't ready yet. Continuing to wait..."
  result=`${JBOSS_CLI} -c --commands="deployment-info --name=caNanoLab.war"`
  echo "Deployment status: ${result}"
  echo "$result" | grep -q "OK"
  ((counter=counter+1))
  sleep 6
done

if [ $? -ne 0 ]; thenz
  echo "Didn't see caNano complete deployment within 30 seconds!"
  exit 1
else
  echo "Deployment status: ${result}"
fi

echo "Deployment completed - restarting Wildfly"
${JBOSS_CLI} -c --controller=localhost:9990 ":shutdown"
counter=0
WILDFLY_PID=`ps -ef | grep wildfly | grep -v grep | grep -v "run-wildfly.sh" | awk '{print $2}'`
while [ ! -z "${WILDFLY_PID}" ] && [ $counter -lt 5 ]; do
  echo "JBoss is still running. Continuing to wait..."
  WILDFLY_PID=`ps -ef | grep wildfly | grep -v grep | grep -v "run-wildfly.sh" |awk '{print $2}'`
  ((counter=counter+1))
  sleep 6
done

if [ ! -z "${WILDFLY_PID}" ]; then
  echo "Wildfly failed to stop in time - exiting!"
  exit 1
else
  echo "Wildfly has shut down - restarting"
fi

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0