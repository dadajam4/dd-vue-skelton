<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="text-xs-center">
      <vt@menu
        origin="center center"
        transition="vc@scale-transition"
        bottom
      >
        <vt@btn primary dark slot="activator">
          Scale Transition
        </vt@btn>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>

      <vt@menu
        transition="vc@slide-x-transition"
        bottom
        right
      >
        <vt@btn primary dark slot="activator">
          Slide X Transition
        </vt@btn>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>

      <vt@menu
        transition="vc@slide-y-transition"
        bottom
      >
        <vt@btn primary dark slot="activator">
          Slide Y Transition
        </vt@btn>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
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