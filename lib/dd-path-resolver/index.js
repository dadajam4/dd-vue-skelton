const appRoot = require('app-root-path');
const path    = require('path');



const factory = (settings = {}, $root = (appRoot + '')) => {
  const publicInterface = (accesser = null) => {
    if (accesser === null) return $root;

    const keys = accesser.split('/');
    const tmp  = [];

    let obj = settings;
    tmp.push($root);

    for (let key of keys) {
      obj = obj[key] || {};
      tmp.push(obj.$root || key);
    }

    return path.join(...tmp);
  }

  publicInterface.root     = $root;
  publicInterface.settings = settings;

  publicInterface.require = accesser => {
    return require(publicInterface(accesser));
  }

  publicInterface.join = path.join;

  return publicInterface;
}



module.exports = factory;
