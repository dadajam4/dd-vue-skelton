import header from './header';
import drawer from './drawer';



export default {
  namespaced: true,

  state: {
  },

  getters: {
  },

  actions: {
  },

  mutations: {
  },

  modules: {
    header,
    leftDrawer: drawer('left'),
    rightDrawer: drawer('right'),
  },
}