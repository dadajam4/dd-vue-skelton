<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div>
      <vt@menu-fragment>
        <vt@btn primary dark slot="activator">Dropdown</vt@btn>
        <vt@menu offset-y open-on-hover>
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </vt@menu-fragment>
    </div>
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