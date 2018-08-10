import Colorable from '~/mixins/colorable';



export default {
  name: 'vt@progress-bar',

  mixins: [Colorable],

  props: {
    active: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null,
    },
    bufferValue: {
      type: [Number, String],
      default: 100,
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
    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null
        ? (this.backgroundColor ? 1 : 0.3)
        : parseFloat(this.backgroundOpacity);

      return {
        height: this.active ? `${this.height}px` : 0,
        opacity: backgroundOpacity,
        width: `${this.bufferValue}%`,
      }
    }
  },

  methods: {
    genDeterminate(h) {
      const classes = this.color ? {[`vc@${this.color}--background`]: true} : this.addColorClasses();
      return h('div', {
        ref: 'front',
        staticClass: `vc@progress-bar__bar__determinate`,
        class: classes,
        style: {
          width: `${this.effectiveWidth}%`,
        }
      })
    },
    genBar(h, name) {
      const classes = this.color ? {[`vc@${this.color}--background`]: true} : this.addColorClasses();
      return h('div', {
        staticClass: 'vc@progress-bar__bar__indeterminate ' + name,
        class: classes,
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
        this.genBar(h, 'vc@progress-bar__long'),
        this.genBar(h, 'vc@progress-bar__short'),
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
      staticClass: 'vc@progress-bar__background',
      class: this.addColorClasses(),
      style: this.backgroundStyle,
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
