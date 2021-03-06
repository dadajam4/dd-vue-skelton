let sassVariables = {};

// // UI Settings
// const uiSettings = require('../../../config/css/ui-settings');
// sassVariables = Object.assign({}, sassVariables, uiSettings);

// Themes
const themes = require('../../../config/css/themes');
sassVariables = Object.assign({}, sassVariables, {themes});

// Media Query Settings
const mediaQuerySettings = require('./media-query-settings');
sassVariables['media-query-target'] = mediaQuerySettings.target;
sassVariables['media-query-breakpoints'] = {};
sassVariables['media-query-groups'] = {};
mediaQuerySettings.breakPoints.forEach(breakPoint => {
  sassVariables['media-query-breakpoints'][breakPoint.key] = breakPoint;
  const conditions = [];
  if (breakPoint.min) conditions.push(`(min-width: ${breakPoint.min}px)`);
  if (breakPoint.max) conditions.push(`(max-width: ${breakPoint.max}px)`);
  sassVariables['media-query-breakpoints'][breakPoint.key].conditions = "'" + conditions.join(' and ') + "'";
});
for (let key in mediaQuerySettings.groups) {
  const group     = mediaQuerySettings.groups[key],
        target    = group.min ? 'min' : 'max',
        keyValue  = group[target],
        value     = sassVariables['media-query-breakpoints'][keyValue][target],
        condition = `(${target}-width: ${value}px)` + (group.orientation ? ` and (orientation: ${group.orientation})` : '');

  sassVariables['media-query-groups'][key] = condition;
}



module.exports = sassVariables;
