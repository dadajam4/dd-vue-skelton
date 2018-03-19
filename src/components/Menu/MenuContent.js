import Stackable from '~/mixins/stackable';



export default {
  name: 'vt@menu-content',

  mixins: [Stackable],

  props: {
    value: Boolean,
    activator: {
      type: [String, Object, Function],
    },
    slotActivatorVNode: {
      type: Object,
    },
    activatorAction: {
      type: String,
      default: 'toggle',
    },
    transition: {
      type: String,
      default: 'vc@menu-transition',
    },
    hiddenWithRemove: {
      type: Boolean,
      default: false,
    },
  },

  render(h) {
    return this.genStack('div', {
      staticClass: 'vc@menu',
    }, this.$slots.default);
  },
}