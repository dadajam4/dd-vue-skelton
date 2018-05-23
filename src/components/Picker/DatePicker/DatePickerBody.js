export default {
  name: 'vt@date-picker-body',

  props: {
  },

  render(h) {
    return h('div', {
      staticClass: 'vc@date-picker__body',
    }, this.$slots.default);
  },
}
