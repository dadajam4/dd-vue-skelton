import SliderPipeMixin from './mixins/slider-pipe-mixin';
import { addOnceEventListener, createRange } from '~/util';



const pointerContext = typeof document === 'undefined' ? {} : document;



export default {
  name: 'vt@slider',

  mixins: [SliderPipeMixin],

  props: {
    error: Boolean,
  },

  data() {
    return {
      innerActive: false,
      keyPressed: 0,
      currentPointerType: null,
      innerFocused: false,
    }
  },

  computed: {
    hasThumbLabel() { return this.thumbLabel || this.persistentThumbLabel },
    fromThumbColor() { return this.getThumbColor('from') },
    toThumbColor() { return this.getThumbColor('to') },
    fromThumbLabelColor() { return this.getThumbLabelColor('from') },
    toThumbLabelColor() { return this.getThumbLabelColor('to') },

    computedTrackFillColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      return this.trackFillColor;
    },

    computedTickColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      return this.tickColor;
    },

    computedIconColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      if (this.isActive) return this.iconActiveColor;
    },

    classes() {
      return {
        'vc@slider': true,
        'vc@slider--active': this.isActive,
        'vc@slider--disabled': this.disabled,
        'vc@slider--empty': this.valueIsEmpty,
        'vc@slider--error': this.error,
        'vc@slider--has-thumb-label': this.hasThumbLabel,
      }
    },
    isActive: {
      get() { return this.innerActive },
      set(val) {
        this.innerActive = val;
        this.$emit('activate', val);
      },
    },
    trackStyles() {
      const {fromLeftPer, toLeftPer} = this;
      const fromIsLower = fromLeftPer < toLeftPer;
      const fromProp = fromIsLower ? 'left' : 'right';
      const toProp = fromIsLower ? 'right' : 'left';
      const fromAmmount = fromIsLower ? fromLeftPer * 100 : 100 - (fromLeftPer * 100);
      const toAmmount = fromIsLower ? 100 - (toLeftPer * 100) : toLeftPer * 100;
      return {
        transition: this.keyPressed >= 2 ? 'none' : '',
        [fromProp]: fromAmmount + '%',
        [toProp]: toAmmount + '%',
      }
    },
    fromLeftPer() { return this.multiple ? this.getThumbLeftPer('from') : 0 },
    toLeftPer() { return this.getThumbLeftPer('to') },
    fromStyles() {
      return this.multiple && this.getThumbStyles('from');
    },
    toStyles() {
      return this.getThumbStyles('to');
    },
    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepValue);
    },
    focused: {
      get() { return this.innerFocused },
      set(val) {
        this.innerFocused = val;
      },
    },
  },

  methods: {
    getThumbLeftPer(type) {
      const value = this[`${type}Value`];
      return this[`${type}Value`] / (this.maxValue - this.minValue);
    },
    getThumbStyles(type) {
      return {
        transition: this.keyPressed >= 2 ? 'none' : '',
        left: this[`${type}LeftPer`] * 100 + '%',
        zIndex: this.currentPointerType === type ? 2 : 1,
      }
    },
    getThumbColor(type) {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      if (this.valueIsEmpty) return this.isActive ? 'active' : 'light';
      let color = this.thumbColor;
      if (Array.isArray(color)) color = color[type === 'from' ? 0 : 1];
      return color;
    },
    getThumbLabelColor(type) {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';

      let color = this.thumbLabelColor;
      if (Array.isArray(color)) color = color[type === 'from' ? 0 : 1];
      return color || this[`${type}ThumbColor`];
    },
    genTracks() {
      return (
        <div class="vc@slider__track-container" ref="track">
          <div
            staticClass="vc@slider__track vc@slider__track--base"
          ></div>
          <div
            staticClass="vc@slider__track vc@slider__track--fill"
            class={{
              [`vc@layer-color--${this.computedTrackFillColor}`]: this.computedTrackFillColor,
            }}
            style={this.trackStyles}
          ></div>
        </div>
      );
    },
    genTicks() {
      const h = this.$createElement;
      const ticks = createRange(this.numTicks + 1).map(i => {
        return h('span', {
          key: i,
          staticClass: 'vc@slider__tick',
          class: {
            [`vc@layer-color--${this.computedTickColor}`]: this.computedTickColor,
          },
          style: {
            left: `${i * (100 / this.numTicks)}%`,
          },
        })
      })

      return h('div', {
        staticClass: 'vc@slider__tick-container',
      }, ticks);
    },
    onPointerStart(e, type = null) {
      if (this.disabled || e.button === 2) return;

      this.keyPressed = 2;
      const options = { passive: true };
      this.isActive = true;
      this.currentPointerType = type;

      if ('touches' in e) {
        pointerContext.addEventListener('touchmove', this.onPointerMove, options);
        addOnceEventListener(pointerContext, 'touchend', this.onPointerEnd);
      } else {
        pointerContext.addEventListener('mousemove', this.onPointerMove, options);
        addOnceEventListener(pointerContext, 'mouseup', this.onPointerEnd);
      }
    },
    onPointerMove(e, pointerUpdate = false) {
      const {
        left: offsetLeft,
        width: trackWidth,
      } = this.$refs.track.getBoundingClientRect();

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const left = Math.min(Math.max((clientX - offsetLeft) / trackWidth, 0), 1);

      if (clientX >= offsetLeft - 8 && clientX <= offsetLeft + trackWidth + 8) {
        const value = this.minValue + left * (this.maxValue - this.minValue);

        if (pointerUpdate) {
          if (this.multiple) {
            this.currentPointerType = Math.pow(left - this.fromLeftPer, 2) > Math.pow(left - this.toLeftPer, 2) ? 'to' : 'from';
          } else {
            this.currentPointerType = 'to';
          }
        }
        this[`${this.currentPointerType}Value`] = value;
      }
    },
    onPointerEnd(e) {
      this.keyPressed = 0;
      const options = { passive: true };
      this.isActive = false;
      pointerContext.removeEventListener('touchmove', this.onPointerMove, options);
      pointerContext.removeEventListener('mousemove', this.onPointerMove, options);
    },
    onKeydown(e) {
      if (this.disabled || ![33, 34, 35, 36, 37, 39].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepValue || 1;
      const steps = (this.maxValue - this.minValue) / step;
      const valueTarget = (this.multiple ? this.currentPointerType || 'from' : 'to') + 'Value';
      const baseValueTarget = valueTarget === 'from' ? 'min' : 'max';
      const baseValue = this[`${baseValueTarget}Value`];

      if (e.keyCode === 37 || e.keyCode === 39) {

        // Left / right
        this.keyPressed += 1;

        const direction = e.keyCode === 37 ? -1 : 1;
        const multiplier = e.shiftKey ? 3 : (e.ctrlKey ? 2 : 1);

        this[valueTarget] = this[valueTarget] + direction * step * multiplier;
      } else if (e.keyCode === 36) {

        // Home
        this[valueTarget] = this.minValue;
      } else if (e.keyCode === 35) {

        // End
        this.inputValue = this.maxValue;
      } else if (e.keyCode === 33 || e.keyCode === 34) {

        // Page up / down
        const direction = e.keyCode === 34 ? -1 : 1;
        this[valueTarget] = this[valueTarget] - direction * step * (steps > 100 ? steps / 10 : 10);
      }
    },
    onKeyup(e) {
      this.keyPressed = 0;
    },

    onClick(e) {
      if (!this.disabled && !this.isActive) return this.onPointerMove(e, true);
    },
    onFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.focused = true;
      this.$emit('blur', e);
    },
    focus() {
      this.$el.focus();
    },
    blur() {
      this.$el.blur();
    },
    genThumbLabel(type) {
      const h = this.$createElement;
      const value = this[`${type}Value`];
      const label = typeof this.thumbLabel === 'function' && this.thumbLabel(value, this) || value;

      const onPointerStart = e => {
        return this.onPointerStart(e, type);
      }

      const color = this[`${type}ThumbLabelColor`];
      const colorClasses = color && {[`vc@layer-color--${color}`]: true};

      return h('vt@scale-transition', {
        props: { origin: 'bottom center' },
      }, [
        h('div', {
          staticClass: 'vc@slider__thumb__label',
          directives: [
            {
              name: 'show',
              value: !this.disabled && (this.isActive || this.persistentThumbLabel),
            },
          ],
        }, [
          h('div', {
            staticClass: 'vc@slider__thumb__label__body',
            'class': colorClasses,
            on: {
              touchstart: onPointerStart,
              mousedown: onPointerStart,
            },
          }, [
            h('span', {
              staticClass: 'vc@slider__thumb__label__body__inner',
            }, [label]),
          ])
        ])
      ])
    },

    genThumb(type) {
      const onPointerStart = e => {
        return this.onPointerStart(e, type);
      }

      const color = this[`${type}ThumbColor`];
      const colorClasses = color && {[`vc@layer-color--${color}`]: true};

      return (
        <div
          staticClass={`vc@slider__thumb vc@slider__thumb--${type}`}
          style={this[`${type}Styles`]}
          ref={`${type}Thumb`}
        >
          <div
            staticClass="vc@slider__thumb__pointer"
            onTouchstart={onPointerStart}
            onMousedown={onPointerStart}
          >
            <div
              staticClass="vc@slider__thumb__pointer__body"
              class={colorClasses}
            ></div>
          </div>
          {(this.thumbLabel || this.persistentThumbLabel) && this.genThumbLabel(type)}
        </div>
      );
    },
    genThumbs() {
      return (
        <div class="vc@slider__thumb-container">
          {this.multiple && this.genThumb('from')}
          {this.genThumb('to')}
        </div>
      );
    },
  },

  render(h) {
    const iconColorAddClass = this.computedIconColor ? ` vc@text-color--${this.computedIconColor}` : '';
    const icons = {};
    this.$slots.default && this.$slots.default.forEach(vnode => {
      if (vnode.fnOptions && vnode.fnOptions.name === 'vt@icon') {
        const positionMatch = vnode.data.staticClass.match(/vc@icon--(left|right)/);
        let position = 'left';
        if (positionMatch) {
          position = positionMatch[1];
        } else {
          if (icons[position]) position = position === 'left' ? 'right' : 'left';
          vnode.data.staticClass += ` vc@icon--${position}`;
        }
        icons[position] = h('span', {
          staticClass: `vc@slider__icon vc@slider__icon--${position}${iconColorAddClass}`,
        }, [vnode]);
      }
    });

    return h('div', {
      class: this.classes,
      attrs: {
        role: 'slider',
        tabindex: this.disabled ? -1 : this.tabindex,
      },
      on: {
        keydown: this.onKeydown,
        keyup: this.onKeyup,
        click: this.onClick,
        focus: this.onFocus,
        blur: this.onBlur,
      },
    }, [
      icons.left,
      h('div', {
        staticClass: 'vc@slider__body',
      }, [
        this.genTracks(),
        ((this.ticks && this.isActive) || this.persintentTicks) && this.genTicks(),
        this.genThumbs(),
      ]),
      icons.right,
    ]);
  },
}
