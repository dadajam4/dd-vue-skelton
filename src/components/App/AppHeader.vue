<template>
  <vt@toolbar :class="classes">
    <slot />
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
  },

  watch: {
    fixed() { this.$store.commit('ui/header/setFixed', this.fixed) },
    hidden() { this.$store.commit('ui/header/setHidden', this.hidden) },
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