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
    options: Array,
    groups: Array,
    divider: {
      type: String,
      default() { return ', ' },
    },
    selectionRenderer: Function,
  },

  data() {
    return {
      innerValue: this.value,
      innerSelected: this.selected,
      focused: false,
      menuIsActive: false,
      optionVms: [],
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
      }
    },
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
      return classes;
    },
    inputAttrs() {
      const attrs = {
        placeholder: this.placeholder,
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
      return this.multiple ? this.innerSelected || [] : [this.innerSelected];
    },
    hasDivider() { return !this.selectionRenderer && this.divider },
    selectionItems() {
      const values = this.selectedValues;
      if (!values || !values.length) return;
      const children = [];
      values.forEach((value, index) => {
        children.push(this.genSelectionItemByValue(value));
        // const item = this.genSelectionItemByValue(value, this.hasDivider && index !== values.length - 1, this.divider);
        // children.push(item);
        if (this.hasDivider && index !== values.length - 1) {
          children.push(this.$createElement('span', {
            staticClass: 'vc@combobox__selection__divider',
          }, this.divider));
          // item.children.push(this.$createElement('span', {}, this.divider));
          // console.log(item);
          // console.log(item);
          // item.children[0].text = item.children[0].text + this.divider;
          // // item.children
        }
        // if (index !== values.length - 1) {
        //   console.log(item.children);
        //   // children.push(this.$createElement('span', {
        //   //   staticClass: 'vc@combobox__selection__divider',
        //   // }, this.divider));
        // }
      });
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
  },

  methods: {
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
    onBlurInput(e) {
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
        },
        on: {
          input: this.onInputInput,
          focus: this.onFocusInput,
          blur: this.onBlurInput,
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
      // return (
      //   <div>
      //     <h2>メニュー</h2>
      //     {optgroups}
      //   </div>
      // );

      const $menu = this.$createElement('vt@menu', {
        props: {
          // activator: this.$el,
          activator: this.$refs.body,
          // activator: this.$refs.input,
          offsetY: true,
          // nudgeTop: 26,
          closeOnClick: true,
          closeOnContentClick: !this.multiple,
          disabled: this.disabled,
          contentClass: 'vc@combobox__menu',
          // maxHeight: this.maxHeight,
          // openOnClick: false,

          value: this.menuIsActive/* && (....)*/,
          // zIndex: this.menuZIndex,
        },

        on: {
          input: val => {
            if (!val) {
              this.menuIsActive = false;
            }
          }
        },
      }, [
        // this.$createElement('vt@list', {}, $tiles),
        ...optgroups,
      ]);
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
    selectOption($vm) {
      let payload;
      if (this.multiple) {
        payload = this.targetSelected || [];
        const index = payload.indexOf($vm.value);
        if ($vm.isActive) {
          if (index !== -1) payload.splice(index, 1);
        } else {
          if (index == -1) payload.push($vm.value);
        }
      } else {
        payload = $vm.value;
      }
      this.targetSelected = payload;
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
        <div class="vc@combobox__body" ref="body">
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
