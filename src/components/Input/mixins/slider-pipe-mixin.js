export default {
  props: {
    multiple: Boolean,
    disabled: Boolean,
    ticks: Boolean,
    tabindex: {
      type: [String, Number],
      default: 0,
    },
    min: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    step: {
      type: [String, Number],
      default: 1,
    },
    thumbLabel: {
      type: [Boolean, Function],
      default: false,
    },
    persistentThumbLabel: Boolean,
    persistentTicks: Boolean,
    value: {
      type: [String, Number, Array],
      default() { return this.multiple ? [0, 0] : 0 },
    },
    thumbColor: {
      type: [String, Array],
      default: 'primary',
    },
    thumbLabelColor: {
      type: [String, Array],
      default: 'primary',
    },
    trackFillColor: {
      type: String,
      default: 'primary',
    },
    tickColor: {
      type: String,
      default: 'primary',
    },
    iconActiveColor: {
      type: String,
      default: 'primary',
    },
  },

  data() {
    return {
      innerValue: this.value,
      initialValue: this.value,
    }
  },

  computed: {
    valueIsEmpty() {
      if (this.multiple) return false;
      return this.innerValue <= this.minValue;
    },
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        if (this.multiple) {
          for (let i = 0; i < 2; i++) {
            val[i] = this.getRoundedValue(this.getMinMaxSafeValue(val[i]));
          }
          if (!this.innerValue) {
            this.innerValue = val;
          } else {
            this.$set(this.innerValue, 0, val[0]);
            this.$set(this.innerValue, 1, val[1]);
          }

        } else {
          val = this.getRoundedValue(this.getMinMaxSafeValue(val));
          this.innerValue = val;
        }

        this.$emit('input', this.innerValue);
      },
    },
    minValue() { return parseFloat(this.min) },
    maxValue() { return parseFloat(this.max) },

    fromValue: {
      get() {
        if (!this.multiple) return;
        const targetValue = this.targetValue;
        const value = targetValue && targetValue[0];
        return this.checkValueIsValid(value) ? value : this.minValue;
      },
      set(val) {
        if (!this.multiple) return;
        const value = this.targetValue || [this.minValue, this.maxValue];
        value[0] = val;
        this.targetValue = value;
      },
    },

    toValue: {
      get() {
        const targetValue = this.targetValue;
        const value = this.multiple ? targetValue && targetValue[1] : this.targetValue;
        if (!this.checkValueIsValid(value)) return this.multiple ? this.maxValue : this.minValue;
        return value;
      },
      set(val) {
        let value = val;
        if (this.multiple) {
          value = this.targetValue || [this.minValue, this.maxValue];
          value[1] = val;
        }
        this.targetValue = value;
      },
    },

    stepValue() {
      return this.step > 0 ? parseFloat(this.step) : 0
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    getMinMaxSafeValue(val) {
      return Math.min(Math.max(val, this.minValue), this.maxValue);
    },

    getRoundedValue(val) {
      if (!this.stepValue) return val;
      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? (trimmedStep.length - trimmedStep.indexOf('.') - 1) : 0;
      return 1 * (Math.round(val / this.stepValue) * this.stepValue).toFixed(decimals);
    },

    checkValueIsValid(val) {
      return val !== null && isFinite(val);
    },
  },
}
