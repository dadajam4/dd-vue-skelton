import SelectableFactory from './selectable-factory';
import namingRadioManager from './namingRadioManager';
// import Colorable from '~/mixins/color/colorable';



export default {
  mixins: [SelectableFactory()],
  inheritAttrs: false,
  props: {
    inputChecked: Boolean,
    value: {
      default() {
        return this._uid;
      },
    },
    labelSlotDefault: {
      type: Boolean,
      default: true,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    labelClick: {
      type: [String, Function],
      default: 'click',
    },
    inputValue: true, // v-model
    inline: {
      type: Boolean,
      default: true,
    },
    color: String,
  },

  data() {
    return {
      innerValue: this.inputChecked,
    }
  },

  computed: {
    validateRequiredInvalidateFalse() { return true },
    inputType() { return 'selection' },
    inputTypeDetail() { return this.selectionType },
    isRadio() { return this.selectionType === 'radio' },
    isCheckbox() { return this.selectionType === 'checkbox' },
    isSwitch() { return this.selectionType === 'switch' },
    computedSelectionType() {
      return this.multiple ? 'checkbox' : 'radio';
    },
    checked: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;

        let payload;

        if (this.multiple) {
          payload = this.inputValue || [];
          if (!val) {
            payload = payload.filter(p => p !== this.value);
          } else if (!payload.includes(this.value)) {
            payload.push(this.value);
          }
        } else {
          payload = val ? this.value : null;
        }

        this.$emit('change', payload);
      },
    },
  },

  watch: {
    inputChecked(val) {
      this.checked = val;
    },
  },

  methods: {
    genNode() {
      return this.$createElement('input', {
        staticClass: 'vc@hidden-input',
        attrs: {
          type: this.computedSelectionType,
          name: this.name,
          checked: this.checked,
          tabindex: '-1',
        },
        domProps: {
          value: this.value,
          checked: this.checked,
        },
        on: {
          click: this.click,
        },
      });
    },
    genFaux() {
      return this.$createElement(`vt@${this.selectionType}-element`, {
        // class: {
        //   'vc@text-color--error': this.hasError && !this.disabled,
        //   'vc@text-color--muted': this.disabled,
        // },
        props: {
          checked: this.checked,
          color: this.color,
          disabled: this.disabled,
          tabindex: this.tabindex,
          disabled: this.disabled,
          indeterminate: this.indeterminate,
          error: this.hasError,
        },
        on: {
          click: this.click,
        },
      });
    },
    genControls() {
      return [
        this.genNode(),
        this.genFaux(),
      ];
    },
    click(e) {
      if (this.$listeners.click) {
        const result = this.$listeners.click(e);
        if (result === false || e.defaultPrevented) {
          return;
        }
      }
      e.preventDefault();
      if (!this.allowChange) return;
      this.checked = this.isRadio ? true : !this.checked;
    },
    toggle(e) {
      this.checked = !this.checked;
    },
    onNodeValueChange(e) {
      this.checked = e.target.checked;
    },

    customSetup() {
      if (this.isRadio) {
        if (this.name) namingRadioManager.push(this);
        this._radioNameWatcher = this.$watch('name', (newVal, oldVal) => {
          if (oldVal) namingRadioManager.remove(this);
          if (newVal) namingRadioManager.push(this);
        });
      }
    },
  },

  beforeCreate() {

    // コンポーネントインスタンス化の時だけ checked を inputChecked にフォローしてあげる
    if (this.$attrs.checked !== undefined) {
      this.$options.propsData.inputChecked = this.$attrs.checked;
      delete this.$attrs.checked;
    }
  },

  beforeDestroy() {
    if (this.name) namingRadioManager.remove(this);
    this._radioNameWatcher && this._radioNameWatcher();
  },
}