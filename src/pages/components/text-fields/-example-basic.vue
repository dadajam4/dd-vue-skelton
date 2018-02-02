<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="モデルなし"
      name="input"
      placeholder="田中　太郎"
    ></vt@text-field>

    <vt@text-field
      label="モデルあり"
      v-model="input"
      placeholder="田中　太郎"
    ></vt@text-field>

    <vt@alert info>
      {{input ? input : '未入力です'}}
    </vt@alert>
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