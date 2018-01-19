<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu offset-y absolute full-width>
      <vt@card class="portrait" img="img/portrait/portrait-1.jpg" height="450px" slot="activator"></vt@card>
      <vt@list>
        <vt@list-tile v-for="item in items" :key="item.title" @click="">
          <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
        </vt@list-tile>
      </vt@list>
    </vt@menu>
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