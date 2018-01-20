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
    <dd-example is="determinate" />
    <dd-example is="bar-indeterminate" />
    <dd-example is="bar-buffer" />
    <dd-example is="bar-query-indeterminate-and-determinate" />
    <dd-example is="bar-custom-height-and-contextual-colors" />
    <dd-example is="bar-custom-colors" />
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
