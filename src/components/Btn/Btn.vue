<script>
import Colorable from '~/mixins/color';
import Routable from '~/mixins/routable';


export default {
  name: 'vt@btn',

  mixins: [
    Colorable,
    Routable,
  ],

  props: {

    // size
    sm: Boolean,
    lg: Boolean,

    // outline
    block: Boolean,
    icon: Boolean,
    left: Boolean,
    right: Boolean,

    // states
    loading: Boolean,
    disabled: Boolean,

    // values
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'button'
    },
  },



  computed: {
    classes() {
      const classes = this.addColorClasses({
        [this.$options.name]: true,

        // size
        'vc@btn--sm': this.sm,
        'vc@btn--lg': this.lg,

        'vc@btn--block': this.block,
        'vc@btn--icon': this.icon,
        'vc@btn--left': this.left,
        'vc@btn--right': this.right,

        // states
        'vc@btn--loading': this.loading,
        'vc@btn--disabled': this.disabled,
      });

      return classes;
    },
  },



  methods: {
    // Prevent focus to match md spec
    click(e) {
      e.detail &&
        this.$el.blur();

      this.$emit('click', e);
    },
  },

  render(h) {
    const { tag, data } = this.generateRouteLink();
    const defaults = this.$slots.default && this.$slots.default.map(vnode => {
      if (vnode.tag) return vnode;
      return h('span', {
        staticClass: `vc@btn__label`,
      }, vnode.text);
    }) || [];
    const children = [(
      <span class="vc@btn__content-wrapper">
        <span class="vc@btn__content">{defaults}</span>
      </span>
    )];
    tag === 'button' && (data.attrs.type = this.type);

    if (this.loading) {
      const loader = this.$slots.loader || (<vt-spinner indeterminate={true} size={26}></vt-spinner>);
      children.push(
        <span class="vc@btn__loading">
          {[loader]}
        </span>
      );
    }

    return h(tag, data, children);
  },
}
</script>