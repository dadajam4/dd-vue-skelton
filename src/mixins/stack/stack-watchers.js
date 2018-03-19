export default {
  value(val) {
    this.innerValue = val;
  },

  innerValue(val) {
    if (val) this.isExistNode = true;
  },

  isActive(val) {
    this.cancelVisibilityCallBacks(val ? 'close' : 'show');
  },

  isVisible(val) {
    this.$emit('changeVisible', val);
    if (val) {
      this.startWatchDimensions();
      this.triggerShowCallBacks();
    } else {
      this.stopWatchDimensions();
      this.triggerCloseCallBacks();
    }
  },
}