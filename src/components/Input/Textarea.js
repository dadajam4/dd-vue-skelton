import Textable from './mixins/textable';



export default {
  name: 'vt@textarea',

  mixins: [Textable],

  props: {
    resize: {
      type: [String, Boolean],
      default: true,
    },
  },

  computed: {
    isTextArea() { return true },
    inputTypeDetail() { return 'multi-text' },
  },
}
