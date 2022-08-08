caNanoLab Project
=====================================
Refer to the [caNanoLab Wiki Home Page] (https://wiki.nci.nih.gov/x/F4V-AQ) for complete and current caNanoLab user documentation and other technical information.

<br>
<b>Setup Steps for ISB CGC Team</b>

<i>These steps have been verified in Mac OSX 10.15.7(Catalina)</i>

1. Install Docker.
2. Git clone the newest project source code from the master branch.
3. For local development, change the docker-compose.ymllocal file to docker-compose.yml. Also edit Line 9 to point to your local source code folder. This will make sure your local change update in the docker container.
4. Open terminal, and run .docker/start.sh. This will setup your docker containers needed to run the DB and app locally.
5. Switch to docker, and verify in the log to see if there is any error.
6. To access the webapp, go to localhost:8080/ instead the default "open in browser" button (localhost:19990/) from docker.
7. (Optional) The default docker address (localhost:19990/) points to the admin management portal for the deployment. To do this, you need to add a new user first by following the instruction in http://localhost:19990/console/App.html. You need to run ./add-user.sh in the docker container's terminal (not your local machine). The add-user.sh file is under $JBOSS_HOME/bin/. 

<img width="700" alt="Screen Shot 2021-10-11 at 11 20 04 PM" src="https://user-images.githubusercontent.com/58752821/137853244-298bb566-e9c9-4c5f-a3c0-8ab806ebc833.png">
