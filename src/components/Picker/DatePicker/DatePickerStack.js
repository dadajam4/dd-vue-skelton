export default {
  name: 'vt@date-picker-stack',

  props: {
    type: {
      type: String,
      required: true,
    },
    base: Boolean,
    value: Boolean,
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  computed: {
    classes() {
      return {
        [`vc@date-picker__stack--${this.type}`]: true,
        'vc@date-picker__stack--base': this.base,
        'vc@date-picker__stack--active': this.isActive,
      }
    },

    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
  },

  methods: {
    genClose() {
      const h = this.$createElement;
      return this.$createElement('vt@btn', {
        staticClass: 'vc@date-picker__stack__close',
        props: {
          flat: true,
          icon: 'close',
        },
        on: {
          click: e => {
            // e.stopPropagation();
            this.isActive = false;
          },
        },
      })
    },
  },

  render(h) {
    const children = this.$slots.default && this.$slots.default.slice() || [];
    if (!this.base) children.push(this.genClose());

    return h('div', {
      staticClass: 'vc@date-picker__stack',
      class: this.classes,
    }, children);
  },
}
