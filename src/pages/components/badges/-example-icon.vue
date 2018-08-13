<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@badge overlap left color="success">
        <vt@icon slot="badge">$ui.icons.check</vt@icon>
        <vt@icon md>$ui.icons.user</vt@icon>
      </vt@badge>

      <vt@badge overlap right class="vc@ml-xl" color="secondary">
        <vt@icon slot="badge">$ui.icons.notification</vt@icon>
        <vt@icon md>$ui.icons.user</vt@icon>
      </vt@badge>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>
