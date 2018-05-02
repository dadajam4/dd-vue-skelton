import DatePickerDateStack from './DatePickerDateStack';
import DatePickerMonthStack from './DatePickerMonthStack';
import DatePickerYearStack from './DatePickerYearStack';
// import DatePickerHeader from './DatePickerHeader';



export default {
  name: 'vt@date-picker',

  props: {
    value: String,
    type: {
      type: String,
      default: 'date',
      validator(val) {
        return ['date', 'month'].includes(val);
      },
    },
    locale: {
      type: String,
      // default: 'en-us',
      default: 'ja',
      // default: 'ja-JP',
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0,
    },
    allowedDates: {
      type: [Array, Function],
    },
    min: String,
    max: String,
  },

  provide() {
    return {
      $context: this,
    }
  },

  data() {
    return {
      displayYear: 2018,
      displayMonth: 3,
      monthActive: this.type === 'month' ? true : false,
      yearActive: false,
    }
  },

  computed: {
    typeIsDate() { return this.type === 'date' },
    typeIsMonth() { return this.type === 'month' },
    dateFormatDefine() { return this.$util.createDateFormatDefine(this.locale) },
    minTime() { return this.min && this.safeDate(this.min).getTime() },
    maxTime() { return this.max && this.safeDate(this.max).getTime() },
  },

  methods: {
    safeDate(str) { return str && new Date(str.replace(/-/g, '/')) },
    checkAllowedDate(date) {
      const testTarget = typeof date === 'object' && date.i instanceof Date ? date.i : date;
      let time;
      const dateType = typeof testTarget;

      if (dateType === 'number') {
        time = testTarget;
      } else if (dateType === 'string') {
        time = this.safeDate(testTarget).getTime();
      } else if (testTarget instanceof Date) {
        time = testTarget.getTime();
      } else {
        throw new Error('[checkAllowedDate] 引数の型が正しくありません');
      }

      if (this.minTime && this.minTime > time) return false;
      if (this.maxTime && this.maxTime < time) return false;
      if (this.allowedDates) {
        if (typeof this.allowedDates === 'function') return this.allowedDates(date);
        for (const allowedDate of this.allowedDates) {
          if (this.safeDate(allowedDate).getTime() !== time) return false;
        }
      }
      return true;
    },
    activateStack(key) {
      this[`${key}Active`] = true;
    },

    onClickHeaderValue(key) {
      this.activateStack(key);
    },
  },

  mounted() {
    console.log(this.dateFormatDefine);
  },

  render(h) {
    const children = [
      h(DatePickerMonthStack, {
        props: { value: this.monthActive, base: this.typeIsMonth },
        on: {
          input: e => { this.monthActive = e },
        },
      }),
      h(DatePickerYearStack, {
        props: { value: this.yearActive },
        on: {
          input: e => { this.yearActive = e },
        },
      }),
    ];

    if (this.typeIsDate) {
      children.unshift(h(DatePickerDateStack, {
        props: {
          base: true,
        },
      }));
    }

    return h('div', {
      staticClass: 'vc@date-picker',
    }, children);
  },
}
