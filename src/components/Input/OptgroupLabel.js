export default {
  name: 'vt@optgroup-label',

  render(h) {
    return h('div', {
      class: {
        'vc@optgroup__label': true,
      },
    }, this.$slots.default);
  },
}
