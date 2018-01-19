/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */
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

      return this.$slots.progress || this.$createElement('vt@progress-linear', {
        props: {
          backgroundColor: (this.loading === true || this.loading === '')
            ? (this.color || 'primary')
            : this.loading,
          height: 2,
          indeterminate: true
        }
      })
    }
  }
}