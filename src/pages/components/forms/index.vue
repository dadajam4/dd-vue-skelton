<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Forms</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="switches" />
    <dd-example is="sliders" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Forms',
    }
  },
}
</script>
