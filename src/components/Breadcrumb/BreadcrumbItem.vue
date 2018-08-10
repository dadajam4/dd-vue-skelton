<script>
import Routable from '~/mixins/routable';



export default {
  name: 'vt@breadcrumb-item',

  mixins: [Routable],

  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'vc@disabled--text',
    },

    hasDivider: Boolean,
  },

  computed: {
    classes() {
      return {
        'vc@breadcrumb__item': true,
        'vc@breadcrumb__item--active': this.disabled,
        [this.activeClass]: this.disabled,
      }
    }
  },

  render(h) {
    const { tag, data } = this.generateRouteLink();
    const children = [h(tag, data, this.$slots.default)];

    if (this.hasDivider) children.unshift(h('span', {
      staticClass: 'vc@breadcrumb__divider',
    }, this.$parent.computedDivider));

    return h('li', children);
  }
}
</script>
