<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu offset-x :close-on-content-click="false" :nudge-width="200">
      <vt@btn primary dark slot="activator">Dropdown</vt@btn>
      <div>これはメニューです</div>
    </vt@menu>
  </docs-example>
</template>

<script>
export default {
}
</script>