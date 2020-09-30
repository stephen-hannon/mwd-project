function init(ParseProvider) {
    // parse credentials
    var PARSE_APP_ID = 'QgA8eKudk3aNAqZazDzlhnCvoCyOMfok9fPqOW7Q';
    var PARSE_JS_KEY = 'xFjscdHL6guWdW35IOvGsRv4LO3uBXlsQZxygQMu';
    ParseProvider.initialize(PARSE_APP_ID, PARSE_JS_KEY);
    ParseProvider.serverURL = 'https://parseapi.back4app.com'; 
}

angular
    .module('common')
    .config(init);