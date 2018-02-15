import Inputable from './inputable';



export default function(type) {
  return {
    props: {
      checked: Boolean,
      disabled: Boolean,
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
        return {
          'vc@checkable-element': true,
          [`vc@${type}-element`]: true,
          [`vc@${type}-element--checked`]: this.checked,
          [`vc@${type}-element--disabled`]: this.disabled,
        }
      },
      bodyClasses() {
        return {
        }
      },
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
          <span staticClass={`vc@${type}-element__body`}>
            <span staticClass={`vc@${type}-element__inner`}>
              {children}
            </span>
          </span>
        </TagName>
      );
    },
  }
}
