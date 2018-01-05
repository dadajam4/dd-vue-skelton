export default {
  name: 'vt@avatar',

  functional: true,

  props: {
    size: {
      type: [Number, String],
      default: 48,
    },
    tile: Boolean,
  },

  render(h, { data, props, children }) {
    data.staticClass = (`vc@avatar ${data.staticClass || ''}`).trim();
    data.style = data.style || {};

    if (props.tile) data.staticClass += ' vc@avatar--tile';

    if (!isNaN(props.size)) {
      const size = `${parseInt(props.size)}px`;
      data.style.height = size;
      data.style.width = size;
    } else if (props.size) {
      data.staticClass += ` vc@avatar--${props.size}`;
    }

    return h('div', data, children);
  }
}