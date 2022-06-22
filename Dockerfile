###
#
# Copyright 2022, Institute for Systems Biology
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

FROM marketplace.gcr.io/google/debian10

RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y software-properties-common
RUN apt-get install -y wget gnupg2

# fetch the updated package metadata
RUN apt-get update

# Install OpenJDK8
RUN wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add -
RUN add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
RUN apt-get update && apt-get install adoptopenjdk-8-hotspot
ENV JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/jre/

RUN apt-get -y install build-essential
RUN apt-get -y install libxml2-dev libxmlsec1-dev swig
RUN apt-get -y install unzip libffi-dev libssl-dev git ruby g++ curl

COPY ./staged /local/content/

WORKDIR /tmp
RUN wget https://download.jboss.org/wildfly/23.0.2.Final/wildfly-23.0.2.Final.tar.gz \
    && tar xvfz wildfly-23.0.2.Final.tar.gz \
    && mv wildfly-23.0.2.Final /opt

ENV JBOSS_HOME=/opt/wildfly-23.0.2.Final
ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH

EXPOSE 8080 9990
ENTRYPOINT ["/local/content/start-wildfly.sh"]
