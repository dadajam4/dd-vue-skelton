import factory from '~/mixins/stack/stackable-factory';

const mixin = factory('dialog');

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
    transition: {
      type: String,
      default: 'vc@scale-transition',
    },
    origin: {
      type: String,
      default: 'center center',
    },
  },

  render(h) {

    // inline-block
    const $body = h('div', {
      staticClass: 'vc@dialog__body',
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
    }, [$content]);
  },
}
