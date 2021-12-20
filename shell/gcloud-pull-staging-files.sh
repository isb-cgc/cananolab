gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_APP_YAML}" ./app.yaml
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_RUNTIME_SA_KEY}" ./privatekey.json
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${BUILD_PROPERTIES}" ./software/cananolab-webapp/build.properties
gsutil cp "gs://${DEPLOYMENT_BUCKET}/standalone-full.xml" ./standalone-full.xml
gsutil cp "gs://${DEPLOYMENT_BUCKET}/maven-settings.xml" ./
