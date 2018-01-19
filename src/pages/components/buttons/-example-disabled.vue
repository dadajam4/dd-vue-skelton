<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      v-for="myType in ['flat', 'default', 'outline']"
      :key="myType"
      v-bind="{[myType]: myType !== 'default'}"
      info
      disabled
    >{{myType}}</vt@btn>
    <vt@btn
      icon
      disabled
    ><vt@icon>bars</vt@icon></vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>