#!/bin/bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
JBOSS=/users/mi/wildfly-24.0.1.Final/bin/jboss-cli.sh
$JBOSS --file=/Users/mi/software/local/content/artifacts/caNanoLab_modules.cli
$JBOSS --file=/Users/mi/software/local/content/artifacts/caNanoLab_setup.cli
$JBOSS --file=/Users/mi/software/local/content/artifacts/caNanoLab_deploy.cli
