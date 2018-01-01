export default {
  props: {
    color: String,
  },

  data() {
    return {
      defaultColor: null,
    }
  },

  computed: {
    computedColor() { return this.color || this.defaultColor },
  },

  methods: {
    addBackgroundColorClassChecks(classes = {}, prop = 'computedColor') {
      if (prop && this[prop]) {
        classes[`vc@${this[prop]}`] = true;
      }
      return classes;
    },
    addTextColorClassChecks(classes = {}, prop = 'computedColor') {
      if (prop && this[prop]) {
        const parts = this[prop].trim().split(' ');

        let color = `vc@text--${parts[0]}`;

        // @TODO: ???
        if (parts.length > 1) color += ' vc@text--' + parts[1];

        classes[color] = !!this[prop];
      }

      return classes;
    }
  }
}