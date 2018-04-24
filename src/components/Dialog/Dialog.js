import factory from '~/mixins/stack/stackable-factory';

const toMaxSizeString = val => {
  if (!val) return;
  val = String(val);
  return val.match(/\d$/) ? val + 'px' : val;
}

const mixin = factory('dialog', {
  computed: {
    computedMaxWidth() { return toMaxSizeString(this.maxWidth) },
    computedMaxHeight() { return toMaxSizeString(this.maxHeight) },
    dialogBodyStyles() {
      const styles = {};
      if (this.computedMaxWidth) styles['max-width'] = this.computedMaxWidth;
      if (this.computedMaxHeight) styles['max-height'] = this.computedMaxHeight;
      return styles;
    },
    dialogBodyClasses() {
      if (this.elevation) {
        return {
          [`vc@elevation--${this.elevation}`]: true,
        }
      }
    },
  },
});

export default {
  name: 'vt@dialog',

  mixins: [mixin],

  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
    dialog: {
      type: Boolean,
      default: true,
    },
    backdrop: {
      type: Boolean,
      default: true,
    },
    closeOnContentClick: {
      type: Boolean,
      default: false,
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    fullscreen: Boolean,
    scrollable: Boolean,
    transition: {
      type: String,
      default: 'vc@scale-transition',
    },
    origin: {
      type: String,
      default: 'center center',
    },
    elevation: {
      type: [String, Number],
      default: 24,
    },
    persistent: Boolean,
  },

  render(h) {

    // inline-block
    const $body = h('div', {
      staticClass: 'vc@dialog__body',
      class: this.dialogBodyClasses,
      style: this.dialogBodyStyles,
      directives: [this.createClickOutsideDirective()],
    }, this.$slots.default);

    // table-cell
    const $inner = h('div', {
      staticClass: 'vc@dialog__inner',
    }, [$body]);

    // table
    const $content = h('div', {
      staticClass: 'vc@dialog__content',
    }, [$inner]);

    return this.genStack('div', {
      staticClass: 'vc@dialog',
      class: {
        'vc@dialog--fullscreen': this.fullscreen,
        'vc@dialog--scrollable': this.scrollable,
      },
    }, [$content]);
  },
}
