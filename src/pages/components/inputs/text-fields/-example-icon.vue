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
      <vt@icon>search</vt@icon>
    </vt@input>

    <vt@input label="right">
      <vt@icon right>search</vt@icon>
    </vt@input>

    <vt@input label="リスナー登録">
      <vt@icon @click="onClick">search</vt@icon>
    </vt@input>
  </docs-example>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      alert('click!');
    },
  },
}
</script>