<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@slider
      thumb-label
      min="0"
      max="240"
      v-model="size"
      label="size"
      :thumb-label-assist="size => size + 'px'"
    />
    <vt@switch :label="tile ? 'tile' : 'circle'" v-model="tile" />

    <vt@avatar :size="size" :tile="tile">
      <img src="~assets/img/avatar/nigaoe_murou_saisei.png" alt="">
    </vt@avatar>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      size: 56,
      tile: false,
    }
  },
}
</script>