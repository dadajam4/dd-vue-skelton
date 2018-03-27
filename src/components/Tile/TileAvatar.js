export default {
  functional: true,

  name: 'vt@tile-avatar',

  render(h, { data, children }) {
    const $avatar = h('vt@avatar', data, children);
    return h('div', {
      staticClass: 'vc@tile__avatar',
    }, [$avatar]);
  }
}