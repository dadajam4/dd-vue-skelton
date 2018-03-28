export default {
  name: 'vt@optgroup',

  props: {
    label: String,
    disabled: Boolean,
    options: Array,
  },

  inject: {
    $combobox: {
      from: '$combobox',
    },
    genOptionByProp: {
      from :'genOptionByProp',
    },
  },

  provide() {
    const data = {
      '$optgroup': this,
    };
    return data;
  },

  data() {
    return {
      optionVms: [],
    }
  },

  computed: {
    isMultiple() { return this.$combobox.multiple },
    isDisabled() { return this.disabled || this.$combobox.disabled },
    isAllSelected() { return !this.optionVms.find($vm => !$vm.isActive) },
    isNotSelected() { return !this.optionVms.find($vm => $vm.isActive) },
    isIndeterminate() { return !this.isAllSelected && !this.isNotSelected },
    searchValue() { return this.$combobox.searchValue },
    isAutoComplete() { return this.$combobox.autocomplete },
    showOptions() {
      return this.isAutoComplete ? this.optionVms.filter(vm => vm.isSearchHit) : this.optionVms;
    },
    showOptionsIsEmpty() { return this.showOptions.length === 0 },
  },

  methods: {
    appendOptionVm($vm) {
      if (!this.optionVms.includes($vm)) this.optionVms.push($vm);
    },
    removeOptionVm($vm) {
      const index = this.optionVms.indexOf($vm);
      if (index !== -1) this.optionVms.splice(index, 1);
    },
    setChildrenSelected(selected) {
      const method = selected ? 'select' : 'deselect';
      for (let $vm of this.optionVms) {
        $vm[method](true);
      }
    },
  },

  render(h) {
    const children = [];
    const options = [];
    const labelChildren = [this.label];
    if (this.isMultiple) {
      labelChildren.unshift(h('vt@checkbox-element', {
        props: {
          indeterminate: this.isIndeterminate,
          checked: this.isAllSelected,
          disabled: this.isDisabled,
        },
        on: {
          click: e => {
            return this.setChildrenSelected(!this.isAllSelected);
          },
        },
      }));
    }

    if (this.label) {
      children.push(h('vt@optgroup-label', null, labelChildren));
    }

    this.$slots.default && this.$slots.default.forEach(vn => {
      if (vn.componentOptions && vn.componentOptions.tag === 'vt@option') {
        options.push(vn);
      } else {
        children.push(vn);
      }
    });

    this.options && this.options.forEach(option => {
      options.push(this.genOptionByProp(option));
    });

    children.push(h('vt@tile-group', {
      staticClass: 'vc@optgroup__items',
    }, options));

    return h('div', {
      staticClass: 'vc@optgroup',
      directives: [
        {name: 'show', value: !this.showOptionsIsEmpty},
      ],
    }, children);
  },
}
