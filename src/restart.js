var path = require('path');
var exec = require('child_process').exec;
var cmdstr = 'sh ' + path.join(__dirname, '../sh/restart.sh');

function execute(cmd) {
  return new Promise((res, rej) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        res('error:\n\n\n' + stderr);
      } else {
        res('success:\n\n\n' + stdout);
      }
    });
  });
}

module.exports = execute(cmdstr);
