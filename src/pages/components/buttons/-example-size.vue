<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
    >{{size}}</vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>
