import VueScrollTo from 'vue-scrollto';



const Scroll = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    Vue.use(VueScrollTo);

    let appIsScrolling = false;

    Vue.prototype.$appIsScrolling = function() {
      return appIsScrolling;
    }

    Vue.prototype.$appScrollDone = function() {
      if (!appIsScrolling) return Promise.resolve();

      return new Promise(resolve => {
        const timerId = setTimeout(listener, 2000);

        const listener = () => {
          clearTimeout(timerId);
          this.$root.$off('app-scroll-done', listener);
          resolve();
        }

        this.$root.$once('app-scroll-done', listener);
      });
    }

    Vue.prototype.$appScrollTo = function(el, opts = {}) {
      appIsScrolling = true;

      el = typeof el === 'object' && el._isVue ? el.$el : el;

      const originOnDone = opts.onDone;
      const originOnCancel = opts.onCancel;
      const done = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            appIsScrolling = false;
            this.$root.$emit('app-scroll-done');
            return resolve();
          }, 100)
        });
      }

      const createdOptions = Object.assign({}, opts, {
        offset: -20,
        onDone: () => {
          done().then(() => {
            if (originOnDone) originOnDone();
          });
          // if (typeof el === 'string' && el.indexOf('#') === 0) {
          //   history.pushState({}, '', this.href);
          // }
        },
        onCancel: () => {
          done().then(() => {
            if (originOnCancel) originOnCancel();
          });
        },
      });

      createdOptions.offset -= this.$store.getters['ui/header/fixedHeight'];
      return this.$scrollTo(el, createdOptions);
    }
  },
};



export default Scroll;
