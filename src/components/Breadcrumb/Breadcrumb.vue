<script>



export default {
  name: 'vt@breadcrumb',

  props: {
    divider: {
      type: String,
      default: '/',
    },

    lg: Boolean,

    left: Boolean,
    center: Boolean,
    right: Boolean,
  },

  computed: {
    classes() {
      return {
        'vc@breadcrumb--lg': this.lg,
        'vc@breadcrumb--left': this.left,
        'vc@breadcrumb--center': this.center,
        'vc@breadcrumb--right': this.right,
      }
    },
    computedDivider() {
      return this.$slots.divider
        ? this.$slots.divider
        : this.divider
    },
    styles() {
      const justify = this.justifyCenter
        ? 'center'
        : this.justifyEnd
          ? 'flex-end'
          : 'flex-start'

      return {
        'justify-content': justify
      }
    }
  },

  methods: {

    /**
     * Add dividers between
     * v-breadcrumbs-item
     *
     * @return {array}
     */
    genChildren() {
      if (!this.$slots.default) return null;

      const h = this.$createElement;
      const children = [];
      // const dividerData = { staticClass: 'vc@breadcrumb__divider' };

      this.$slots.default.forEach((elm, i) => {
        children.push(elm);

        elm.componentOptions.propsData.hasDivider = i !== 0;

        // if (
        //   i === 0
        //   || !elm.componentOptions
        //   || elm.componentOptions.tag !== 'vt@breadcrumb-item'
        // ) return;

        // console.warn(elm.componentOptions);
        // // elm.componentOptions.children.unshift(h('span', dividerData, this.computedDivider));
      })

      return children;
    }
  },

  render(h) {
    return h('ul', {
      staticClass: 'vc@breadcrumb',
      'class': this.classes,
      // style: this.styles,
    }, this.genChildren());
  }

}
</script>