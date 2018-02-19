import checkableElementFactory from './mixins/checkable-element-factory';



export default {
  name: 'vt@switch-element',
  mixins: [checkableElementFactory('switch')],

  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },

  computed: {
    bodyClasses() {
      const classes = {
        'vc@text-color--error': !!(!this.disabled && this.error),
        'vc@text-color--grey': this.disabled,
      };

      if (!classes[`vc@text-color--${this.color}`]) classes[`vc@text-color--${this.color}`] = !this.disabled && !this.error && !!this.checked;

      return classes;
    },
  },
}
