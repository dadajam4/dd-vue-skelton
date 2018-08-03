import Context from './context';



export default {
  name: 'vt@calendar-stack',

  mixins: [Context],

  props: {
    base: Boolean,
    value: Boolean,
  },

  data() {
    return {
      innerValue: this.value,
      nextBody: null,
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
        [`vc@calendar__stack--${this.type}`]: true,
        'vc@calendar__stack--base': this.base,
        'vc@calendar__stack--active': this.isActive,
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
      const info = this.$context.createAdvancedValueInfo(this.year - 1);
      return info.allowed;
    },
    nextYearAllowed() {
      const info = this.$context.createAdvancedValueInfo(this.year + 1);
      return info.allowed;
    },
    prevMonthAllowed() {
      const info = this.$context.createAdvancedValueInfo(this.year, this.month - 1);
      return info.allowed;
    },
    nextMonthAllowed() {
      const info = this.$context.createAdvancedValueInfo(this.year, this.month + 1);
      return info.allowed;
    },
  },

  methods: {
    genHeader() {
      const children = [this.genHeaderValues()];
      children.unshift(this.genHeaderControl(-1));
      children.push(this.genHeaderControl(1));

      return this.$createElement('div', {
        staticClass: 'vc@calendar__header',
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
        staticClass: 'vc@calendar__header__action',
        props: {
          flat: true,
          icon: '$ui.icons.angle' + (vec === -1 ? 'Left' : 'Right'),
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
        staticClass: 'vc@calendar__header__values',
      }, values);
    },

    genHeaderValue(key) {
      return this.$createElement('span', {
        staticClass: `vc@calendar__header__value vc@calendar__header__${key}`,
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
        staticClass: 'vc@calendar__body',
        ref: 'body',
      }, children);
    },

    resetBodySlideTransition() {
      this._onBodySlideTransitionEnd && this._onBodySlideTransitionEnd();
    },

    shiftBody(vec) {
      this.resetBodySlideTransition();

      const $body = this.$refs.body;
      const $currentTable = $body.children[0];
      const $clone = $currentTable.cloneNode(true);
      $body.appendChild($clone);
      const positionStr = vec === 1 ? 'right' : 'left';
      const positionClassName = 'vc@calendar__body__slide--at-' + positionStr;
      $currentTable.classList.add(positionClassName);
      $currentTable.classList.add('vc@calendar__body__slide--active');
      $clone.classList.add('vc@calendar__body__slide--active');
      const cloneStyles = window.getComputedStyle($clone);
      const transitionStyle = cloneStyles.transition;
      let transitionDuration = 0;
      if (transitionStyle) {
        const tmp = transitionStyle.match(/([\d\.]+)(m?s)/);
        if (tmp && tmp[2]) {
          const ammount = parseFloat(tmp[1]);
          transitionDuration = ammount * (tmp[2] === 's' ? 1000 : 1);
        }
      }

      cloneStyles.transform; // kick calicurate for fire transition
      const slideVec = vec === 1 ? 'left' : 'right';
      const slideClassName = 'vc@calendar__body__slide--to-' + slideVec;
      $currentTable.classList.add(slideClassName);
      $clone.classList.add(slideClassName);

      this.shiftValue(vec);

      let myTimerId = null;

      this._onBodySlideTransitionEnd = e => {
        if (this._bodySlideTransitionTimerId !== myTimerId) return;
        if (e && e.propertyName.indexOf('ransform') === -1) return;
        clearTimeout(myTimerId);
        this._bodySlideTransitionTimerId = null;
        $clone.removeEventListener('transitionend', this._onBodySlideTransitionEnd, false);
        $body.removeChild($clone);
        $currentTable.classList.remove('vc@calendar__body__slide--active');
        $currentTable.classList.remove(positionClassName);
        $currentTable.classList.remove(slideClassName);
        this._onBodySlideTransitionEnd = null;
        delete this._onBodySlideTransitionEnd;
        const tableStyles = window.getComputedStyle($currentTable);
        const transitionStyle = tableStyles.transition;
      }

      myTimerId = setTimeout(this._onBodySlideTransitionEnd, transitionDuration);
      $clone.addEventListener('transitionend', this._onBodySlideTransitionEnd, false);
      this._bodySlideTransitionTimerId = myTimerId;
    },

    genStack(children) {
      const h = this.$createElement;
      const isActive = this.base || this.isActive;
      isActive && !this.base && children.push(this.genClose());

      const $stack = h('div', {
        staticClass: 'vc@calendar__stack',
        class: this.classes,
        directives: [
          {
            name: 'show',
            value: isActive,
          },
        ],
      }, children);

      const $transition = h('transition', {
        props: {
          name: 'vc@calendar__stack',
        },
      }, [$stack]);

      return $transition;
    },

    genClose() {
      return this.$createElement('vt@btn', {
        staticClass: 'vc@calendar__stack__close',
        props: {
          flat: true,
          icon: '$ui.icons.close',
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
