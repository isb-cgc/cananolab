gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_APP_YAML}" ./cananolab-webapp/src/main/appengine/app.yaml
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${ENV_FILE}" ./cananolab-webapp/.env
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${WEBAPP_RUNTIME_SA_KEY}" ./cananolab-webapp/privatekey.json
gsutil cp "gs://${DEPLOYMENT_BUCKET}/${BUILD_PROPS_FILE}" ./cananolab-webapp/build.properties
