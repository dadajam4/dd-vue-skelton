import Context from './context';



export default {
  name: 'vt@calendar-stack-item',

  mixins: [Context],

  props: {
    year: Number,
    month: Number,
    day: Number,
  },

  computed: {
    value() { return this.$context.createValue(this.year, this.month, this.day) },
    date() {
      const args = [this.year];
      if (this.month !== undefined) args.push(this.month);
      if (this.day !== undefined) args.push(this.day);
      return new Date(...args);
    },
    info() {
      return this.$context.createAdvancedValueInfo(this.year, this.month, this.day);
    },
    isCurrent() { return this.$context.checkValueIsCurrentDate(this.value) },
    isDisplayCurrent() { return this.showCurrent &&  this.isCurrent },
    isActive() { return this.$context.checkValueIsActive(this.value) },
    isAllowed() { return this.info.allowed },
  },

  methods: {
    onClick(e) {
      this.$emit('click', {
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        value: this.value,
        label: this.label,
      });
    },
  },
}
