<template>
  <vt@toolbar
    :class="classes"
    :style="styles"
    :color="color"
    @update-height="onUpdateHeight"
  >
    <slot />
    <style v-if="customStyles" v-html="customStyles"></style>
  </vt@toolbar>
</template>



<script>
const SCROLL_JUDGE_AMMOUNT = 64;



export default {
  name: 'vt@app-header',

  props: {
    fixed: Boolean,
    hidden: Boolean,
    color: true,
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
        // return {top: `-${this.innerHeight}px`}
        return {transform: `translateY(-${this.innerHeight}px)`}
      }
    },
    isHidden() { return this.hidden || this.isScrollOffHidden },
    isScrollOffHidden() {
      const params = this.scrollOffParams;

      if (
        !params.enabled
        || (!this.$ui.scroll.lastVerticalIsBottom && this.$ui.scroll.lastAmmountTop <= -SCROLL_JUDGE_AMMOUNT)
      ) return false;
      let threshold;
      if (params.threshold === 'auto') {
        threshold = this.autoScrollOffThreshold;
      } else if (typeof params.threshold === 'function') {
        threshold = params.threshold({scrollTop: this.scrollTop, height: this.innerHeight});
      } else {
        threshold = params.threshold;
      }

      return this.$ui.scroll.top >= threshold;
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
    fixed(val) { this.$ui.header.fixed = val; },
    isHidden(val) { this.$ui.header.hidden = val; },
    innerHeight(val) {
      this.$ui.header.height = val;
    },
  },

  methods: {
    onUpdateHeight(height) {
      this.innerHeight = height;
    },
  },

  created() {
    this.$ui.header.use = true;
    this.$ui.header.fixed = this.fixed;
    this.$ui.header.hidden = this.isHidden;
  },

  beforeDestroy() {
  },

  destroyed() {
    this.$ui.header.release();
  },
}
</script>
