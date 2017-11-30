const config = require('app-root-path').require('/config');
const path   = require('path');



const sassSettings = {
  prefix: 'dd-',
  includePaths: [
    path.join(config.path.src.assets, 'css'),
  ],
};



module.exports = sassSettings;
