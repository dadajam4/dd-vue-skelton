import Stack from './mixins/stack';
import CalendarYearStackItem from './CalendarYearStackItem';



export default {
  name: 'vt@calendar-year-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'year',
    }
  },

  watch: {
    innerValue(val) {
      if (!val) return;
      const $scroller = this.$refs.scroller;
      this.$nextTick(() => {
        this.initScrollPosition();
      });
    },
  },

  methods: {
    initScrollPosition() {
      const $scroller = this.$refs.scroller;
      $scroller.update();

      const $container = $scroller.$refs.scroller;
      const $target = $container.querySelector(`[data-calendar-year-${this.$context.year}]`);
      if (!$target) return;

      const $targetRect = $target.getBoundingClientRect();
      $container.scrollTop = $target.offsetTop - Math.round($container.offsetHeight / 2 - $target.offsetHeight / 2);
    },

    genScroller() {
      const yearRangeInfo = this.$context.computedYearRangeInfo;
      const h = this.$createElement;
      const years = yearRangeInfo.range;
      const $years = years.map(year => {
        return h(CalendarYearStackItem, {
          props: {
            year,
          },
          attrs: {
            [`data-calendar-year-${year}`]: '',
          },
          on: {
            click: e => {
              this.$context.broadcastYear(year);
              if (!this.base) this.isActive = false;
            },
          },
          key: year,
        });
      });

      const $scroller = h('vt@scroller', {
        staticClass: 'vc@calendar__year-scroller',
        props: {
          contentTag: 'ul',
          layerColor: 'inverted',
          layerActiveOpacity: 0.8,
        },
        ref: 'scroller',
      }, $years);
      return $scroller;
    },
  },

  render(h) {
    return this.genStack([this.genScroller()]);
  },
}
