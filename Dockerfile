###
#
# Copyright 2021, Institute for Systems Biology
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
###

FROM gcr.io/google-appengine/openjdk:8

RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y wget gnupg2

# fetch the updated package metadata
RUN apt-get update

RUN apt-get -y install build-essential
RUN apt-get -y install libxml2-dev libxmlsec1-dev swig

RUN apt-get -y install unzip libffi-dev libssl-dev git ruby g++ curl

COPY ./staged /local/content/

WORKDIR /tmp
RUN wget https://download.jboss.org/wildfly/8.2.1.Final/wildfly-8.2.1.Final.tar.gz \
    && tar xvfz wildfly-8.2.1.Final.tar.gz \
    && mv wildfly-8.2.1.Final /opt

COPY ./standalone-full.xml /opt/wildfly-8.2.1.Final/standalone/configuration/standalone-full.xml

ENV JBOSS_HOME=/opt/wildfly-8.2.1.Final
ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH

EXPOSE 8080 9990
ENTRYPOINT ["/local/content/start-wildfly.sh"]
