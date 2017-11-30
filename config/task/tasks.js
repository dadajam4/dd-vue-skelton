const config       = require('app-root-path').require('/config');
const path         = require('path');
const sassSettings = require(path.join(config.path.config.css, 'sass-settings'));



module.exports = {

  // global
  global: {
    name: 'global',
    tasks: {
      nuxt: {
        type: 'nuxt',
      },
      nuxtDistPathResolve: {
        type: 'path2relative',
        src: config.path.generate.root,
      },
    },
  },

  // core
  core: {
    name: 'core',
    tasks: {
      clean: {
        type: 'clean',
        description: '[core] ファイルの削除',
        targets: [
          path.join(config.path.src.static, 'font', `${sassSettings.prefix}icon`),
          path.join(config.path.src.assets, 'css', '.tmp'),
        ],
      },
      svgIcon: {
        type: 'svgIcon',
        description: '[core] SVGアイコンのビルド',
        src: path.join(config.path.src.assets, 'svg-icon'),
        watch: path.join(config.path.src.assets, 'svg-icon'),
        dest: path.join(config.path.src.static, 'font', `${sassSettings.prefix}icon`),
        sassDest: path.join(config.path.src.assets, 'css', '.tmp'),
        fontName: `${sassSettings.prefix}icon`,
        template: path.join(config.path.config.root, 'svg', 'svg-icon-template.scss'),
        fontDir: path.join('../font', `${sassSettings.prefix}icon`),
      },
      sassValues: {
        type: 'sassValues',
        description: '[core] sass変数のビルド',
        src: path.join(config.path.src.root, 'constants', 'sass', 'sass-variables.js'),
        dest: path.join(config.path.src.assets, 'css', '.tmp'),
        watch: path.join(config.path.src.root, 'constants', 'sass'),
      },
      // sync: {
      //   type: 'sync',
      //   description: '[core] ファイルの同期',
      //   src: path.join(config.path.plugins.core, 'dist', 'font'),
      //   dest: path.join(config.path.static.root, 'font'),
      //   watch: path.join(config.path.plugins.core, 'dist', 'font'),
      // },
    },
  },

  // static
  static: {
    name: 'static',
    tasks: {
      clean: {
        type: 'clean',
        description: '[static] ファイルの削除',
        targets: [
          path.join(config.path.src.static, 'css'),
          path.join(config.path.src.static, 'img'),
        ],
      },
      sass: {
        type: 'sass',
        description: '[static] sassのビルド',
        src: path.join(config.path.src.assets, 'css'),
        dest: path.join(config.path.src.static, 'css'),
        filename: 'docs',
        watch: [
          path.join(config.path.src.assets, 'css'),
          path.join(config.path.src.plugins.core, 'sass'),
        ],
      },
      img: {
        type: 'imagemin',
        description: '[static] 画像の圧縮',
        src: path.join(config.path.src.assets, 'img'),
        dest: path.join(config.path.src.static, 'img'),
        watch: path.join(config.path.src.assets, 'img'),
      },
    },
  },
}
