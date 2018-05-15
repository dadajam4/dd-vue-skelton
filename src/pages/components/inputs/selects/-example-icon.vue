<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      フィールド内にアイコンを挿入する際は、コンポーネント内に直接 <code>vt@icon</code> コンポーネントを挿入します。<br>
      その際、 <code>left</code> 、もしくは <code>right</code> をpropsで指定します。デフォルトはleftです。<br>
      クリック等のリスナは自由に設定可能です。（※event.stopPropagation が必要です）
    </template>

    <vt@select label="デフォルト（left）" :options="options">
      <vt@icon>search</vt@icon>
    </vt@select>

    <vt@select label="right（デフォルトのアイコンが上書きされます）" :options="options">
      <vt@icon right>search</vt@icon>
    </vt@select>

    <vt@select label="リスナー登録" :options="options">
      <vt@icon @click.stop="onClick">search</vt@icon>
    </vt@select>

    <vt@select label="ツールチップ" :options="options">
      <vt@tooltip-fragment>
        <vt@icon>search</vt@icon>
        <vt@tooltip>ツールチップ</vt@tooltip>
      </vt@tooltip-fragment>
    </vt@select>

    <vt@select label="ツールチップ &amp; position" :options="options">
      <vt@tooltip-fragment>
        <vt@icon right>search</vt@icon>
        <vt@tooltip>ツールチップ</vt@tooltip>
      </vt@tooltip-fragment>
    </vt@select>
  </docs-example>
</template>

<script>
export default {
  computed: {
    options: () => [
      {value: 1, label: '選択肢 1'},
      {value: 2, label: '選択肢 2'},
      {value: 3, label: '選択肢 3'},
    ],
  },

  methods: {
    onClick(e) {
      this.$alert('click!');
    },
  },
}
</script>
