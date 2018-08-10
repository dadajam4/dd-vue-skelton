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
    myActive() { return this.$context.typeIsMonth ? this.$context.isPicked(this.value) : this.isActive },
  },

  render(h) {
    const isActive = this.myActive;
    const $btn = h('vt@btn', {
      props: {
        sm: true,
        flat: !isActive,
        depressed: isActive,
        outline: this.isDisplayCurrent && !isActive,
        color: this.isDisplayCurrent || isActive ? 'primary' : void(0),
        disabled: !this.isAllowed,
      },
      on: {
        click: e => {
          if (this.$context.typeIsMonth) {
            if (this.$context.picker) return this.$context.pickDate(this.info);
          } else {
            return this.onClick(e);
          }
        },
      },
    }, this.label);
    return h('li', null, [$btn]);
  },
}
