export default {
  name: 'vt@mq',

  data() {
    return {
      mqSource: {},
    }
  },

  computed: {
    mq() {
      const mq = {...this.mqSource};

      for (const alias in this.mediaMatchAliases) {
        const targets = this.mediaMatchAliases[alias];
        if (Array.isArray(targets)) {
          let matches = false;
          for (const target of targets) {
            if (mq[target]) {
              matches = true;
              break;
            }
          }
          mq[alias] = mq[matches];
        } else {
          mq[alias] = mq[targets];
        }
      }
      return mq;
    },
  },

  methods: {
    setupMq() {
      this.mediaMatches.forEach(define => {
        const { key, condition } = define;
        const mql = window.matchMedia(condition);
        const matches = mql.matches;
        const listener = () => {
          this.mqSource[key] = mql.matches;
        };
        mql.addListener(listener);

        this._mqListeners[key] = { mql, listener };
        this.$set(this.mqSource, key, matches);
      });
    },

    forceUpdateMq() {
      for (const key in this._mqListeners) {
        this.mqSource[key] = this._mqListeners[key].mql.matches;
      }
    },

    clearMq() {
      for (const key in this._mqListeners) {
        this.$delete(this.mqSource, key);
        this._mqListeners[key].mql.removeListener(this._mqListeners[key].listener);
        this._mqListeners[key] = null;
        delete this._mqListeners[key];
      }
    },
  },

  created() {
    this._mqListeners = {};
    if (this.hasWindow) this.setupMq();
  },

  beforeDestroy() {
    this.clearMq();
  },
}
