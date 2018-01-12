import Selectable from '~/mixins/selectable';



export default {
  name: 'vt@switch',

  mixins: [Selectable],

  computed: {
    classes() {
      const classes = {
        'vc@switch': true,
        'vc@input-group--selection-controls': true,
        'vc@input-group--active': this.isActive,
      }

      if (this.hasError) {
        classes['vc@text-color--error'] = true;
      }

      return classes;
    },
  },

  methods: {
    groupFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    groupBlur(e) {
      this.isFocused = false;
      this.tabFocused = false;
      this.$emit('blur', this.inputValue);
    }
  },

  render(h) {
    const $input = h('input', {
      staticClass: 'vc@switch__node vc@input-group__selection-node',
      domProps: {
        type    : 'checkbox',
        value   : this.value || true,
        checked : this.isActive,
        disabled: this.disabled,
        required: this.required,
      },

      attrs: {
        ...this.$attrs,
        readonly: this.readonly,
        tabindex: -1,
        name    : this.name,
      },

      on: {
        change: this.onChange,
      },

      ref: 'input',
    });

    const $faux = h('span', {
      class: this.addTextColorClasses({
        'vc@switch__faux--active': this.isActive,
      }),
      staticClass: 'vc@switch__faux vc@input-group__selection-faux',
      on: {
        click: e => {
          this.toggle();
        },
      },
    }, [h('span', {
      staticClass: 'vc@switch__faux__body',
    })]);

    const children = [$input, $faux];

    const data = {
      attrs: {
        tabindex: this.disabled
          ? -1
          : this.internalTabIndex || this.tabindex,
        role: 'checkbox',
        'aria-checked': this.isActive && 'true' || 'false',
        'aria-label': this.label,
      }
    }

    return this.genInputGroup(children, data, {labelInsertForInput: true});
  }
}