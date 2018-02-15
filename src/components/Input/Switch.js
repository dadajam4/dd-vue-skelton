import Checkable from './mixins/checkable';



export default {
  name: 'vt@switch',

  mixins: [Checkable],

  props: {
    selectionType: {
      type: String,
      default: 'switch',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
}
