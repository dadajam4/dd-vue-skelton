import Checkable from './mixins/checkable';



export default {
  name: 'vt@checkbox',

  mixins: [Checkable],

  props: {
    selectionType: {
      type: String,
      default: 'checkbox',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
  },
}
