<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt-progress-bar v-model="valueDeterminate" />
  </docs-example>
</template>

<script>

export default {
  data() {
    return {
      valueDeterminate: 50,
    }
  },
}
</script>