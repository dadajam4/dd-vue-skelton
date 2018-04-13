<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      サイズを(sm, md, lg)設定する事が可能です。挿入されたアイコンやボタン等はこのサイズに応じて自動で変化します。デフォルトはmdです。
    </template>

    <vt@select
      label="sm(small)"
      sm
      prefix="私は、、、"
      :options="options"
    >
      <vt@icon>address-book</vt@icon>
      <vt@btn right info icon="search" />
    </vt@select>

    <vt@select
      label="md(medium)"
      md
      prefix="私は、、、"
      :options="options"
    >
      <vt@icon>address-book</vt@icon>
      <vt@btn right info icon="search" />
    </vt@select>

    <vt@select
      label="lg(large)"
      lg
      prefix="私は、、、"
      :options="options"
    >
      <vt@icon>address-book</vt@icon>
      <vt@btn right info icon="search" />
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
}
</script>