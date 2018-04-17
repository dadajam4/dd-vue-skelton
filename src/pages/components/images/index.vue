<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Images</vt@page-header>
    <vt@page-intro>
      <code>vt@img</code> は通常のimgタグのように振る舞いますが、注入する属性によっていくつかの制御が可能です。
    </vt@page-intro>

    <dd-example is="basic" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Images',
    }
  },
}
</script>
