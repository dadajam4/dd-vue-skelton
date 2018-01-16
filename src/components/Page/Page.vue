<script>
export default {
  name: 'vt@page',

  props: {
    tag: {
      type: String,
      default: 'main',
    },
    container: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return {
        'vc@page': true,
        'vc@container': this.container,
      }
    },
  },

  created() {
    // console.warn(this.$options);
  },

  render(h) {
    const tag = this.tag;

    const data = {
      class: this.classes,
    };

    // console.warn(this.container);

    return h(tag, data, this.$slots.default);
  }
}
</script>
