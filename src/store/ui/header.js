export default {
  namespaced: true,

  state: {
    use: false,
    fixed: false,
  },

  getters: {
  },

  actions: {
  },

  mutations: {
    set(state, {fixed = false}) {
      state.use = true;
      state.fixed = fixed;
    },
    release(state) {
      state.use = false;
      state.fixed = false;
    },
  },

  modules: {

  },
}