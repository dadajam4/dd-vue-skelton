import Routable from '~/mixins/routable';



export default {
  name: 'vt@tile',

  mixins: [Routable],

  inheritAttrs: false,

  inject: {
    '$tileGroup': {default: undefined},
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    dense: Boolean,
    divider: [Boolean, String],
    wrap: Boolean,
  },

  computed: {
    classes() {
      return {
        // 'vc@tile': true,
        'vc@tile--clickable': this.isClickable && !this.isDisabled,
        'vc@tile--disabled': this.isDisabled,
        'vc@tile--dense': this.isDense,
        'vc@tile--wrap': this.isWrap,
        'vc@tile--has-divider': this.hasDivider,
        'vc@tile--divider-pull': this.dividerIsPull,
        // [this.activeClass]: this.isActive,
      }
    },

    hasGroup() { return !!this.$parentGroup },
    $parentGroup() {
      return this.$parent.$options
        && this.$parent.$options._componentTag === 'vt@tile-group'
        && this.$tileGroup;
    },
    parentGroupIsList() { return this.hasGroup && (this.$parentGroup.tag === 'ol' || this.$parentGroup.tag === 'ul') },
    isDisabled() { return this.hasGroup && this.$parentGroup.disabled || this.disabled },
    isDense() { return this.hasGroup && this.$parentGroup.dense || this.dense },
    isWrap() { return this.hasGroup && this.$parentGroup.wrap || this.wrap },
    dividerValue() { return this.divider || this.hasGroup && this.$parentGroup.divider },
    hasDivider() { return this.dividerValue !== false },
    dividerIsPull() { return this.dividerValue === 'pull' },
    isLink() { return !!this.href || !!this.to || this.tag === 'a' },
    isClickable() { return this.isLink || this.$listeners && (this.$listeners.click || this.$listeners['!click']) },
  },

  render(h) {
    const { tag, data } = this.generateRouteLink();
    data.staticClass = 'vc@tile';
    return h(tag, data, this.$slots.default);
  },
}