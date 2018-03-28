export default {
  name: 'vt@highlight',

  functional: true,

  props: {
    value: String,
    match: [String, Object],
    highlightTag: {
      type: String,
      default: 'mark',
    },
    highlightClass: {
      type: String,
    },
    caseSensitive: Boolean,
  },

  render(h, { children = [], props }) {
    const $children = [];
    const matchValue = props.match || props.value;
    const tester = matchValue && typeof matchValue === 'string' ? new RegExp(matchValue, props.caseSensitive ? '' : 'i') : matchValue;

    for (let c of children) {
      if (c.text && tester) {
        const html = c.text.replace(tester, `<${props.highlightTag}${props.highlightClass ? ' class="' + props.highlightClass +'"' : ''}>$1</${props.highlightTag}>`);
        $children.push(h('span', {domProps: {innerHTML: html}}));
      } else {
        $children.push(c);
      }
    }

    return $children;
  },
}