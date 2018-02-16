import Inputable from './mixins/inputable';
import SliderPipeMixin from './mixins/slider-pipe-mixin';



export default {
  name: 'vt@range',

  mixins: [Inputable, SliderPipeMixin],

  props: {
  },

  computed: {
    inputTypeDetail() { return 'range' },
  },

  methods: {
    genSliderProps() {
      const props = {};
      for (let key in SliderPipeMixin.props) {
        props[key] = this[key];
      }
      return props;
    },
    genControls() {
      return this.$createElement('vt@slider', {
        props: this.genSliderProps(),
        on: {
          input: e => {
            this.targetValue = e;
          },
        },
      }, this.$slots.default);
    },
  },
}
