const config              = require('app-root-path').require('/config');
const path                = require('path');
const sassSettings        = require(path.join(config.path.config.css, 'sass-settings'));
const babelLoaderSettings = require(path.join(config.path.config.webpack, 'babel-loader-settings'));
const postcssConfig       = require(path.join(config.path.config.css, 'postcss.config'));
const webpack             = require('webpack');



module.exports = {
  router: {
    base: process.env.NUXT_COMMAND === 'default' ? '/' : '/$$base$$',
  },

  generate: {
    dir: config.path.generate.root,
  },

  head: {
    titleTemplate: '%s | dd-skelton',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.6,user-scalable=yes' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ディスクリプションです' },
    ],
    link: [
      { rel: 'stylesheet', href: (process.env.NUXT_COMMAND === 'default' ? '/' : '') + 'css/dd.css' },
    ],
  },

  // css: [
  //   { src: '~assets/css/main.scss', lang: 'scss' },
  // ],

  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       return [
  //         // 'script',
  //         'style',
  //         'font',
  //       ].includes(type);
  //     }
  //   }
  // },

  build: {
    babel: babelLoaderSettings.query,

    postcss: postcssConfig.plugins,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `'${config.env}'`,
        'IS_PRODUCTION'       : config.isProduction,
        'IS_DEVELOP'          : config.isDevelop,
        // 'docsSettings.svgIcon.list'   : JSON.stringify(docsSettings.svgIcon.list),
      }),
    ],

    extend(webpackConfig, { isDev, isClient }) {
      webpackConfig.resolve.modules.push(path.join(config.path.root, 'lib'));
      webpackConfig.resolveLoader.modules.push(path.join(config.path.root, 'lib'));

      const baseRule = webpackConfig.module.rules.find(rule => rule.loader === 'vue-loader');
      ['sass', 'scss'].forEach(name => {
        const loader = baseRule.options.loaders[name].find(row => row.loader === 'sass-loader');
        loader.options = Object.assign({}, loader.options, sassSettings);
      });

      webpackConfig.module.rules.unshift({
        test: /\.(vue|js)$/,
        enforce: 'pre',
        loader: 'dd-vue-loader',
        exclude: /node_modules/,
        options: {
          vue: {
            nameSpace: 'dd',
          },
          css: {
            prefix: sassSettings.prefix,
          },
        },
      });
    },

    vendor: [
      'babel-polyfill',
      '~/plugins/ui',
    ],
  },

  plugins: [
    // '~/plugins/polyfill',
    '~/plugins/ui',
  ],
}
