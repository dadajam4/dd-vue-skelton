export default {
  name: 'vt@track',

  model: {
    // prop: 'inputValue',
    event: 'change',
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    value: {
      type: [Number, String],
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
  },

  data() {
    return {
      lazyValue: parseFloat(this.value),
    }
  },

  computed: {
    classes() {
      const classes = {
        'vc@track': true,
      }
      return classes;
    },
  },

  methods: {
  },

  render(h) {
    const $track = h(this.tag, {});
    return $track;
  }
}