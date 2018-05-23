import Calendar from '../Calendar';
import DatePickerHeader from './DatePickerHeader';
import DatePickerBody from './DatePickerBody';



const CALENDAR_PATH_PROPS = [
  'type',
  'locale',
  'firstDayOfWeek',
  'allowedDates',
  'min',
  'max',
  'yearRange',
  'refreshCurrentTimeInterval',
  'showCurrent',
  'holidayWeeks',
  'holidays',
  'holidayColor',
  'currentColor',
  'showFillDay',
  'events',
  'eventColor',
];

const pathPropsDefine = {};
for (const key of CALENDAR_PATH_PROPS) {
  pathPropsDefine[key] = Calendar.props[key];
}


export default {
  name: 'vt@date-picker',

  props: {
    ...pathPropsDefine,
  },

  methods: {
    genHeader() {
      const h = this.$createElement;
      return h(DatePickerHeader, null);
    },

    genBody() {
      const h = this.$createElement;
      return h(DatePickerBody, null, [this.genCalendar()]);
    },

    genCalendar() {
      const h = this.$createElement;
      const pathProps = {};
      for (const key in pathPropsDefine) {
        pathProps[key] = this[key];
      }

      return h(Calendar, {
        props: {
          picker: true,
          ...pathProps,
        },
      });
    },
  },

  render(h) {
    return h('div', {
      staticClass: 'vc@date-picker',
    }, [
      this.genHeader(),
      this.genBody(),
    ]);
  },
}
