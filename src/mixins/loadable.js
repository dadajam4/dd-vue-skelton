export default {
  name: 'vt@loadable',

  props: {
    loading: {
      type: [Boolean, String],
      default: false,
    }
  },

  methods: {
    genProgress() {
      if (this.loading === false) return null;

      return this.$slots.progress || this.$createElement('vt@progress-bar', {
        props: {
          color: (this.loading === true || this.loading === '')
            ? (this.color || 'primary')
            : this.loading,
          height: 2,
          indeterminate: true,
        }
      });
    },
  }
};
