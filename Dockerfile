FROM openjdk:8-jdk-alpine

####################### METADATA ##########################
LABEL Maintainer="Dev K <devaret.kornish@apha.gov.uk>"
LABEL base.image=ubuntu:24.04
LABEL software="GenAPP"
LABEL about.documentation="https://github.com/APHA-CSU/GenAPP"

ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
