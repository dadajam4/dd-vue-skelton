import rules from './rules';



const Validator = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    Vue.prototype.$rules = rules;

    Vue.mixin({
      $errors() {},
    });
  },
};



export default Validator;
