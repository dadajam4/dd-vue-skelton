import SelectableFactory from './selectable-factory';
import namingRadioManager from './namingRadioManager';



export default {
  mixins: [SelectableFactory()],
  inheritAttrs: false,
  props: {
    initialChecked: Boolean,
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
    inputValue: true,
    inline: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      innerValue: this.initialChecked,
    }
  },

  computed: {
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
        props: {
          checked: this.checked,
          disabled: this.disabled,
          tabindex: this.tabindex,
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
    this.$options.propsData.initialChecked = this.$attrs.checked;
    delete this.$attrs.checked;
  },

  beforeDestroy() {
    if (this.name) namingRadioManager.remove(this);
    this._radioNameWatcher && this._radioNameWatcher();
  },
}