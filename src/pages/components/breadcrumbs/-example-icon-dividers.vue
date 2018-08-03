<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@breadcrumb>
      <vt@icon slot="divider">fas fa-arrow-right</vt@icon>
      <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
      <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
      <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
    </vt@breadcrumb>

    <vt@breadcrumb>
      <vt@icon slot="divider">fas fa-angle-right</vt@icon>
      <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
      <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
      <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
    </vt@breadcrumb>
  </docs-example>
</template>

<script>
export default {
}
</script>
