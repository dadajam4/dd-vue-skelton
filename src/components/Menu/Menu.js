import Stackable from '~/mixins/stack';


export default {
  name: 'vt@menu',

  mixins: [Stackable],

  render(h) {
    return this.genStack('div', {
      staticClass: 'vc@menu',
    }, this.$slots.default);
  },
}