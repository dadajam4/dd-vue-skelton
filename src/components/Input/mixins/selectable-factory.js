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
        default: modelProp,
      },
    },

    model: {
      prop: modelProp,
      event: 'change',
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

    created() {
      if (!this.isSelect) {
        this._checkedWatcher = this.$watch(modelProp, this.updateInnerValue);
        this.updateInnerValue();
      }
    },

    beforeDestroy() {
      if (!this.isSelect && this._checkedWatcher) {
        this._checkedWatcher();
        delete this._checkedWatcher;
      }
    },
  }
}
