import appMixin  from '../../mixins/app';
import Themeable from '../../mixins/themeable';



export default {
  name: 'vt@app',

  mixins: [appMixin, Themeable],

  props: {
    header: Boolean,
    headerFixed: Boolean,

    id: {
      type   : String,
      default: 'app'
    },
  },


  data() {
    return {
      uses: {
        leftDrawer: false,
        rightDrawer: false,
      },
    }
  },

  computed: {
    transitionPropNames() {
      const names = [];
      this.headerFixed && names.push('top');
      this.uses.leftDrawer && names.push('left');
      this.uses.rightDrawer && names.push('right');
      return names;
    },

    classes() {
      return Object.assign({
        'vc@app': true,
        'vc@app--has-header': this.header,
        'vc@app--has-drawer-left': this.uses.leftDrawer,
        'vc@app--has-drawer-right': this.uses.rightDrawer,
        [`vc@app--transition-${this.transitionPropNames.join('-')}`]: this.transitionPropNames.length,
        'vc@app--header-fixed': this.headerFixed,
        'vc@app--drawer-left-active': this.leftDrawerActive,
        'vc@app--drawer-right-active': this.rightDrawerActive,
        'vc@app--drawer-left-static': this.leftDrawerActive && this.leftDrawerStatic,
        'vc@app--drawer-right-static': this.rightDrawerActive && this.rightDrawerStatic,
      }, this.themeClasses)
    },
  },

  watch: {
    leftDrawerActive() {
      this.$emit('change-drawer-left-active', this.leftDrawerActive);
    },

    rightDrawerActive() {
      this.$emit('change-drawer-right-active', this.leftDrawerActive);
    },

    leftDrawerStatic() {
      this.$emit('change-drawer-left-static', this.leftDrawerStatic);
    },

    rightDrawerStatic() {
      this.$emit('change-drawer-right-static', this.rightDrawerStatic);
    },
  },

  methods: {
  },

  created() {
  },

  beforeDestroy() {
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
