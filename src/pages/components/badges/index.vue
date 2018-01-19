<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Badges</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="standard-display" />
    <dd-example is="colors" />
    <dd-example is="outline" />
    <dd-example is="icon" />
    <dd-example is="inline" />
    <dd-example is="visibility" />
    <dd-example is="clickable" />
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Badges',
    }
  },
}
</script>
