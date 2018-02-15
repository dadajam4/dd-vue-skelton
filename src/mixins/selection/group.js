import Input from '~/mixins/input';



export default {
  name: 'vt@selection-group',

  mixins: [Input],

  model: {
    prop: 'inputValue',
    event: 'change',
  },

  provide() {
    return {
      name: () => this.name,
      registerChild: this.registerChild,
      unregisterChild: this.unregisterChild,
    }
  },

  props: {
    inputValue: null,
    name: String,
    inline: Boolean,
    multiple: {
      type: Boolean,
      default: false,
    },
    togglable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      internalTabIndex: -1,
    }
  },

  watch: {
    inputValue(val) {
      this.getChildren().forEach(child => {
        child.isActive = val === child.value;
      })
    }
  },

  computed: {
    childClassName() { return `vc@${this.type}` },
    classes() {
      return {
        'vc@selection-group': true,
        'vc@selection-group--inline': this.inline,
      }
    },
    isRadio() { return this.type === 'radio' },
    isCheckbox() { return this.type === 'checkbox' },
    role() { return this.isRadio && 'radiogroup' },
  },


  methods: {
    getChildren() {
      return this.$children
        .filter(child => child.$el.classList.contains(this.childClassName))
    },

    toggleChild(value) {
      if (this.disabled) return;

      this.shouldValidate = true;
      this.$emit('change', value);
      this.$nextTick(() => this.validate());

      if (!this.multiple) {
        this.getChildren()
          .filter(child => child.value !== value)
          .forEach(child => child.isActive = false)
      }
    },

    childBlur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains(this.childClassName)) {
        this.shouldValidate = true;
        this.$emit('blur', this.inputValue);
      }
    },

    registerChild(child) {
      child.isActive = this.inputValue === child.value;
      child.$el.tabIndex = child.$el.tabIndex > 0 ? child.$el.tabIndex : 0;
      child.$on('change', this.toggleChild);
      child.$on('blur', this.childBlur);
      child.$on('focus', this.childFocus);
    },

    unregisterChild(child) {
      child.$off('change', this.toggleChild);
      child.$off('blur', this.childBlur);
      child.$off('focus', this.childFocus);
    },
  },

  mounted() {
    this.getChildren().forEach(child => this.registerChild(child));
  },

  beforeDestroy() {
    this.getChildren().forEach(child => this.unregisterChild(child));
  },

  render(h) {
    const data = {
      attrs: {
        role: this.role,
      }
    };

    return this.genInputGroup(this.$slots.default, data);
  },
}