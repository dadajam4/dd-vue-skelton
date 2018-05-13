import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-date-stack-item',

  mixins: [StackItem],

  props: {
    fill: Boolean,
  },

  computed: {
  },

  render(h) {
    const $btn = h('vt@btn', {
      props: {
        flat: !this.isCurrent,
        icon: true,
        grey: this.fill,
        disabled: !this.isAllowed,
        outline: this.isCurrent,
        primary: this.isCurrent,
      },
    }, this.day);
    return h('td', null, [$btn]);
  },
}
