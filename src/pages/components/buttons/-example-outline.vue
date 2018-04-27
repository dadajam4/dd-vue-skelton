<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@switch
      v-model="disabled"
      :inline="false"
      color="grey"
    >disabled</vt@switch>

    <vt@btn
      v-for="myType in CONTEXT_TYPES"
      :key="myType"
      v-bind="{[myType]: true}"
      outline
      :disabled="disabled"
    >{{myType}}</vt@btn>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    }
  },
}
</script>
