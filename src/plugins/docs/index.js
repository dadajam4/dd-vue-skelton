import Vue        from 'vue';
import components from '~/components/docs';



function plugin(Vue, opt = {}) {

  // Components
  Object.keys(components).forEach(key => {
    const component = components[key];
    Vue.component(component.name, component);
  });
}



Vue.use(plugin);
