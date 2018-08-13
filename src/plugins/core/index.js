import * as helpers from '~/helpers';
import * as util from '~/util';
import components  from '~/components';
import directives  from '~/directives';
import App from './app';
import Ui from './ui';
import NuxtResolver from './nuxt-resolver';
import RouterHelper from './router-helper';
import Living from './living';
import Scroll from './scroll';
import Notifications from './notifications';
import Validator   from './validator';



const plugin = {
  install(Vue, opt = {}) {
    if (this.installed) return;
    this.installed = true;

    Vue.use(Ui, opt);

    // utilities
    Vue.prototype.$util = util;
    Vue.prototype.$helper = helpers;

    // child plugins
    Vue.use(App, opt);
    Vue.use(NuxtResolver, opt);
    Vue.use(RouterHelper, opt);
    Vue.use(Living, opt);
    Vue.use(Scroll, opt);
    Vue.use(Notifications, opt);
    Vue.use(Validator, opt);

    // Directives
    Object.keys(directives).forEach(key => {
      const directive = directives[key];
      Vue.directive(directive.name, directive);
    });

    // Components
    Object.keys(components).forEach(key => {
      const component = components[key];
      Vue.component(component.name, component);
    });

  },
};



if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}



export default plugin;
