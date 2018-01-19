<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <h3>モデル無し</h3>
    <vt@radio-group name="radio1">
      <vt@radio label="Radio 1" value="radio-1"></vt@radio>
      <vt@radio label="Radio 2" value="radio-2"></vt@radio>
    </vt@radio-group>

    <h3>モデル有り</h3>
    <p>&gt;&gt;&gt; {{radio1}}</p>
    <vt@radio-group v-model="radio1" row>
      <vt@radio label="Radio 1" value="radio-1"></vt@radio>
      <vt@radio label="Radio 2" value="radio-2"></vt@radio>
      <vt@radio label="Radio 3" value="radio-3"></vt@radio>
      <vt@radio label="Radio 4" value="radio-4"></vt@radio>
      <vt@radio label="Radio 5" value="radio-5"></vt@radio>
      <vt@radio label="Radio 6" value="radio-6"></vt@radio>
      <vt@radio label="Radio 7" value="radio-7"></vt@radio>
      <vt@radio label="Radio 8" value="radio-8"></vt@radio>
      <vt@radio label="Radio 9" value="radio-9"></vt@radio>
      <vt@radio label="Radio 10" value="radio-10"></vt@radio>
    </vt@radio-group>

    <h3>状態</h3>
    <vt@radio-group name="radio2" disabled>
      <vt@radio label="Radio 1" value="radio-1"></vt@radio>
      <vt@radio label="Radio 2" value="radio-2"></vt@radio>
    </vt@radio-group>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      radio1: null,
    }
  },
}
</script>