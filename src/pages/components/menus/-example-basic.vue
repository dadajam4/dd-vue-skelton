<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu-fragment>
      <vt@btn color="primary">Dropdown</vt@btn>
      <vt@menu offset-y>
        <vt@tile-group>
          <vt@tile v-for="item in items" :key="item.title" @click="">
            <vt@tile-content>
              <vt@tile-title>{{ item.title }}</vt@tile-title>
            </vt@tile-content>
          </vt@tile>
        </vt@tile-group>
      </vt@menu>
    </vt@menu-fragment>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  },
}
</script>
