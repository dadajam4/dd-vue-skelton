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
  },

  beforeDestroy() {
  },

  destroyed() {
  },
}
</script>