export default {
  props: {
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    label: String,
    labelPosition: {
      type: String,
      default: 'left',
    },
    labelClick: {
      type: [String, Function],
      default: 'focus',
    },
    labelSlotDefault: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: [String, Number],
      default: 0,
    },
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
  },

  data() {
    return {
      focused: false,
    }
  },

  computed: {
    classes() {
      return {
        [`vc@input--${this.inputType}`]: true,
        [`vc@input--${this.inputTypeDetail}`]: true,
        'vc@input--focused': this.focused,
        'vc@input--sm': this.sm,
        'vc@input--md': this.md,
        'vc@input--lg': this.lg,
        'vc@input--inline': this.inline,
        'vc@input--disabled': this.disabled,
      }
    },
    allowChange() { return !this.disabled && !this.readonly },
  },

  // watch: {
  //   value(val) {
  //     this.innerValue = val;
  //     // if (this.multi) {
  //     //   val = val || [];
  //     //   this.innerValue = val.includes(this.value);
  //     // } else {
  //     //   this.innerValue = val === this.value;
  //     // }
  //   },
  // },

  methods: {
    getLabel() {
      return this.label || this.$slots.label || this.labelSlotDefault && this.$slots.default;
    },

    genLabel(position) {
      const label = this.getLabel();
      if (!label) return;

      return this.$createElement('label', {
        staticClass: `vc@input__label vc@input__label--${position}`,
        on: {
          click: e => {
            if (typeof this.labelClick === 'function') return this.labelClick(e);
            if (typeof this[this.labelClick] === 'function') return this[this.labelClick](e);
          },
        },
      }, label);
    },
  },

  created() {
    this.customSetup && this.customSetup();
  },

  render(h) {
    const $label = this.genLabel(this.labelPosition);
    const $moreChildren = this.genMoreChildren && this.genMoreChildren();


    const $detailsPrefix = (
      <div staticClass="vc@input__details__prefix">
      </div>
    );
    const $detailsMessages = (
      <div staticClass="vc@input__details__messages">
        {$moreChildren}
      </div>
    );

    const $details = this.labelPosition === 'left' ? [
      $detailsPrefix,
      $detailsMessages,
    ] : [
      $detailsMessages,
      $detailsPrefix,
    ];

    return (
      <div staticClass="vc@input" class={this.classes}>
        <div staticClass="vc@input__body">
          {this.labelPosition === 'left' && $label}
          <div staticClass="vc@input__control">
            {this.genControls()}
          </div>
          {this.labelPosition === 'right' && $label}
        </div>
        <div staticClass="vc@input__details">
          {$details}
        </div>
      </div>
    );
  },
}