<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      test
    </template>

    <vt@menu-fragment>
      <vt@input
        v-model="menued"
      >
        <vt@icon>calendar</vt@icon>
      </vt@input>
      <vt@date-picker-menu
        v-model="menued"
        cancellable
      />
    </vt@menu-fragment>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      menued: null,
    }
  },
}
</script>
