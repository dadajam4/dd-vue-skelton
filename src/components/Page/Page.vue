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

  render(h) {
    const tag = this.tag;

    const data = {
      class: this.classes,
    };

    return h(tag, data, this.$slots.default);
  }
}
</script>
