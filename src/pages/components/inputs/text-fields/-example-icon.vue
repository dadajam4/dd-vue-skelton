<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      フィールド内にアイコンを挿入する際は、コンポーネント内に直接 <code>vt@icon</code> コンポーネントを挿入します。<br>
      その際、 <code>left</code> 、もしくは <code>right</code> をpropsで指定します。デフォルトはleftです。<br>
      もちろんクリック等のリスナは自由に設定可能です。
    </template>

    <vt@input label="デフォルト（left）">
      <vt@icon>$ui.icons.search</vt@icon>
    </vt@input>

    <vt@input label="right">
      <vt@icon right>$ui.icons.search</vt@icon>
    </vt@input>

    <vt@input label="リスナー登録">
      <vt@icon @click="onClick">$ui.icons.search</vt@icon>
    </vt@input>

    <vt@input label="ツールチップ">
      <vt@tooltip-fragment>
        <vt@icon>$ui.icons.search</vt@icon>
        <vt@tooltip>ツールチップ</vt@tooltip>
      </vt@tooltip-fragment>
    </vt@input>

    <vt@input label="ツールチップ &amp; position">
      <vt@tooltip-fragment>
        <vt@icon right>$ui.icons.search</vt@icon>
        <vt@tooltip>ツールチップ</vt@tooltip>
      </vt@tooltip-fragment>
    </vt@input>
  </docs-example>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      this.$ui.alert('click!');
    },
  },
}
</script>
