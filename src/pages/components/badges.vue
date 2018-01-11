<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Badges</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">ほげほげ</p>
      </div>

      <section id="standard-display" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Standard display</h2>

        <div class="vc@text--center">
          <vt@badge left>
            <span slot="badge">6</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>

          <vt@badge right class="vc@m-l--md">
            <span slot="badge">88</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>

          <vt@badge class="vc@m-l--xl">
            <span slot="badge">816</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>
        </div>
      </section>

      <section id="icon" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Icon</h2>

        <div class="vc@text--center">
          <vt@badge overlap left success>
            <vt@icon slot="badge">check</vt@icon>
            <vt@icon xl>user-circle</vt@icon>
          </vt@badge>

          <vt@badge overlap right class="vc@m-l--xl" layer-color="indigo">
            <vt@icon slot="badge">bell</vt@icon>
            <vt@icon xl>users</vt@icon>
          </vt@badge>
        </div>
      </section>

      <section id="inline" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Inline</h2>

        <div class="vc@text--center">
          <vt@badge left warning>
            <span slot="badge">2</span>
            <span>Examples</span>
          </vt@badge>

          <vt@badge right class="vc@m-l--xl" error>
            <vt@icon slot="badge">bell</vt@icon>
            <span>2 Messages</span>
          </vt@badge>
        </div>
      </section>

      <section id="visibility" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Visibility</h2>

        <div class="vc@text--center vc@m-b--lg" @click="visible = !visible">
          <vt@btn secondary>toggle</vt@btn>
        </div>

        <div class="vc@text--center">
          <vt@badge left v-model="visible">
            <span slot="badge">6</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>

          <vt@badge right class="vc@m-l--md" v-model="visible">
            <span slot="badge">88</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>

          <vt@badge class="vc@m-l--xl" v-model="visible">
            <span slot="badge">816</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>
        </div>
      </section>

      <section id="clickable" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Clickable</h2>

        <div class="vc@text--center">
          <vt@badge @click-badge="clickCount = clickCount + 1">
            <span slot="badge">{{clickCount}}</span>
            <vt@icon xl>shopping-cart</vt@icon>
          </vt@badge>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Badges',
    }
  },

  data() {
    return {
      visible: true,
      clickCount: 0,
    }
  },

  computed: {
  },

  methods: {
  },

  created() {
  },
}
</script>
