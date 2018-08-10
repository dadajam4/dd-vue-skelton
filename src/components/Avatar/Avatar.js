import Colorable from '~/mixins/colorable';



export default {
  name: 'vt@avatar',

  mixins: [Colorable],

  props: {
    size: {
      type: [Number, String],
      // default: 48,
    },
    tile: Boolean,
    src: true,
    alt: true,
  },

  computed: {
    hasNumberSize() { return this.size !== null && !isNaN(this.size) },
    hasKeySize() { return typeof this.size === 'string' && isNaN(this.size) },
    classes() {
      const classes = this.addColorClasses({
        'vc@avatar': true,
        'vc@avatar--tile': this.tile,
      });
      if (this.hasKeySize) classes[`vc@avatar--${this.size}`] = true;
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
    const children = this.$slots.default || [];
    if (this.src) {
      children.push(h('vt@img', {
        attrs: {
          src: this.src,
          alt: this.alt,
        },
      }))
    }

    return h('div', {
      class: this.classes,
      style: this.styles,
    }, children);
  }
}
