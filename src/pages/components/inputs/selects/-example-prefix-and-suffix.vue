<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Prefix &amp; suffix">
    <template slot="description">
      フィールド内に前置詞や、後置詞を設置できます。<br>
      これは例えばURLや金額の入力等、単位や一部の文字が入力不要である事をユーザーに知らせる際に効果的です。
    </template>

    <vt@select label="前置詞（prefix）" prefix="$" :options="options" />
    <vt@select label="後置詞（suffix）" suffix="cm" :options="options" />
    <vt@select label="両方" prefix="https://" suffix=".com" :options="options" />
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