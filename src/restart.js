var path = require('path');
var execute = require('./exec');
var cmdstr = 'sh ' + path.join(__dirname, '../sh/restart.sh');

module.exports = execute(cmdstr);