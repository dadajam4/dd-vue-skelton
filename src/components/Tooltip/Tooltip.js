import Stackable from '~/mixins/stack';
import Colorable from '~/mixins/color/colorable';



const DEFAULT_NUDGE_AMMOUNT = 8;



export default {
  name: 'vt@tooltip',

  mixins: [Stackable, Colorable],

  props: {
    openOnHover: {
      type: Boolean,
      default: true,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default() { return !this.top && !this.left && !this.right },
    },
    nudgeTop: {
      type: [String, Number],
      default() { return this.top && DEFAULT_NUDGE_AMMOUNT || 0 },
    },
    nudgeBottom: {
      type: [String, Number],
      default() { return this.bottom && DEFAULT_NUDGE_AMMOUNT || 0 },
    },
    nudgeLeft: {
      type: [String, Number],
      default() { return this.left && DEFAULT_NUDGE_AMMOUNT || 0 },
    },
    nudgeRight: {
      type: [String, Number],
      default() { return this.right && DEFAULT_NUDGE_AMMOUNT || 0 },
    },
    offsetY: {
      type: Boolean,
      default() { return this.top || this.bottom },
    },
    offsetX: {
      type: Boolean,
      default() { return this.left || this.right },
    },
    adjustActivatorWidth: {
      type: Boolean,
      default: false,
    },
    adjustActivatorCenter: {
      type: Boolean,
      default: true,
    },
    switchOffsetOverflow: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: String,
      default() {
        if (this.top) return 'vc@slide-y-reverse-transition';
        if (this.right) return 'vc@slide-x-transition';
        if (this.bottom) return 'vc@slide-y-transition';
        if (this.left) return 'vc@slide-x-reverse-transition';
      },
    },
    closeWithRemove: {
      type: Boolean,
      default: true,
    },
    closeOnContentClick: {
      type: Boolean,
      default: false,
    },
  },

  render(h) {
    return this.genStack('div', {
      staticClass: 'vc@tooltip',
    }, this.$slots.default);
  },
}