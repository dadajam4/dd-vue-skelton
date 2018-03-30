<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Text fields</vt@page-header>
    <vt@page-intro>
      <code>vt@input</code> コンポーネントを利用する事で、IMEによるユーザーの入力を受け付ける事ができます。<br>
      このコンポーネントは1行、または複数行の入力を制御可能です。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="label" />
    <dd-example is="icon" />
    <dd-example is="prefix-and-suffix" />
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
