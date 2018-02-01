import matchMedia from '~/manager/matchMedia';



// const keys   = [];
// const states = {};



// const mq = function() {}
// matchMedia.conditions.forEach(condition => {
//   mq[condition.key] = function() {
//     return this.$store.state.mq[condition.key];
//   };
//   console.warn(condition.key);
//   // keys.push(condition.key);
//   // states[condition.key] = condition.mql.matches;
// });



export default {
  data() {
    return {
      // mqKeys: keys,
      // mq    : states,
    }
  },

  methods: {
    // updateMediaQuery() {
    //   this.mqKeys.forEach(key => {
    //     this.setMediaQuery(key);
    //   });
    // },
    // setMediaQuery(key, isMatch = matchMedia.getConditionByKey(key).mql.matches) {
    //   this.mq[key] = isMatch;
    // },
    // startWatchMediaQuery() {
    //   keys.forEach(key => {
    //     matchMedia.hasAndOn(`change-${key}.${this._uid}`, isMatch => {
    //       this.setMediaQuery(key, isMatch);
    //     });
    //   });
    //   this.updateMediaQuery();
    // },
    // stopWatchMediaQuery() {
    //   matchMedia.off(`.${this._uid}`);
    // },
  },

  computed: {
    mq() { return this.$store.state.mq },
  },

  created() {
    // this.startWatchMediaQuery();

    if (typeof window !== 'undefined') {
      this.$store.dispatch('mq/update');
    }
  },

  beforeDestroy() {
    // this.stopWatchMediaQuery();
  },
}
