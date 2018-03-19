export default {
  isActive: {
    get() { return this.innerValue },
    set(val) {
      this.innerValue = val;
      this.$emit('input', val);
    },
  },

  stackStyles() {
    const styles = {};
    if (this.zIndex !== null) styles['z-index'] = this.zIndex;
    return styles;
  },
}