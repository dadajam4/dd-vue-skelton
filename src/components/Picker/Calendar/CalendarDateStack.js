import Stack from './mixins/stack';
import CalendarDateStackItem from './CalendarDateStackItem';



export default {
  name: 'vt@calendar-date-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'date',
    }
  },

  computed: {
    year: {
      get() { return this.$context.year },
      set(val) { this.$context.year = val },
    },
    month: {
      get() { return this.$context.month },
      set(val) { this.$context.month = val },
    },
    computedFirstDayOfWeek() { return parseInt(this.$context.firstDayOfWeek, 10) },
    narrowWeeks() { return this.dateFormatDefine.weekday.narrow },
    computedWeeks() {
      const weeks = [];
      const seeds = this.narrowWeeks;
      const firstDayOfWeek = this.computedFirstDayOfWeek;
      for (let i = 0; i < 7; i++) {
        const week = (i + firstDayOfWeek) % 7;
        const isHoliday = this.$context.checkIsHolidayWeek(week);
        weeks.push({week, isHoliday, label: seeds[week]});
      }
      return weeks;
    },
    days() { return this.createDaysInfo() },
  },

  methods: {
    createDaysInfo(year = this.year, month = this.month) {
      const prevMonth = month === 0 ? 11 : month - 1;
      const nextMonth = month === 11 ? 0 : month + 1;
      const prevMonthYear = month === 0 && year - 1 || year;
      const nextMonthYear = month === 11 && year + 1 || year;
      const startDate = new Date(Date.UTC(year, month, 1));
      const endDate = new Date(year, month + 1, 0);
      const startWeek = startDate.getDay();
      const endWeek = endDate.getDay();
      const endDay = endDate.getDate();
      const needBefore = startWeek - this.computedFirstDayOfWeek;
      const needAfter = 6 - endWeek + this.computedFirstDayOfWeek;
      const prevMonthEndDate = new Date(Date.UTC(year, month, 0));
      const prevMonthEndDay = prevMonthEndDate.getDate();
      const days = [];

      for (let i = 0; i < needBefore; i++) {
        const day = prevMonthEndDay - needBefore + i + 1;
        days.push({year: prevMonthYear, month: prevMonth, day, fill: true});
      }

      for (let i = 0; i < endDay; i++) {
        const day = i + 1;
        days.push({year, month, day, fill: false});
      }

      for (let i = 0; i < needAfter; i++) {
        const day = i + 1;
        days.push({year: nextMonthYear, month: nextMonth, day, fill: true});
      }
      return days;
    },

    genWeeks() {
      return this.computedWeeks.map(w => {
        const options = w.isHoliday && this.holidayColor ? {
          staticClass: `vc@${this.holidayColor}--text`,
        } : null;
        return this.$createElement('th', options, w.label);
      });
    },

    genDateTable(days = this.days, opts = {}) {
      const $days = days.map(d => h(CalendarDateStackItem, {
        props: {
          year: d.year,
          month: d.month,
          day: d.day,
          fill: d.fill,
        },
        on: {
          click: e => {
            this.$context.targetValue = e.value;
            if (!this.base) this.isActive = false;
          },
        },
        key: d.year + '-' + d.month + '-' + d.day,
      }));

      const rows = [];
      for (let i = 0; i < 5; i++) {
        const offset = i * 7;
        rows.push($days.slice(offset, offset + 7));
      }

      const $rows = rows.map((r, index) => h('tr', {key: index}, r));

      return (
        <div class="vc@calendar__table-wrapper vc@calendar__body__slide">
          <table staticClass="vc@calendar__table">
            <thead>
              <tr>
                {this.genWeeks()}
              </tr>
            </thead>
            <tbody>
              {$rows}
            </tbody>
          </table>
        </div>
      );
    },

    shiftValue(vec) {
      let nextMonth = this.month + vec;
      let nextYear = this.year;
      if (nextMonth === -1) {
        nextMonth = 11;
        nextYear = nextYear - 1;
      } else if (nextMonth === 12) {
        nextMonth = 0;
        nextYear = nextYear + 1;
      }

      this.year = nextYear;
      this.month = nextMonth;
    },
  },

  render(h) {
    const $header = this.genHeader();
    const $body = this.genBody([this.genDateTable()]);
    return this.genStack([$header, $body]);
  },
}
