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

# Dockerfile extending the generic Python image with application files for a
# single application.
FROM gcr.io/google_appengine/java

RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y wget
RUN wget "http://repo.mysql.com/mysql-apt-config_0.8.9-1_all.deb" -P /tmp

# install lsb-release (a dependency of mysql-apt-config), since dpkg doesn't
# do dependency resolution
RUN apt-get install -y lsb-release
# add a debconf entry to select mysql-5.7 as the server version when we install
# the mysql config package
RUN echo "mysql-apt-config mysql-apt-config/select-server select mysql-5.7" | debconf-set-selections
# having 'selected' mysql-5.7 for 'server', install the mysql config package
RUN echo 'download mysql public build key'
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 5072E1F5
#RUN apt-key del 1550412832
#RUN wget -O - -q 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x8C718D3B5072E1F5' | grep -v '>' | grep -v '<' | grep -v '{' > mysql_pubkey.asc
#RUN apt-key add mysql_pubkey.asc || exit 1
RUN dpkg --install /tmp/mysql-apt-config_0.8.9-1_all.deb

# fetch the updated package metadata (in particular, mysql-server-5.7)
RUN apt-get update

# aaaand now let's install mysql-server
RUN apt-get install -y mysql-server

RUN apt-get -y install unzip libffi-dev libssl-dev libmysqlclient-dev git ruby g++ curl

WORKDIR /tmp
RUN wget http://download.jboss.org/wildfly/8.2.1.Final/wildfly-8.2.1.Final.tar.gz \
    && tar xvfz wildfly-8.2.1.Final.tar.gz \
    && mv wildfly-8.2.1.Final /opt

RUN wget https://archive.apache.org/dist/maven/maven-3/3.5.3/binaries/apache-maven-3.5.3-bin.tar.gz \
    && tar xvfz apache-maven-3.5.3-bin.tar.gz \
    && mv apache-maven-3.5.3 /opt \
    && ln -s /opt/apache-maven-3.5.3 /opt/apache-maven

RUN wget http://archive.apache.org/dist/ant/binaries/apache-ant-1.9.9-bin.tar.gz \
    && tar xvfz apache-ant-1.9.9-bin.tar.gz \
    && mv apache-ant-1.9.9 /opt

ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH
ENV JBOSS_HOME=/opt/wildfly-8.2.1.Final

WORKDIR /usr/local
RUN mkdir -p /local/content/caNanoLab \
    && mkdir -p /local/content/caNanoLab/artifacts \
    && mkdir -p /local/content/caNanoLab/config \
    && mkdir -p /opt/wildfly-8.2.1.Final/modules/com/mysql/main

ADD . /usr/local/cananolab


