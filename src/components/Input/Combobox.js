const POSITIONABLE_DEFAULT_POSITION = {
  'btn' : 'right',
  'icon': 'left',
};



// datetime-local は未対応
const TYPES = {
  text    : {type: 'text'    , number: false, time: false},
  search  : {type: 'search'  , number: false, time: false},
  tel     : {type: 'tel'     , number: false, time: false},
  url     : {type: 'url'     , number: false, time: false},
  email   : {type: 'email'   , number: false, time: false},
  password: {type: 'password', number: false, time: false},
  datetime: {type: 'datetime', number: false, time: true },
  date    : {type: 'date'    , number: false, time: true },
  month   : {type: 'month'   , number: false, time: true },
  week    : {type: 'week'    , number: false, time: true },
  time    : {type: 'time'    , number: false, time: true },
  number  : {type: 'number'  , number: true , time: false},
};



export default {
  name: 'vt@combobox',

  provide() {
    return {
      $combobox: this,
      genOptionByProp: this.genOptionByProp,
      appendOptionVm: this.appendOptionVm,
      removeOptionVm: this.removeOptionVm,
      deselectOption: this.deselectOption,
    }
  },

  props: {
    value: [String, Number],
    selected: Array,
    flat: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    prefix: String,
    suffix: String,
    autofocus: Boolean,
    disabled: Boolean,
    error: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
      validator: type => (type === 'select' || !!TYPES[type]),
    },
    multiline: Boolean,
    min: [String, Number],
    max: [String, Number],
    resize: {
      type: [String, Boolean],
      default: true,
    },
    placeholder: String,
    multiple: Boolean,
    autocomplete: Boolean,
    staticSelect: Boolean,
    options: Array,
    groups: Array,
    divider: {
      type: String,
      default() { return ', ' },
    },
    selectionRenderer: Function,
    color: {
      type: String,
      default: 'primary',
    },
  },

  data() {
    return {
      innerValue: this.value,
      innerSelected: this.selected,
      focused: false,
      menuIsActive: false,
      optionVms: [],
      currentAutocompleteTargetIndex: null,
      // autocompleteTarget
      // createdGroups: [],
    }
  },

  computed: {
    classes() {
      return {
        'vc@combobox': true,
        'vc@combobox--flat': this.flat,
        'vc@combobox--sm': this.sm,
        'vc@combobox--md': this.md,
        'vc@combobox--lg': this.lg,
        'vc@combobox--multiline': this.multiline,
        'vc@combobox--focused': this.focused,
        'vc@combobox--disabled': this.disabled,
        'vc@combobox--error': this.error,
      }
    },
    bodyClasses() {
      return {
        'vc@combobox__body': true,
        [`vc@border-color--${this.color}`]: !this.error && !this.disabled && this.focused,
      }
    },
    searchValue() { return (this.innerValue || '').toLowerCase() },
    isSelect() { return this.type === 'select' },
    typeDefine() { return TYPES[this.type] },
    computedType() { return this.typeDefine && this.typeDefine.type },
    resizeType() {
      if (typeof this.resize === 'string') return this.resize;
      return this.resize ? 'vertical' : 'none';
    },
    resizable() { return this.resizeType !== 'none' },
    inputTagName() { return this.multiline ? 'textarea' : 'input' },
    inputClasses() {
      const classes = {
        'vc@combobox__input': true,
      };

      if (this.multiline) {
        classes[`vc@combobox__input--resize-${this.resizeType}`] = true;
      }

      if (this.staticSelect) {
        classes['vc@combobox__input--static'] = true;
      }

      return classes;
    },
    inputAttrs() {
      const attrs = {
        placeholder: this.placeholder,
        readonly: this.staticSelect,
      };

      if (!this.multiline) {
        attrs.type = this.computedType;
        attrs.min = this.min;
        attrs.max = this.max;
      }

      return attrs;
    },
    disallowChange() { return this.disabled || this.readonly },
    input: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
    targetSelected: {
      get() { return this.innerSelected },
      set(val) {
        this.innerSelected = val;
        this.$emit('change', val);
      },
    },
    selectedValues() {
      if (!this.isSelect || !this.innerSelected) return;
      return Array.isArray(this.innerSelected) ? this.innerSelected : [this.innerSelected];
      // return this.multiple ? this.innerSelected || [] : [this.innerSelected];
    },
    hasDivider() { return !this.selectionRenderer && this.divider },
    selectionItems() {
      const values = this.selectedValues;
      if (!values || !values.length) return;
      const children = [];
      const selectionItems = [];
      for (let value of values) {
        const selectionItem = this.genSelectionItemByValue(value);
        if (selectionItem) selectionItems.push(selectionItem);
      }

      for (let i = 0, l = selectionItems.length; i < l; i++) {
        const selectionItem = selectionItems[i];
        selectionItem.key = this.getNewSelectionItemKey();
        children.push(selectionItem);
        if (this.hasDivider && i !== l - 1) {
          children.push(this.$createElement('span', {
            staticClass: 'vc@combobox__selection__divider',
            key: this.getNewSelectionItemKey(),
          }, this.divider));
        }
      }
      // const children = [];
      // values.forEach((value, index) => {
      //   const selectionItem = this.genSelectionItemByValue(value);
      //   console.log(value, selectionItem);
      //   children.push(selectionItem);
      //   // const item = this.genSelectionItemByValue(value, this.hasDivider && index !== values.length - 1, this.divider);
      //   // children.push(item);
      //   if (this.hasDivider && index !== values.length - 1) {
      //     children.push(this.$createElement('span', {
      //       staticClass: 'vc@combobox__selection__divider',
      //     }, this.divider));
      //     // item.children.push(this.$createElement('span', {}, this.divider));
      //     // console.log(item);
      //     // console.log(item);
      //     // item.children[0].text = item.children[0].text + this.divider;
      //     // // item.children
      //   }
      //   // if (index !== values.length - 1) {
      //   //   console.log(item.children);
      //   //   // children.push(this.$createElement('span', {
      //   //   //   staticClass: 'vc@combobox__selection__divider',
      //   //   // }, this.divider));
      //   // }
      // });

      // for (let i = 0, l = children.length; i < l; i++) {
      //   children[i].key = this.getNewSelectionItemKey();
      // }

      return this.$createElement('div', {
        staticClass: 'vc@combobox__selection',
      }, children);
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
    selected(val) {
      this.innerSelected = val;
    },
    focused(val) {
      this.menuIsActive = val;

      if (!val && this.isSelect && this.autocomplete) {
        this.innerValue = '';
      }
    },
    // menuIsActive(val) {
    //   this.currentAutocompleteTargetIndex = null;
    // },
  },

  methods: {
    removeLastSelection() {
      if (!this.isSelect) return;
      let value = this.targetSelected;
      if (this.multiple) {
        if (value && value.length) {
          value.splice(value.length - 1, 1);
        } else {
          value = [];
        }
      } else {
        value = null;
      }
      this.targetSelected = value;
    },

    getNewSelectionItemKey() {
      return ++this.selectionItemKey;
    },
    getOptionByValue(value) {
      return this.optionVms.find(vm => vm.value === value);
    },
    appendOptionVm($vm) {
      if (!this.optionVms.includes($vm)) this.optionVms.push($vm);
    },
    removeOptionVm($vm) {
      const index = this.optionVms.indexOf($vm);
      if (index !== -1) this.optionVms.splice(index, 1);
    },
    // appendOptionV
    genSelectionItemByValue(value) {
      const vm = this.getOptionByValue(value);
      return vm && vm.displayVNode;
    },
    focus() {
      if (this.disallowChange) return;
      return this.$refs.input.focus();
    },
    blur() {
      return this.$refs.input.blur();
    },
    onFocusInput(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    elementIsInContext(el) {
      const containers = [this.$el];
      if (this.$refs.menu && this.$refs.menu.$refs && this.$refs.menu.$refs.content) {
        containers.push(this.$refs.menu.$refs.content);
      }
      for (let container of containers) {
        if (!container) continue;
        if (container === el || container.contains(el)) return true;
      }
      return false;
    },
    onBlurInput(e) {
      if (this.elementIsInContext(e.relatedTarget)) {
        e.preventDefault();
        this.$refs.input.focus();
        return;
      }
      this.focused = false;
      this.$emit('blur', e);
    },
    onInputInput(e) {
      if (this.disallowChange) return e.preventDefault();
      this.input = e.target.value;
    },
    genInput() {
      const data = {
        class: this.inputClasses,
        attrs: this.inputAttrs,
        domProps: {
          autofocus: this.autofocus,
          value: this.innerValue,
          disabled: this.disabled,
        },
        on: {
          input: this.onInputInput,
          focus: this.onFocusInput,
          blur: this.onBlurInput,
          keydown: e => {
            if (!this.autocomplete) return;
            if (e.which === 9 || e.which === 13) {

              // >>> enter or tab
            } else if (e.which === 38) {

              // up
            } else if (e.which === 40) {

              // down
            } else if (e.which === 8 || e.which === 46) {

              // delete or backspace
              if (!this.innerValue) {
                return this.removeLastSelection();
              }
            }
            // console.warn(e.which);
            // if (this.isShowSuggest) {
            //   if (e.which === 13) {
            //     this.settleSuggest(this.suggestSelected);
            //   } else if (e.which === 38) {
            //     this.shiftSuggest(-1);
            //     e.preventDefault();
            //   } else if (e.which === 9 || e.which === 40) {
            //     this.shiftSuggest(1);
            //     e.preventDefault();
            //   }
            // }
          },
        },
        ref: 'input',
      };
      const $input = this.$createElement(this.inputTagName, data);
      return $input;
    },
    genfix(position) {
      const key = `${position}fix`;
      const fix = this[key] || this.$slots[key];
      if (!fix) return;
      return this.$createElement('span', {
        staticClass: `vc@combobox__fix vc@combobox__fix--${position}`,
      }, fix);
    },
    genMenu(optgroups) {
      if (!optgroups || !optgroups.length) return;

      const $menu = this.$createElement('vt@menu', {
        staticClass: 'vc@combobox__menu',
        props: {
          // auto: true,
          // activator: this.$el,
          activator: () => this.$refs.body,
          // activator: this.$refs.input,
          offsetY: true,
          activatorAction: null,
          closeOnContentClick: !this.multiple,
          closeOnEsc: true,
          disabled: this.disabled,
          // contentClass: 'vc@combobox__menu',
          // openOnClick: false,
          offsetOverflow: this.autocomplete,
          value: this.menuIsActive,
        },

        on: {
          // click: e => {
          //   console.warn(e);
          // },

          input: val => {
            if (!val) {
              this.menuIsActive = false;
            }
          },
        },
        ref: 'menu',
      }, [
        // this.$createElement('vt@list', {}, $tiles),
        ...optgroups,
      ]);

      // const $menu = this.$createElement('vt@menu', {
      //   ref: 'menu',
      //   props: {
      //     auto: true,
      //     // activator: this.$el,
      //     activator: this.$refs.body,
      //     // activator: this.$refs.input,
      //     offsetY: true,
      //     // nudgeTop: 26,
      //     closeOnClick: false,
      //     closeOnContentClick: !this.multiple,
      //     disabled: this.disabled,
      //     contentClass: 'vc@combobox__menu',
      //     // maxHeight: this.maxHeight,
      //     openOnClick: false,
      //     offsetOverflow: this.autocomplete,

      //     value: this.menuIsActive/* && (....)*/,
      //     // customOpenDependentElements: () => { return [this.$refs.body] },
      //     // zIndex: this.menuZIndex,
      //   },

      //   on: {
      //     input: val => {
      //       if (!val) {
      //         this.menuIsActive = false;
      //       }
      //     },
      //   },
      // }, [
      //   // this.$createElement('vt@list', {}, $tiles),
      //   ...optgroups,
      // ]);
      return $menu;
    },
    // genOptionsByProp(options) {
    //   return options.map(option => this.genOptionByPropValue(option));
    // },
    genOptionByProp(option) {
      if (!option || typeof option !== 'object') {
        option = {
          value: option,
        };
      }
      if (!option.label) option.label = option.value;
      return this.$createElement('vt@option', {
        props: {
          disabled: option.disabled,
          value: option.value,
        },
      }, option.label);
    },

    genGroupByProp(group) {
      // const children = group.options.map(option => this.genOptionByProp(option));
      // if (group.label) children.unshift(this.$createElement('vt@optgroup-label', {}, group.label));
      return this.$createElement('vt@optgroup', {
        props: {
          label: group.label,
          disabled: group.disabled,
          options: group.options,
        },
      });
    },
    selectOption($vm, force = false) {
      let payload;
      if (this.multiple) {
        payload = this.targetSelected || [];
        const index = payload.indexOf($vm.value);
        if ($vm.isActive && !force) {
          if (index !== -1) payload.splice(index, 1);
        } else {
          if (index === -1) payload.push($vm.value);
        }
      } else {
        payload = $vm.value;
      }
      this.targetSelected = payload;

      if (this.autocomplete) {
        this.innerValue = '';

        if (!this.multiple) {
          this.$refs.input.blur();
        }
      }
    },
    deselectOption($vm) {
      let payload;
      if (this.multiple) {
        payload = this.targetSelected || [];
        const index = payload.indexOf($vm.value);
        if (index !== -1) payload.splice(index, 1);
      } else {
        payload = null;
      }
      this.targetSelected = payload;
    },
  },

  mounted() {
    if (this.autofocus) this.focus();
  },

  created() {
    this.selectionItemKey = 0;
  },

  render(h) {
    const classes = {};
    const positionables = {'btn': {}, 'icon': {}};
    const optgroups = [];
    let optgroup;

    this.groups && this.groups.forEach(group => {
      optgroups.push(this.genGroupByProp(group));
    });

    this.$slots.default && this.$slots.default.forEach(vnode => {
      if (vnode.componentOptions && vnode.componentOptions.tag === 'vt@option') {
        if (optgroup) {
          optgroup.componentOptions.children.push(vnode);
        } else {
          optgroup = h('vt@optgroup', {}, [vnode]);
          optgroups.push(optgroup);
        }
      } else if (vnode.componentOptions && vnode.componentOptions.tag === 'vt@optgroup') {
        optgroups.push(vnode);
      }

      if (vnode.fnOptions && vnode.fnOptions.name === 'vt@icon') {
        vnode.data.staticClass += ` vc@combobox__icon`;

        let position = POSITIONABLE_DEFAULT_POSITION.icon;
        const positionMatch = vnode.data.staticClass.match(/vc@icon--(left|right)/);
        if (positionMatch) {
          position = positionMatch[1];
        } else {
          vnode.data.staticClass += ` vc@icon--${position}`;
        }
        vnode.data.staticClass += ` vc@combobox__icon--${position}`;

        if (this.sm) vnode.data.staticClass += ` vc@icon--sm`;
        if (this.md) vnode.data.staticClass += ` vc@icon--md`;
        if (this.lg) vnode.data.staticClass += ` vc@icon--lg`;

        vnode.data.staticClass = vnode.data.staticClass.split(' ').filter(c => !!c).filter((a, b, self) => (self.indexOf(a) === b && a.indexOf('vc@text-color--') !== 0)).join(' ');
        if (this.focused && !this.disabled && !this.error) vnode.data.staticClass += ` vc@text-color--${this.color}`;

        vnode.data.on = vnode.data.on || {};
        if (typeof vnode.data.on.click !== 'function') {
          vnode.data.on.click = e => { return this.focus(e) }
        }

        positionables.icon[position] = vnode;
      } else if (vnode.componentOptions && vnode.componentOptions.tag === 'vt@btn') {
        const propsData = vnode.componentOptions.propsData || {};
        let position;
        if (propsData.left  !== undefined) position = 'left';
        if (propsData.right !== undefined) position = 'right';
        if (!position) {
          position = this.isSelect ? 'left' : POSITIONABLE_DEFAULT_POSITION.btn;
          propsData[position] = '';
        }
        propsData.sm = this.sm;
        propsData.md = this.md;
        propsData.lg = this.lg;
        propsData.disabled = this.disabled;

        classes[`vc@combobox--has-${position}-btn`] = true;
        positionables.btn[position] = vnode;
      }
    });

    if (this.isSelect && !positionables.icon.right) {
      positionables.icon.right = h('vt@icon', {
        staticClass: 'vt@icon--right vc@combobox__icon vc@combobox__icon--right',
      }, 'sort');

      if (this.sm) positionables.icon.right.staticClass += ` vc@icon--sm`;
      if (this.md) positionables.icon.right.staticClass += ` vc@icon--md`;
      if (this.lg) positionables.icon.right.staticClass += ` vc@icon--lg`;
    }

    return (
      <div
        class={Object.assign(classes, this.classes)}
        onClick={this.focus}
      >
        {positionables.btn.left}
        <div class={this.bodyClasses} ref="body">
          {positionables.icon.left}
          {this.genfix('pre')}
          {this.selectionItems}
          {this.genInput()}
          {this.genfix('suf')}
          {positionables.icon.right}
        </div>
        {positionables.btn.right}

        {this.genMenu(optgroups)}
      </div>
    );
  },
}
