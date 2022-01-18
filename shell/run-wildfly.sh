#!/bin/bash

export $(cat /local/content/.env | grep -v ^# | xargs) 2> /dev/null

export WILDFLY_BIN=/opt/wildfly-8.2.1.Final/bin
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

if [ $? -eq 0 ]; then
  echo "JBoss is now running - continuing setup and deployment:"
  echo "Setting up logging."
  ${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_logging.cli
  echo "Adding admin console user."
  ${WILDFLY_BIN}/add-user.sh -a -u "${WILDFLY_ADMIN}" -p "${WILDFLY_ADMIN_PASSWORD}" -g "admin"
  echo "Adding BouncyCastle and JDBC driver to Wildfly"
  ${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
  echo "Setting up data sources"
  ${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
  echo "Testing data source setup and connection"
  ${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_checks.cli
  echo "Deploying caNano WAR"
  #${JBOSS_CLI} --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
  cp /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-8.2.1.Final/standalone/deployments
else
  echo "Didn't see JBoss start within 30 seconds!"
  exit 1
fi

echo "Restarting Wildfly"
${JBOSS_CLI} -c --controller=localhost:9990 ":shutdown"

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0