import Themeable from '~/mixins/themeable';



export default {
  name: 'vt@app',

  mixins: [Themeable],

  props: {
    id: {
      type   : String,
      default: 'app'
    },
  },


  data() {
    return {
    }
  },

  computed: {
    transitionPropNames() {
      const names = [];
      this.$store.state.ui.header.fixed && names.push('top');
      this.$store.state.ui.leftDrawer.use && names.push('left');
      this.$store.state.ui.rightDrawer.use && names.push('right');
      return names;
    },

    classes() {
      return Object.assign({
        'vc@app': true,
        'vc@app--has-header': this.$store.state.ui.header.use,
        'vc@app--has-drawer-left': this.$store.state.ui.leftDrawer.use,
        'vc@app--has-drawer-right': this.$store.state.ui.rightDrawer.use,
        [`vc@app--transition-${this.transitionPropNames.join('-')}`]: this.transitionPropNames.length,
        'vc@app--header-fixed': this.$store.state.ui.header.fixed,
        'vc@app--drawer-left-active': this.$store.state.ui.leftDrawer.active,
        'vc@app--drawer-right-active': this.$store.state.ui.rightDrawer.active,
        'vc@app--drawer-left-static': this.$store.state.ui.leftDrawer.active && this.$store.state.ui.leftDrawer.static,
        'vc@app--drawer-right-static': this.$store.state.ui.rightDrawer.active && this.$store.state.ui.rightDrawer.static,
      }, this.themeClasses)
    },
  },

  mounted() {
    this.$forceUpdate();
  },

  render(h) {
    return h('div', {
      'class': this.classes,
      attrs: {
        id: this.id,
        'data-app': '',
      },
    }, this.$slots.default);
  },
}
