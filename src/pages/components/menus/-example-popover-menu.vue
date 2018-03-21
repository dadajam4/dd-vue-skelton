<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu-fragment>
      <vt@btn primary dark>Dropdown</vt@btn>
      <vt@menu offset-x :close-on-content-click="false" :nudge-width="200">
        <div>これはメニューです</div>
      </vt@menu>
    </vt@menu-fragment>
  </docs-example>
</template>

<script>
export default {
}
</script>