class ValidateRule {
  constructor(context, define) {
    this.context = context;

    if (typeof define === 'string') {
      define = define.replace(/\\\|/g, '_$vr$_');
      const tmp = define.split('|');
      tmp[0] = tmp[0].replace(/_\$vr\$_/g, '|');
      const key = tmp[0].trim();
      const message = tmp[1] && tmp[1].trim() || null;
      const tmp2 = key.split(':');
      const handler = tmp2[0].trim();
      const args = tmp2[1] && tmp2[1].trim() || '';
      this.key = key;
      this.message = message;
      this.handler = handler;
      this.args = args;
    } else {
      this.handler = define.handler;
      this.args = define.args || '';
      this.key = define.key || this.handler.toString();
      this.message = define.message || null;
    }

    this.handlerName = typeof this.handler === 'function' ? this.handler.name : typeof this.handler === 'string' ? this.handler : '';
    // if (this.handlerName === 'required' && context.validateRequiredInvalidateFalse && !this.args) {
    //   this.args = 'true';
    // }

    this.computedArgs = this.args ? this.evalAtContext(`[${this.args}]`) : void(0);
    this.execHandler = typeof this.handler === 'function' ? this.handler : this.context.$rules[this.handler] || this.context[this.handler];
  }

  evalAtContext(str) {
    return function() { return eval(str); }.call(this.context);
  }

  exec(val) {
    return typeof this.execHandler === 'function' ? this.execHandler(val, this.computedArgs) : !!this.execHandler;
  }

  toString() {
    return this.message;
  }
}

export default {
  data() {
    return {
      errorBucket: [],
      hasFocused: false,
      hasInput: false,
      shouldValidate: false,
      validateCancel: false,
      validateState: 'indeterminate',
    }
  },

  props: {
    error: Boolean,
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    rules: {
      type: [String, Object, Array],
      default: () => [],
    },
    validateTiming: {
      type: String,
      default: 'input', // blur, input, always
    },
    // validateOnBlur: Boolean,
  },

  computed: {
    validateOnBlur() { return this.validateTiming === 'blur' },
    validateOnInput() { return this.validateTiming === 'input' },
    validateOnAlways() { return this.validateTiming === 'always' },
    validateIndeterminate() { return this.validateState === 'indeterminate' },
    errorCount() { return this.errorBucket.length },
    valid() { return this.validateState === 'valid' },
    invalid() { return this.validateState === 'invalid' },

    computedRules() {
      const rules = Array.isArray(this.rules) ? this.rules : [this.rules];
      return rules.map(rule => new ValidateRule(this, rule));
    },

    computedValidateTiming() {
      return Array.isArray(this.validateTiming) ? this.validateTiming : [this.validateTiming];
    },

    computedErrorMessages() {
      const messages = Array.isArray(this.errorMessages) ? this.errorMessages : [this.errorMessages];
      return messages.map(message => {
        return {key: message, message, toString: () => message}
      });
    },

    validations() {
      if (this.computedErrorMessages.length > 0) {
        return this.computedErrorMessages;
      } else if (this.shouldValidate) {
        return this.errorBucket;
      } else {
        return [];
      }
    },

    hasError() {
      return this.validations.length > 0
             || this.computedErrorMessages.length > 0
             || this.error;
    }
  },

  watch: {
    rules: {
      handler(newVal, oldVal) {

        // @TODO: 配列の長さだけしかチェックしていないけど、値の中までチェックが必要では、、？
        if (newVal.length === oldVal.length) return;
        this.validate();
      },
      deep: true,
    },
    focused(val) {
      if (!val && !this.hasFocused) {
        this.hasFocused = true;
        this.shouldValidate = true;
        this.$emit('update:error', this.errorBucket.length > 0);
      }
    },
    hasError(val) {
      if (this.shouldValidate) this.$emit('update:error', val);
    },
    error(val) {
      this.shouldValidate = !!val;
    },
  },

  methods: {
    onUpdateValidateProp(val) {
      if (this.validateCancel) return;
      if (!!val && !this.hasInput) this.hasInput = true;
      if (this.validateOnAlways || (this.hasInput && this.validateOnInput)) this.shouldValidate = true;
      if (this.shouldValidate) this.validate();
    },

    validate(force = false, value = this[this.validateProp]) {
      if (this.validateCancel) return;
      if (force) this.shouldValidate = true;

      this.errorBucket = [];

      this.computedRules.forEach(rule => {
        const valid = rule.exec(value);

        if (typeof valid !== 'boolean') {
          throw new TypeError(`Rules should return a boolean, received '${typeof valid}' instead`);
        }

        if (valid !== true) {
          this.errorBucket.push(rule);
        }
      });

      this.validateState = this.errorCount === 0 ? 'valid' : 'invalid';
      return this.valid;
    },

    resetErrorBucket() {
      this.validateState = 'indeterminate';
      this.shouldValidate = false;
      this.validateCancel = true;
      this.focused = false;
      this.errorBucket = [];
      this.$nextTick(() => {
        this.validateCancel = false;
      });
    },

    onResetAfter() {
      this.resetErrorBucket();
    },

    onClearAfter() {
      this.resetErrorBucket();
    },

    attachForm() {
      if (!this.hasContextForm) return;
      this.$form.attachInput(this);
      this._invalidUnWatcher = this.$watch('invalid', invalid => {
        this.$form.onChildValidChange(this);
      }, { immediate: true });
    },

    detachForm() {
      if (!this.hasContextForm) return;
      this.$form.detachInput(this);
      if (this._invalidUnWatcher) {
        this._invalidUnWatcher();
        delete this._invalidUnWatcher;
      }
    },
  },

  created() {
    this.attachForm();
    this._validatableUnWatcher = this.$watch(this.validateProp, this.onUpdateValidateProp);
  },

  mounted() {
    this.shouldValidate = !!this.error;
    this.validate();
  },

  beforeDestroy() {
    if (this._validatableUnWatcher) {
      this._validatableUnWatcher();
      delete this._validatableUnWatcher;
    }
    this.detachForm();
  },
}
