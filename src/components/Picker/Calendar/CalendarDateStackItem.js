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
    isPicked() { return this.$context.isPicked(this.info) },
    events() { return this.info.events },
    hasEvent() { return this.events.length > 0 },
  },

  methods: {
    onClick(e) {
      return this.$context.pickDate(this.info);
    },

    genEvents() {
      const h = this.$createElement;
      const children = this.events.map((event, index) => h('i', {
        staticClass: 'vc@calendar__table__event',
        class: event.color && {[`vc@text-color--${event.color}`]: true},
        key: event.value + '-' + index,
      }));

      return h('span', {
        staticClass: 'vc@calendar__table__events',
      }, children);
    },
  },

  render(h) {
    const $btn = this.showFillDay || !this.fill && h('vt@btn', {
      props: {
        flat: !this.isPicked,
        icon: true,
        disabled: !this.isAllowed,
        textColor: !this.isPicked && this.textColor,
        noaction: !this.picker,
        primary: this.isPicked,
        depressed: this.isPicked,
      },
      on: {
        click: this.onClick,
      },
    }, this.label);

    const children = [$btn];
    if (this.hasEvent) {
      children.push(this.genEvents());
    }

    return h('td', null, children);
  },
}
