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

const _props = { ...pathPropsDefine };

const ACTION_TYPES = [
  {name: 'today', label: 'Today', icon: 'reply', color: 'info', default: true },
  {name: 'clear', label: 'Clear', icon: 'times', color: 'info', default: true },
  {name: 'spacer'},
  {name: 'cancel', label: 'CANCEL', color: 'info', default: true },
  {name: 'ok', label: 'OK', color: 'info', default: true },
];

for (const TYPE of ACTION_TYPES) {
  _props[`${TYPE.name}Action`] = {
    type: Boolean,
    default: TYPE.default,
  };

  _props[`${TYPE.name}Label`] = {
    type: String,
    default: TYPE.label,
  };

  _props[`${TYPE.name}Icon`] = {
    type: String,
    default: TYPE.icon,
  };

  _props[`${TYPE.name}Color`] = {
    type: String,
    default: TYPE.color,
  };
}

export default {
  name: 'vt@date-picker',

  props: {
    ..._props,
    actions: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    hasAnyAction() {
      let finded = false;
      for (const TYPE of ACTION_TYPES) {
        if (this[`${TYPE.name}Action`]) finded = true;
      }
      return finded;
    },

    hasAction() { return this.actions && this.hasAnyAction },

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

    genAction(type, cb) {
      const h = this.$createElement;
      const color = this[`${type}Color`];
      const label = this[`${type}Label`];
      const icon = this[`${type}Icon`];

      const $btn = h('vt@btn', {
        props: {
          icon: icon,
          flat: true,
          sm: !icon,
          [color]: true,
        },
        on: {
          click: cb,
        },
      }, !icon ? label : null);

      const $action = icon ? h('vt@tooltip-fragment', null, [
        $btn,
        h('vt@tooltip', { props: { top: true } }, label),
      ]) : $btn;
      return $action;
    },

    genActions() {
      const h = this.$createElement;
      const children = [];
      for (const TYPE of ACTION_TYPES) {
        const name = TYPE.name;
        if (name === 'spacer') {
          children.push(h('vt@spacer'));
        } else {
          if (this[`${name}Action`]) children.push(this.genAction(name, this[name]));
        }
      }

      return h('vt@card-actions', {
        props: {
          divider: true,
        },
      }, children);
    },

    today() {},
    clear() {},
    cancel() {},
    ok() {},
  },

  render(h) {
    return h('vt@card', {
      staticClass: 'vc@date-picker',
      props: {
        inline: true,
      },
    }, [
      h('vt@card-text', { staticClass: 'vc@date-picker__body' }, [
        this.genHeader(),
        this.genBody(),
      ]),
      this.hasAction && this.genActions(),
    ]);
  },
}
