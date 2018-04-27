<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@toolbar>
      <vt@toolbar-side-icon />
      <vt@input
        type="search"
        flat
      >
        <vt@icon>search</vt@icon>
      </vt@input>
      <vt@spacer />
      <vt@btn flat icon>
        <vt@icon>th</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>refresh</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
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
