export default {
  namespaced: true,

  state: {
    height: null,
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
    setHeight(state, val) {
      state.height = val;
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