import Routable from '~/mixins/routable';



export default {
  name: 'vt@tile-group',

  provide() {
    const data = {
      $tileGroup: this,
    };

    return data;
  },

  props: {
    tag: {
      type: String,
      default: 'ul',
    },
    dense: Boolean,
    divider: [Boolean, String],
    disabled: Boolean,
    wrap: Boolean,
  },

  computed: {
    classes() {
      return {
        'vc@tile-group--dense': this.dense,
        'vc@tile-group--disabled': this.disabled,
        'vc@tile-group--has-divider': this.hasDivider,
        'vc@tile-group--divider-pull': this.dividerIsPull,
      }
    },

    hasDivider() { return this.divider !== false },
    dividerIsPull() { return this.divider === 'pull' },
    isList() { return this.tag === 'ul' || this.tag === 'ol' },
  },

  render(h) {
    // const $items = this.$slots.default ? this.$slots.default.filter(c => c.componentOptions && c.componentOptions.tag === 'vt@tile') : [];
    const $items = this.$slots.default || [];
    const $children = $items.map($item => {
      return h('vt@tile-group-item', {
        props: {
          tag: this.isList ? 'li' : 'div',
        },
      }, [$item]);
    });

    return h(this.tag, {
      staticClass: 'vc@tile-group',
      class: this.classes,
    }, $children);
  },
}