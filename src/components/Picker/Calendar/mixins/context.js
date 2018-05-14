const PATH_PROPS = [
  'dateFormatDefine',
  'showCurrent',
  'holidayColor',
  'currentColor',
];

const computed = {};
for (const key of PATH_PROPS) {
  computed[key] = function() { return this.$context[key] }
}



export default {
  name: 'vt@calendar-context',

  inject: ['$context'],

  computed,
}
