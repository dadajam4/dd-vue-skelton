import Inputable from './mixins/inputable';
import RangeProps from './mixins/range-props';



export default {
  name: 'vt@range',

  mixins: [Inputable, RangeProps],

  props: {
  },

  computed: {
    inputTypeDetail() { return 'range' },
  },

  methods: {
    genControls() {
      return this.$createElement('vt@slider', {
        props: {
          multiple: this.multiple,
          min: this.min,
          max: this.max,
          step: this.step,
          value: this.value,
        },
        on: {
          input: e => {
            this.targetValue = e;
          },
        },
      })
    },
  },
}
