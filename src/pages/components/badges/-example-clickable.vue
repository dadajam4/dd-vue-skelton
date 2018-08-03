<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@badge @click-badge="clickCount = clickCount + 1">
        <span slot="badge">{{clickCount}}</span>
        <vt@icon md>fas fa-shopping-cart</vt@icon>
      </vt@badge>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
    }
  },
}
</script>
