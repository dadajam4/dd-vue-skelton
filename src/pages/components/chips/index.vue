<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Chips</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="colored" />
    <dd-example is="icon" />
    <dd-example is="outline" />
    <dd-example is="label" />
    <dd-example is="closable" />
    <dd-example is="sizing" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Chips',
    }
  },
}
</script>
