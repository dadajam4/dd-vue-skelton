const PATH_PROPS = [
  'dateFormatDefine',
  // 'computedMin',
  // 'computedMax'
  // 'typeIsDate',
  // 'typeIsMonth',
  // 'ymIndexOrder',
  // 'narrowWeeks',
  // 'narrowMonths',
  // 'xxx',
  // 'xxx',
  // 'xxx',
  // 'xxx',
  // 'xxx',
];

const computed = {};
for (const key of PATH_PROPS) {
  computed[key] = function() { return this.$context[key] }
}

// computed.hasControls
// console.log(computed);



export default {
  name: 'vt@date-picker-context',

  inject: ['$context'],

  computed,
}
