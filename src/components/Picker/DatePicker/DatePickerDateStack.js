import Stack from './mixins/stack';



export default {
  name: 'vt@date-picker-date-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'date',
      year: 2018,
      month: 4,
    }
  },

  computed: {
    computedFirstDayOfWeek() { return parseInt(this.$context.firstDayOfWeek, 10) },
    narrowWeeks() { return this.dateFormatDefine.weekday.narrow },
    computedWeeks() {
      const weeks = [];
      const seeds = this.narrowWeeks;
      const firstDayOfWeek = this.computedFirstDayOfWeek;
      for (let i = 0; i < 7; i++) {
        weeks.push(seeds[(i + firstDayOfWeek) % 7]);
      }
      return weeks;
    },
  },

  methods: {
    createDayInfo(year, month, day, fill = false) {
      const value = `${year}/${month + 1}/${day}`;
      const info = {
        year,
        month,
        day,
        fill,
        value,
        i: new Date(value),
      }
      info.disabled = !this.$context.checkAllowedDate(info);
      return info;
    },
    createDaysInfo(year, month) {
      const prevMonth = month === 0 ? 11 : month - 1;
      const nextMonth = month === 11 ? 0 : month + 1;
      const prevMonthYear = month === 0 && year - 1 || year;
      const nextMonthYear = month === 11 && year + 1 || year;
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const startWeek = startDate.getDay();
      const endWeek = endDate.getDay();
      const endDay = endDate.getDate();
      const needBefore = startWeek - this.computedFirstDayOfWeek;
      const needAfter = 6 - endWeek + this.computedFirstDayOfWeek;
      const prevMonthEndDate = new Date(year, month, 0);
      const prevMonthEndDay = prevMonthEndDate.getDate();
      const days = [];

      for (let i = 0; i < needBefore; i++) {
        const day = prevMonthEndDay - needBefore + i + 1;
        const info = this.createDayInfo(prevMonthYear, prevMonth, day, true);
        days.push(info);
      }

      for (let i = 0; i < endDay; i++) {
        const day = i + 1;
        const info = this.createDayInfo(year, month, day);
        days.push(info);
      }

      for (let i = 0; i < needAfter; i++) {
        const day = i + 1;
        const info = this.createDayInfo(nextMonthYear, nextMonth, day, true);
        days.push(info);
      }
      return days;
    },
    genDateTable() {
      const days = this.createDaysInfo(this.year, this.month);
      const $weeks = this.computedWeeks.map(w => h('th', null, w));
      const $days = days.map(info => {
        const $btn = h('vt@btn', {
          props: {
            // flat: !current,
            flat: true,
            icon: true,
            grey: info.fill,
            disabled: info.disabled,
            // outline: current,
            // primary: current,
          },
        }, info.day);
        const $cell = h('td', {key: info.value}, [$btn]);
        return $cell;
      });

      const rows = [];
      for (let i = 0; i < 5; i++) {
        const offset = i * 7;
        rows.push($days.slice(offset, offset + 7));
      }

      const $rows = rows.map((r, index) => h('tr', {key: index}, r));

      return (
        <table class="vc@date-picker__table">
          <thead>
            <tr>
              {$weeks}
            </tr>
          </thead>
          <tbody>
            {$rows}
          </tbody>
        </table>
      );
    },
  },

  render(h) {
    const $header = this.genHeader();
    const $body = this.genBody([this.genDateTable()]);
    return this.genStack([$header, $body]);
  },
}
