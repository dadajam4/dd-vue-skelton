import Inputable from './inputable';



export default function(type) {
  return {
    props: {
      checked: Boolean,
      disabled: Boolean,
      error: Boolean,
      color: {
        type: String,
        default: 'primary',
      },
      tag: {
        type: String,
        default: 'i',
      },
      tabindex: {
        type: [String, Number],
        default: 0,
      },
    },

    computed: {
      classes() {
        const classes = {
          'vc@checkable-element': true,
          [`vc@${type}-element`]: true,
          [`vc@${type}-element--checked`]: !!this.checked,
          [`vc@${type}-element--disabled`]: !!this.disabled,
          [`vc@${type}-element--error`]: this.error,
          'vc@text-color--grey': this.disabled,
          'vc@text-color--error': this.error && !this.disabled,
        };

        if (!classes[`vc@text-color--${this.color}`]) classes[`vc@text-color--${this.color}`] = !this.disabled && !this.error && !!this.checked;
        return classes;
      },
      // bodyClasses() {
      //   return {
      //     [`vc@text-color--disabled`]: this.disabled,
      //     [`vc@text-color--error`]: this.error,
      //   }
      // },
    },

    render(h) {
      const children = this.genBodyChildren && this.genBodyChildren();
      const TagName = this.tag;

      return (
        <TagName
          class={this.classes}
          tabindex={this.disabled ? '-1' : this.tabindex}
          onClick={e => {
            if (!this.disabled) this.$emit('click', e);
          }}
          onKeyup={e => {
            if (e.keyCode === 13 && !this.disabled) this.$emit('click', e);
          }}
        >
          <span staticClass={`vc@${type}-element__body`} class={this.bodyClasses}>
            <span staticClass={`vc@${type}-element__inner`}>
              {children}
            </span>
          </span>
        </TagName>
      );
    },
  }
}
