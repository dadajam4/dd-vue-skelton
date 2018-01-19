<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Breadcrumbs</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="text-dividers" />
    <dd-example is="alignment" />
    <dd-example is="sizing" />
    <dd-example is="icon-dividers" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Breadcrumbs',
    }
  },
}
</script>
