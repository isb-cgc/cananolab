export let Properties = {

    // Be sure API_SERVER_URL is an empty string for non development environments (no ng start)
    // API_SERVER_URL: '',
    // API_SERVER_URL: 'http://localhost:8090',
     API_SERVER_URL: 'http://192.168.1.17:8090',

    // Show in console, curl version of post & get calls.
    DEBUG_CURL: true,

    // This value can be changed in the config file.  @FIXME  No, this is not yet in the config file!
    HTTP_TIMEOUT: 120000,

    DEFAULT_SECRET: 'testing',

    CONFIG_FILE: 'configuration',
    CONFIG_COMPLETE: false, // @TODO Do not forget to implement checking for & updating this value

    TEST_MODE: false

}
