<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      アイコンを挿入可能です。
    </template>

    <vt@range
      label="Media volume"
      rules="max_value:75 | ボリュームが大きすぎるかもしれません"
    >
      <vt@icon>$ui.icons.user</vt@icon>
    </vt@range>

    <vt@range
      label="Brightness"
    >
      <vt@icon right>$ui.icons.home</vt@icon>
    </vt@range>
  </docs-example>
</template>

<script>
export default {
}
</script>
