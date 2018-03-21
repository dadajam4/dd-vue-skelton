<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="text-xs-center">
      <vt@menu-fragment>
        <vt@btn primary dark>
          Scale Transition
        </vt@btn>
        <vt@menu
          origin="center center"
          transition="vc@scale-transition"
          bottom
        >
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </vt@menu-fragment>

      <vt@menu-fragment>
        <vt@btn primary dark>
          Slide X Transition
        </vt@btn>
        <vt@menu
          transition="vc@slide-x-transition"
          bottom
          right
        >
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </vt@menu-fragment>

      <vt@menu-fragment>
        <vt@btn primary dark>
          Slide Y Transition
        </vt@btn>
        <vt@menu
          transition="vc@slide-y-transition"
          bottom
        >
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