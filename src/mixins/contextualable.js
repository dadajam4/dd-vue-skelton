import themes from '~~/config/css/themes';
const CONTEXT_KEYS = themes['color-keys'].context;
const props = {};
for (let key of CONTEXT_KEYS) {
  props[key] = Boolean;
}

export default {
  props: {
    flat: Boolean,
    outline: Boolean,
    ...props
  },

  computed: {
    contextClassPrefix() {
      return `vc@context--${this.flat ? 'flat-' : this.outline ? 'outline-' : ''}`;
    },
    secondClassCheckMethodName() {
      return this.flat || this.outline ? 'addTextColorClassChecks' : 'addBackgroundColorClassChecks';
    },
    contextType() {
      let type;
      for (let key in props) {
        if (this[key]) {
          type = key;
          break;
        }
      }
      return type;
    },
  },

  methods: {
    addContextColorClassChecks(classes = {}, prop = 'computedColor') {
      const type = this.contextType;
      if (type) {
        classes[`${this.contextClassPrefix}${type}`] = true;
        return classes;
      }

      const secondClassCheck = this[this.secondClassCheckMethodName];

      if (typeof secondClassCheck === 'function') {
        return secondClassCheck(classes, prop);
      }
      return classes;
    },
  },
}