var exec = require('child_process').exec;

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

module.exports = execute;
