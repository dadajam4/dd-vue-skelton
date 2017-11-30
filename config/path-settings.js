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

  generate: 'docs',

  // assets: {
  //   root: 'assets',
  // },

  // static: {
  //   root: 'static',
  // },

  // plugins: {
  //   root: 'plugins',
  //   core: 'core',
  // },

  src: {
    root: 'src',

    assets: 'assets',
    static: 'static',

    plugins: {
      root: 'plugins',
      core: 'core',
    },

    // tmp: {
    //   root: '.tmp',
    //   sass: 'sass',
    // },
    // constants: {
    //   root: 'constants',
    //   sass: 'sass',
    // },
    // sprite: 'sprite',
    // svgIcon: 'svg-icon',
    // img: 'img',
    // css: 'css',
    // js: 'js',
    // html: 'html',
    // files: 'files',
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
