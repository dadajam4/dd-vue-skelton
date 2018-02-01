import ScrollDetector from 'dd-scroll-detector';



const sd = new ScrollDetector();



export default {
  namespaced: true,

  state: {
    loaded         : sd.loaded,
    top            : sd.scroll.top,
    left           : sd.scroll.left,
    width          : sd.width,
    height         : sd.height,
    scrollWidth    : sd.scrollWidth,
    scrollHeight   : sd.scrollHeight,
    lastHorizontal : sd.lastHorizontal,
    lastVertical   : sd.lastVertical,
    lastAmmountTop : sd.lastAmmount.top,
    lastAmmountLeft: sd.lastAmmount.left,
  },

  getters: {
    lastVerticalIsTop: state => state.lastVertical === 'top',
    lastVerticalIsBottom: state => state.lastVertical === 'bottom',
    lastHorizontalIsLeft: state => state.lastHorizontal === 'left',
    lastHorizontalIsRight: state => state.lastHorizontal === 'right',
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
      sd.on('changeLastHorizontal', e => {
        commit('updateLastHorizontal');
      });
      sd.on('changeLastVertical', e => {
        commit('updateLastVertical');
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
      commit('updateLastHorizontal');
      commit('updateLastVertical');
    },
  },

  mutations: {
    updateLoaded(state) {
      state.loaded = sd.loaded;
    },
    updateScrollPositions(state) {
      state.top             = sd.scroll.top;
      state.left            = sd.scroll.left;
      state.lastAmmountTop  = sd.lastAmmount.top;
      state.lastAmmountLeft = sd.lastAmmount.left;
    },
    updateSize(state) {
      state.width  = sd.width;
      state.height = sd.height;
    },
    updateScrollSize(state) {
      state.scrollWidth  = sd.scrollWidth;
      state.scrollHeight = sd.scrollHeight;
    },
    updateLastHorizontal(state) {
      state.lastHorizontal = sd.lastHorizontal;
    },
    updateLastVertical(state) {
      state.lastVertical = sd.lastVertical;
    },
  },
}