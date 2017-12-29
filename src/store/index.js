import Vuex   from 'vuex';
import scroll from './scroll';
import mq     from './mq';
import ui     from './ui';



const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      scroll,
      mq,
      ui,
    },
  });

  store.dispatch('scroll/start');
  store.dispatch('mq/start');

  return store;
}



export default createStore;
