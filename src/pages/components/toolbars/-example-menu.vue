<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@toolbar>
      <vt@toolbar-side-icon />
      <vt@menu-fragment>
        <vt@toolbar-title>
          <span>{{selected}}</span>
          <vt@icon dark>$ui.icons.dropdown</vt@icon>
        </vt@toolbar-title>
        <vt@menu :nudge-width="100">
          <vt@tile-group>
            <vt@tile v-for="item in items" :key="item" @click="selected = item">
              <vt@tile-content>
                <vt@tile-title v-text="item"></vt@tile-title>
              </vt@tile-content>
            </vt@tile>
          </vt@tile-group>
        </vt@menu>
      </vt@menu-fragment>
      <vt@spacer />
      <vt@btn flat icon>
        <vt@icon>$ui.icons.search</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>$ui.icons.notification</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>$ui.icons.refresh</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>$ui.icons.dotsVertical</vt@icon>
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
