const path          = require('path');
const DDPathSetting = require('../lib/dd-path-setting');



const settings = {
  root: path.join(__dirname, '../'),

  config: {
    root   : 'config',
    task   : 'task',
    dist   : 'dist',
    css    : 'css',
    svg    : 'svg',
    webpack: 'webpack',
    server : 'server',
  },

  generate: {
    root: 'docs',
  },

  src: {
    root: 'src',
    assets: 'assets',
    static: 'static',

    plugins: {
      root: 'plugins',
      core: 'core',
    },
  },

  tasks: {
    root: 'tasks',
  },

  lib: {
    root: 'lib',
  },
};




const pathSettings = new DDPathSetting(settings);



module.exports = pathSettings;
