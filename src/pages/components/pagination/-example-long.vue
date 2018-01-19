<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text--center">
      <vt@pagination :length="15" v-model="page"></vt@pagination>
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