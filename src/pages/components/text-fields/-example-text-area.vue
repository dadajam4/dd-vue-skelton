<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      type="textarea"
      label="モデルなし"
      name="input"
      placeholder="ここに文章を入力ください"
    ></vt@text-field>

    <vt@text-field
      type="textarea"
      label="モデルあり"
      v-model="input"
      placeholder="ここに文章を入力ください"
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