export default {
  name: 'vt@tabs-nav',

  computed: {
    classes() {
      return {
        'vc@tabs__nav': true,
      }
    },
  },

  render(h) {
    const $nav = h('nav', {
      staticClass: 'vc@tabs__nav-container',
    }, [this.$slots.default]);

    return h('vt@scroller', {
      class: this.classes,
    }, [$nav]);
  },
}