<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Avatars</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="standard-display" />
    <dd-example is="icon-and-text" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Avatars',
    }
  },
}
</script>
