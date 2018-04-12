<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      入力にいくつかの候補を表示する事ができます。
    </template>

    <vt@input
      label="検索ワード"
      placeholder="google"
      hint="検索ワードを入力してください"
      :suggests="univercities"
    />

    <vt@input
      label="表示する最大件数を指定可能です"
      placeholder="google"
      hint="「o」を入力で3件以上ヒットしない事を確認してください"
      :suggests="univercities"
      max-suggests="3"
    />

    <vt@input
      label="入力値がない時にも候補を表示する事ができます"
      placeholder="google"
      :suggests="univercities"
      always-suggests
    />

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