import ScrollDetector from 'dd-scroll-detector';



const sd = new ScrollDetector();



export default {
  namespaced: true,

  state: {
    loaded      : sd.loaded,
    top         : sd.scroll.top,
    left        : sd.scroll.left,
    width       : sd.width,
    height      : sd.height,
    scrollWidth : sd.scrollWidth,
    scrollHeight: sd.scrollHeight,
  },

  getters: {
  },

  actions: {
    start({commit, dispatch}) {
      dispatch('update');
      sd.on('scroll', e => {
        commit('updateScrollPositions');
      });
      sd.on('resize', e => {
        dispatch('update');
      });
      sd.hasAndOne('load', e => {
        commit('updateLoaded');
        dispatch('update');
      });
    },
    update({commit}) {
      commit('updateScrollPositions');
      commit('updateSize');
      commit('updateScrollSize');
    },
  },

  mutations: {
    updateLoaded(state) {
      state.loaded = sd.loaded;
    },
    updateScrollPositions(state) {
      state.top  = sd.scroll.top;
      state.left = sd.scroll.left;
    },
    updateSize(state) {
      state.width  = sd.width;
      state.height = sd.height;
    },
    updateScrollSize(state) {
      state.scrollWidth  = sd.scrollWidth;
      state.scrollHeight = sd.scrollHeight;
    },
  },
}