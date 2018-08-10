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
        'vc@error--text': !!(!this.disabled && this.error),
        'vc@disabled--text': this.disabled,
      };

      if (!classes[`vc@${this.color}--text`]) classes[`vc@${this.color}--text`] = !this.disabled && !this.error && !!this.checked;
      return classes;
    },
  },
}
