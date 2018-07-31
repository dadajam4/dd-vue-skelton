<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@pagination :length="15" v-model="page" total-visible="5"></vt@pagination>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
}
</script>
