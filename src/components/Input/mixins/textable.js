import Inputable from './inputable';
import Comboboxable from './comboboxable';



export default {
  mixins: [Inputable, Comboboxable],

  props: {
    validateTiming: {
      type: String,
      default: 'blur',
    },
  },

  computed: {
    inputType() { return 'text' },
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
    comboboxInput: {
      get() { return this.innerValue },
      set(val) {
        this.targetValue = val;
      },
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
    innerValue(val) {

      // ここでバリデーションかな？
    },
  },

  methods: {
    genControls() {
      return this.genCombobox();
    },
  },
}