<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@breadcrumb>
      <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
      <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
      <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
    </vt@breadcrumb>

    <vt@breadcrumb divider="-">
      <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
      <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
      <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
    </vt@breadcrumb>

    <vt@breadcrumb>
      <vt@breadcrumb-item v-for="n in 20" :key="n">Link{{n}}</vt@breadcrumb-item>
    </vt@breadcrumb>
  </docs-example>
</template>

<script>
export default {
}
</script>