import SelectableFactory from './mixins/selectable-factory';
import Comboboxable from './mixins/comboboxable';
// import Menuable from './mixins/menuable';



export default {
  name: 'vt@select',

  mixins: [SelectableFactory('value'), Comboboxable],

  props: {
    type: {
      type: String,
      default: () => 'select',
    },
    input: [String, Number],
    // multiple: Boolean,
    // autofocus: Boolean,
    // value: true,
    // useLabelSlot: {
    //   type: Boolean,
    //   default: true,
    // },
    // options: Array,
    // groups: {
    //   type: Array,
    //   default: () => [],
    // },
    options: Array,
    groups: Array,
    autocomplete: Boolean,
  },

  // provide() {
  //   const data = {
  //     $select: this,
  //     genOptionsByProp: this.genOptionsByProp,
  //     setupOption: this.setupOption,
  //     clickOption: this.clickOption,
  //     toggleOption: this.toggleOption,
  //     selectOption: this.selectOption,
  //     deselectOption: this.deselectOption,
  //     arriveOption: this.arriveOption,
  //     leaveOption: this.leaveOption,
  //   };

  //   return data;
  // },

  data() {
    return {
      innerComboboxInput: this.input,
    }
    // return {
    //   innerValue: this.value,
    //   arrivedOptions: [],
    // }
  },

  computed: {
    inputTypeDetail() { return 'select' },
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('change', val);
      },
    },
    comboboxSelected: {
      get() { return this.innerValue },
      set(val) {
        this.targetValue = val;
      },
    },
    comboboxInput: {
      get() { return this.innerComboboxInput },
      set(val) {
        this.innerComboboxInput = val;
        this.$emit('input', val);
      },
    },
    // selectionItems() {
    //   if (!this.innerValue) return [];

    //   const values = Array.isArray(this.innerValue) ? this.innerValue : [this.innerValue];
    //   return values.map(value => {
    //     const option = this.getOptionByValue(value);
    //     return option ? option.getDisplayNode() : null;
    //   }).filter(vn => !!vn).map(vn => {
    //     return this.$createElement('li', {
    //       staticClass: 'vc@input__selections__item',
    //     }, [vn]);
    //     return vn;
    //   });
    // },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    // existOption($vm) {
    //   return this.arrivedOptions.includes($vm);
    // },

    // arriveOption($vm) {
    //   if (!this.existOption($vm)) this.arrivedOptions.push($vm);
    // },

    // leaveOption($vm) {
    //   const index = this.arrivedOptions.indexOf($vm);
    //   if (index !== -1) this.arrivedOptions.splice(index, 1);
    // },

    // getOptionByValue(value) {
    //   return this.arrivedOptions.find(option => option.value === value);
    // },
    // setupOption(vn) {
    //   const propsData = vn.componentOptions.propsData || {};
    //   propsData.initialSelected = propsData.selected;
    //   delete propsData.selected;
    //   vn.componentOptions.propsData = propsData;
    // },

    // clickOption($vm, e) {
    //   if ($vm.isDisabled) return e && e.preventDefault();
    //   return this[this.multiple ? 'toggleOption' : 'selectOption']($vm);
    // },

    // optionIsSelected($vm) {
    //   return this.multiple ? (this.targetValue || []).includes($vm.value) : this.targetValue === $vm.value;
    // },

    // toggleOption($vm) {
    //   return this[this.optionIsSelected($vm) ? 'deselectOption' : 'selectOption']($vm);
    // },

    // selectOption($vm) {
    //   let payload;
    //   if (this.multiple) {
    //     payload = this.targetValue || [];
    //     if (!payload.includes($vm.value)) payload.push($vm.value);
    //   } else {
    //     payload = $vm.value;
    //   }
    //   this.targetValue = payload;
    // },

    // deselectOption($vm) {
    //   let payload;
    //   if (this.multiple) {
    //     payload = this.targetValue || [];
    //     const index = payload.indexOf($vm.value);
    //     if (index !== -1) payload.splice(index, 1);
    //   } else {
    //     payload = null;
    //   }
    //   this.targetValue = payload;
    // },

    // genComboBox() {
    //   const $comboBox = this.$createElement('input', {
    //     // domProps: {
    //     //   autofocus: this.autofocus,
    //     //   value: this.displayValue,
    //     // },
    //     attrs: {
    //       type: 'text',
    //     },
    //   });
    //   return $comboBox;
    // },
    // genSelections() {
    //   const $comboBox = this.genComboBox();
    //   return this.$createElement('ul', {
    //     staticClass: 'vc@input__selections',
    //   }, [...this.selectionItems, $comboBox]);
    // },
    // genOptionByPropValue(option) {
    //   return this.$createElement('vt@option', {
    //     props: {
    //       value: option.value,
    //       disabled: option.disabled,
    //       initialSelected: option.selected,
    //     },
    //   }, option.label);
    // },
    // genOptionsByProp(options) {
    //   return options.map(option => this.genOptionByPropValue(option));
    // },
    // genOptgroupByProp() {
    //   if (!this.options) return;
    //   return this.$createElement('vt@optgroup', {}, this.genOptionsByProp(this.options));
    // },
    // genPropGroups() {
    //   return this.groups.map(group => {
    //     return this.$createElement('vt@optgroup', {
    //       props: {
    //         label: group.label,
    //         options: group.options,
    //       },
    //     });
    //   });
    // },
    // genOptgroups() {
    //   const groups = [];
    //   const propOptionsGroup = this.genOptgroupByProp();
    //   propOptionsGroup && groups.push(propOptionsGroup);

    //   const propGroups = this.genPropGroups();
    //   groups.push(...propGroups);

    //   let beforeIsOption = false, group;
    //   this.$slots.default && this.$slots.default.forEach(vn => {
    //     const tag = vn.componentOptions && vn.componentOptions.tag;
    //     if (tag === `vt@optgroup`) {
    //       groups.push(vn);
    //       beforeIsOption = false;
    //     } else if (tag === `vt@option`) {

    //       this.setupOption(vn);
    //       if (!beforeIsOption) {
    //         group = this.$createElement('vt@optgroup');
    //         group.componentOptions.children = [];
    //         groups.push(group);
    //       }
    //       group.componentOptions.children.push(vn);
    //       beforeIsOption = true;
    //     }
    //   });
    //   return groups;
    // },
    // // genControls() {
    // //   const $menu = this.genMenu();
    // //   $menu.children = this.genOptgroups();
    // //   return [this.genSelections(), $menu];
    // // },
    // genControls() {
    //   const $menu = this.genMenu();
    //   $menu.children = this.genOptgroups();
    //   return [this.genSelections(), $menu];
    // },
    genControls() {
      return this.genCombobox();
    },
  },
}
