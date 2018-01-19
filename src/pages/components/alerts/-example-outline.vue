<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@alert
      v-for="myType in CONTEXT_TYPES"
      :key="myType"
      v-bind="{[myType]: true}"
      value="true"
      outline
      dismissible
    >This is a {{myType}} alert.</vt@alert>
  </docs-example>
</template>

<script>
export default {
}
</script>