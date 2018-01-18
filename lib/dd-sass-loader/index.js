const loaderUtils = require('loader-utils');



module.exports = function(source, map) {
  this.cacheable();

  // いつかここで coreを自動でインポートするといいかも
  // const options = loaderUtils.getOptions(this);

  // console.log(source);
  // source = source.replace(/\.vc@/g, `.${options.css.prefix}`);

  this.callback(null, source, map);
};