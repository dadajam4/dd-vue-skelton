import StackFlagmentContext from '~/mixins/stack-flagment-context';



export default {
  name: 'vt@menu',

  mixins: [
    StackFlagmentContext,
  ],

  props: {
    value: Boolean,
    // activator: {
    //   type: [String, Object],
    // },
  },

  render(h) {
    // console.log(this.$slots);
    return this.genFragment();
  },
}