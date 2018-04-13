<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      選択結果の表示は <code>slot-scope</code> を利用する事でカスタマイズ可能です。
    </template>

    <vt@select
      label="vt@chipを利用する例"
      multiple
    >
      <template slot="selection" slot-scope="option">
        <vt@chip
          info
          :close="option.deselect"
          :key="option.value"
        >
          {{option.label}}
        </vt@chip>
      </template>
      <vt@option value="1">項目1</vt@option>
      <vt@option value="2">項目2</vt@option>
      <vt@option value="3">項目3</vt@option>
    </vt@select>

  </docs-example>
</template>

<script>
export default {
}
</script>