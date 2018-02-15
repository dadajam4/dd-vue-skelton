import RangeProps from './mixins/range-props';
import { addOnceEventListener, createRange } from '~/util';



const pointerContext = typeof document === 'undefined' ? {} : document;



export default {
  name: 'vt@slider',

  mixins: [RangeProps],

  props: {
    error: Boolean,
  },

  data() {
    return {
      innerActive: false,
      keyPressed: 0,
      currentPointerType: null,
    }
  },

  computed: {
    hasThumbLabel() { return this.thumbLabel || this.persistentThumbLabel },
    computedThumbColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      if (this.valueIsEmpty) {
        return this.isActive ? 'active' : 'light';
      }
      return this.thumbColor;
    },
    computedThumbLabelColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      return this.thumbLabelColor || this.thumbColor;
    },
    computedTrackFillColor() {
      if (this.disabled) return 'muted';
      if (this.error) return 'error';
      return this.trackFillColor;
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
    genTracks() {
      return (
        <div class="vc@slider__track-container" ref="track">
          <div
            staticClass="vc@slider__track vc@slider__track--base"
          ></div>
          <div
            staticClass="vc@slider__track vc@slider__track--fill"
            class={{
              [`vc@layer-color--${this.computedTrackFillColor}`]: true,
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
          style: {
            left: `${i * (100 / this.numTicks)}%`,
          },
        })
      })

      return h('div', {
        staticClass: 'vc@slider__tick-container',
      }, ticks)
    },
    onPointerStart(e) {
      if (this.disabled || e.button === 2) return;

      this.keyPressed = 2;
      const options = { passive: true };
      this.isActive = true;
      this.currentPointerType = e.target.getAttribute('data-pointer-type');

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

    genThumbLabel(type) {
      const h = this.$createElement;
      const value = this[`${type}Value`];
      const label = typeof this.thumbLabel === 'function' && this.thumbLabel(value, this) || value;

      return h('vt@scale-transition', {
        props: { origin: 'bottom center' },
      }, [
        h('div', {
          staticClass: 'vc@slider__thumb__label',
          directives: [
            {
              name: 'show',
              value: this.isActive,
            },
          ]
        }, [
          h('div', {
            staticClass: 'vc@slider__thumb__label__body',
            'class': {
              [`vc@layer-color--${this.computedThumbLabelColor}`]: true,
            },
          }, [
            h('span', {
              staticClass: 'vc@slider__thumb__label__body__inner',
            }, label),
          ])
        ])
      ])
    },

    genThumb(type) {
      return (
        <div
          staticClass={`vc@slider__thumb vc@slider__thumb--${type}`}
          style={this[`${type}Styles`]}
          ref={`${type}Thumb`}
        >
          <div
            staticClass="vc@slider__thumb__pointer"
            onTouchstart={this.onPointerStart}
            onMousedown={this.onPointerStart}
            data-pointer-type={type}
          >
            <div
              staticClass="vc@slider__thumb__pointer__body"
              class={{
                [`vc@layer-color--${this.computedThumbColor}`]: true,
              }}
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
    return (
      <div
        class={this.classes}
        role="slider"
        tabindex={this.disabled ? -1 : this.tabindex}
        onKeydown={this.onKeydown}
        onKeyup={this.onKeyup}
        onClick={this.onClick}
      >
        {this.genTracks()}
        {this.ticks && this.genTicks()}
        {this.genThumbs()}
      </div>
    );
  },
}
