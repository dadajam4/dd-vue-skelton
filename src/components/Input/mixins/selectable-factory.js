import Inputable from './inputable';



export default function(modelProp = 'inputValue') {
  return {
    mixins: [Inputable],

    props: {
      multiple: {
        type: Boolean,
        default: false,
      },

      validateProp: {
        default: 'innerValue',
      },
    },

    model: {
      prop: modelProp,
      event: 'change',
    },

    watch: {
      [modelProp](val) {
        this.updateInnerValue();
      },
    },

    methods: {
      updateInnerValue() {
        let val = this[modelProp];
        if (this.multiple) {
          val = val || [];
          this.innerValue = val.includes(this.value);
        } else {
          this.innerValue = val === this.value;
        }
      },
    },
  }
}
