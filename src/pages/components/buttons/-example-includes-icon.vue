<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      color="primary"
    >
      <vt@icon left>$ui.icons.user</vt@icon>
      left
    </vt@btn>

    <vt@btn
      color="info"
    >
      right
      <vt@icon right>$ui.icons.search</vt@icon>
    </vt@btn>

    <vt@btn
      color="info"
    >
      <vt@icon left>$ui.icons.code</vt@icon>
      both
      <vt@icon right>$ui.icons.comment</vt@icon>
    </vt@btn>
  </docs-example>
</template>

<script>
export default {
}
</script>
