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

  methods: {
    genScroller() {
      const yearRangeInfo = this.$context.computedYearRangeInfo;
      const h = this.$createElement;
      const years = yearRangeInfo.range;
      const $years = years.map(year => {
        return h(CalendarYearStackItem, {
          props: {
            year,
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
        },
      }, $years);
      return $scroller;
    },
  },

  render(h) {
    return this.genStack([this.genScroller()]);
  },
}
