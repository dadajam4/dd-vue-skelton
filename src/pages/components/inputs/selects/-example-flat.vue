<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>flat</code> 属性を設定する事でフラットなレイアウトで表示します。
    </template>

    <vt@select
      label="遠足の予算"
      prefix="約"
      :options="options"
      flat
    />
  </docs-example>
</template>

<script>
export default {
  computed: {
    options: () => [
      {value: 1000, label: '1000円'},
      {value: 2000, label: '2000円'},
      {value: 3000, label: '3000円'},
    ],
  },
}
</script>