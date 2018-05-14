import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-month-stack-item',

  mixins: [StackItem],

  data() {
    return {
      checkAllowedType: 'month',
    }
  },

  computed: {
    label() { return this.dateFormatDefine.month.short[this.month] },
  },

  render(h) {
    const $btn = h('vt@btn', {
      props: {
        sm: true,
        flat: !this.isActive,
        depressed: this.isActive,
        outline: this.isDisplayCurrent && !this.isActive,
        primary: this.isDisplayCurrent || this.isActive,
        disabled: !this.isAllowed,
      },
      on: {
        click: this.onClick,
      },
    }, this.label);
    return h('li', null, [$btn]);
  },
}
