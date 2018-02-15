<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@checkbox
      label="modelなし"
      value="aaa"
      name="checkbox"
      :rules="[
        {rule: 'required', message: 'この項目は必須です'},
      ]"
    />

    <vt@checkbox
      :label="`modelあり: ${checked || 'null'}`"
      v-model="checked"
      value="checked"
      :rules="[
        {rule: 'required', message: 'この項目は必須です'},
      ]"
    />
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checked: null,
    }
  },
}
</script>