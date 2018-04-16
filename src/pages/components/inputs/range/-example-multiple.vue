<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>multiple</code> 属性を指定する事で、2つの入力を同時に行う事ができます。<br>
      この場合内部的には2つのinput要素が生成され、 v-model 利用時は配列が同期されます。
    </template>

    <vt@range
      v-model="range"
      label="ラベル"
      multiple
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