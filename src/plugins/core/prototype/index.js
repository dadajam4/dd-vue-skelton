import * as helpers from '~/helpers';
import * as util from '~/util';
import delay from './delay';
import nextTickSync from './nextTickSync';
import nextAnimationFreame from './nextAnimationFreame';
import findParentByName from './findParentByName';



export default function PrototypePlugin(Vue) {

  // globals
  Vue.prototype.$util   = util;
  Vue.prototype.$helper = helpers;

  // instance
  Vue.prototype.$delay = delay;
  Vue.prototype.$nextTickSync = nextTickSync;
  Vue.prototype.$nextAnimationFreame = nextAnimationFreame;
  Vue.prototype.$findParentByName = findParentByName;

  Vue.prototype.$currentRouteOptions = function() {
    if (this.$route.matched[0] && this.$route.matched[0].components.default) {
      return this.$route.matched[0].components.default.options || this.$route.matched[0].components.default;
    }
  }

  Vue.prototype.$currentRouteAnchors = function() {
    const routeOptions = this.$currentRouteOptions();
    const anchors      = routeOptions ? routeOptions.$_anchors : [];
    return anchors || [];
  }

  Vue.prototype.$appHeaderHeight = function() {
    let height = 0;
    const $app = document.querySelector('[data-app]');
    if (!$app) return height;

    if ($app.classList.contains('dd-app--header-fixed')) {
      const $header = document.querySelector('.dd-app-header');
      if ($header) {
        height = $header.clientHeight;
      }
    }
    return height;
  }

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

    createdOptions.offset -= this.$appHeaderHeight();
    return this.$scrollTo(el, createdOptions);
  }
}