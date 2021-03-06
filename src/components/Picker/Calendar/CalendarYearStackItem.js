import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-year-stack-item',

  mixins: [StackItem],

  data() {
    return {
      checkAllowedType: 'year',
    }
  },

  computed: {
    label() { return this.dateFormatDefine.numericYearByValue(this.year, true) },
  },

  render(h) {
    return h('li', {
      class: {
        'vc@calendar__year--current': this.isDisplayCurrent,
        'vc@calendar__year--disabled': !this.isAllowed,
        'vc@calendar__year--active': this.isActive,
      },
      on: {
        click: this.onClick,
      },
    }, this.label);
  },
}
