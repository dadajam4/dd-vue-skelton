<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Progress</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="colored" />
    <dd-example is="indeterminate" />
    <dd-example is="size-and-width" />
    <dd-example is="rotate" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Progress',
    }
  },
}
</script>
