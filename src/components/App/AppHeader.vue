<template>
  <vt@toolbar :class="classes" :style="styles" @update-height="onUpdateHeight">
    <slot />
    <style v-if="customStyles" v-html="customStyles"></style>
  </vt@toolbar>
</template>



<script>
export default {
  name: 'vt@app-header',

  props: {
    fixed: Boolean,
    hidden: Boolean,
  },

  data() {
    return {
      innerHeight: null,
    }
  },

  computed: {
    classes() {
      return {
        'vc@app-header': true,
        'vc@app-header--fixed': this.fixed,
        'vc@app-header--hidden': this.hidden,
      }
    },
    styles() {
      if (this.hidden && this.innerHeight) {
        return {top: `-${this.innerHeight}px`}
      }
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
    hidden() { this.$store.commit('ui/header/setHidden', this.hidden) },
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
    this.$store.commit('ui/header/setHidden', this.hidden);
  },

  beforeDestroy() {
  },

  destroyed() {
    this.$store.commit('ui/header/release');
  },
}
</script>