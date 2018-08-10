<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@spinner
      class="vc@ma-md"
      v-for="color in $ui.theme.contexts"
      :key="color"
      :color="color"
      indeterminate
    />
  </docs-example>
</template>

<script>
export default {
}
</script>
