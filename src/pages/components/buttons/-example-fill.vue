<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      v-for="myType in CONTEXT_TYPES"
      :key="myType"
      v-bind="{[myType]: true}"
    >{{myType}}</vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>