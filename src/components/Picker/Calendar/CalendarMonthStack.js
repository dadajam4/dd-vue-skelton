import Stack from './mixins/stack';
import CalendarMonthStackItem from './CalendarMonthStackItem';



export default {
  name: 'vt@calendar-month-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'month',
      year: this.$context.year,
    }
  },

  computed: {
    narrowMonths() { return this.dateFormatDefine.month.narrow },
    months() { return this.year && this.createMonthsInfo(this.year) },
  },

  watch: {
    innerValue(val) {
      if (!val) return;
      this.year = this.$context.year;
    },
  },

  methods: {
    createMonthsInfo(year = this.year) {
      const months = [];
      for (let month = 0; month < 12; month++) {
        months.push({year, month});
      }
      return months;
    },

    genMonthList(year = this.year) {
      const h = this.$createElement;
      const $months = this.months.map(m => h(CalendarMonthStackItem, {
        props: {
          year: m.year,
          month: m.month,
        },
        on: {
          click: e => {
            this.$context.targetValue = e.value;
            if (!this.base) this.isActive = false;
          },
        },
        key: m.year + '-' + m.month,
      }));

      return h('ol', {
        staticClass: 'vc@calendar__month-list vc@calendar__body__slide',
      }, $months);
    },

    shiftValue(vec) {
      let nextYear = this.year + vec;
      this.year = nextYear;
    },

    setYear(year) {
      const shiftAmmount = year - this.year;
      return this.shiftValue(shiftAmmount);
    },
  },

  render(h) {
    const $header = this.genHeader();
    const $body = this.genBody([this.genMonthList()]);
    return this.genStack([$header, $body]);
  },
}
