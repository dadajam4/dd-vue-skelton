<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Form</vt@page-header>
    <vt@page-intro>
      <code>vt@form</code> コンポーネントを利用する事で、複数の入力コントロールのバリデーションや、入力状態を検知、コントロール可能です。
    </vt@page-intro>

    <dd-example is="usage" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Form',
    }
  },
}
</script>
