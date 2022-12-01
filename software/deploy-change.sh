#!/bin/bash

ARTIFACTS=/Users/bill/WildFly/local/caNanoLab/artifacts
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
JBOSS=/Users/bill/WildFly/wildfly-23.0.2.Final/bin/jboss-cli.sh
$JBOSS --file=${ARTIFACTS}/caNanoLab_modules.cli
$JBOSS --file=${ARTIFACTS}/caNanoLab_setup.cli
$JBOSS --file=${ARTIFACTS}/caNanoLab_deploy.cli
