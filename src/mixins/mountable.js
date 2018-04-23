export default {
  name: 'vt@mountable',

  data() {
    return {
      isMounted: false,
    }
  },

  methods: {
    mounted(cb) {
      return new Promise(resolve => {
        const onMount = () => {
          cb && cb();
          return resolve();
        }

        if (this.isMounted) return onMount();
        this.$once('mount', onMount);
      });
    },
  },

  mounted() {
    this.isMounted = true;
    this.$emit('mount');
  },

  destroyed() {
    this.isMounted = false;
  },
}
