const config              = require('app-root-path').require('/config');
const webpack             = require('webpack');
const sassSettings        = config.path.require('config/css/sass-settings');
const babelLoaderSettings = config.path.require('config/webpack/babel-loader-settings');
const postcssConfig       = config.path.require('config/css/postcss.config');
const routesResolver      = config.path.require('lib/dd-vue-routes-resolver');



const nuxtCommand       = process.env.NUXT_COMMAND;
const nuxtIsDevelop     = nuxtCommand === 'default';
const nuxtIsGenerate    = nuxtCommand === 'generate';
const nuxtIsBuild       = nuxtCommand === 'build';
const nuxtIsStart       = nuxtCommand === 'start';
const isBasePathResolve = nuxtIsGenerate;
const basePathPrefix    = isBasePathResolve ? '' : '/';
const cacheBuster       = `?v=${new Date().getTime()}`;



module.exports = {
  srcDir: 'src/',

  router: {
    base: isBasePathResolve ? '/$$base$$' : '/',

    // extendRoutes: routesResolver,

    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
      } else {
        const position = {};
        // let delay = $nuxt.$routeChangeDelay;
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
          if (to.name === from.name && document.querySelector(to.hash)) {
            $nuxt.$appScrollTo(to.hash);
            return;
          } else {
            const el = await $nuxt.$util.waitElementInsert(to.hash, 100, delay * 2);
            if (el) {
              window.scrollTo(0, 0);
              setTimeout(() => {
                $nuxt.$appScrollTo(to.hash);
              }, 10);
            }
            return;
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
    dir: config.path('dist'),
    minify: false,
  },

  head: {
    titleTemplate: '%s | dd-vue-skelton',

    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ディスクリプションです' },
    ],

    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },

      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },

      // { rel: 'stylesheet', href: `${basePathPrefix}css/docs.css${cacheBuster}` },
    ],
  },

  css: [
    { src: '~assets/css/docs.scss', lang: 'scss' },
  ],

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
    // これやると相対パス解決できない
    // extractCSS: true,
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
      webpackConfig.resolve.modules.push(config.path('lib'));
      webpackConfig.resolveLoader.modules.push(config.path('lib'));

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

      // // いつかここで coreを自動でインポートするといいかも
      // webpackConfig.module.rules.unshift({
      //   test: /\.(scss|sass)$/,
      //   enforce: 'pre',
      //   loader: 'dd-sass-loader',
      //   exclude: /node_modules/,
      //   options: {
      //     css: {
      //       prefix: sassSettings.prefix,
      //     },
      //   },
      // });
    },

    vendor: [
      // 'babel-polyfill',
      '~/plugins/core',
    ],
  },

  plugins: [
    '~/plugins/core',
    '~/plugins/highlightjs',
  ],
}
