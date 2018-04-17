<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@menu-fragment>
      <vt@card class="vc@portrait" img="img/portrait/portrait-2.jpg" height="450px"></vt@card>
      <vt@menu offset-y absolute contextmenu>
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
      menu: {show: false, x: 0, y: 0},
    }
  },

  methods: {
    showMenu(e) {
      e.preventDefault();
      this.menu.show = false;
      this.menu.x = e.clientX;
      this.menu.y = e.clientY;
      this.$nextTick(() => {
        this.menu.show = true;
      })
    },
  },
}
</script>
