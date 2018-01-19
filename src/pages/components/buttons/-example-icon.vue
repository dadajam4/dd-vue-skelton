<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
    ><vt@icon>bars</vt@icon></vt@btn>

    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
      primary
    ><vt@icon>bars</vt@icon></vt@btn>

    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
      outline
      info
    ><vt@icon>bars</vt@icon></vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>