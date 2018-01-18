import Colorable from '~/mixins/color';



export default {
  name: 'vt@avatar',

  mixins: [Colorable],

  props: {
    size: {
      type: [Number, String],
      default: 48,
    },
    tile: Boolean,
  },

  computed: {
    hasNumberSize() { return !isNaN(this.size) },
    classes() {
      const classes = this.addColorClasses({
        'vc@avatar': true,
        'vc@avatar--tile': this.tile,
      });
      if (!this.hasNumberSize) classes[`vc@avatar--${this.size}`] = true;
      return classes;
    },
    styles() {
      if (this.hasNumberSize) {
        const size = `${parseInt(this.size)}px`;
        return {
          width: size,
          height: size,
        }
      }
    },
  },

  render(h) {
    return h('div', {
      class: this.classes,
      style: this.styles,
    }, this.$slots.default);
  }
}