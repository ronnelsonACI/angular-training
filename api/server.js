var config = require('./config'),
    express = require('express'),
    logger = require('morgan');

module.exports = api = express();

// Pass the namespace config through to the server for
// services to use in configuring themselves
api.namespace = config.node_namespace;
api.rootDir = __dirname;
var staticsDir = api.staticsDir = process.env.NODE_STATICS || '../dist';

api.use(logger('dev'));

console.log('serving static files from ' + __dirname + '/' + staticsDir);
api.use(express.static(__dirname + '/' + staticsDir));

var apiModule = require('./endpoint/api');
apiModule.configure(api, config);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";