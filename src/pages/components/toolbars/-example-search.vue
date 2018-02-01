<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@toolbar>
      <vt@toolbar-side-icon />
      <vt@text-field
        type="search"
        left-icon="search"
        flat
      />
      <vt@spacer />
      <vt@btn icon>
        <vt@icon>th</vt@icon>
      </vt@btn>
      <vt@btn icon>
        <vt@icon>refresh</vt@icon>
      </vt@btn>
      <vt@btn icon>
        <vt@icon>ellipsis-v</vt@icon>
      </vt@btn>
    </vt@toolbar>
  </docs-example>
</template>

<script>
export default {
  data: () => ({
    selected: 'All',
    items: [
      'All', 'Family', 'Friends', 'Coworkers'
    ]
  }),
}
</script>