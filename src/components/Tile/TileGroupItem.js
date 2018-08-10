export default {
  name: 'vt@tile-group-item',

  functional: true,

  props: {
    tag: {
      type: String,
      default: 'li',
    },
  },

  render(h, { children, props }) {
    return h(props.tag, {
      staticClass: 'vc@tile-group__item',
    }, children);
  },
}
