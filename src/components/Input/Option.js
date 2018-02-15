export default {
  name: 'vt@option',

  props: {
    selected: Boolean,
    initialSelected: Boolean,
    disabled: Boolean,
    value: {
      required: true,
    },
  },

  model: {
    prop: 'selected',
    event: 'change',
  },

  inject: {
    $combobox: {
      from: '$combobox',
    },
    appendVmForCombobox: {
      from: 'appendOptionVm',
    },
    removeVmFromCombobox: {
      from: 'removeOptionVm',
    },
    deselectOption: {
      from: 'deselectOption',
    },
    // $select: {
    //   from: '$select',
    // },
    // clickOption: {
    //   from: 'clickOption',
    // },
    // toggleOption: {
    //   from: 'toggleOption',
    // },
    // selectOption: {
    //   from: 'selectOption',
    // },
    // deselectOption: {
    //   from: 'deselectOption',
    // },
    // arriveForParent: {
    //   from: 'arriveOption',
    // },
    // leaveFromParent: {
    //   from: 'leaveOption',
    // },
  },

  data() {
    return {
      innerValue: this.selected,
    }
  },

  computed: {
    isDisabled() { return this.disabled || this.$parent.isDisabled },
    multiple() { return this.$combobox.multiple },
    // targetValue: {
    //   get() { return this.innerValue },
    //   set(val) {
    //     const before = this.innerValue;
    //     this.innerValue = val;
    //     if (before !== val) this.$emit('change', val);
    //   },
    // },
    // selectValue() { return this.$select.innerValue },
    isActive() {
      if (this.multiple) {
        const selectedValues = this.$combobox.targetSelected || [];
        return selectedValues.includes(this.value);
      } else {
        return this.value === this.$combobox.targetSelected;
      }
    },
    label() { return this.$el && this.$el.innerText.trim() || '' },
    displayVNode() {
      const child = this.$combobox.selectionRenderer ? this.$combobox.selectionRenderer(this) : this.label;
      return this.$createElement('span', {
        staticClass: 'vc@combobox__selection__item',
      }, child);
    },
  },

  methods: {
    // updateValueByParentValue() {
    //   let myValue;
    //   if (this.multiple) {
    //     const selectValue = this.selectValue || [];
    //     myValue = selectValue.includes(this.value);
    //   } else {
    //     myValue = this.value === this.selectValue;
    //   }
    //   this.targetValue = myValue;
    // },
    click(e) {
      return this.isDisabled ? e.preventDefault() : this.select();
      if (this.isDisabled) return e.preventDefault();

      return this.$combobox.onSelectOption(this);
      // return this.clickOption(this, e);
    },
    // toggle() {
    //   return this.toggleOption(this);
    // },
    select() {
      return this.$combobox.selectOption(this);
    },
    deselect() {
      return this.deselectOption(this);
    },
    // getDisplayNode() {
    //   return this.$slots.display || this.$slots.default;
    // },
  },
  created() {
    this.appendVmForCombobox(this);
    // this.$select.$on('change', this.updateValueByParentValue);
    // if (this.initialSelected) this.select();
  },
  beforeDestroy() {
    this.removeVmFromCombobox(this);
    // this.$select.$off('change', this.updateValueByParentValue);
  },

  render(h) {
    // return h('li', {
    //   staticClass: 'vc@option',
    //   on: {
    //     click: this.click,
    //   },
    // }, this.$slots.default);

    // console.warn(this.multiple);
    const $content = this.$createElement('vt@list-tile-content', {}, this.$slots.default)
    const children = [$content];
    if (this.multiple) {
      children.unshift(h('vt@list-tile-action', {}, [
        // ここにチェック
        // this.$createElement('vt@checkbox', {
        //   props: {
        //     inputValue: true,
        //     tabindex: -1,
        //   },
        // }),
      ]));
    }
    // const children = this.multiple ? [
    //   this.$createElement('vt@list-tile-action', {

    //   }, [
    //     // ここにチェック
    //     // this.$createElement('vt@checkbox', {
    //     //   props: {
    //     //     inputValue: true,
    //     //     tabindex: -1,
    //     //   },
    //     // }),
    //   ]),
    //   $content,
    // ] : this.$slots.default;

    return this.$createElement('vt@list-tile', {
      staticClass: 'vc@option',
      props: {
        value: this.isActive,
      },
      on: {
        click: this.click,
      },
    }, children);

    // return h('li', {
    //   staticClass: 'vc@option',
    //   on: {
    //     click: this.click,
    //   },
    // }, this.$slots.default);
  },
}
