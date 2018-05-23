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
  if (day === true) str += '-' + String(date.getDate()).padStart(2, '0');
  return str;
}



export default {
  name: 'vt@calendar',

  props: {
    value: String,
    picker: Boolean,
    multiplePicker: Boolean,
    pickedValues: {
      type: Array,
      default: () => [],
    },
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
      // default: 'ja',
      // default: 'ja-JP',
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0,
    },
    allowedDates: {
      type: [String, Array, Function], // ex. ['2018-3-1', '2018-1', ...] or info => (info.value === '2012-02-11')
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
    showCurrent: {
      type: Boolean,
      default: true,
    },
    holidayWeeks: {
      type: [String, Array],
      default: () => [0],
    },
    holidays: {
      type: [String, Array, Function],
    },
    pickedColor: {
      type: String,
      default: 'primary',
    },
    holidayColor: {
      type: String,
      // default: 'red-accent-1',
    },
    currentColor: {
      type: String,
      default: 'primary',
    },
    showFillDay: Boolean,
    events: {
      type: [Array, Object, String],
    },
    eventColor: {
      type: [String, Function],
      default: 'warning',
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
      innerLocale: this.locale,
      mounted: false,
      innerPickedValues: this.pickedValues,
    }
  },

  computed: {
    computedRefreshCurrentTimeInterval() { return this.refreshCurrentTimeInterval && parseInt(this.refreshCurrentTimeInterval, 10) },
    currentDate() { return new Date(this.currentDateTime) },
    currentDateValue() { return dateToISOString(this.currentDate, void(0), true) },
    currentYear() { return this.currentDate.getFullYear() },
    currentDay() { return this.currentDate.getDate() },
    currentMonth() { return this.currentDate.getMonth() },
    typeIsDate() { return this.type === 'date' },
    typeIsMonth() { return this.type === 'month' },
    dateFormatDefine() { return this.$util.createDateFormatDefine(this.innerLocale) },
    minDate() { return this.min && this.safeDate(this.min) },
    minTime() { return this.minDate && this.minDate.getTime() },
    minYear() { return this.minDate && this.minDate.getFullYear() },
    minMonth() { return this.minDate && this.minDate.getMonth() },
    minDay() { return this.minDate && this.minDate.getDate() },
    minValue() { return this.min && this.createValue(this.minYear, this.minMonth, this.minDay) },
    maxDate() { return this.max && this.safeDate(this.max) },
    maxTime() { return this.maxDate && this.maxDate.getTime() },
    maxYear() { return this.maxDate && this.maxDate.getFullYear() },
    maxMonth() { return this.maxDate && this.maxDate.getMonth() },
    maxDay() { return this.maxDate && this.maxDate.getDate() },
    maxValue() { return this.max && this.createValue(this.maxYear, this.maxMonth, this.maxDay) },
    computedEvents() {
      const propEvents = this.events;
      if (!propEvents) return [];
      let events;

      if (Array.isArray(propEvents)) {
        events = propEvents;
      } else {
        if (typeof propEvents === 'object' && !propEvents.value) {
          for (const value in events) {
            events.push({ value, ...events[value] });
          }
        } else {
          events = [propEvents];
        }
      }

      return events.map(event => {
        const info = typeof event === 'string' ? { value: event } : event;
        const colorSource = info.color || this.eventColor;
        const color = typeof colorSource === 'function' ? colorSource(info) : colorSource;
        return Object.assign({ source: info, color }, this.createValueInfo(info.value));
      });
    },
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
    allowedCheckers() {
      const sources = this.allowedDates;
      if (!sources) return [];
      const checkers = (Array.isArray(sources) ? sources : [sources]).map(source => {
        if (typeof source === 'function') return source;
        const allowed = this.createValueInfo(source);
        return target => {
          if (allowed.year !== undefined && target.year !== undefined && target.year !== allowed.year) return false;
          if (allowed.month !== undefined && target.month !== undefined && target.month !== allowed.month) return false;
          if (allowed.day !== undefined && target.day !== undefined && target.day !== allowed.day) return false;
          if (allowed.week !== undefined && target.week !== undefined && target.week !== allowed.week) return false;
          return true;
        }
      });
      return checkers;
    },
    computedHolidayWeeks() {
      const holidayWeeks = this.holidayWeeks;
      if (!holidayWeeks) return [];
      if (typeof holidayWeeks === 'string') {
        return holidayWeeks.split(',').map(str => parseInt(str.trim(), 10));
      } else {
        return Array.isArray(holidayWeeks) ? holidayWeeks : [holidayWeeks];
      }
    },
    computedHolidays() {
      const holidays = this.holidays;
      if (!holidays) return [];
      return Array.isArray(holidays) ? holidays : [];
    },
    holidayCheckers() {
      const holidayWeeks = this.computedHolidayWeeks;
      const holidays = this.computedHolidays;
      const sources = holidays.concat(holidayWeeks);
      const checkers = (Array.isArray(sources) ? sources : [sources]).map(source => {
        if (typeof source === 'function') return source;
        const hit = typeof source === 'string' ? this.createValueInfo(source) : source;
        return target => {
          if (typeof hit === 'number') return target.week === hit;
          if (hit.year !== undefined && target.year !== undefined && target.year !== hit.year) return false;
          if (hit.month !== undefined && target.month !== undefined && target.month !== hit.month) return false;
          if (hit.day !== undefined && target.day !== undefined && target.day !== hit.day) return false;
          if (hit.week !== undefined && target.week !== undefined && target.week !== hit.week) return false;
          return true;
        }
      });
      return checkers;
    },

    pickedDates: {
      get() { return this.innerPickedValues },
      set(val) {
        this.innerPickedValues = val;
        this.$emit('inputPickedDate', val);
      },
    },
    pickedDateTimes() {
      return this.pickedDates.map(value => safeDate(value).getTime());
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },

    locale(val) {
      this.setupLocale();
    },

    pickedValues(val) {
      this.innerPickedValues = val;
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

    valueStringSplitter(str) {
      const tmp = str.split(/[-\/]/);
      return {
        year: parseInt(tmp[0], 10),
        month: parseInt(tmp[1], 10) - 1,
        day: parseInt(tmp[2], 10),
      }
    },

    createValueInfo(year, month, day) {
      if (typeof year === 'string') {
        ({ year, month, day } = this.valueStringSplitter(year));
      } else if (year instanceof Date) {
        year = year.getFullYear();
        month = year.getMonth();
        day = year.getDay();
      }

      const value = this.createValue(year, month, day);
      const date = safeDate(value);
      const type = day ? 'date' : (month === undefined ? 'year' : 'month');
      const info = {
        year,
        month,
        day,
        week: day ? date.getDay() : void(0),
        value,
        type,
        date,
        _isInfo: true,
      }
      return info;
    },

    createAdvancedValueInfo(year, month, day) {
      const info = this.createValueInfo(year, month, day);
      if (info.type === 'date') {
        const holidayInfo = this.getHolidayByInfo(info);
        info.holiday = !!holidayInfo;
        info.holidayInfo = typeof holidayInfo !== 'boolean' ? holidayInfo : null;
      }
      info.overflowed = this.checkDateIsOverflow(info);
      info.allowed = this.checkDateIsAllowed(info);
      info.events = this.getEvents(info);
      info._isAdvanceInfo = true;
      return info;
    },

    setValueByTime(time) {
      this.targetValue = dateToISOString(time);
    },

    setValues(year, month) {
      const value = year + '-' + String(month + 1).padStart(2, '0');
      this.targetValue = value;
    },

    checkIsHolidayWeek(week) {
      return this.computedHolidayWeeks.includes(week);
    },

    checkValueIsActive(value) {
      return this.targetValue.indexOf(value) === 0;
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

    checkDateIsOverflow(info) {
      if (this.minYear !== undefined && info.year < this.minYear) return true;
      if (this.minMonth !== undefined && info.month !== undefined && info.month < this.minMonth) return true;
      if (this.minDay !== undefined && info.day !== undefined && info.day < this.minDay) return true;
      if (this.maxYear !== undefined && info.year > this.maxYear) return true;
      if (this.maxMonth !== undefined && info.month !== undefined && info.month > this.maxMonth) return true;
      if (this.maxDay !== undefined && info.day !== undefined && info.day > this.maxDay) return true;
      return false;
    },

    checkDateIsAllowed(info) {
      const overflowed = info.overflowed;
      const checkers = this.allowedCheckers;
      if (checkers.length === 0) return !overflowed;

      let isAllowed = false;

      for (let checker of checkers) {
        if (checker(info)) {
          isAllowed = true;
          break;
        }
      }
      return isAllowed;
    },

    getHolidayByInfo(info) {
      let holidayInfo = null;
      const checkers = this.holidayCheckers;
      for (let checker of checkers) {
        holidayInfo = checker(info);
        if (holidayInfo) break;
      }
      return holidayInfo;
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

    setupLocale() {
      this.innerLocale = this.locale || this.$util.getClientLanguage();
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

    tryMount() {
      if (typeof window !== 'undefined') {
        this.setupLocale();
        this.mounted = true;
      }
    },

    isInfo(target) {
      return typeof target === 'object'
    },

    getSafeInfo(year, month, day) {
      return year && typeof year === 'object' && year._isInfo ? year : this.createAdvancedValueInfo(year, month, day);
    },

    getSafeValue(year, month, day) {
      if (typeof year === 'string') return year;
      return this.getSafeInfo(year, month, day).value;
    },

    isPicked(year, month, day) {
      const value = this.getSafeValue(year, month, day);
      return this.pickedDates.includes(value);
    },

    isFromPick(year, month, day) {
      const value = this.getSafeValue(year, month, day);
      return value === this.pickedDates[0];
    },

    isToPick(year, month, day) {
      const value = this.getSafeValue(year, month, day);
      return value === this.pickedDates[1];
    },

    isInPickedRange(year, month, day) {
      const pickedDateTimes = this.pickedDateTimes;
      if (pickedDateTimes.length === 0) return false;
      const value = this.getSafeValue(year, month, day);
      if (pickedDateTimes.length === 1) return value === this.pickedDates[0];
      const time = safeDate(value).getTime();
      return pickedDateTimes[0] <= time && time <= pickedDateTimes[1];
    },

    pickDate(year, month, day) {
      const info = this.getSafeInfo(year, month, day);
      const [from, to] = this.pickedDates;
      const value = info.value;
      const newValues = [];

      if (!this.multiplePicker || !from || from && to) {
        newValues.push(value);
      } else {
        const pickedTime = safeDate(value).getTime();
        const fromTime = from && safeDate(from).getTime();
        const toTime = to && safeDate(to).getTime();

        if (!to) {
          newValues.push(from, value);
        } else {
          if (pickedTime === fromTime || pickedTime === toTime) {
            newValues.push(value, value);
          } else {
            newValues.push(value);
          }
        }

        newValues.sort(this.pickedDatesSorter);
      }

      this.pickedDates = newValues;
    },

    pickedDatesSorter(a, b) {
      const at = safeDate(a).getTime();
      const bt = safeDate(b).getTime();
      if (at < bt) return -1;
      if (at > bt) return 1;
      return 0;
    },

    getEvents(year, month, day) {
      const info = this.getSafeInfo(year, month, day);
      return this.computedEvents.filter(event => event.value === info.value);
    },
  },

  created() {
    this.tryMount();
    this.setupInitialValue();
  },

  mounted() {
    this.tryMount();
    this.startWatchCurrentDateTime();
  },

  beforeDestroy() {
    this.stopWatchCurrentDateTime();
  },

  render(h) {
    if (!this.mounted) return;
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
