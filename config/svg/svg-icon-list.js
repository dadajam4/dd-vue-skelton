const config   = require('app-root-path').require('/config');
const FileUtil = require('dd-file-util');



const SVG_DIR = config.path('src/assets/svg-icon');
const list = FileUtil.fileList(SVG_DIR).map(path => path.replace(/\.svg$/, ''));



module.exports = list;
