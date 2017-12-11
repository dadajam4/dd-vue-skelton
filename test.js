const appRoot = require('app-root-path');
const path    = require('path');



const factory = (settings = {}, $root = (appRoot + '')) => {
  const publicInterface = (accesser = null) => {
    if (accesser === null) return $root;

    const slashMatch = accesser.match(/^((?!\/).*?)\/(.*)?$/);
    const keysStr    = slashMatch ? slashMatch[1] : accesser;
    const keys       = keysStr.split('.');
    const tmp        = [];

    let obj = settings;
    tmp.push($root);

    for (let key of keys) {
      obj = obj[key] || {};
      tmp.push(obj.$root || key);
    }

    if (slashMatch && slashMatch[2]) tmp.push(slashMatch[2]);
    return path.join(...tmp);
  }

  publicInterface.root     = $root;
  publicInterface.settings = settings;

  return publicInterface;
}
