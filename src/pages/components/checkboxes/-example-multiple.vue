<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@checkbox
      v-for="item in items"
      :key="item"
      :label="item"
      :value="item"
      v-model="checked"
    />

    <pre><code>{{checked}}</code></pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
      items: [
        '太郎',
        '花子',
      ],
    }
  },
}
</script>