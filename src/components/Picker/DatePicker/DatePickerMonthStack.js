import Stack from './mixins/stack';



export default {
  name: 'vt@date-picker-month-stack',

  mixins: [Stack],

  data() {
    return {
      type: 'month',
      year: 2018,
    }
  },

  computed: {
    narrowMonths() { return this.dateFormatDefine.month.narrow },
  },

  methods: {
    genMonthList() {
      const h = this.$createElement;
      const $months = this.narrowMonths.map((m, index) => {
        const isActive = m === 'MAY';
        const $btn = h('vt@btn', {
          props: {
            sm: true,
            flat: true,
            outline: isActive,
            primary: isActive,
          },
        }, m);
        return h('li', {key: m}, [$btn]);
      });

      return h('ol', {
        staticClass: 'vc@date-picker__month-list',
      }, $months);
    },
  },

  render(h) {
    const $header = this.genHeader();
    const $body = this.genBody([this.genMonthList()]);
    return this.genStack([$header, $body]);
  },
}
