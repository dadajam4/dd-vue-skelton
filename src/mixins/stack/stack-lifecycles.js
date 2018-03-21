export default {

  created() {
    this._showCallBacks = [];
    this._closeCallBacks = [];

    if (this.$parentStack) {
      this._parentStackUnWatcher = this.$parentStack.$watch('isActive', parentIsActive => {
        if (!parentIsActive) this.isActive = false;
      });
    }
  },

  mounted() {
    this.setupActivator();
    this.initStack();
    this.$emit('mounted', this);
  },

  updated() {
    if (!this.detached && this.isActive) {
      this.initStack();
    }
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    this.clearDelay();
    if (this._parentStackUnWatcher) this._parentStackUnWatcher();
    this._parentStackUnWatcher = null;
    delete this._parentStackUnWatcher;
    this.resetActivator();
    this.resetStack();
    this.$emit('beforeDestroy', this);
  },
}