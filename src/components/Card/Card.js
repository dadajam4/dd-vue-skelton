import Colorable from '~/mixins/colorable';
import Routable from '~/mixins/routable';



export default {
  name: 'vt@card',

  mixins: [Colorable, Routable],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto',
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    inline: Boolean,
    tag: {
      type: String,
      default: 'div',
    },
    tile: Boolean,
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@card': true,
        'vc@card--inline': this.inline,
        'vc@card--flat': this.flat,
        // 'vc@card--horizontal': this.horizontal,
        // 'vc@card--hover': this.hover,
        // 'vc@card--raised': this.raised,
        'vc@card--tile': this.tile,
        // 'vc@theme--light': this.light,
        // 'vc@theme--dark': this.dark,
      });
      // return this.addBackgroundColorClassChecks({
      //   'vc@card': true,
      //   'vc@card--flat': this.flat,
      //   'vc@card--horizontal': this.horizontal,
      //   'vc@card--hover': this.hover,
      //   'vc@card--raised': this.raised,
      //   'vc@card--tile': this.tile,
      //   'vc@theme--light': this.light,
      //   'vc@theme--dark': this.dark,
      // })
    },

    styles() {
      const style = {
        height: isNaN(this.height) ? this.height : `${this.height}px`,
      }

      if (this.img) {
        style.background = `url(${this.img}) center center / cover no-repeat`;
      }

      return style;
    }
  },

  render(h) {
    const { tag, data } = this.generateRouteLink();
    data.style = this.styles;
    return h(tag, data, this.$slots.default);
  }
}
