export default {
  name: 'vt@toolbar-side-icon',

  functional: true,

  render(h, { slots, listeners, props, data }) {
    const classes = data.staticClass
     ? `${data.staticClass} vc@toolbar__side-icon`
     : `vc@toolbar__side-icon`;

    const d = Object.assign(data, {
      staticClass: classes,
      props: Object.assign(props, {
        icon: true,
        lg: true,
      }),
      on: listeners,
    })

    const defaultSlot = slots().default;

    return h('vt@btn', d, defaultSlot || [h('vt@icon', 'bars')]);
  }
}