import SelectableFactory from './mixins/selectable-factory';
import Comboboxable from './mixins/comboboxable';



export default {
  name: 'vt@select',

  mixins: [SelectableFactory('value'), Comboboxable],

  props: {
    type: {
      type: String,
      default: () => 'select',
    },
    input: [String, Number],
    options: Array,
    groups: Array,
    autocomplete: Boolean,
  },

  data() {
    return {
      innerComboboxInput: this.input,
    }
  },

  computed: {
    inputTypeDetail() { return 'select' },
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('change', val);
      },
    },
    comboboxSelected: {
      get() { return this.innerValue },
      set(val) {
        this.targetValue = val;
      },
    },
    comboboxInput: {
      get() { return this.innerComboboxInput },
      set(val) {
        this.innerComboboxInput = val;
        this.$emit('input', val);
      },
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    genControls() {
      return this.genCombobox();
    },
  },
}
