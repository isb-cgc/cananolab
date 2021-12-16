gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_APP_YAML}" ./
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_RUNTIME_SA_KEY}" ./privatekey.json
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${BUILD_PROPERTIES}" ./software/cananolab-webapp/build.properties
