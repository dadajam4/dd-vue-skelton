<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@toolbar>
      <vt@toolbar-side-icon />
      <vt@menu :nudge-width="100">
        <vt@toolbar-title slot="activator">
          <span>{{selected}}</span>
          <vt@icon dark>caret-down</vt@icon>
        </vt@toolbar-title>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item" @click="selected = item">
            <vt@list-tile-title v-text="item"></vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
      <vt@spacer />
      <vt@btn icon>
        <vt@icon>search</vt@icon>
      </vt@btn>
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