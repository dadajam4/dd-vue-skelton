import Inputable from './mixins/inputable';
import SliderPipeMixin from './mixins/slider-pipe-mixin';



export default {
  name: 'vt@range',

  mixins: [Inputable, SliderPipeMixin],

  props: {
    validateProp: {
      default: 'innerValue',
    },
    validateTiming: {
      type: String,
      default: 'input', // blur, input, always
    },
  },

  computed: {
    inputTypeDetail() { return 'range' },
  },

  methods: {
    onSliderFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    onSliderBlur(e) {
      this.focused = false;
      this.$emit('blur', e);
    },
    genSliderProps() {
      const props = {};
      for (let key in SliderPipeMixin.props) {
        props[key] = this[key];
      }
      props.error = this.hasError;
      return props;
    },
    genControls() {
      return this.$createElement('vt@slider', {
        props: this.genSliderProps(),
        on: {
          input: e => {
            this.targetValue = e;
          },
          focus: this.onSliderFocus,
          blur: this.onSliderBlur,
          // activate: e => {
          //   console.warn(e);
          // },
        },
        ref: 'slider',
      }, this.$slots.default);
    },
    focus() {
      this.$refs.slider.focus();
    },
  },
}
