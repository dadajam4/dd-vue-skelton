const Living = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    // live
    Vue.prototype.$live = function live(cb) {
      return this._isDestroyed ? false : cb();
    }

    // delay
    Vue.prototype.$delay = function delay(ammount = 0) {
      return new Promise(resolve => setTimeout(() => {
        this.$live(resolve);
      }, ammount));
    }

    // nextTickPromise
    Vue.prototype.$nextTickPromise = function nextTickPromise() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          this.$live(resolve);
        });
      });
    }

    // nextAnimationFreame
    Vue.prototype.$nextAnimationFreame = function nextAnimationFreame() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.$live(resolve);
          });
        });
      });
    }

    // timeout
    Vue.prototype.$timeout = function timeout(cb, interval = 0, tag) {
      tag && this.$clearTagedTimeoutCanceller(tag);
      const _cb = () => {
        this.$live(() => {
          if (
            !tag
            || !this.$_tagedTimeoutCallbacks
            || this.$_tagedTimeoutCallbacks[tag]
            || this.$_tagedTimeoutCallbacks[tag] === _cb
          ) {
            tag && this.$clearTagedTimeoutCanceller(tag);
            cb();
          }
        });
      }

      if (tag) {
        this.$_tagedTimeoutCallbacks = this.$_tagedTimeoutCallbacks || {};
        this.$_tagedTimeoutCallbacks[tag] = _cb;
      }

      let timerId = setTimeout(_cb, interval);

      const canceller = () => {
        tag && this.$clearTagedTimeoutCanceller(tag);
        clearTimeout(timerId);
      }

      return canceller;
    }

    // clearTagedTimeoutCanceller
    Vue.prototype.$clearTagedTimeoutCanceller = function clearTagedTimeoutCanceller(tag) {
      if (this.$_tagedTimeoutCallbacks && this.$_tagedTimeoutCallbacks[tag]) {
        this.$_tagedTimeoutCallbacks[tag] = null;
        delete this.$_tagedTimeoutCallbacks[tag];
      }
    }
  },
};



export default Living;
