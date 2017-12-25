import matchMedia from '~/manager/matchMedia';



const EVENT_TAG = 'dd-mq-store';
const keys  = [];
const state = {};



matchMedia.conditions.forEach(condition => {
  keys.push(condition.key);
  state[condition.key] = condition.mql.matches || false;
});



export default {
  namespaced: true,

  state,

  actions: {
    start({commit, dispatch}) {
      keys.forEach(key => {
        matchMedia.hasAndOn(`change-${key}.${EVENT_TAG}`, isMatch => {
          if (isMatch !== undefined) {
            commit('updateKey', {key, isMatch});
          }
        });
      });
      dispatch('update');
    },

    update({commit}) {
      matchMedia.conditions.forEach(condition => {
        if (condition.mql.matches !== undefined) {
          commit('updateKey', {key: condition.key, isMatch: condition.mql.matches});
        }
      });
    },
  },

  mutations: {
    updateKey(state, {key, isMatch}) {
      state[key] = isMatch;
    },
  },
}