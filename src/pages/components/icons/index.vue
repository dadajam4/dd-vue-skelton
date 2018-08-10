<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Icons</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="sizing" />
    <dd-example is="rotation" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Icons',
    }
  },

  mounted() {
    // console.warn(this.$ui.hasWindow, this.$ui.icons);
  },
}
</script>
