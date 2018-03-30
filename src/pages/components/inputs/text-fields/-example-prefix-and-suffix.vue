<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Prefix &amp; suffix">
    <template slot="description">
      フィールド内に前置詞や、後置詞を設置できます。<br>
      これは例えばURLや金額の入力等、単位や一部の文字が入力不要である事をユーザーに知らせる際に効果的です。
    </template>

    <vt@input label="前置詞（prefix）" prefix="$" />
    <vt@input label="後置詞（suffix）" suffix="cm" />
    <vt@input label="両方" prefix="https://" suffix=".com" />
  </docs-example>
</template>

<script>
export default {
}
</script>