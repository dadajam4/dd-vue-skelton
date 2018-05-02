import Stack from './mixins/stack';



export default {
  name: 'vt@date-picker-year-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'year',
    }
  },

  computed: {
  },

  methods: {
    genScroller() {
      const h = this.$createElement;
      const years = this.$util.createRange(200, 1900);
      const $years = years.map(y => {
        const isActive = y === 1903;
        return h('li', {
          class: {
            'vc@date-picker__year--active': isActive,
          },
          key: y,
        }, y);
      });

      const $scroller = h('vt@scroller', {
        staticClass: 'vc@date-picker__year-scroller',
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
