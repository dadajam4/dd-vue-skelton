<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Buttons</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="flat" />
    <dd-example is="fill" />
    <dd-example is="outline" />
    <dd-example is="block" />
    <dd-example is="size" />
    <dd-example is="icon" />
    <dd-example is="includes-icon" />
    <dd-example is="disabled" />
    <dd-example is="loaders" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Button',
    }
  },
}
</script>
