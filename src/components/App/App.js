import Themeable from '~/mixins/themeable';
import AppStackContainer from './AppStackContainer';



export default {
  name: 'vt@app',

  mixins: [Themeable],

  provide() {
    const data = {
      $app: this,
    };

    Object.defineProperty(data, '$appStackContainer', {
       enumerable: true,
       get: () => this.$refs['stackContainer'],
    });

    Object.defineProperty(data, 'appDimentions', {
       enumerable: true,
       get: () => this.dimentions,
    });

    return data;
  },

  components: {
    [AppStackContainer.name]: AppStackContainer,
  },

  props: {
  },

  data() {
    return {
      dimentions: {
        app: {width: 0, height: 0},
        body: {width: 0, height: 0, scrollWidth: 0, scrollHeight: 0},
      },
      scrollPosition: {top: 0, left: 0},
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

    bodyClasses() {
      return {
        'vc@app-body': true,
      }
    },

    styles() {
      if (!this.$store.state.ui.header.fixed) return;
      const headerHeight = this.$store.state.ui.header.height;
      if (headerHeight) return {paddingTop: `${headerHeight}px`};
    },
  },

  methods: {
    updateDimentions() {
      // const appRect = this.$el.getBoundingClientRect();
      // this.dimentions.app.width  = appRect.width;
      // this.dimentions.app.height = appRect.height;
      this.dimentions.app.width  = window.innerWidth;
      this.dimentions.app.height = window.innerHeight;

      const bodyRect = this.$refs.body.getBoundingClientRect();
      this.dimentions.body.width  = bodyRect.width;
      this.dimentions.body.height = bodyRect.height;

      // console.log(window.scrollWidth);
      // this.dimentions.body.scrollWidth = bodyDimention.scrollWidth;
      // this.dimentions.body.scrollHeight = bodyDimention.scrollHeight;
    },
    // onBodyScroll(scrollPosition) {
    //   this.updateScrollPosition(scrollPosition);
    // },
    // updateScrollPosition(scrollPosition = this.$refs.body.scrollPosition) {
    //   this.scrollPosition.top = scrollPosition.top;
    //   this.scrollPosition.left = scrollPosition.left;
    // },
  },

  created() {
    this.$attachApp();
  },

  beforeDestroy() {
    this.$detachApp();
  },

  mounted() {
    this.$forceUpdate();
    this.updateDimentions();
  },

  render(h) {
    const $stackContainer = h(AppStackContainer.name, {ref: 'stackContainer'});

    const $body = h('div', {
      class: this.bodyClasses,
      // props: {
      //   detectWindiwResize: this.isBaseApp,
      //   layerColor: 'shades-transparent',
      //   // horizontalScroll: false,
      // },
      // on: {
      //   resize: this.onBodyResize,
      //   scroll: this.onBodyScroll,
      // },
      directives: [
        {
          name: 'resize',
          value: {
            window: true,
            value: this.updateDimentions,
          },
        },
      ],
      ref: 'body',
    }, [this.$slots.default]);

    return h('div', {
      class: this.classes,
      style: this.styles,
      attrs: {
        'data-app': '',
      },
    }, [$stackContainer, $body]);
  },
}
