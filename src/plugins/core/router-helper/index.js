const RouterHelper = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    // currentRouteOptions
    Vue.prototype.$currentRouteOptions = function currentRouteOptions() {
      if (this.$route.matched[0] && this.$route.matched[0].components.default) {
        return this.$route.matched[0].components.default.options || this.$route.matched[0].components.default;
      }
    }

    // currentRouteAnchors
    Vue.prototype.$currentRouteAnchors = function currentRouteAnchors() {
      const routeOptions = this.$currentRouteOptions();
      const anchors = routeOptions ? routeOptions.$_anchors : [];
      return anchors || [];
    }
  },
};



export default RouterHelper;
