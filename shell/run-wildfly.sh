#!/bin/bash

cd /opt/wildfly-8.2.1.Final/bin

./standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 > /tmp/null &

echo "Waiting while JBoss starts..."

./jboss-cli.sh -c --commands="read-attribute server-state"

counter=0
result=`./jboss-cli.sh -c --commands="read-attribute server-state"`
echo "$result" | grep -q "running"
while [ $? -ne 0 ] && [ $counter -lt 5 ]; do
  result=`./jboss-cli.sh -c --commands="read-attribute server-state"`
  echo "$result" | grep -q "running"
  ((counter=counter+1))
  sleep 6
done

if [ $? -eq 0 ]; then
   echo "Jboss running - continuing setup and deployment."
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
else
  echo "Didn't see JBoss start within 30 seconds!"
  exit 1
fi

