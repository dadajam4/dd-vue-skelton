const config = require('app-root-path').require('/config');



const sassSettings = {
  prefix: 'dd-',
  includePaths: [
    config.path('src/assets/css'),
  ],
};



module.exports = sassSettings;
