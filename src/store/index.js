import Vuex   from 'vuex';
import scroll from './scroll';
import mq     from './mq';



const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      scroll,
      mq,
    },
  });

  store.dispatch('scroll/start');
  store.dispatch('mq/start');

  return store;
}



export default createStore;
