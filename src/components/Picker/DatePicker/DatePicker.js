import Calendar from '../Calendar';
import DatePickerHeader from './DatePickerHeader';
import DatePickerBody from './DatePickerBody';
import mountable from '~/mixins/mountable';



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
  'pickedColor',
];

const pathPropsDefine = {};
for (const key of CALENDAR_PATH_PROPS) {
  pathPropsDefine[key] = Calendar.props[key];
}

const _props = { ...pathPropsDefine };

const ACTION_TYPES = [
  {name: 'today', label: 'Today', icon: '$ui.icons.today', color: 'info', default: true },
  {name: 'clear', label: 'Clear', icon: '$ui.icons.clear', color: 'info', default: true },
  {name: 'spacer'},
  {name: 'cancel', label: 'CANCEL', color: 'info', default() { return this.cancellable } },
  {name: 'ok', label: 'OK', color: 'info', default() { return this.cancellable } },
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

  mixins: [mountable],

  props: {
    value: {
      type: [String, Array],
    },
    multiple: Boolean,
    cancellable: Boolean,
    actions: {
      type: Boolean,
      default: true,
    },
    ..._props,
  },

  data() {
    return {
      innerValue: this.value,
      hasContextStack: false,
    }
  },

  computed: {
    targetValue: {
      get() { return this.innerValue },
      set(val) {
        val = Array.isArray(val) ? val.slice() : val;
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
    forCalenderPickedValues() {
      const targetValue = this.targetValue;
      if (this.multiple) {
        return targetValue || [];
      } else {
        return targetValue ? [targetValue] : [];
      }
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
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
          multiplePicker: this.multiple,
          ...pathProps,
          pickedValues: this.forCalenderPickedValues,
        },
        on: {
          inputPickedDate: e => {
            this.catchPickedDates(e);
            if (!this.cancellable) this.deactivateContextStack();
          },
        },
        ref: 'calendar',
      });
    },

    catchPickedDates(dates) {
      if (this.multiple) {
        this.targetValue = dates;
      } else {
        this.targetValue = dates[0];
      }
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

    today() {
      return this.$refs.calendar.setValuesAtToday();
    },
    clear() {
      this.targetValue = this.multiple ? [] : null;
      if (!this.cancellable) this.deactivateContextStack();
    },
    deactivateContextStack() {
      // this.hasContextStack && this._contextStack.deactivate();
      if (this.hasContextStack) {
        this._contextStack.isActive = false;
      }
    },
    cancel() {
      if (this.hasContextStack) {
        this.resetByStackValue();
        this.deactivateContextStack();
      }
    },
    ok() {
      this.deactivateContextStack();
    },

    setupParentStack() {
      this.hasContextStack = !!this.$parent.$appStackContainer;
      if (!this.hasContextStack) return;
      this._contextStack = this.$parent;
      this._contextStack.$on('activate', this.onStackActivate);
      this._contextStack.$on('esc', this.onCancelLikeStackAction);
      this._contextStack.$on('click-outside-close', this.onCancelLikeStackAction);
    },
    clearParentStack() {
      if (!this.hasContextStack) return;
      this._contextStack.$off('activate', this.onStackActivate);
      this._contextStack.$off('esc', this.onCancelLikeStackAction);
      this._contextStack.$off('click-outside-close', this.onCancelLikeStackAction);
      delete this._contextStack;
    },
    saveStackResetValue() {
      let resetValue = this.targetValue;
      resetValue = Array.isArray(resetValue) ? resetValue.slice() : resetValue;
      this._stackResetValue = resetValue;
    },
    resetByStackValue() {
      this.targetValue = this._stackResetValue;
      delete this._stackResetValue;
    },
    onStackActivate() {
      this.saveStackResetValue();
    },
    onCancelLikeStackAction() {
      if (this.cancellable) this.resetByStackValue();
    },
  },

  mounted() {
    this.setupParentStack();
  },

  beforeDestroy() {
    this.clearParentStack();
  },

  render(h) {
    if (!this.isMounted) return;
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
