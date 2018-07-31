<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@spinner class="vc@ma-md" v-for="value in [0, 20, 40, 60, 80, 100]" :value="value" :key="value" />
  </docs-example>
</template>

<script>
export default {
}
</script>
