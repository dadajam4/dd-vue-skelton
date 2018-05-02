import Context from './context';



export default {
  name: 'vt@date-picker-stack',

  mixins: [Context],

  props: {
    base: Boolean,
    value: Boolean,
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  computed: {
    classes() {
      return {
        [`vc@date-picker__stack--${this.type}`]: true,
        'vc@date-picker__stack--base': this.base,
        'vc@date-picker__stack--active': this.isActive,
      }
    },

    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },

    displayYear() { return this.dateFormatDefine.numericYearByValue(this.year) },
    displayMonth() { return this.dateFormatDefine.longMonthByValue(this.month) },
    ymIndexOrder() { return this.dateFormatDefine.ymIndexOrder },
    prevYearAllowed() {
      const time = new Date(this.year, 0, 0).getTime();
      return this.$context.checkAllowedDate(time);
    },
    nextYearAllowed() {
      const time = new Date(this.year + 1, 0, 1).getTime();
      return this.$context.checkAllowedDate(time);
    },
    prevMonthAllowed() {
      const time = new Date(this.year, this.month, 0).getTime();
      return this.$context.checkAllowedDate(time);
    },
    nextMonthAllowed() {
      const time = new Date(this.year, this.month + 1, 1).getTime();
      return this.$context.checkAllowedDate(time);
    },
  },

  methods: {
    genHeader() {
      const children = [this.genHeaderValues()];
      children.unshift(this.genHeaderControl(-1));
      children.push(this.genHeaderControl(1));

      return this.$createElement('div', {
        staticClass: 'vc@date-picker__header',
      }, children);
    },

    genHeaderControl(vec) {
      let disabled;
      if (this.type === 'date') {
        disabled = vec === -1 ? !this.prevMonthAllowed : !this.nextMonthAllowed;
      } else if (this.type === 'month') {
        disabled = vec === -1 ? !this.prevYearAllowed : !this.nextYearAllowed;
      }

      return this.$createElement('vt@btn', {
        staticClass: 'vc@date-picker__header__action',
        props: {
          flat: true,
          icon: 'angle-' + (vec === -1 ? 'left' : 'right'),
          disabled,
          hidden: disabled,
        },
        on: {
          click: e => {
            this.shiftBody(vec);
          },
        },
      })
    },

    genHeaderValues() {
      const values = [];
      for (const key of this.ymIndexOrder) {
        if (typeof this[key] === 'number') values.push(this.genHeaderValue(key));
      }
      return this.$createElement('strong', {
        staticClass: 'vc@date-picker__header__values',
      }, values);
    },

    genHeaderValue(key) {
      return this.$createElement('span', {
        staticClass: `vc@date-picker__header__value vc@date-picker__header__${key}`,
        on: {
          click: e => {
            this.$context.onClickHeaderValue(key);
          },
        },
        key,
      }, this.getDisplayHeaderValue(key));
    },

    getDisplayHeaderValue(key) {
      if (key === 'year') return this.displayYear;
      if (key === 'month') return this.displayMonth;
    },

    genBody(children) {
      return this.$createElement('div', {
        staticClass: 'vc@date-picker__body',
      }, children);
    },

    genStack(children) {
      if (!this.base) children.push(this.genClose());
      return this.$createElement('div', {
        staticClass: 'vc@date-picker__stack',
        class: this.classes,
      }, children);
    },

    genClose() {
      return this.$createElement('vt@btn', {
        staticClass: 'vc@date-picker__stack__close',
        props: {
          flat: true,
          icon: 'close',
        },
        on: {
          click: e => {
            this.isActive = false;
          },
        },
      })
    },
  },
}
