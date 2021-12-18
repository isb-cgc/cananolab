#!/bin/bash

cd /opt/wildfly-8.2.1.Final/bin

./standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 > /tmp/null &

echo "Waiting while JBoss starts..."

MAX_CHECKS=5
check_counter=0
result=`./jboss-cli.sh -c --commands="read-attribute server-state" > out 2&1`
echo "$result" | grep -q "running"
while [ $? -ne 0 ] && [ check_counter < MAX_CHECKS ]; do
  result=`./jboss-cli.sh -c --commands="read-attribute server-state" > out 2&1`
  echo "$result" | grep -q "running"
  check_counter = check_counter+1
  sleep 6
done

echo $?

if [ $? -eq 0 ];then
   echo "Jboss running - continuing setup and deployment."
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
  ./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
else
  echo "Didn't see JBoss start within 30 seconds!"
  exit(1)
fi

