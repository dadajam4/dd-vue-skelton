<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Tabs</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="use-model" />
    <dd-example is="color" />
    <dd-example is="centered" />
    <dd-example is="scrollable" />
    <dd-example is="wraped" />

  </vt@page>
</template>

<script>



export default {
  $_anchors,

  head() {
    return {
      title: 'Tabs',
    }
  },
}
</script>
