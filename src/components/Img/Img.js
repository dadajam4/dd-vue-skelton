import Mq from '~/mixins/mq';
const extendsProps = ['src', 'width', 'height', 'alt'];



export default {
  name: 'vt@img',

  mixins: [Mq],

  props: {
    src: {
      type: [String, Object, Boolean],
    },
    width: [String, Number],
    height: [String, Number],
    alt: String,
  },

  data() {
    return {
      booted: false,
      initialized: false,
      dataSources: {},
      srcInfomations: [],
    }
  },

  computed: {
    hasSrc() { return !!this.src },
    settings() {
      let settings = {};
      if (this.hasSrc) {
        settings = typeof this.src === 'object' ? this.src : {default: {
          src: this.src,
          width: this.width,
          height: this.height,
          alt: this.alt,
        }};
      }

      // resolve string to object and set key[mq]
      for (let matchKey in settings) {
        if (typeof settings[matchKey] === 'string') {
          settings[matchKey] = {src: settings[matchKey]};
        }
        settings[matchKey].mq = matchKey;
      }

      // resolve nuxt alias path
      if (this.$isNuxt) {
        for (let matchKey in settings) {
          if (settings[matchKey].src) {
            settings[matchKey].src = this.$util.resolveNuxtSrcPath(settings[matchKey].src);
          }
        }
      }

      // resolve default values
      if (settings.default) {
        for (let matchKey in settings) {
          if (matchKey === 'default') continue;
          const setting = settings[matchKey];
          for (let prop of extendsProps) {
            if (setting[prop] === undefined) setting[prop] = settings.default[prop];
          }
        }
      }

      return settings;
    },
    hasMqSetting() {
      return Object.keys(this.settings).length > (this.settings.default ? 1 : 0)
    },
    source() {
      if (!this.hasMqSetting) return this.settings.default;
      for (let matchKey in this.settings) {
        if (matchKey === 'default') continue;
        if (this.mq[matchKey]) return this.settings[matchKey];
      }
      return this.settings.default;
    },
    hasMatchSource() { return !!this.source },
    currentSrcInfo() {
      if (!this.hasMatchSource) return;
      return this.srcInfomations.find(info => info.src === this.source.src);
    },
    sourceState() { return this.currentSrcInfo && this.currentSrcInfo.state },
    sourceIsLoading() { return this.sourceState === 'loading' },
    sourceIsLoaded() { return this.sourceState === 'loaded' },
    sourceIsError() { return this.sourceState === 'error' },
    canRender() {
      return !this.hasMqSetting || this.booted;
    },
  },

  watch: {
    src() {
      this.init();
    },
  },

  methods: {
    reset() {
      this.srcInfomations = [];
    },

    loadCurrentSource() {
      if (this.sourceIsLoading || this.sourceIsLoaded) return;
      const info = this.currentSrcInfo;

      info.state = 'loading';
      const $loader = new Image();
      $loader.addEventListener('load', () => {
        info.width = $loader.width;
        info.height = $loader.height;
        info.state = 'loaded';
      }, false);

      $loader.onerror = e => {
        info.state = 'error';
      }
      $loader.src = info.src;
    },

    init() {
      this.reset();
      const settings = this.settings;
      const srcInfomations = [];
      for (let matchKey in settings) {
        const setting = settings[matchKey];
        if (!srcInfomations.find(info => info.src === setting.src)) {
          srcInfomations.push({src: setting.src, width: null, height: null, state: 'pending'});
        }
      }
      this.srcInfomations = srcInfomations;
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.booted = true;
    this.loadCurrentSource();
  },

  render(h) {
    if (!this.hasMatchSource) return;
    if (!this.canRender) return;

    return h('img', {
      staticClass: 'vc@img',
      attrs: {
        src: this.source.src,
        width: this.source.width,
        height: this.source.height,
        alt: this.source.alt,
      },
    });
  }
}