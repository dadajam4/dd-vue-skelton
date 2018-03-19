export default {
  name: 'vt@stack-flagment-context',

  props: {
    value: Boolean,
    activator: {
      type: [String, Object],
    },
    transition: {
      type: String,
      default: 'vc@fade-transition',
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

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    genFragment() {
      const h = this.$createElement;
      const $activator = this.$slots.activator && this.$slots.activator[0];
      $activator.slot = 'activator';
      // console.log($activator);
      // return $activator;
      return h('vt@app-stack-fragment', null, [
        // $activator,
        // ...this.$slots.default,
      ])
    },
  },
  // render(h) {

  //   return h('vt@app-stack-fragment', null, xxx);
  // },
}