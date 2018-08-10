export default {
  props: {
    color: String,
    textColor: String,
    backgroundColor: String,
    borderColor: String,
    flat: Boolean,
    outline: Boolean,
    disabled: Boolean,
  },

  computed: {
    colorSuffix() {
      if (this.flat) return '--flat';
      if (this.outline) return '--outline';
      return '';
    },
  },

  methods: {
    addColorClasses(classes = {}) {
      const colorClasses = {};
      const disabledCheck = this.disabled && 'disabled';
      if (this.color || (!this.textColor && this.disabled)) {
        classes[`vc@${disabledCheck || this.color}${this.colorSuffix}`] = true;
      }

      if (this.backgroundColor) {
        classes[`vc@${disabledCheck || this.backgroundColor}--background`] = true;
      }

      if (this.borderColor) {
        classes[`vc@${disabledCheck || this.borderColor}--border`] = true;
      }

      if (this.textColor) {
        classes[`vc@${disabledCheck || this.textColor}--text`] = true;
      }
      return Object.assign(colorClasses, classes);
    },
  },
}
