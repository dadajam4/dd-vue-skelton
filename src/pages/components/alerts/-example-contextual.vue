<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@alert
      v-for="myType in $ui.theme.contexts"
      :key="myType"
      :color="myType"
      value="true"
    >This is a {{myType}} alert.</vt@alert>
  </docs-example>
</template>

<script>
export default {
}
</script>
