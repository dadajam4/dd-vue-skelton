<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Text fields</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="text-area" />
    <dd-example is="prefix-and-suffix" />
    <dd-example is="with-icon" />
    <dd-example is="with-button" />
    <dd-example is="suggesting" />
    <dd-example is="hint-text" />
    <dd-example is="character-counter" />
    <dd-example is="sizing" />
    <dd-example is="flat" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Text fields',
    }
  },
}
</script>
