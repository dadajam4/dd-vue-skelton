<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="text-xs-center">
      <vt@menu-fragment>
        <vt@btn color="primary" dark>
          Scale Transition
        </vt@btn>
        <vt@menu
          origin="center center"
          transition="vc@scale-transition"
          bottom
        >
          <vt@tile-group>
            <vt@tile v-for="item in items" :key="item.title" @click="">
              <vt@tile-content>
                <vt@tile-title>{{ item.title }}</vt@tile-title>
              </vt@tile-content>
            </vt@tile>
          </vt@tile-group>
        </vt@menu>
      </vt@menu-fragment>

      <vt@menu-fragment>
        <vt@btn color="primary" dark>
          Slide X Transition
        </vt@btn>
        <vt@menu
          transition="vc@slide-x-transition"
          bottom
          right
        >
          <vt@tile-group>
            <vt@tile v-for="item in items" :key="item.title" @click="">
              <vt@tile-content>
                <vt@tile-title>{{ item.title }}</vt@tile-title>
              </vt@tile-content>
            </vt@tile>
          </vt@tile-group>
        </vt@menu>
      </vt@menu-fragment>

      <vt@menu-fragment>
        <vt@btn color="primary" dark>
          Slide Y Transition
        </vt@btn>
        <vt@menu
          transition="vc@slide-y-transition"
          bottom
        >
          <vt@tile-group>
            <vt@tile v-for="item in items" :key="item.title" @click="">
              <vt@tile-content>
                <vt@tile-title>{{ item.title }}</vt@tile-title>
              </vt@tile-content>
            </vt@tile>
          </vt@tile-group>
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
