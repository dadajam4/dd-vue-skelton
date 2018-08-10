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
      v-for="myType in $ui.theme.contexts"
      :key="myType"
      :color="myType"
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
