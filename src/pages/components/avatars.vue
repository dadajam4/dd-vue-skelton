<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Avatars</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">ほげほげ</p>
      </div>

      <section id="standard-display" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Standard display</h2>

        <p>
          <label>
            サイズ
            <input type="range" min="0" max="100" v-model="size">
            {{size}}px
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" :value="true" v-model="tile">
            タイル
          </label>
        </p>

        <vt@avatar :size="size" :tile="tile">
          <img src="~assets/img/avatar/nigaoe_murou_saisei.png" alt="">
        </vt@avatar>
      </section>

      <section id="icon-and-text" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Icon and text</h2>

        <vt@avatar class="vc@context-color--primary">
          <vt@icon lg>user-circle</vt@icon>
        </vt@avatar>

        <vt@avatar class="vc@layer-color--brand-secondary vc@text-color--shades-white">
          <span class="vc@headline">C</span>
        </vt@avatar>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Avatars',
    }
  },

  data() {
    return {
      size: 56,
      tile: false,
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
