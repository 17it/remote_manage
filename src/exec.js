var exec = require('child_process').exec;

function execute(cmd, nolog) {
  return new Promise((res, rej) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        res('error:\n\n\n' + nolog ? '' : stderr);
      } else {
        res('success:\n\n\n' + nolog ? '' : stdout);
      }
    });
  });
}

module.exports = execute;
