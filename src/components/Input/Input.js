import Textable from './mixins/textable';



export default {
  name: 'vt@input',

  mixins: [Textable],

  props: {
    type: {
      type: String,
      default: 'text',
    },
    min: [String, Number],
    max: [String, Number],
  },

  computed: {
    inputTypeDetail() { return 'single-text' },
  },
}
