const config                 = require('app-root-path').require('/config');
const autoprefixer           = require('autoprefixer');
const mqpacker               = require('css-mqpacker');
const cssnano                = require('cssnano');
const browserSupportSettings = config.path.require('config/browser-support-settings');



module.exports = {
  plugins: [
    autoprefixer({
      browsers: browserSupportSettings,
    }),
    mqpacker,
    new cssnano({zindex: false}),
  ],
};
