<template>
  <vt@toolbar :class="classes" :style="styles" @update-height="onUpdateHeight">
    <slot />
    <style v-if="customStyles" v-html="customStyles"></style>
  </vt@toolbar>
</template>



<script>
import AppScrollDetect from '~/mixins/app-scroll-detect';



const SCROLL_JUDGE_AMMOUNT = 64;



export default {
  name: 'vt@app-header',

  mixins: [AppScrollDetect],

  props: {
    fixed: Boolean,
    hidden: Boolean,
    scrollOff: {
      type: [Boolean, Object],
    },
  },

  data() {
    return {
      innerHeight: null,
    }
  },

  computed: {
    scrollOffParams() {
      const params = {enabled: false, threshold: 'auto'}
      const scrollOff = this.scrollOff;
      if (!scrollOff) return params;
      params.enabled = scrollOff.enabled || true;
      if (scrollOff.threshold) params.threshold = scrollOff.threshold;
      return params;
    },
    classes() {
      return {
        'vc@app-header': true,
        'vc@app-header--fixed': this.fixed,
        'vc@app-header--hidden': this.isHidden,
      }
    },
    styles() {
      // if (this.innerHeight === null) {
      //   return {top: `-64px`}
      // }
      if (this.isHidden && this.innerHeight) {
        return {top: `-${this.innerHeight}px`}
      }
    },
    isHidden() { return this.hidden || this.isScrollOffHidden },
    isScrollOffHidden() {
      const params = this.scrollOffParams;
      if (
        !params.enabled
        || (!this.lastVerticalIsBottom && this.appScrollLastAmmountTop <= -SCROLL_JUDGE_AMMOUNT)
      ) return false;
      let threshold;
      if (params.threshold === 'auto') {
        threshold = this.autoScrollOffThreshold;
      } else if (typeof params.threshold === 'function') {
        threshold = params.threshold({scrollTop: this.scrollTop, height: this.innerHeight});
      } else {
        threshold = params.threshold;
      }
      return this.appScrollTop >= threshold;
    },
    autoScrollOffThreshold() {
      // return this.innerHeight
      return 300;
    },
    customStyles() {
      const height = this.innerHeight;
      if (!height) return;
      return `
        .vc@height--app-header { height: ${height}px; }
        .vc@min-height--app-header { min-height: ${height}px; }
      `;
    },
  },

  watch: {
    fixed() { this.$store.commit('ui/header/setFixed', this.fixed) },
    isHidden() { this.$store.commit('ui/header/setHidden', this.isHidden) },
    innerHeight(val) {
      this.$store.commit('ui/header/setHeight', val);
    },
  },

  methods: {
    onUpdateHeight(height) {
      this.innerHeight = height;
    },
  },

  created() {
    this.$store.commit('ui/header/set');
    this.$store.commit('ui/header/setFixed', this.fixed);
    this.$store.commit('ui/header/setHidden', this.isHidden);
  },

  beforeDestroy() {
  },

  destroyed() {
    this.$store.commit('ui/header/release');
  },
}
</script>