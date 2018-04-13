<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      IMEの入力で選択項目をフィルタリングする事が可能です。
    </template>

    <vt@select
      label="autocomplete"
      autocomplete
    >
      <vt@option value="1">This is a dog</vt@option>
      <vt@option value="2">this IS a PEN</vt@option>
      <vt@option value="3">項目3</vt@option>
    </vt@select>

  </docs-example>
</template>

<script>
export default {
  computed: {
    univercities: () => [
      'google',
      'Google is awesome!!!',
      'Yahoo',
      'GOO',
      'oracle',
    ],
  },
}
</script>