import Vuex   from 'vuex';
import scroll from './scroll';
import ui from './ui';



const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      scroll,
      ui,
    },
  });

  if (typeof window !== 'undefined') {
    store.dispatch('scroll/start');
  }

  return store;
}



export default createStore;
