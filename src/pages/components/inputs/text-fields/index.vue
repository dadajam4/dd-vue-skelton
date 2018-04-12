<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Text fields</vt@page-header>
    <vt@page-intro>
      <code>vt@input</code> 、及び <code>vt@textarea</code> コンポーネントを利用する事で、IMEによるユーザーの入力を受け付ける事ができます。
    </vt@page-intro>

    <dd-example is="basic" />
<!--
    <dd-example is="label" />
-->
    <dd-example is="icon" />
    <dd-example is="prefix-and-suffix" />
    <dd-example is="button" />
    <dd-example is="sizing" />
    <dd-example is="suggest" />

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
