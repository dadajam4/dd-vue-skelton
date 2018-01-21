export default {
  name: 'vt@tabs-contents',

  computed: {
    classes() {
      return {
        'vc@tabs__contents': true,
      }
    },
  },

  render(h) {
    return h('div', {
      class: this.classes,
    }, [this.$slots.default]);
  },
}