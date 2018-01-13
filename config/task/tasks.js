const config       = require('app-root-path').require('/config');
const sassSettings = config.path.require('config/css/sass-settings');



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
        src: config.path('dist'),
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
          config.path(`src/static/font${sassSettings.prefix}icon`),
          config.path('src/assets/css/.tmp'),
        ],
      },
      svgIcon: {
        type: 'svgIcon',
        description: '[core] SVGアイコンのビルド',
        src: config.path('src/assets/svg-icon'),
        watch: config.path('src/assets/svg-icon'),
        dest: config.path(`src/static/font/${sassSettings.prefix}icon`),
        sassDest: config.path('src/assets/css/.tmp'),
        fontName: `${sassSettings.prefix}icon`,
        descent: 252, // (nx14) font awesome baseline fix
        template: config.path('config/svg/svg-icon-template.scss'),
        fontDir: config.path.join('../font', `${sassSettings.prefix}icon`),
      },
      sassValues: {
        type: 'sassValues',
        description: '[core] sass変数のビルド',
        src: config.path('src/constants/sass/sass-variables.js'),
        dest: config.path('src/assets/css/.tmp'),
        watch: config.path('src/constants/sass'),
      },
      // sync: {
      //   type: 'sync',
      //   description: '[core] ファイルの同期',
      //   src: config.path('plugins/core/dist/font'),
      //   dest: config.path('static/font'),
      //   watch: config.path('plugins/core/dist/font'),
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
          config.path('src/static/css'),
          config.path('src/static/img'),
        ],
      },
      sass: {
        type: 'sass',
        description: '[static] sassのビルド',
        src: config.path('src/assets/css'),
        dest: config.path('src/static/css'),
        filename: 'docs',
        watch: [
          config.path('src/assets/css'),
          config.path('src/plugins/core/sass'),
        ],
      },
      img: {
        type: 'imagemin',
        description: '[static] 画像の圧縮',
        src: config.path('src/assets/img'),
        dest: config.path('src/static/img'),
        watch: config.path('src/assets/img'),
      },
    },
  },
}
