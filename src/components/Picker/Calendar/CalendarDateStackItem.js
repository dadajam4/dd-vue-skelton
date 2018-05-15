import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-date-stack-item',

  mixins: [StackItem],

  props: {
    fill: Boolean,
  },

  data() {
    return {
      checkAllowedType: 'date',
    }
  },

  computed: {
    isHoliday() { return this.info.holiday },
    holidayInfo() { return this.info.holidayInfo },
    textColor() {
      if (!this.isAllowed) return;
      if (this.fill) return 'grey';
      if (this.isDisplayCurrent) return this.currentColor;
      if (this.isHoliday) return this.holidayColor;
    },
    label() { return this.dateFormatDefine.numericDayByValue(this.day, true) },
  },

  render(h) {
    const $btn = this.showFillDay || !this.fill && h('vt@btn', {
      props: {
        flat: true,
        icon: true,
        disabled: !this.isAllowed,
        textColor: this.textColor,
        // primary: this.isDisplayCurrent,
      },
    }, this.label);
    return h('td', null, [$btn]);
  },
}