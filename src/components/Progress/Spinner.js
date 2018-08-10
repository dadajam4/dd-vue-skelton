export default {
  name: 'vt@spinner',

  // mixins: [TextColorable],

  props: {
    button: Boolean,

    fill: {
      type: String,
      default() { return this.indeterminate ? 'none' : 'transparent' },
    },

    color: String,

    indeterminate: Boolean,

    rotate: {
      type: [Number, String],
      default: 0,
    },

    size: {
      type: [Number, String],
      default: 32,
    },

    width: {
      type: [Number, String],
      default: 4,
    },

    value: {
      type: [Number, String],
      default: 0,
    }
  },

  computed: {
    classes() {
      const classes = {
        'vc@spinner': true,
        'vc@spinner--indeterminate': this.indeterminate,
        'vc@spinner--button': this.button,
      };

      if (this.color) classes[`vc@${this.color}--text`] = true;
      return classes;
    },


    calculatedSize() {
      let size = Number(this.size);

      if (this.button) size += 8;

      return size;
    },

    circumference() { return 2 * Math.PI * this.radius },

    cxy() { return this.indeterminate && !this.button ? 50 : this.calculatedSize / 2 },

    normalizedValue() {
      let value = Number(this.value);
      if (this.value < 0) return 0;
      if (this.value > 100) return 100;
      return this.value;
    },

    normalizedRotate() { return Number(this.rotate)},

    normalizedWidth() { return Number(this.width)},

    radius() {
      return this.indeterminate &&
        !this.button
        ? 20
        : (this.calculatedSize - this.normalizedWidth) / 2
    },

    strokeDashArray() { return Math.round(this.circumference * 1000) / 1000 },

    strokeDashOffset() { return ((100 - this.normalizedValue) / 100) * this.circumference + 'px' },

    styles() {
      return {
        height: `${this.calculatedSize}px`,
        width: `${this.calculatedSize}px`,
      }
    },

    svgSize() { return this.indeterminate ? false : this.calculatedSize },

    svgStyles() {
      return {
        transform: `rotate(${this.normalizedRotate}deg)`,
      }
    },

    viewBox() { return this.indeterminate ? '25 25 50 50' : false },
  },

  methods: {
    genCircle(h, name, offset) {
      return h('circle', {
        class: `vc@spinner__${name}`,
        attrs: {
          fill: 'transparent',
          cx: this.cxy,
          cy: this.cxy,
          r: this.radius,
          'stroke-width': this.normalizedWidth,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset,
        }
      })
    },

    genSvg(h) {
      const children = [
        !this.indeterminate && this.genCircle(h, 'underlay', 0),
        this.genCircle(h, 'overlay', this.strokeDashOffset),
      ];

      return h('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          height: this.svgSize,
          width: this.svgSize,
          viewBox: this.viewBox,
        }
      }, children);
    }
  },

  render(h) {
    const info = h('div', { class: 'vc@spinner__info' }, [this.$slots.default]);
    const svg = this.genSvg(h);

    return h('div', {
      class: this.classes,
      style: this.styles,
      on: this.$listeners,
    }, [svg, info]);
  }
}
