FROM cbiit/centos7_base
MAINTAINER Shaun Einolf

RUN yum -y update && yum -y install git java-1.8.0-openjdk-devel mysql sudo util-linux wget
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

RUN git clone https://github.com/CBIIT/cananolab
WORKDIR /tmp/cananolab
RUN git checkout synthesis
RUN git pull

ENV PATH=/opt/apache-maven/bin:/opt/apache-ant-1.9.9/bin:$PATH
ENV JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk
ENV JBOSS_HOME=/opt/wildfly-8.2.1.Final

WORKDIR /usr/local
RUN mkdir -p /local/content/caNanoLab \
    && mkdir -p /local/content/caNanoLab/artifacts \
    && mkdir -p /local/content/caNanoLab/config \
    && mkdir -p /opt/wildfly-8.2.1.Final/modules/com/mysql/main

COPY entrypoint/run.sh /usr/bin/
COPY resources/standalone-full.xml /opt/wildfly-8.2.1.Final/standalone/configuration/standalone-full.xml
COPY resources/module.xml /opt/wildfly-8.2.1.Final/modules/com/mysql/main
COPY resources/mysql-connector-java-5.1.26.jar /opt/wildfly-8.2.1.Final/modules/com/mysql/main 
COPY resources/run.sh /opt/wildfly-8.2.1.Final/bin

EXPOSE 8080 19990
ENTRYPOINT ["/usr/bin/run.sh"]
