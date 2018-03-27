<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@avatar
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :size="size"
      :alt="size"
      :key="size"
      src="~assets/img/avatar/nigaoe_murou_saisei.png"
    />
  </docs-example>
</template>

<script>
export default {
}
</script>