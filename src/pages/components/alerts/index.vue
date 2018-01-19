<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Alerts</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="contextual" />
    <dd-example is="closable" />
    <dd-example is="outline" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Alerts',
    }
  },
}
</script>
