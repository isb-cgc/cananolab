#!/bin/bash
rm -rf /local/content/caNanoLab/artifacts/*
rm -rf /local/content/caNanoLab/config/*
rm -rf /usr/local/cananolab/software/cananolab-webapp/target/dist
rm -rf /opt/wildfly-8.2.1.Final/modules/com/mysql
rm -rf /opt/wildfly-8.2.1.Final/standalone/deployments/*
cd /usr/local/cananolab/software/cananolab-webapp/
ant dist
cd /usr/local/cananolab/software/cananolab-webapp/target/dist/
cp /usr/local/cananolab/docker/resources/standalone-full.xml /opt/wildfly-8.2.1.Final/standalone/configuration
cp caNanoLab.war /local/content/caNanoLab/artifacts
cd /usr/local/cananolab/software/cananolab-webapp/lib/sdk

cp  bcprov-jdk15on-1.69.jar csmapi*  /local/content/caNanoLab/artifacts
cd /usr/local/cananolab/software/cananolab-webapp/lib
cp mysql-socket-factory-connector-j-8-1.13.1-jar-with-driver-and-dependencies.jar /local/content/caNanoLab/artifacts
cd /usr/local/cananolab/software/cananolab-webapp/target/dist/common
cp caNanoLab_modules.cli caNanoLab_setup.cli caNanoLab_deploy.cli /local/content/caNanoLab/artifacts
cp wikihelp.properties /local/content/caNanoLab/config

/opt/wildfly-8.2.1.Final/bin/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli

cp /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-8.2.1.Final/standalone/deployments
echo "DEPLOYED"
cp /local/content/caNanoLab/artifacts/caNanoLab.war /opt/wildfly-8.2.1.Final/standalone/deployments
echo "DEPLOYED"
