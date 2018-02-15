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
    // genOptionsByProp: {
    //   from: 'genOptionsByProp',
    // },
    // setupOption: {
    //   from: 'setupOption',
    // },
    // parentIsDisabled: {
    //   from: 'disabled',
    // },
  },

  provide() {
    const data = {
      '$optgroup': this,
    };

    // Object.defineProperty(data, 'disabled', {
    //    enumerable: true,
    //    get: () => this.isDisabled,
    // });

    return data;
  },

  computed: {
    isDisabled() { return this.disabled || this.$combobox.disabled },
  },

  methods: {
  },

  render(h) {
    // console.warn(this.genOptionByProp);
    const children = [];
    const options = [];

    if (this.label) {
      children.push(h('vt@optgroup-label', {}, this.label));
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

    children.push(h('ul', {
      staticClass: 'vc@optgroup__items',
    }, options));

    return h('div', {
      staticClass: 'vc@optgroup',
    }, children);

    // this.$slots.default && this.$slots.default.forEach(vn => {
    //   const tag = vn.componentOptions && vn.componentOptions.tag;
    //   if (tag === `vt@option`) {
    //     this.setupOption(vn);
    //   }
    // });
    // return h('ul', {
    //   staticClass: 'vc@optgroup',
    // }, [...this.genOptionsByProp(this.options), ...(this.$slots.default || [])]);
  },
}
