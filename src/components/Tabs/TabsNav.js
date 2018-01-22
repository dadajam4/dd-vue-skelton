export default {
  name: 'vt@tabs-nav',

  props: {
    center: Boolean,
    wrap: Boolean,
  },

  computed: {
    classes() {
      return {
        'vc@tabs__nav': true,
        // 'vc@tabs__nav--center': this.center,
        // 'vc@tabs__nav--wrap': this.wrap,
      }
    },
  },

  render(h) {
    const $nav = h('nav', {
      staticClass: 'vc@tabs__nav-container',
      class: {
        'vc@tabs__nav-container--center': this.center,
        'vc@tabs__nav-container--wrap': this.wrap,
      },
    }, [this.$slots.default]);

    return h('vt@scroller', {
      class: this.classes,
    }, [$nav]);
  },
}