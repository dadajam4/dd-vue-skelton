export default {
  name: 'vt@menu-content',

  props: {
    value: Boolean,
  },

  render(h) {
    return h('vt@app-stack', {
      staticClass: 'vc@menu',
      props: {
        value: this.value,
      },
    }, this.$slots.default);
  },
}