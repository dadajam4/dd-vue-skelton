<script>
export default {
  name: 'vt@page',

  props: {
    tag: {
      type: String,
      default: 'main',
    },
  },

  computed: {
    classes() {
      return {
        'vc@page': true,
      }
    },
  },

  // created() {
  //   // console.warn(this.$options);
  //   // console.warn(this.$parent.$options.head());
  //   // console.warn(Object.keys(this.$vnode));
  //   console.warn(this.$vnode.children);
  //   console.log(this.$children);
  // },

  // destroyed() {
  //   console.warn(this.$parent.$options.head());
  // },

  render(h) {
    const tag = this.tag;

    const data = {
      class: this.classes,
    };

    return h(tag, data, this.$slots.default);
  }
}
</script>
