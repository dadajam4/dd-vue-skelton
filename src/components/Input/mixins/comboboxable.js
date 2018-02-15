const DEFAULT_COUNTER_FORMAT = '${count} / ${max}';



export default {
  props: {
    value: [String, Number, Array],
    autofocus: Boolean,
    placeholder: String,
    prefix: String,
    suffix: String,
    leftIcon: [String, Object],
    rightIcon: [String, Object],
    inline: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    counter: [Number, String, Object],
    multiple: Boolean,
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  computed: {
    counterParams() {
      const params = {format: DEFAULT_COUNTER_FORMAT};
      if (this.counter) {
        if (typeof this.counter === 'object') {
          params.max = this.counter.max;
          if (this.counter.format) params.format = this.counter.format;
        } else if (typeof this.counter === 'string') {
          params.max = parseInt(this.counter, 10) || void(0);
        } else if (typeof this.counter === 'number') {
          params.max = this.counter;
        }
      }
      return params;
    },
    counterMax() { return this.counterParams.max },
    counterFormat() { return this.counterParams.format },
    hasCounter() { return !!this.counterMax },
    charCount() { return this.innerValue ? this.innerValue.toString().length : 0 },
    counterText() {
      return this.counterFormat.replace(/\$\{count\}/g, this.charCount).replace(/\$\{max\}/g, this.counterMax);
    },
    hasCounterError() { return !!(this.hasCounter && this.charCount > this.counterMax) },
    isSelect() { return this.type === 'select' },
    comboboxInput: {
      get() {}
    },
  },

  methods: {
    genIcon(position) {
      let value = this[`${position}Icon`];
      if (!value) return;
      if (typeof value === 'string') {
        value = {
          name: value,
        };
      }

      return this.$createElement('vt@icon', {
        staticClass: `vc@combobox__icon vc@combobox__icon--${position}${value.click ? ' vc@combobox__icon--clickable' : ''}`,
        on: {
          click: e => {
            if (value.click) return value.click(e);
            return this.focus(e);
          },
        },
      }, value.name);
    },

    genFix(position) {
      const prop = `${position}fix`;
      const value = this[prop];
      if (!value) return;

      return this.$createElement('span', {
        staticClass: `vc@combobox__fix vc@combobox__fix--${position}`,
      }, value);
    },
    genCounter() {
      if (!this.counter) return;
      return this.$createElement('div', {
        staticClass: 'vc@input__counter' + (this.hasCounterError ? ' vc@input__counter--error' : ''),
      }, this.counterText);
    },
    genMoreChildren() {
      return this.genCounter();
    },

    focus() {
      return this.$refs.combobox.focus();
    },
    blur() {
      return this.$refs.combobox.blur();
    },
    onComboboxFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    onComboboxBlur(e) {
      this.focused = false;
      this.$emit('blur', e);
    },
    onComboboxInput(val) {
      this.comboboxInput = val;
    },
    onComboboxChange(val) {
      if (!this.isSelect) return;
      this.comboboxSelected = val;
    },
    genCombobox() {
      return this.$createElement('vt@combobox', {
        props: {
          type: this.type,
          multiple: this.multiple,
          min: this.min,
          max: this.max,
          value: this.comboboxInput,
          selected: this.comboboxSelected,
          placeholder: this.placeholder,
          multiline: this.isTextArea,
          flat: this.flat,
          sm: this.sm,
          md: this.md,
          lg: this.lg,
          autofocus: this.autofocus,
          disabled: this.disabled,
          readonly: this.readonly,
          resize: this.resize,
          prefix: this.prefix,
          suffix: this.suffix,
          selectionRenderer: this.$scopedSlots.selection,
        },
        on: {
          input: this.onComboboxInput,
          change: this.onComboboxChange,
          focus: this.onComboboxFocus,
          blur: this.onComboboxBlur,
        },
        ref: 'combobox',
      }, this.$slots.default);
    },
  },
}