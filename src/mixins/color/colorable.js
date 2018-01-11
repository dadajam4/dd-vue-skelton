import contextColorable from './contextColorable';
import layerColorable from './layerColorable';
import backgroundColorable from './backgroundColorable';
import borderColorable from './borderColorable';
import textColorable from './textColorable';



export default {
  mixins: [
    contextColorable,
    layerColorable,
    backgroundColorable,
    borderColorable,
    textColorable,
  ],



  computed: {
    colorClasses() {
      return Object.assign(
        {},
        this.contextColorClasses,
        this.layerColorClasses,
        this.backgroundColorClasses,
        this.borderColorClasses,
        this.textColorClasses,
      );
    },
  },



  methods: {
    addColorClasses(classes = {}) {
      return Object.assign({}, classes, this.colorClasses);
    },
  },
}