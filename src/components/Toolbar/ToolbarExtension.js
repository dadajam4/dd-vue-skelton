import Colorable from '~/mixins/color';



export default {
  name: 'vt@toolbar-extension',

  mixins: [Colorable],

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    inheritsColor: {
      type: Boolean,
    },
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@toolbar__extension': true,
      });
    },
  },

  render(h) {
    return h(this.tag, {class: this.classes}, this.$slots.default);
  },
}