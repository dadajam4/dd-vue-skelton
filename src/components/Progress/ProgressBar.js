import Colorable from '~/mixins/color/backgroundColorable';



// import {
//   VFadeTransition,
//   VSlideXTransition
// } from '../transitions'

export default {
  name: 'vt@progress-bar',

  // components: {
  //   VFadeTransition,
  //   VSlideXTransition
  // },

  mixins: [Colorable],

  props: {
    active: {
      type: Boolean,
      default: true,
    },
    dropColor: {
      type: String,
      default: null,
    },
    dropOpacity: {
      type: [Number, String],
      default: null,
    },
    bufferValue: {
      type: [Number, String],
      default: 100,
    },
    backgroundColor: {
      type: String,
      default: 'primary',
    },
    height: {
      type: [Number, String],
      default: 7,
    },
    indeterminate: Boolean,
    query: Boolean,
    value: {
      type: [Number, String],
      default: 0,
    }
  },

  computed: {
    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseInt(this.bufferValue, 10) !== 100) {
        styles.width = `${this.bufferValue}%`;
      }

      return styles;
    },
    effectiveWidth() {
      if (!this.bufferValue) {
        return 0;
      }

      return this.value * 100 / this.bufferValue;
    },
    dropStyle() {
      const dropOpacity = this.dropOpacity == null
        ? (this.dropColor ? 1 : 0.3)
        : parseFloat(this.dropOpacity);

      return {
        height: this.active ? `${this.height}px` : 0,
        opacity: dropOpacity,
        width: `${this.bufferValue}%`,
      }
    }
  },

  methods: {
    genDeterminate(h) {
      return h('div', {
        ref: 'front',
        staticClass: `vc@progress-bar__bar__determinate`,
        class: this.addBackgroundColorClasses(),
        style: {
          width: `${this.effectiveWidth}%`,
        }
      })
    },
    genBar(h, name) {
      return h('div', {
        staticClass: 'vc@progress-bar__bar__indeterminate',
        class: this.addBackgroundColorClasses({
          [name]: true,
        })
      })
    },
    genIndeterminate(h) {
      return h('div', {
        ref: 'front',
        staticClass: 'vc@progress-bar__bar__indeterminate',
        class: {
          'vc@progress-bar__bar__indeterminate--active': this.active,
        }
      }, [
        this.genBar(h, 'vc@long'),
        this.genBar(h, 'vc@short'),
      ])
    }
  },

  render(h) {
    const fade = h('vt@fade-transition', [this.indeterminate && this.genIndeterminate(h)])
    const slide = h('vt@slide-x-transition', [!this.indeterminate && this.genDeterminate(h)])

    const bar = h('div', {
      staticClass: 'vc@progress-bar__bar',
      style: this.styles,
    }, [fade, slide]);
    const background = h('div', {
      staticClass: 'progress-bar__background',
      class: [this.dropColor || this.color],
      style: this.dropStyle,
    })

    return h('div', {
      staticClass: 'vc@progress-bar',
      class: {
        'vc@progress-bar--query': this.query,
      },
      style: {
        height: `${this.height}px`
      },
      on: this.$listeners,
    }, [
      background,
      bar,
    ])
  }
}