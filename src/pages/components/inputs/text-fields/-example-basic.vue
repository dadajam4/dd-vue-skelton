<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      ラベル、プレースホルダ、カウンター、バリデーションの1セットの例です。
    </template>
    <vt@input
      label="氏名"
      placeholder="山田　太郎"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      v-model="input"
    />

    <pre>
      <code>{{input}}</code>
    </pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      input: null,
    }
  },
}
</script>