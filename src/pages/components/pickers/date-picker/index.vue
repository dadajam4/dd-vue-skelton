<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Date picker</vt@page-header>
    <vt@page-intro>
      <code>vt@date-picker</code> だよ。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="menu-and-dialog" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Date picker',
    }
  },
}
</script>
