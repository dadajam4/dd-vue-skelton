import CalendarDateStack from './CalendarDateStack';
import CalendarMonthStack from './CalendarMonthStack';
import CalendarYearStack from './CalendarYearStack';



const safeDate = date => {
  if (typeof date !== 'string' || date instanceof Date) return date;
  date = date.trim().replace(/-/g, '/');
  return date && new Date(date.replace(/-/g, '/'))
}

const dateToISOString = (year, month, day) => {
  if (year === undefined) return;
  let date;
  if (year instanceof Date) {
    date = year;
  } else if (month !== undefined) {
    date = new Date(year, month || 0, day === undefined ? 1 : day);
  } else if (typeof year === 'string') {
    date = safeDate(year);
  } else if (typeof year === 'number') {
    date = new Date(year);
  }

  let str = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
  if (day !== undefined) str += (dat === true ? '01' : String(date.getDate() + 1).padStart(2, '0'));
  return str;
}



export default {
  name: 'vt@calendar',

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
    yearRange: {
      type: [String, Number],
      default: 200,
    },
    refreshCurrentTimeInterval: {
      type: [String, Number],
      default: 60000,
    },
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
      currentDateTime: new Date().getTime(),
      innerValue: this.value,
    }
  },

  computed: {
    computedRefreshCurrentTimeInterval() { return this.refreshCurrentTimeInterval && parseInt(this.refreshCurrentTimeInterval, 10) },
    currentDate() { return new Date(this.currentDateTime) },
    currentDateValue() { return dateToISOString(this.currentDate) },
    currentYear() { return this.currentDate.getFullYear() },
    currentDay() { return this.currentDate.getDate() },
    currentMonth() { return this.currentDate.getMonth() },
    typeIsDate() { return this.type === 'date' },
    typeIsMonth() { return this.type === 'month' },
    dateFormatDefine() { return this.$util.createDateFormatDefine(this.locale) },
    minDate() { return this.min && this.safeDate(this.min) },
    minTime() { return this.minDate && this.minDate.getTime() },
    minYear() { return this.minDate && this.minDate.getFullYear() },
    maxDate() { return this.max && this.safeDate(this.max) },
    maxTime() { return this.maxDate && this.maxDate.getTime() },
    maxYear() { return this.maxDate && this.maxDate.getFullYear() },
    computedYearRange() { return this.yearRange && parseInt(this.yearRange, 10) },
    computedYearRangeInfo() {
      const currentYear = this.currentYear;
      const range = this.computedYearRange;
      const offset = Math.round(range / 2);

      let from = Math.max(currentYear - offset, 0);
      if (this.minYear && from < this.minYear) from = this.minYear;
      let to = from + range - 1;
      if (this.maxYear && to < this.maxYear) to = this.maxYear;
      const length = to - from + 1;
      return {
        from,
        to,
        length: to - from + 1,
        range: this.$util.createRange(length, from),
      }
    },
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
    targetDate() { return this.targetValue && new Date(safeDate(this.targetValue)) },
    year: {
      get() { return this.targetDate && this.targetDate.getFullYear() },
      set(val) {
        const targetValue = this.targetValue;
        if (!targetValue) return;
        this.targetValue = val + '-' + targetValue.split('-')[1];
      },
    },
    month: {
      get() { return this.targetDate && this.targetDate.getMonth() },
      set(val) {
        const targetValue = this.targetValue;
        if (!targetValue) return;
        this.targetValue = targetValue.split('-')[0] + '-' + String(val + 1).padStart(2, '0');
      },
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  methods: {
    safeDate,
    dateToISOString,

    createValue(year, month, day) {
      let value = year;
      if (month !== undefined) {
        value += '-' + String(month + 1).padStart(2, '0');
        if (day !== undefined) {
          value += '-' + String(day).padStart(2, '0');
        }
      }
      return value;
    },

    setValueByTime(time) {
      this.targetValue = dateToISOString(time);
    },

    setValues(year, month) {
      const value = year + '-' + String(month + 1).padStart(2, '0');
      this.targetValue = value;
    },

    checkValueIsCurrentDate(value) {
      return this.currentDateValue.indexOf(value) === 0;
    },

    checkValuesIsCurrentDate(year, month, day) {
      let isCurrent = year === this.currentYear;
      if (month !== undefined && isCurrent) isCurrent = month === this.currentMonth;
      if (day !== undefined && isCurrent) isCurrent = day === this.currentDay;
      return isCurrent;
    },

    checkAllowedDate(date) {
      let testTarget = date;
      if (typeof testTarget === 'object') {
        if (typeof testTarget.m === 'number') {
          testTarget = testTarget.m;
        } else if (testTarget.i instanceof Date) {
          testTarget = testTarget.i;
        }
      }
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

    updateCurrentDateTime() {
      this.currentDateTime = new Date().getTime();
    },

    startWatchCurrentDateTime() {
      this.stopWatchCurrentDateTime();
      if (this.computedRefreshCurrentTimeInterval) {
        this._watchCurrentTimeIntervalId = setInterval(this.updateCurrentDateTime, this.computedRefreshCurrentTimeInterval);
      }
    },

    stopWatchCurrentDateTime() {
      if (this._watchCurrentTimeIntervalId) {
        clearInterval(this._watchCurrentTimeIntervalId);
        delete this._watchCurrentTimeIntervalId;
      }
    },

    setValuesAtToday() {
      this.targetValue = dateToISOString(new Date());
    },

    setupInitialValue() {
      if (!this.value) {
        this.setValuesAtToday();
        this.setSafeRoundedValue();
      } else {
        this.targetValue = dateToISOString(this.value);
      }
    },

    setSafeRoundedValue(value = this.targetValue) {
      const time = safeDate(value).getTime();
      let roundTime;
      if (this.minTime && time < this.minTime) {
        roundTime = this.minTime;
      } else if (this.maxTime && time < this.maxTime) {
        roundTime = this.maxTime;
      }
      if (roundTime) this.setValueByTime(roundTime);
    },

    broadcastYear(year) {
      this.year = year;
      if (this.$refs.monthStack) this.$refs.monthStack.year = year;
    },
  },

  created() {
    this.setupInitialValue();
  },

  mounted() {
    this.startWatchCurrentDateTime();
  },

  beforeDestroy() {
    this.stopWatchCurrentDateTime();
  },

  render(h) {
    const children = [
      h(CalendarMonthStack, {
        props: { value: this.monthActive, base: this.typeIsMonth },
        on: {
          input: e => { this.monthActive = e },
        },
        ref: 'monthStack',
      }),
      h(CalendarYearStack, {
        props: { value: this.yearActive },
        on: {
          input: e => { this.yearActive = e },
        },
        ref: 'yearStack',
      }),
    ];

    if (this.typeIsDate) {
      children.unshift(h(CalendarDateStack, {
        props: { base: true },
        ref: 'dateStack',
      }));
    }

    return h('div', {
      staticClass: 'vc@calendar',
    }, children);
  },
}
