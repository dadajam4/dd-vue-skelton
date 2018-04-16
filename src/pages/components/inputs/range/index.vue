<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Range</vt@page-header>
    <vt@page-intro>
      <code>vt@range</code> コンポーネントを利用する事で、特定の範囲から入力を行う事が可能です。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="multiple" />
    <dd-example is="tick-mark" />
    <dd-example is="icon" />
    <dd-example is="thumbnail-label" />
    <dd-example is="colors" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Range',
    }
  },
}
</script>
