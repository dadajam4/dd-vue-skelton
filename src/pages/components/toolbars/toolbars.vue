<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Toolbars</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="app-bar" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Toolbars',
    }
  },
}
</script>
