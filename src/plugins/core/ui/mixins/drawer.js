export default function(parent, vec) {
  return {
    name: `vt@ui-${vec}-drawer`,

    parent,

    data() {
      return {
        vec,
        use: false,
        active: false,
        static: false,
      }
    },

    methods: {
      release() {
        this.use = false;
        this.active = false;
        this.static = false;
      },
    },
  }
}
