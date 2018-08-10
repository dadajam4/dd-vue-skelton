<style lang="scss" scoped>
</style>

<template>
  <vt@app-header fixed color="plain" scroll-off :hidden="hidden">
    <vt@toolbar-title>{{title}}</vt@toolbar-title>
    <vt@spacer />
    <vt@toolbar-side-icon @click.stop="onClickToggleDrawer" />
  </vt@app-header>

</template>

<script>



export default {
  name: 'docs-header',

  props: {
    title: String,
    hidden: Boolean,
  },

  data() {
    return {
    }
  },

  watch: {
  },

  methods: {
    onClickToggleDrawer(e) {
      this.$emit('click-toggle-drawer');
    },
  },

  created() {
  },
}
</script>
