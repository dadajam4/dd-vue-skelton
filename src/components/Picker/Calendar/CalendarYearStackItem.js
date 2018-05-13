import StackItem from './mixins/stack-item';

export default {
  name: 'vt@calendar-year-stack-item',

  mixins: [StackItem],

  render(h) {
    return h('li', {
      class: {
        // 'vc@calendar__year--active': isActive,
        'vc@calendar__year--current': this.isCurrent,
      },
      on: {
        click: this.onClick,
      },
    }, this.year);
  },
}
