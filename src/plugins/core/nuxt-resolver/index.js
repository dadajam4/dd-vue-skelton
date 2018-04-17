import { resolveNuxtSrcPath } from '~/util';



const NuxtResolver = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    Object.defineProperty(Vue.prototype, '$isNuxt', {
      enumerable: true,
      configurable: true,
      get() {
        return !!this.$root.nuxt;
      },
    });

    Vue.prototype.$resolveNuxtSrcPath = function(src) {
      if (!this.$isNuxt) return src;
      return resolveNuxtSrcPath(src);
    }
  },
};



export default NuxtResolver;
