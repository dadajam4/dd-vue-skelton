<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>thumb-label</code> 属性を指定する事で、操作中の間サムネイルにラベルを表示可能です。<br>
      操作中のみでなく常にラベルを表示させる場合、 <code>persistent-thumb-label</code> 属性を指定してください。<br>
      <code>thumb-label</code> 属性にコールバックを指定する事で表示内容をカスタマイズ可能です。このコールバックはプレーンなテキスト、もしくはvnodeインスタンスを返却してください。
    </template>

    <vt@range
      v-model="range"
      label="ラベル"
      multiple
      thumb-label
      step="10"
    />

    <pre>
      <code>{{range}}</code>
    </pre>

    <vt@range
      label="ラベル"
      :thumb-label="e => { return e + 'cm' }"
      persistent-thumb-label
    />
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