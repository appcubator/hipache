var wakeScriptPath = '/home/ubuntu/deploy/remote/wake.sh'
exports.wake = function (host, depId, successCallback, errorCallback) {
  // TODO XXX escape host and depId.
  console.log("wake was called. args:");
  console.log(host);
  console.log(depId);
  require('child_process').execFile(wakeScriptPath, [host, depId],
      function (error, stdout, stderr) {
          if (error !== null) {
              errorCallback(error, stdout, stderr);
          } else {
              successCallback(stdout, stderr);
          }
      });
};
