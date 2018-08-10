import Mountable from '~/mixins/mountable';



const getSanitizedPropSize = size => {
  return isNaN(size) ? size : `${size}px`;
}



export default {
  name: 'vt@scroller',

  mixins: [Mountable],

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    contentTag: {
      type: String,
      default: 'div',
    },
    horizontal: Boolean,
    vertical: Boolean,
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    maxWidth: {
      type: [String, Number],
      default: null,
    },
    maxHeight: {
      type: [String, Number],
      default: null,
    },
    judgeAmmount: {
      type: [String, Number],
      default: 10,
    },
    layerColor: {
      type: String,
      default: 'dark',
    },
    layerWidth: {
      type: [String, Number],
      default: 40,
    },
    layerActiveOpacity: {
      type: [Number, String],
    },
    detectWindiwResize: Boolean,
    horizontalScroll: {
      type: Boolean,
      default: true,
    },
    verticalScroll: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      scrollLeft: 0,
      scrollTop: 0,
      containerWidth: 0,
      containerHeight: 0,
      scrollWidth: 0,
      scrollHeight: 0,
    };
  },

  computed: {
    classes() {
      return {
        'vc@scroller': true,
        'vc@scroller--horizontal': this.horizontal,
        'vc@scroller--vertical': this.vertical,
        'vc@scroller--scrollable-left': this.leftIsScrollable,
        'vc@scroller--scrollable-right': this.rightIsScrollable,
        'vc@scroller--scrollable-top': this.topIsScrollable,
        'vc@scroller--scrollable-bottom': this.bottomIsScrollable,
      }
    },
    styles() {
      const styles = {};
      ['width', 'height', 'maxWidth', 'maxHeight'].forEach(prop => {
        styles[prop] = getSanitizedPropSize(this[prop]);
      });
      return styles;
    },
    scrollableWidth() { return this.scrollWidth - this.containerWidth },
    scrollableHeight() { return this.scrollHeight - this.containerHeight },
    scrollRight() { return this.scrollableWidth - this.scrollLeft },
    scrollBottom() { return this.scrollableHeight - this.scrollTop },
    computedJudgeAmmount() { return parseInt(this.judgeAmmount, 10) },

    leftIsScrollable() { return this.scrollLeft >= this.computedJudgeAmmount },
    rightIsScrollable() { return this.scrollRight >= this.computedJudgeAmmount },
    topIsScrollable() { return this.scrollTop >= this.computedJudgeAmmount },
    bottomIsScrollable() { return this.scrollBottom >= this.computedJudgeAmmount },
    dimention() { return {width: this.containerWidth, height: this.containerHeight, scrollWidth: this.scrollWidth, scrollHeight: this.scrollHeight} },
    scrollPosition() { return {top: this.scrollTop, left: this.scrollLeft} },
  },

  watch: {
    dimention(val) {
      this.$emit('resize', val);
    },
    scrollPosition(val) {
      this.$emit('scroll', val);
    },
  },

  methods: {
    onResize(e) {
      this.update();
    },
    onScroll(e) {
      this.updateScrollPosition();
    },
    update() {
      this.updateScrollPosition();
      this.updateSize();
    },
    updateScrollPosition() {
      this.scrollLeft = this.$refs.scroller.scrollLeft;
      this.scrollTop = this.$refs.scroller.scrollTop;
    },
    updateSize() {
      const { width, height } = this.$refs.scroller.getBoundingClientRect();
      this.containerWidth = width;
      this.containerHeight = height;
      this.scrollWidth = this.$refs.scroller.scrollWidth;
      this.scrollHeight = this.$refs.scroller.scrollHeight;
    },
  },

  mounted() {
    this.update();
    this.$emit('mount');
  },

  render(h) {
    const $content = h(this.contentTag, {
      staticClass: 'vc@scroller__content',
      ref: 'content',
      directives: [{ name: 'resize', value: this.onResize }],
    }, [this.$slots.default]);

    const $layers = ['top', 'right', 'bottom', 'left'].map(vec => {
      const type = (vec === 'top' || vec === 'bottom') ? 'vertical' : 'horizontal';
      const isActive = this[`${vec}IsScrollable`];
      const layerWidth = getSanitizedPropSize(this.layerWidth);
      const style = { width: layerWidth, height: layerWidth };
      if (isActive && this.layerActiveOpacity) style.opacity = this.layerActiveOpacity;

      return h('div', {
        staticClass: `vc@scroller__layer vc@scroller__layer--${vec} vc@scroller__layer--${type}`,
        class: {
          'vc@scroller__layer--active': isActive,
        },
        style,
      })
    });

    const $layerContainer = h('div', {
      staticClass: 'vc@scroller__layer-container',
      class: {
        [`vc@${this.layerColor}--text`]: true,
      },
    }, $layers);

    const $scroller = h('div', {
      staticClass: 'vc@scroller__context',
      style: {
        'overflow-x': !this.horizontalScroll && 'hidden' || 'auto',
        'overflow-y': !this.verticalScroll && 'hidden' || 'auto',
      },
      directives: [
        {
          name: 'resize',
          value: {
            window: this.detectWindiwResize,
            value: this.onResize,
          },
        }
      ],
      on: {
        scroll: e => this.onScroll(e),
      },
      ref: 'scroller',
    }, [$content]);

    return h(this.tag, {
      class: this.classes,
      style: this.styles,
    }, [$scroller, $layerContainer]);
  }
}
