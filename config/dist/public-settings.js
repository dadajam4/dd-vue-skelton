const config = require('app-root-path').require('/config');
const path   = require('path');



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
