<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Selects</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="multiple" />
    <dd-example is="prefix-and-suffix" />
    <dd-example is="with-icon" />
    <dd-example is="with-button" />
    <dd-example is="sizing" />
    <dd-example is="flat" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Selects',
    }
  },
}
</script>
