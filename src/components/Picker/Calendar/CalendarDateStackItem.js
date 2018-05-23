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
    isPicked() { return this.$context.isPicked(this.value) },
    isFromPick() { return this.$context.isFromPick(this.value) },
    isToPick() { return this.$context.isToPick(this.value) },
    isBothPick() { return this.isFromPick && this.isToPick },
    isNotBothPick() { return !this.isFromPick && !this.isToPick },
    isInPickedRange() { return this.isPicked || this.$context.isInPickedRange(this.value) },
    hasRangeGuide() { return this.$context.multiplePicker },
    hasFromRangeGuide() { return this.isNotBothPick && this.isInPickedRange || this.isFromPick },
    hasToRangeGuide() { return this.isNotBothPick && this.isInPickedRange || this.isToPick },
    events() { return this.info.events },
    hasEvent() { return this.events.length > 0 },
    classes() {
      return {
        'vc@calendar__table__cell--picked': this.isPicked,
        'vc@calendar__table__cell--picked-from': this.isFromPick,
        'vc@calendar__table__cell--picked-to': this.isToPick,
        'vc@calendar__table__cell--picked-in': this.isInPickedRange,
      }
    },
  },

  methods: {
    onClick(e) {
      if (!this.$context.picker) return;
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

    genRangeGuide(type) {
      const h = this.$createElement;
      return h('i', {
        staticClass: `vc@calendar__table__cell__range-guide vc@calendar__table__cell__range-guide--${type} vc@context-color--${this.$context.pickedColor}`,
        key: type,
      });
    },
  },

  render(h) {
    const children = [];
    if (this.showFillDay || !this.fill) {
      const $btn = h('vt@btn', {
        props: {
          flat: !this.isPicked,
          icon: true,
          disabled: !this.isAllowed,
          textColor: !this.isPicked && this.textColor,
          noaction: !this.picker,
          [this.$context.pickedColor]: this.isPicked,
          depressed: this.isPicked,
        },
        on: {
          click: this.onClick,
        },
      }, this.label);
      children.push($btn);

      if (this.hasEvent) children.push(this.genEvents());
      if (this.hasRangeGuide) {
        if (this.hasFromRangeGuide) children.push(this.genRangeGuide('from'));
        if (this.hasToRangeGuide) children.push(this.genRangeGuide('to'));
      }
    }

    return h('td', {
      staticClass: 'vc@calendar__table__cell',
      class: this.classes,
    }, children);
  },
}
