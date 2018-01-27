<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Tooltips</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="default" />
    <dd-example is="visibility" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Tooltips',
    }
  },
}
</script>
