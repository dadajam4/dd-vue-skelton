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
  },

  data() {
    return {
    }
  },

  computed: {
    classes() {
      return {
        'vc@app-header': true,
      }
    },
  },

  created() {
    this.$store.commit('ui/header/set', {fixed: this.fixed});
  },

  beforeDestroy() {
  },

  destroyed() {
    this.$store.commit('ui/header/release');
  },
}
</script>