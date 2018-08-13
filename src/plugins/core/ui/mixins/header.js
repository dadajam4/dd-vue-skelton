export default function(parent) {
  return {
    name: 'vt@ui-header',

    parent,

    data() {
      return {
        height: null,
        use: false,
        fixed: false,
        hidden: false,
      }
    },

    computed: {
      fixedHeight() {
        return this.fixed && !this.hidden ? this.height : 0;
      },
    },

    methods: {
      release() {
        this.use = false;
        this.fixed = false;
        this.hidden = false;
      },
    },
  }
}
