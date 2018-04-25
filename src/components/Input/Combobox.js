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
    const data = {
      $combobox: this,
      genOptionByProp: this.genOptionByProp,
      appendOptionVm: this.appendOptionVm,
      removeOptionVm: this.removeOptionVm,
      deselectOption: this.deselectOption,
    };

    // Object.defineProperty(data, 'highlightValue', {
    //    enumerable: true,
    //    get: () => this.innerValue,
    // });

    return data;
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
    suggests: [String, Array],
    maxSuggests: [String, Number],
    alwaysSuggests: Boolean,
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
    caseSensitive: Boolean,
    noDataText: {
      type: String,
      default: 'No data available',
    },
    tabindex: {
      type: [String, Number],
      default: 0,
    },
  },

  data() {
    return {
      innerValue: this.value,
      innerSelected: this.selected,
      focused: false,
      menuIsActive: false,
      optionVms: [],
      autocompleteFocusedVm: null,
      suggestIndex: -1,
    }
  },

  computed: {
    suggestValue() { return this.hitSuggests[this.suggestIndex] },
    hasNoDataText() { return this.autocomplete && !!this.noDataText },
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
    searchValue() { return (this.innerValue || '') },
    searchRegExp() { return this.searchValue && new RegExp(`(${this.searchValue})`, this.caseSensitive ? 'g' : 'ig') },
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
        tabindex: '-1',
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

      return this.$createElement('div', {
        staticClass: 'vc@combobox__selection',
      }, children);
    },
    showOptions() {
      return this.autocomplete ? this.optionVms.filter(vm => vm.isSearchHit) : this.optionVms;
    },
    showOptionsIsEmpty() { return this.showOptions.length === 0 },
    computedSuggests() {
      if (this.hasSuggests) {
        return typeof this.suggests === 'string' ? this.suggests.split(',') : this.suggests;
      }
    },
    hasSuggests() { return !!this.suggests },
    suggestsIsEmpty() { return !this.hasSuggests || this.computedSuggests.length === 0 },
    computedMaxSuggests() {
      const type = typeof this.maxSuggests;
      if (type === 'number') return this.maxSuggests;
      if (type === 'string') return parseInt(this.maxSuggests, 10);
      return false;
    },
    hitSuggests() {
      if (
        this.suggestsIsEmpty
        || !this.searchValue && !this.alwaysSuggests
      ) return [];

      const hitSuggests = [];
      const re = this.searchRegExp;
      for (let suggest of this.computedSuggests) {
        if (!this.searchValue) {
          hitSuggests.push(suggest);
        } else {
          if (re.test(suggest)) hitSuggests.push(suggest);
        }
        if (hitSuggests.length === this.computedMaxSuggests) break;
      }
      return hitSuggests;
    },
    hitSuggestsLength() { return this.hitSuggests.length },
    hitSuggestsIsEmpty() { return !this.hasSuggests || this.hitSuggestsLength === 0 },
    hasSearch() { return this.autocomplete || this.hasSuggests },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
    selected(val) {
      this.innerSelected = val;
    },
    focused(val) {
      // this.menuIsActive = val;

      if (!val && this.isSelect && this.autocomplete) {
        this.input = '';
      }
    },
    menuIsActive(val) {
      this.autocompleteFocusedVm = null;
      this.suggestIndex = -1;
    },
    hitSuggestsLength() {
      this.$timeout(() => {
        this.$refs.menu && this.$refs.menu.onResize();
      }, 500, 'suggests-length-menu-resize');
    },
  },

  methods: {
    shiftAutocompleteIndex(ammount = 1) {
      const searchHitOptions = this.showOptions;
      const currentIndex = searchHitOptions.indexOf(this.autocompleteFocusedVm);
      let newIndex = currentIndex + ammount;
      if (newIndex >= searchHitOptions.length) {
        newIndex -1;
      } else if (newIndex <= -2) {
        newIndex = searchHitOptions.length - 1;
      }
      const nextVm = searchHitOptions[newIndex];
      this.autocompleteFocusedVm = nextVm || null;
    },
    shiftSuggestIndex(ammount = 1) {
      let newIndex = this.suggestIndex + ammount;
      if (newIndex <= -2) {
        newIndex = this.hitSuggests.length - 1;
      } else if (newIndex >= this.hitSuggests.length) {
        newIndex = -1;
      }
      this.suggestIndex = newIndex;
    },
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
      if (this.disabled) return;
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
      if (this.elementIsInContext(e.relatedTarget)) {
        e.preventDefault();
        this.$refs.input.focus();
        return;
      }
      this.focused = false;
      if (this.isSelect) this.menuIsActive = false;
      this.$emit('blur', e);
    },
    onFocusBody(e) {
      this.focus();
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
    onInputInput(e) {
      if (this.disallowChange) return e.preventDefault();
      this.suggestIndex = -1;
      this.input = e.target.value;
    },
    resolveSuggest(suggestValue = this.suggestValue) {
      if (suggestValue) this.input = suggestValue;
      this.menuIsActive = false;
    },
    genInput() {
      const data = {
        class: this.inputClasses,
        attrs: this.inputAttrs,
        domProps: {
          autofocus: this.autofocus,
          value: this.suggestValue ? this.suggestValue : this.innerValue,
          disabled: this.disabled,
        },
        on: {
          focus: this.onFocusInput,
          blur: this.onBlurInput,
          input: this.onInputInput,
          keydown: e => {
            if (!this.hasSearch) return;

            if (e.which === 9 || e.which === 13) {

              // >>> enter or tab
              if (this.autocomplete) {
                if (this.autocompleteFocusedVm) {
                  this.autocompleteFocusedVm.select();
                }

                if (!this.multiple) {
                  this.menuIsActive = false;
                } else {
                  this.input = '';
                }
              } else {
                this.resolveSuggest();
              }
            } else if (e.which === 38) {

              // up
              this.autocomplete ? this.shiftAutocompleteIndex(-1) : this.shiftSuggestIndex(-1);
            } else if (e.which === 40) {

              // down
              this.autocomplete ? this.shiftAutocompleteIndex() : this.shiftSuggestIndex();
            } else if (e.which === 8 || e.which === 46) {

              // delete or backspace
              if (this.autocomplete) {
                if (!this.input) {
                  return this.removeLastSelection();
                }
              }
            }
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

    genSuggests() {
      if (this.hitSuggestsIsEmpty) return [];

      const h = this.$createElement;

      const suggests = this.hitSuggests.map((suggest, index) => {
        const $highlight = h('vt@highlight', {
          props: {
            match: this.searchRegExp,
            value: this.searchValue,
            highlightTag: 'span',
            highlightClass: 'vc@text-color--primary',
          },
        }, suggest);

        const $title = h('vt@tile-title', null, [$highlight]);
        const $content = h('vt@tile-content', null, [$title]);

        return h('vt@tile', {
          class: {
            'vc@tile--focused': index === this.suggestIndex,
          },
          on: {
            click: e => {
              this.resolveSuggest(suggest);
            },
          },
        }, [$content]);
      });

      return [h('vt@tile-group', {
        props: {
          dense: true,
        },
      }, suggests)];
    },

    genMenu(optgroups = []) {
      if (
        !optgroups.length
        && !this.hasSuggests
      ) return;

      const isEmpty = this.hasSuggests ? this.hitSuggestsIsEmpty : this.showOptionsIsEmpty;
      const emptyElements = isEmpty && this.hasNoDataText ? [this.$createElement('div', {
        staticClass: 'vc@combobox__menu__no-data',
      }, this.noDataText)] : [];

      const $menu = this.$createElement('vt@menu', {
        props: {
          elementClass: {
            'vc@combobox__menu': true,
            'vc@combobox__menu--hide': isEmpty && !this.hasNoDataText,
          },
          activator: () => this.$refs.body,
          offsetY: true,
          activatorAction: null,
          closeOnContentClick: !this.multiple,
          closeOnOutsideClick: false,
          closeOnEsc: true,
          disabled: this.disabled,
          offsetOverflow: this.autocomplete,
          value: this.menuIsActive,
        },

        on: {
          input: val => {
            if (!val) {
              this.menuIsActive = false;
            }
          },
        },
        ref: 'menu',
      }, [
        ...emptyElements,
        ...optgroups,
        ...this.genSuggests(),
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
        this.input = '';

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
    onClickBody(e) {
      if (this.disabled) return;
      this.focus();
      if (this.isSelect) {
        this.menuIsActive = true;
      }
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
    const otherChildren = [];
    let optgroup;

    this.groups && this.groups.forEach(group => {
      optgroups.push(this.genGroupByProp(group));
    });

    if (this.options) {
      optgroup = h('vt@optgroup', null, this.options.map(o => {
        return this.genOptionByProp(o);
      }));
      optgroups.push(optgroup);
    }

    this.$slots.default && this.$slots.default.forEach(vnode => {
      if (vnode.componentOptions && vnode.componentOptions.tag === 'vt@option') {
        if (optgroup) {
          optgroup.componentOptions.children.push(vnode);
        } else {
          optgroup = h('vt@optgroup', null, [vnode]);
          optgroups.push(optgroup);
        }
      } else if (vnode.componentOptions && vnode.componentOptions.tag === 'vt@optgroup') {
        optgroups.push(vnode);
      } else if (vnode.data && /(^|\s)vt@icon/.test(vnode.data.staticClass || '')) {
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
      } else {
        otherChildren.push(vnode);
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
      >
        {positionables.btn.left}
        <div
          class={this.bodyClasses}
          tabindex={this.disabled ? '-1' : this.tabindex}
          onFocus={this.onFocusBody}
          onClick={this.onClickBody}
          ref="body"
        >
          {positionables.icon.left}
          {this.genfix('pre')}
          {this.selectionItems}
          {this.genInput()}
          {this.genfix('suf')}
          {positionables.icon.right}
          {otherChildren}
        </div>
        {positionables.btn.right}

        {this.genMenu(optgroups)}
      </div>
    );
  },
}
