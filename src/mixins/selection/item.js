import TabFocusable from '~/mixins/tab-focusable';
import TextColorable from '~/mixins/color/textColorable';



export default {
  name: 'vt@selection-item',
  inheritAttrs: false,
  inject: ['name', 'registerChild', 'unregisterChild'],
  mixins: [TextColorable, TabFocusable],

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    disabled: Boolean,
    readonly: Boolean,
    checked: Boolean,
    value: null,
    label: String,
    togglable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      defaultColor: 'accent',
      // isActive: this.checked,
      lazyChecked: this.checked,
      hasGroup: false,
    }
  },

  computed: {
    classes() {
      return this.addTextColorClasses({
        'vc@selection-group__item': true,
        'vc@input-group': true,
        'vc@input-group--active': this.isActive,
        'vc@input-group--disabled': this.isDisabled,
        'vc@input-group--readonly': this.isReadonly,
        'vc@input-group--selection-controls': true,
        'vc@input-group--tab-focused': this.tabFocused,
        [`vc@${this.type}`]: true,
      })
    },

    isActive: {
      get() { return this.lazyChecked },
      set(val) {
        this.lazyChecked = val;
        // this.$emit('change', val);
      },
    },

    isTogglable() {
      return this.togglable || (this.hasGroup && this.$parent.togglable) || false;
    },

    isDisabled() {
      return this.disabled || (this.hasGroup && this.$parent.disabled) || false;
    },

    isReadonly() {
      return this.readonly || (this.hasGroup && this.$parent.readonly) || false;
    },
  },

  watch: {
    // checked(val) {
    //   this.lazyChecked = val;
    // },
  },

  methods: {
    genInput() {
      const value = ['string', 'number'].includes(typeof this.value)
        ? this.value
        : JSON.stringify(this.value);

      const $input = this.$createElement('input', {
        staticClass: `vc@${this.type}__node vc@input-group__selection-node`,
        domProps: {
          type    : this.type,
          checked : this.isActive,
          disabled: this.isDisabled,
        },
        attrs: {
          ...this.$attrs,
          readonly: this.isReadonly,
          tabindex: -1,
          name    : this.name && this.name(),
          id      : this.id,
          value,
        },
        ref: 'input',
      });

      const $faux = this.$createElement('i', {
        staticClass: `vc@${this.type}__faux vc@input-group__selection-faux`,
        on: {
          click: this.toggle,
        },
      });

      $faux.children = [
        this.$createElement('span', {
          staticClass: `vc@${this.type}__faux__body`,
        }),
      ];

      return this.$createElement('div', {
        class: 'vc@input-group__input',
      }, [$input, $faux]);
    },

    genLabel() {
      return this.$createElement('label', {
        staticClass: 'vc@input-group__selection-label',
        on: {
          click: this.toggle,
        },
        attrs: {
          for: this.id,
        },
      }, this.$slots.label || this.label);
    },

    toggle() {
      if (
        this.isDisabled
        || this.isReadonly
        || (!this.isTogglable && this.isActive)
      ) {
        return;
      }

      this.isActive = !this.isActive;
      // const value = !this.isActive;
      // this.$refs.input.checked = value;
      // this.isActive = value;
      // this.$emit('change', this.value);
    },
  },

  created() {
    this.hasGroup = this.$parent && this.$parent.$vnode && this.$parent.$vnode.tag && this.$parent.$vnode.tag.endsWith(`vt@${this.type}-group`);

    // if (!this.hasGroup) {
    //   console.warn(`[dd-skelton] Warn: The vt@${this.type} component must have an immediate parent of vt@${this.type}-group.`);
    // }
  },

  mounted() {
    this.registerChild(this);
  },

  beforeDestroy() {
    this.unregisterChild(this);
  },

  render(h) {
    const children = [];

    children.push(this.genInput());
    children.push(this.genLabel());

    return h('div', {
      class: this.classes,
      attrs: {
        role: this.type,
        'aria-checked': this.isActive && 'true' || 'false',
        'aria-label'  : this.label,
      },
      on: {
        keydown: e => {
          if ([13, 32].includes(e.keyCode)) {
            e.preventDefault();
            this.toggle(e);
          }
        },
        keyup: e => {
          if ([9, 16].includes(e.keyCode)) {
            this.tabFocused = true;
          }
        },
        blur: e => {
          this.$emit('blur', e);
          this.tabFocused = false;
        },
      },
    }, children);
  }
}
