import Stackable from '~/mixins/stack';


export default {
  name: 'vt@menu',

  mixins: [Stackable],

  props: {
    top: Boolean,
    right: Boolean,
    bottom: {
      type: Boolean,
      default() { return !this.top || false },
    },
    left: {
      type: Boolean,
      default() { return !this.right || false },
    },
  },

  render(h) {
    return this.genStack('div', {
      staticClass: 'vc@menu',
    }, this.$slots.default);
  },
}