export default {
  functional: true,

  name: 'vt@list-tile-action',

  render (h, { data, children }) {
    data.staticClass = data.staticClass ? `vc@list__tile__action ${data.staticClass || ''}` : 'vc@list__tile__action'
    if ((children || []).length > 1) data.staticClass += ' vc@list__tile__action--stack';

    return h('div', data, children);
  }
}