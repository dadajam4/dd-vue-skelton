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
    suggests: [String, Array],
    maxSuggests: [String, Number],
    alwaysSuggests: Boolean,
  },

  computed: {
    inputTypeDetail() { return 'single-text' },
  },
}
