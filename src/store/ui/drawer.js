export default function(vec) {
  return {
    namespaced: true,

    state: {
      vec,
      use: false,
      active: false,
      static: false,
    },

    getters: {
    },

    actions: {
    },

    mutations: {
      set(state) {
        state.use = true;
      },
      setActive(state, val) {
        state.active = val;
      },
      setStatic(state, val) {
        state.static = val;
      },
      release(state) {
        state.use = false;
        state.active = false;
        state.static = false;
      },
    },
  }
}
