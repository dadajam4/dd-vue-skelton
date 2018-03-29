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
    '$optgroup': {
      from: '$optgroup',
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
  },

  data() {
    return {
      innerValue: this.selected,
      searchHitValue: null,
    }
  },

  computed: {
    isDisabled() { return this.disabled || this.$parent.isDisabled },
    multiple() { return this.$combobox.multiple },
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
    searchValue() { return this.$combobox.searchValue },
    caseSensitive() { return this.$combobox.caseSensitive },
    searchRegExp() { return /*this.searchHitValue && */this.$combobox.searchRegExp },
    isSearchHit() {
      if (!this.searchHitValue) return;
      if (!this.searchValue) return true;
      return this.searchRegExp.test(this.searchHitValue);
    },
  },

  watch: {
    isSearchHit(val) {
      if (!val && this.$combobox.autocompleteFocusedVm === this) this.$combobox.autocompleteFocusedVm = null;
    },
  },

  methods: {
    updateSearchHitValue() {
      if (!this.$el) this.searchHitValue = null;
      this.searchHitValue = (this.$el.innerText || '');
    },

    click(e) {
      return this.isDisabled ? e.preventDefault() : this.select();
    },

    select(force = false) {
      return this.$combobox.selectOption(this, force);
    },

    deselect() {
      return this.deselectOption(this);
    },

    genContentChildren() {
      return (this.$slots.default || []).map(c => {
        if (c.text) {
          return this.$createElement('vt@highlight', {
            props: {
              match: this.searchRegExp,
              value: this.$combobox.innerValue,
              highlightTag: 'span',
              highlightClass: 'vc@text-color--primary',
            },
          }, c.text);
        } else {
          return c;
        }
      });
    },
  },

  created() {
    this.appendVmForCombobox(this);
    if (this.$optgroup) this.$optgroup.appendOptionVm(this);
  },

  mounted() {
    this.updateSearchHitValue();
  },

  updated() {
    this.updateSearchHitValue();
  },

  beforeDestroy() {
    this.removeVmFromCombobox(this);
    if (this.$optgroup) this.$optgroup.removeOptionVm(this);
  },

  render(h) {
    const $content = this.$createElement('vt@tile-content', null, this.genContentChildren())
    const children = [
      h('vt@tile-action', {}, [
        this.$createElement(`vt@${this.multiple ? 'checkbox' : 'radio'}-element`, {
          props: {
            checked: this.isActive,
            disabled: this.isDisabled,
            tabindex: -1,
          },
        })
      ]),
      $content,
    ];

    return this.$createElement('vt@tile', {
      staticClass: 'vc@option',
      class: {
        'vc@option--disabled': this.isDisabled,
        'vc@tile--focused': this === this.$combobox.autocompleteFocusedVm,
      },
      props: {
        value: this.isActive,
        disabled: this.isDisabled,
      },
      on: {
        click: this.click,
      },
      directives: [
        {name: 'show', value: this.isSearchHit}
      ],
    }, children);
  },
}
