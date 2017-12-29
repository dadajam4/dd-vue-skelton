import uiSettings from '~~/config/css/ui-settings';



const HEADER_HEIGHT = uiSettings['toolbar-row-height'];



export default {
  namespaced: true,

  state: {
    height: HEADER_HEIGHT,
    use: false,
    fixed: false,
    hidden: false,
  },

  getters: {
    fixedHeight(state) {
      return state.fixed && !state.hidden ? state.height : 0;
    },
  },

  actions: {
  },

  mutations: {
    set(state) {
      state.use = true;
    },
    setFixed(state, val) {
      state.fixed = val;
    },
    setHidden(state, val) {
      state.hidden = val;
    },
    release(state) {
      state.use = false;
      state.fixed = false;
      state.hidden = false;
    },
  },

  modules: {

  },
}