// Polyfills for IE Support
import 'babel-polyfill';
import 'event-source-polyfill';



import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import core from '../core';
import components from '~/components/docs';



function plugin(Vue) {
  Vue.use(core);
  Vue.use(VueHighlightJS);

  // Docs Components
  Object.keys(components).forEach(key => {
    const component = components[key];
    Vue.component(component.name, component);
  });
}



Vue.use(plugin);
