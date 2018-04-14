<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>flat</code> 属性を設定する事でフラットなレイアウトで表示します。
    </template>

    <vt@input
      label="氏名"
      placeholder="山田　太郎"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      flat
    />

    <vt@textarea
      label="コメント"
      placeholder="コメントを入力"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      flat
    />
  </docs-example>
</template>

<script>
export default {
}
</script>