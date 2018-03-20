<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div>
      <vt@menu-fragment>
        <vt@btn primary dark slot="activator">Dropdown</vt@btn>
        <vt@menu offset-x :close-on-content-click="false" :nudge-width="200">
          <div>これはメニューです</div>
        </vt@menu>
      </vt@menu-fragment>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>