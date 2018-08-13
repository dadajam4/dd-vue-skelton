export default {
  name: 'vt@form',

  inheritAttrs: false,

  provide() {
    const payload = {
      $form: this,
    }
    return payload;
  },

  props: {
    value: Boolean,
    autoScroll: Boolean,
    autoValidate: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      inputs: [],
      errorInputs: [],
    }
  },

  computed: {
    errorInputsCount() { return this.errorInputs.length },
    valid() { return this.errorInputsCount === 0 },
  },

  watch: {
    valid(valid) {
      this.$emit('input', valid);
    },
  },

  methods: {
    attachInput($vm) {
      if (this.inputs.indexOf($vm) !== -1) return;
      this.inputs.push($vm);
      if (!$vm.valid) this.addInputForErrors($vm);
    },

    detachInput($vm) {
      const index = this.inputs.indexOf($vm);
      if (index === -1) return;
      this.inputs.splice(index, 1);
      this.removeInputFromErrors($vm);
    },

    addInputForErrors($vm) {
      if (this.errorInputs.indexOf($vm) !== -1) return;
      this.errorInputs.push($vm);
    },

    removeInputFromErrors($vm) {
      const index = this.errorInputs.indexOf($vm);
      if (index === -1) return;
      this.errorInputs.splice(index, 1);
    },

    onChildValidChange($vm) {
      if ($vm.invalid) {
        this.addInputForErrors($vm);
      } else {
        this.removeInputFromErrors($vm);
      }
    },

    callInputs(funcName, args = []) {
      const results = [];
      for (const input of this.inputs) {
        results.push(input[funcName](...args));
      }
      return results;
    },

    scrollToFirstError() {
      const $vm = this.inputs.find($vm => $vm.invalid);
      if (!$vm) return;
      this.$ui.scroll.to($vm);
    },

    validate({ autoScroll = this.autoScroll } = {}) {
      const results = this.callInputs('validate', [true]);
      const valid = results.filter(result => !result).length === 0;
      if (!valid && autoScroll) {
        this.$nextTick(() => {
          this.$live(() => {
            this.scrollToFirstError();
          });
        });
      }
      return valid;
    },

    reset() {
      this.callInputs('reset');
    },

    clear() {
      this.callInputs('clear');
    },
  },

  created() {
    this.$emit('input', this.valid);
  },

  render(h) {
    return h('form', {
      attrs: Object.assign({
        novalidate: true
      }, this.$attrs),
      on: {
        submit: e => {
          if (this.autoValidate) {
            if (!this.validate()) {
              e.preventDefault();
              return;
            }
          }
          this.$emit('submit', e);
        },
      },
    }, this.$slots.default);
  },
}
