import colorableFactory from './colorableFactory';
import themes from '~~/config/css/themes';



export default colorableFactory('context', {
  props: {
    flat: Boolean,
    outline: Boolean,
  },
  expansionProps: themes['color-keys'].context,

  addColorPrefix() {
    return (this.flat && '-flat') || (this.outline && '-outline') || '';
  },
  // mergeColorClasses(classes = {}) {
  //   return Object.assign({}, classes, {
  //     'vc@context-color--flat': this.flat,
  //     'vc@context-color--outline': this.outline,
  //   });
  // },
});
