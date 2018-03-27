export default {
  name: 'vt@accordion-group',

  props: {
    styled: Boolean,
    tag: {
      type: String,
      default: 'ul',
    },
    exclusive: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return {
        'vc@accordion-group--styled': this.styled,
      }
    },
    isList() { return this.tag === 'ul' || this.tag === 'ol' },
  },

  methods: {
    onChildActive(child) {
      if (!this.exclusive) return;
      const $accordions = this.getChildAccordions();
      for (let a of $accordions) {
        if (a !== child) a.close();
      }
    },

    getChildAccordions() {
      return (this.$children || []).filter(c => c.$options && c.$options._componentTag === 'vt@accordion');
    },
  },

  render(h) {
    const children = (this.$slots.default || []).map(c => {
      if (c.componentOptions && c.componentOptions.tag === 'vt@accordion') {
        c.componentOptions.propsData.group = this;
      }
      if (this.isList && c.componentOptions && c.componentOptions.tag === 'vt@tile') {
        c.componentOptions.propsData.tag = 'li';
      }
      return c;
    });

    return h(this.tag, {
      staticClass: 'vc@accordion-group',
      class: this.classes,
    }, children);
  }
}