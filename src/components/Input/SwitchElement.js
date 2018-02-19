import checkableElementFactory from './mixins/checkable-element-factory';



export default {
  name: 'vt@switch-element',
  mixins: [checkableElementFactory('switch')],

  computed: {
    bodyClasses() {
      return {
        [`vc@text-color--primary`]: !this.disabled && this.checked,
        [`vc@text-color--error`]: !this.disabled && this.error,
        [`vc@text-color--grey`]: this.disabled,
      }
    },
  },
}
