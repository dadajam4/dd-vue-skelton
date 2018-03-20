export default {
  value(val) {
    if (val && this.disabled) {
      this.$emit('input', false);
      return;
    }
    this.innerValue = val;
  },

  innerValue(val) {
    if (val) this.isExistNode = true;
  },

  disabled(val) {
    if (val) {
      this.addClassForActivator('vc@stack-activator--disabled');
      this.callDeactivate();
    } else {
      this.removeClassFromActivator('vc@stack-activator--disabled');
    }
  },

  isActive(val) {
    if (this.disabled) return;
    val ? this.activate() : this.deactivate();
  },

  isVisible(val) {
    this.$emit('changeVisible', val);
    if (val) {
      this.triggerShowCallBacks();
    } else {
      this.triggerCloseCallBacks();
    }
  },
}