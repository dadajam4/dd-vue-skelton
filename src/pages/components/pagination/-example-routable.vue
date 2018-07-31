<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@pagination :length="6" routable></vt@pagination>
    </div>

    <div class="vc@text-center">
      <vt@pagination :length="6" :routable="{query: 'fuga'}"></vt@pagination>
    </div>

    <div class="vc@text-center">
      <vt@pagination :length="6" :routable="{base: '/components/pagination', params: 'page'}"></vt@pagination>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>
