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

  const THEME_KEYS = [];
  for (let key in themes.themes) {
    THEME_KEYS.push(key);
  }
  THEME_KEYS.sort((a, b) => {
    if (a === themes.default) return -1;
    if (b === themes.default) return 1;
    return 0;
  });

  Vue.mixin({
    computed: {
      THEMES() { return themes.themes },
      THEME_KEYS() { return THEME_KEYS },
      THEME_DEFAULT() { return themes.default },
      TEXT_COLORS() { return themes['color-keys'].text },
      BACKGROUND_COLORS() { return themes['color-keys'].background },
      CONTEXT_TYPES() { return themes['color-keys'].context },
      PALETTE() { return themes.palette },
    },
  });
}



Vue.use(plugin);
