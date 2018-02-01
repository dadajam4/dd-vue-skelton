<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Toolbars</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="scroll" />
    <dd-example is="app-bar" />
    <dd-example is="extension" />
    <dd-example is="menu" />
    <dd-example is="search" />
    <dd-example is="dense" />
    <dd-example is="floating" />

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
