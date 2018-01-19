<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Menus</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="absolute-position" />
    <dd-example is="absolute-position-without-activator" />
    <dd-example is="hover" />
    <dd-example is="menu" />
    <dd-example is="custom-transitions" />
    <dd-example is="popover-menu" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Menus',
    }
  },
}
</script>
