const config = require('app-root-path').require('/config');
const path   = require('path');
const spawn  = require('child_process').spawn;



function nuxtTask(task, params = {}) {
  return new Promise((resolve, reject) => {
    const options = [];

    if (params.command) options.push(params.command);

    const env = Object.create(process.env);
    env.NUXT_COMMAND = params.command || 'default';
    const nuxt = spawn('nuxt', options, {shell: true, stdio: 'inherit', env});

    if (params.command) {
      return nuxt.on('close', code => {
        console.log(`child process exited with code ${code}`);
        resolve();
      });
    } else {
      resolve();
    }
  });
}



module.exports = nuxtTask;
