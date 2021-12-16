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
RUN wget "http://repo.mysql.com/mysql-apt-config_0.8.9-1_all.deb" -P /tmp

# install lsb-release (a dependency of mysql-apt-config), since dpkg doesn't
# do dependency resolution
RUN apt-get install -y lsb-release
# add a debconf entry to select mysql-5.7 as the server version when we install
# the mysql config package
RUN echo "mysql-apt-config mysql-apt-config/select-server select mysql-5.7" | debconf-set-selections
# having 'selected' mysql-5.7 for 'server', install the mysql config package
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 5072E1F5
RUN dpkg --install /tmp/mysql-apt-config_0.8.9-1_all.deb

# fetch the updated package metadata (in particular, mysql-server-5.7)
RUN apt-get update

# aaaand now let's install mysql-server
RUN apt-get install -y mysql-server

RUN apt-get -y install build-essential
RUN apt-get -y install libxml2-dev libxmlsec1-dev swig

RUN apt-get -y install unzip libffi-dev libssl-dev libmysqlclient-dev git ruby g++ curl

WORKDIR /tmp
RUN wget http://download.jboss.org/wildfly/8.2.1.Final/wildfly-8.2.1.Final.tar.gz \
    && tar xvfz wildfly-8.2.1.Final.tar.gz \
    && mv wildfly-8.2.1.Final /opt

ENV JBOSS_HOME=/opt/wildfly-8.2.1.Final
ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH

RUN mkdir -p /local/content

ADD ./staged/* /local/content/

WORKDIR /opt/wildfly-8.2.1.Final/bin
RUN ./standalone.sh --server-config=standalone-full.xml
RUN ./jboss-cli.sh --file=content/caNanoLab/artifacts/caNanoLab_modules.cli
RUN ./jboss-cli.sh --file=content/caNanoLab/artifacts/caNanoLab_setup.cli
RUN ./jboss-cli.sh --file=content/caNanoLab/artifacts/caNanoLab_deploy.cli

EXPOSE 8080 19990
ENTRYPOINT ["${JBOSS_HOME}/bin/${JBOSS_MODE}.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0", "-c", "${JBOSS_CONFIG}"]
