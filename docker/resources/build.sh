#!/bin/bash
killall -9 java
/opt/wildfly-8.2.1.Final/bin/standalone.sh -b 0.0.0.0 -bmanagement 0.0.0.0 --server-config=standalone-full.xml

