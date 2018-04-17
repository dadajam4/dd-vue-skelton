import themes from '~~/config/css/themes';



const Theme = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    const THEME_KEYS = [];
    for (let key in themes.themes) {
      THEME_KEYS.push(key);
    }

    THEME_KEYS.sort((a, b) => {
      if (a === themes.default) return -1;
      if (b === themes.default) return 1;
      return 0;
    });

    Vue.mixin({
      computed: {
        THEMES() { return themes.themes },
        THEME_KEYS() { return THEME_KEYS },
        THEME_DEFAULT() { return themes.default },
        TEXT_COLORS() { return themes['color-keys'].text },
        BACKGROUND_COLORS() { return themes['color-keys'].background },
        CONTEXT_TYPES() { return themes['color-keys'].context },
        PALETTE() { return themes.palette },
      },
    });
  },
};



export default Theme;
