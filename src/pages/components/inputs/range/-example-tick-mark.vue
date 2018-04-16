<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>ticks</code> 属性を指定する事で、操作中の間入力が可能な位置（step属性で指定された位置）に目盛り表示が行われます。<br>
      この表示を操作中ではなく常に表示させるには、 <code>persistent-ticks</code> 属性を指定してください。
    </template>

    <vt@range
      v-model="range"
      label="Normal"
      hint="50以下で入力してください"
      rules="max_value:50 | 50以下で入力してください"
      ticks
      step="20"
    />

    <vt@range
      v-model="range"
      label="Persistent"
      hint="50以下で入力してください"
      rules="max_value:50 | 50以下で入力してください"
      ticks
      persistent-ticks
      step="20"
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