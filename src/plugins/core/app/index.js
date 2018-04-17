const App = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    let $app = null;

    Vue.prototype.$attachApp = function($vm = this) {
      $app = $vm;
    }

    Vue.prototype.$detachApp = function($vm = this) {
      $app = null;
    }

    Object.defineProperty(Vue.prototype, '$app', {
      enumerable: true,
      configurable: true,
      get: () => $app,
    });
  },
};



export default App;
