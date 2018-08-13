<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@switch
      v-model="disabled"
      :inline="false"
      color="grey"
    >disabled</vt@switch>

    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
      :disabled="disabled"
    ><vt@icon>$ui.icons.menu</vt@icon></vt@btn>

    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
      color="primary"
      :disabled="disabled"
    ><vt@icon>$ui.icons.menu</vt@icon></vt@btn>

    <vt@btn
      v-for="size in ['sm', 'default', 'lg']"
      :key="size"
      v-bind="{[size]: size !== 'default'}"
      icon
      outline
      color="info"
      :disabled="disabled"
    ><vt@icon>$ui.icons.menu</vt@icon></vt@btn>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    }
  },
}
</script>
