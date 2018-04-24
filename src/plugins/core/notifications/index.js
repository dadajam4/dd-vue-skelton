const Notifications = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    Vue.prototype.$alert = function alert() {
      return this.$app.alert(...arguments);
    }

    Vue.prototype.$confirm = function confirm() {
      return this.$app.confirm(...arguments);
    }

    Vue.prototype.$prompt = function prompt() {
      return this.$app.prompt(...arguments);
    }
  },
};



export default Notifications;
