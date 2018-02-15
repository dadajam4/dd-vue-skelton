import Checkable from './mixins/checkable';



export default {
  name: 'vt@radio',

  mixins: [Checkable],

  props: {
    selectionType: {
      type: String,
      default: 'radio',
    },
  },
}
