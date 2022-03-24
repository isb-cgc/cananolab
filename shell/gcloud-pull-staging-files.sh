gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_APP_YAML}" ./app.yaml
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_ENV_FILE}" ./.env
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${BUILD_PROPERTIES}" ./software/cananolab-webapp/build.properties
gsutil cp "gs://${DEPLOYMENT_BUCKET}/maven-settings.xml" ./
gsutil cp "gs://${DEPLOYMENT_BUCKET}/standalone-full.xml" ./
mkdir jars
gsutil cp -r "gs://${DEPLOYMENT_BUCKET}/jars/*" ./jars
