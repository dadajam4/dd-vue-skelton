const NOT_COUNT_CHILDREN = [
  'vt@menu',
  'vt@tooltip',
];

export default {
  functional: true,

  name: 'vt@tile-action',

  render(h, { data, children }) {
    data.staticClass = data.staticClass ? `vc@tile__action ${data.staticClass || ''}` : 'vc@tile__action'
    const countChildren = (children || []).filter(c => !c.componentOptions || !NOT_COUNT_CHILDREN.includes(c.componentOptions.tag));
    if (countChildren.length > 1) data.staticClass += ' vc@tile__action--stack';
    return h('div', data, children);
  }
}