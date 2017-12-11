const config = require('app-root-path').require('/config');



const myName = 'dd';



const publicSettings = {
  vue: {
    nameSpace: myName,
  },
  css: {
    name: myName,
    key: myName,
    prefix: myName + '-',
  },
};



module.exports = publicSettings;
