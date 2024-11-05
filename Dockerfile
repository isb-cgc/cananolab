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
RUN apt-get install -y wget gnupg2 procps apt-transport-https

# fetch the updated package metadata
RUN apt-get update

# Install OpenJDK17
RUN wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | apt-key add -
RUN echo "deb https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list
RUN apt-get update && apt-get -y install temurin-17-jdk
RUN ls -l /usr/lib/jvm/
RUN ls -l /usr/lib/jvm/temurin-17-jdk-amd64/
ENV JAVA_HOME=/usr/lib/jvm/temurin-17-jdk-amd64/
RUN echo "Java Version:"
RUN java -version

RUN apt-get -y install build-essential
RUN apt-get -y install libxml2-dev libxmlsec1-dev swig
RUN apt-get -y install unzip libffi-dev libssl-dev git ruby g++ curl

COPY ./staged /local/content/

WORKDIR /tmp
RUN wget https://github.com/wildfly/wildfly/releases/download/25.0.1.Final/wildfly-25.0.1.Final.tar.gz \
    && tar xvfz wildfly-25.0.1.Final.tar.gz \
    && mv wildfly-25.0.1.Final /opt

ENV JBOSS_HOME=/opt/wildfly-25.0.1.Final
ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH

EXPOSE 8080 9990
ENTRYPOINT ["/local/content/start-wildfly.sh"]
