import '../polyfill';
import Vue         from 'vue';
import components  from '~/components';
import directives  from '~/directives';
import Prototype   from './prototype';
import Validator   from './validator';
import VueScrollTo from 'vue-scrollto';
import themes from '~~/config/css/themes';

// const TEXT_COLORS = themes['color-keys'].text;



function plugin(Vue, opt = {}) {

  // plugins
  Vue.use(Prototype, opt);
  Vue.use(Validator, opt);
  Vue.use(VueScrollTo);

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

  Vue.mixin({
    computed: {
      TEXT_COLORS() { return themes['color-keys'].text },
    },
  });
}



Vue.use(plugin);
