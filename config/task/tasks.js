const config         = require('app-root-path').require('/config');
const path           = require('path');
const publicSettings = require(path.join(config.path.config.dist, 'public-settings'));



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

  // ui
  ui: {
    name: 'ui',
    tasks: {
      clean: {
        type: 'clean',
        description: '[ui] ファイルの削除',
        targets: path.join(config.path.plugins.ui, 'dist', '**', '*'),
      },
      svgIcon: {
        type: 'svgIcon',
        description: '[ui] SVGアイコンのビルド',
        src: path.join(config.path.plugins.ui, 'assets', 'svg-icon'),
        watch: path.join(config.path.plugins.ui, 'assets', 'svg-icon'),
        dest: path.join(config.path.plugins.ui, 'dist', 'font', `${publicSettings.css.prefix}icon`),
        sassDest: path.join(config.path.plugins.ui, 'sass', '.tmp'),
        fontName: `${publicSettings.css.prefix}icon`,
        template: path.join(config.path.plugins.ui, 'config', 'svg', 'svg-icon-template.scss'),
        fontDir: path.join('..', config.path.public.assets.$names.font, `${publicSettings.css.prefix}icon`),
      },
      sassValues: {
        type: 'sassValues',
        description: '[ui] sass変数のビルド',
        src: path.join(config.path.plugins.ui, 'constants', 'sass', 'sass-variables.js'),
        dest: path.join(config.path.plugins.ui, 'sass', '.tmp'),
        watch: path.join(config.path.plugins.ui, 'constants', 'sass'),
      },
      sync: {
        type: 'sync',
        description: '[ui] ファイルの同期',
        src: path.join(config.path.plugins.ui, 'dist', 'font'),
        dest: path.join(config.path.static.root, 'font'),
        watch: path.join(config.path.plugins.ui, 'dist', 'font'),
      },
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
          path.join(config.path.static.root, 'css'),
          path.join(config.path.static.root, 'img'),
        ],
      },
      sass: {
        type: 'sass',
        description: '[static] sassのビルド',
        src: path.join(config.path.assets.root, 'css'),
        dest: path.join(config.path.static.root, 'css'),
        filename: 'dd',
        watch: [
          path.join(config.path.assets.root, 'css'),
        ],
      },
      img: {
        type: 'imagemin',
        description: '[static] 画像の圧縮',
        src: path.join(config.path.assets.root, 'img'),
        dest: path.join(config.path.static.root, 'img'),
        watch: path.join(config.path.assets.root, 'img'),
      },
    },
  },
}
