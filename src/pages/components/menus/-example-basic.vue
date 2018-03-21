<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu-fragment>
      <vt@btn primary dark>Dropdown</vt@btn>
      <vt@menu offset-y>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
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