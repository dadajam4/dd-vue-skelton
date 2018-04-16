<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      基本的な利用例です。
    </template>

    <vt@range
      v-model="range"
      label="ラベル"
      hint="50以下で入力してください"
      rules="max_value:50 | 50以下で入力してください"
    />

    <pre>
      <code>{{range}}</code>
    </pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      range: null,
    }
  },
}
</script>