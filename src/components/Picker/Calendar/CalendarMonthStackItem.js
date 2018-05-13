import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-month-stack-item',

  mixins: [StackItem],

  computed: {
    label() { return this.dateFormatDefine.month.narrow[this.month] },
  },

  render(h) {
    const $btn = h('vt@btn', {
      props: {
        sm: true,
        flat: true,
        outline: this.isCurrent,
        primary: this.isCurrent,
        disabled: !this.isAllowed,
      },
      on: {
        click: this.onClick,
      },
    }, this.label);
    return h('li', null, [$btn]);
  },
}
