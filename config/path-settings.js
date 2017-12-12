const PathResolver = require('../lib/dd-path-resolver');



const settings = {
  dist: 'docs',
};




const pathSettings = PathResolver(settings);



module.exports = pathSettings;
