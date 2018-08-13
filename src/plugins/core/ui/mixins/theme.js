export default function Theme(theme = {}) {
  return {
    name: 'vt@ui-theme',

    data() {
      return {
        currentTheme: theme.default,
      }
    },

    computed: {
      rootTheme: {
        get() { return this.currentTheme },
        set(key) {
          if (!this.theme.keys.includes(key)) {
            throw new Error(`[ui] theme ${key} is not defined.`);
          }
          if (this.currentTheme === key) return;
          this.currentTheme = key;
          this.updateHTMLClassesByTheme();
        },
      },
    },

    created() {
      this.updateHTMLClassesByTheme();
    },

    methods: {
      updateHTMLClassesByTheme() {
        if (!this.hasWindow) return;

        // ui-use-theme--[key]
        // console.log(document.documentElement.classList);
      },
    },
  }
}
