<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@spinner class="vc@ma-md" v-for="color in TEXT_COLORS" :text-color="color" indeterminate :key="color" />
  </docs-example>
</template>

<script>
export default {
}
</script>
