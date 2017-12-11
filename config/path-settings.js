const PathResolver = require('../lib/dd-path-resolver');



const settings = {
  generate: 'docs',
};




const pathSettings = PathResolver(settings);



module.exports = pathSettings;
