<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Menus</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="basic" data-anchor-point>
      <vt@menu offset-y>
        <vt@btn primary dark slot="activator">Dropdown</vt@btn>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
    </vt@page-section>

    <vt@page-section title id="absolute-position" data-anchor-point>
      <vt@menu offset-y absolute full-width>
        <vt@card class="portrait" img="img/portrait/portrait-1.jpg" height="450px" slot="activator"></vt@card>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
    </vt@page-section>

    <vt@page-section title id="absolute-position-without-activator" data-anchor-point>
      <vt@card class="portrait" img="img/portrait/portrait-2.jpg" height="450px" @contextmenu="showMenu1"></vt@card>
      <vt@menu offset-y absolute v-model="menu1.show" :position-x="menu1.x" :position-y="menu1.y">
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
    </vt@page-section>

    <vt@page-section title id="hover" data-anchor-point>
      <vt@menu offset-y open-on-hover>
        <vt@btn primary dark slot="activator">Dropdown</vt@btn>
        <vt@list>
          <vt@list-tile v-for="item in items" :key="item.title" @click="">
            <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
          </vt@list-tile>
        </vt@list>
      </vt@menu>
    </vt@page-section>

    <vt@page-section title id="menu" data-anchor-point>
      <vt@card>
        <vt@toolbar color="cyan" dark>
          <vt@toolbar-side-icon></vt@toolbar-side-icon>
          <vt@toolbar-title>これはツールバーです。これはツールバーです。これはツールバーです。</vt@toolbar-title>
          <vt@spacer></vt@spacer>
          <vt@menu bottom left>
            <vt@toolbar-side-icon slot="activator"></vt@toolbar-side-icon>
            <vt@list>
              <vt@list-tile v-for="item in items" :key="item.title" @click="">
                <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
              </vt@list-tile>
            </vt@list>
          </vt@menu>
        </vt@toolbar>

        <vt@list>
          <vt@list-tile @click="">
            <vt@list-tile-avatar>
              <img src="~assets/img/avatar/boy_1.png" alt="">
            </vt@list-tile-avatar>
            <vt@list-tile-content>
              <vt@list-tile-title>タイトル</vt@list-tile-title>
              <vt@list-tile-sub-title>サブタイトル</vt@list-tile-sub-title>
            </vt@list-tile-content>
          </vt@list-tile>
        </vt@list>
      </vt@card>
    </vt@page-section>

    <vt@page-section title id="custom-transitions" data-anchor-point>
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
    </vt@page-section>

    <vt@page-section title id="popover-menu" data-anchor-point>
      <vt@menu offset-x :close-on-content-click="false" :nudge-width="200">
        <vt@btn primary dark slot="activator">Dropdown</vt@btn>
        <div>これはメニューです</div>
      </vt@menu>
    </vt@page-section>
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Menus',
    }
  },

  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      menu1: {show: false, x: 0, y: 0},
    }
  },

  computed: {
  },

  methods: {
    showMenu1(e) {
      e.preventDefault()
      this.menu1.show = false
      this.menu1.x = e.clientX
      this.menu1.y = e.clientY
      this.$nextTick(() => {
        this.menu1.show = true
      })
    },

  },

  created() {
  },
}
</script>
