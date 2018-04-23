<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Dialogs</vt@page-header>
    <vt@page-intro>
      <code>$alert</code> 、 <code>$confirm</code> メソッドを利用する事でダイアログを表示します。
    </vt@page-intro>

    <dd-example is="basic" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Dialogs',
    }
  },
}
</script>
