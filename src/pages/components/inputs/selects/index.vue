<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Selects</vt@page-header>
    <vt@page-intro>
      <code>vt@select</code> コンポーネントを利用する事で、リスト項目の中からユーザーに選択をさせる事が可能です。
    </vt@page-intro>

    <dd-example is="use-tags" />
    <dd-example is="use-props" />
    <dd-example is="multiple" />
    <dd-example is="icon" />
    <dd-example is="prefix-and-suffix" />
    <dd-example is="button" />
    <dd-example is="sizing" />
    <dd-example is="autocomplete" />
    <dd-example is="customize-selection" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Selects',
    }
  },
}
</script>
