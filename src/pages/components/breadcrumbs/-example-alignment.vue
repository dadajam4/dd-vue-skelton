<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div v-for="key in ['left', 'center', 'right']" :key="key">
      <h3>{{key}}</h3>
      <vt@breadcrumb v-bind="{[key]: true}">
        <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
        <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
        <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
      </vt@breadcrumb>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>