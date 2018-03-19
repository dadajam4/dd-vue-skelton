const dimentionValue = val => {
  if (typeof val === 'string' && val.match(/%$/)) return val;
  val = parseFloat(val);
  return !isNaN(val) && (val + 'px');
}

const dimension = {
  left: 0,
  top: 0,
  width: null,
  height: null,
}

export default {
  name: 'vt@app-stack',

  props: {
    zIndex: {
      type: Number,
      default: 1,
    },
    renderContext: {
      type: Function,
      required: true,
    },
    // top: Number,
    // bottom: Number,
    // left: Number,
    // right: Number,
    // width: Number,
    // height: Number,
  },

  data() {
    return {
      isVisible: false,
      dimension: Object.assign({}, dimension),
    }
  },

  computed: {
    classes() {
      return {
        'vc@app-stack': true,
      }
    },
    styles() {
      return {
        top: dimentionValue(this.dimension.top),
        left: dimentionValue(this.dimension.left),
        width: dimentionValue(this.dimension.width),
        height: dimentionValue(this.dimension.height),

        // top: dimentionValue(this.left),
        // bottom: dimentionValue(this.left),
        // left: dimentionValue(this.left),
        // right: dimentionValue(this.left),
        // width: dimentionValue(this.left),
        // height: dimentionValue(this.left),
        'z-index': this.zIndex,
      }
    },
  },

  methods: {
    onChildRender() {
      this.$forceUpdate();
    },
    setDimention(dimension) {
      this.dimension = Object.assign(this.dimension, dimension);
    },
  },

  render(h) {
    const $context = this.renderContext(h);
    return h('div', {
      class: this.classes,
      style: this.styles,
    }, [$context]);
  },
}
