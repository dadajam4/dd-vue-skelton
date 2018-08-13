<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      v-for="myType in ['flat', 'default', 'outline']"
      :key="myType"
      v-bind="{[myType]: myType !== 'default'}"
      color="info"
      disabled
    >{{myType}}</vt@btn>
    <vt@btn
      key="icon"
      icon
      disabled
    ><vt@icon>$ui.icons.menu</vt@icon></vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>
