<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text--center">
      <vt@pagination :length="6" v-model="page" circle></vt@pagination>
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