import checkableElementFactory from './mixins/checkable-element-factory';



export default {
  name: 'vt@checkbox-element',
  mixins: [checkableElementFactory('checkbox')],

  props: {
    indeterminate: Boolean,
  },

  methods: {
    genBodyChildren() {
      const h = this.$createElement;
      if (this.checked && !this.indeterminate) {
        return [
          h('span', {staticClass: 'vc@checkbox-element__inner__bar'}),
          h('span', {staticClass: 'vc@checkbox-element__inner__bar'}),
        ];
      }
    },
  },
}
