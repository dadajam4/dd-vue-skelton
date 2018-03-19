export default {
  name: 'vt@app-stack',

  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'vc@fade-transition',
    },
    hiddenWithRemove: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  computed: {
    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit(val);
      },
    },
  },

  mounted() {
    this.initStack();
    this.$emit('mounted', this);
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    if (!this.$el) return;

    // IE11 Fix
    try {
      this.$el.parentNode.removeChild(this.$el);
    } catch (e) {}
    this.$emit('beforeDestroy', this);
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    initStack() {
      if (
        this._isDestroyed
        || !this.$el
      ) return;

      const $target = this.$app.$el;

      if (!$target) {
        console.warn(`Unable to locate target vt@app`, this);
        return;
      }

      $target.insertBefore(
        this.$el,
        $target.firstChild
      )
    },
  },

  render(h) {
    const $stack = (!this.hiddenWithRemove || this.isActive) && h('div', {
      staticClass: 'vc@app-stack',
      directives: [
        {name: 'show', value: this.isActive},
      ],
    }, this.$slots.default);

    return h('transition', {
      name: this.transition,
    }, [$stack]);
  },
}
