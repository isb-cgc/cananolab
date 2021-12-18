#!/bin/bash

export WILDFLY_BIN=/opt/wildfly-8.2.1.Final/bin

${WILDFLY_BIN}/standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 > /tmp/null &

echo "Waiting while JBoss starts:"

counter=0
result=`${WILDFLY_BIN}/jboss-cli.sh -c --commands="read-attribute server-state"`
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
   echo "JBoss is now running - continuing setup and deployment."
  ${WILDFLY_BIN}/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
  ${WILDFLY_BIN}/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
  ${WILDFLY_BIN}/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
else
  echo "Didn't see JBoss start within 30 seconds!"
  exit 1
fi

