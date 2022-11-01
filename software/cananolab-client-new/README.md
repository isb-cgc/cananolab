# Updated caNanoLab Client Interface
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Build
- Install Node 14-16. Do not install 17+ as there are OpenSSL 3 breaking changes.
- cd to source directory `cananolab/software/cananolab-client-new`
- Before your first build, run `npm install`. 
  - You do not need to do this again unless you make changes to modules in use (eg. versions, remove/add).
- `ng build --base-href /  --output-path <destination path for compiled code>`
  - You can use the `target` directory as the output path, eg. specify `cananolab/software/cananolab-webapp/target/front-end`
- Copy the resulting files into `cananolab/software/cananolab-webapp/web`
