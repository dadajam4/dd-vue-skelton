export default {
  name: 'vt@form',

  inheritAttrs: false,

  props: {
    // value: Boolean,
    // lazyValidation: Boolean,
  },

  data() {
    return {
      // inputs: [],
      // errorBag: {},
    }
  },

  render(h) {
    return h('form', {
      attrs: Object.assign({
        novalidate: true
      }, this.$attrs),
      on: {
        submit: e => this.$emit('submit', e)
      },
    }, this.$slots.default);
  },
}
