<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@alert
      v-for="myType in $ui.theme.contexts"
      :key="myType"
      :color="myType"
      value="true"
      outline
      dismissible
    >This is a {{myType}} alert. See more <a href="javascript:void(0);">info</a>.</vt@alert>
  </docs-example>
</template>

<script>
export default {
}
</script>
