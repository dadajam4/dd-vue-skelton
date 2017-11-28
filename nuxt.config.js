const config              = require('app-root-path').require('/config');
const path                = require('path');
const sassSettings        = require(path.join(config.path.config.css, 'sass-settings'));
const babelLoaderSettings = require(path.join(config.path.config.webpack, 'babel-loader-settings'));
const postcssConfig       = require(path.join(config.path.config.css, 'postcss.config'));
const webpack             = require('webpack');



module.exports = {
  router: {
    base: process.env.NUXT_COMMAND === 'default' ? '/' : '/$$base$$',

    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {

        // savedPosition is only available for popstate navigations.
        return savedPosition;
      } else {
        const position = {};
        let delay = 500;

        // if no children detected
        if (to.matched.length < 2) {
          // scroll to the top of the page
          position.x = 0;
          position.y = 0;
        } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // if one of the children has scrollToTop option set to true
          position.x = 0;
          position.y = 0;
        }

        // if link has anchor,  scroll to anchor by returning the selector
        if (to.hash) {
          position.selector = to.hash;

          if (document.querySelector(to.hash)) {
            delay = 0;
          }
        }

        // wait for the out transition to complete (if necessary)
        await (new Promise(resolve => setTimeout(resolve, delay)));
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
      }
    },
  },

  generate: {
    dir: config.path.generate.root,
  },

  head: {
    titleTemplate: '%s | dd-vue-skelton',
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
