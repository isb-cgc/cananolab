#!/bin/bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
JBOSS=/users/lauren/WildFly/wildfly-23.0.2.Final/bin/jboss-cli.sh
$JBOSS --file=/Users/lauren/WildFly/local/caNanoLab/artifacts/caNanoLab_modules.cli
$JBOSS --file=/Users/lauren/WildFly/local/caNanoLab/artifacts/caNanoLab_setup.cli
$JBOSS --file=/Users/lauren/WildFly/local/caNanoLab/artifacts/caNanoLab_deploy.cli
