<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Pagination</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="long" />
    <dd-example is="limit" />
    <dd-example is="round" />
    <dd-example is="disabled" />
    <dd-example is="guard" />
    <dd-example is="no-model" />
    <dd-example is="routable" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Pagination',
    }
  },
}
</script>
