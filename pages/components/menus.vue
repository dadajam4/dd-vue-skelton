<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Menus</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

      <section id="basic" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Basic</h2>

        <vt@menu offset-y>
          <vt@btn primary dark slot="activator">Dropdown</vt@btn>
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </section>

      <section id="absolute-position" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Absolute position</h2>

        <vt@menu offset-y absolute full-width>
          <vt@card class="portrait" img="/img/portrait/portrait-1.jpg" height="450px" slot="activator"></vt@card>
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </section>

      <section id="absolute-position-without-activator" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Absolute position without activator</h2>
        <vt@card class="portrait" img="/img/portrait/portrait-2.jpg" height="450px" @contextmenu="showMenu1"></vt@card>
        <vt@menu offset-y absolute v-model="menu1.show" :position-x="menu1.x" :position-y="menu1.y">
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </section>

      <section id="hover" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Hover</h2>

        <vt@menu offset-y open-on-hover>
          <vt@btn primary dark slot="activator">Dropdown</vt@btn>
          <vt@list>
            <vt@list-tile v-for="item in items" :key="item.title" @click="">
              <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
            </vt@list-tile>
          </vt@list>
        </vt@menu>
      </section>

      <section id="menu" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Menu</h2>

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
      </section>

      <section id="custom-transitions" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Custom transitions</h2>

        <div class="text-xs-center">
          <vt@menu
            origin="center center"
            transition="vc@transition-scale"
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
            transition="vc@transition-slide-x"
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
            transition="vc@transition-slide-y"
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
      </section>

      <section id="popover-menu" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Popover menu</h2>

        <vt@menu offset-x :close-on-content-click="false" :nudge-width="200">
          <vt@btn primary dark slot="activator">Dropdown</vt@btn>
          <div>これはメニューです</div>
        </vt@menu>
      </section>

    </main>
  </div>
</template>

<script>
export default {
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
