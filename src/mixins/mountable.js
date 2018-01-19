export default {
  name: 'vt@mountable',

  data() {
    return {
      isMounted: false,
    }
  },

  mounted() {
    this.isMounted = true;
  },

  destroyed() {
    this.isMounted = false;
  },
}