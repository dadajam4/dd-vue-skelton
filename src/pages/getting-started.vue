<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Getting Started</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">これはページのイントロダクションです。これはページのイントロダクションです。これはページのイントロダクションです。</p>
      </div>

      <section id="hoge" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">はじめに</h2>

        <p>コンテンツが入ります</p>
        <p v-for="size in [10, 12, 14, 16, 20, 32, 56, 100]" :key="size" :style="{fontSize: size + 'px'}">M
          <vt@icon>github</vt@icon>
        </p>

        <div class="vc@context--primary">あいうえお</div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'Getting Started',
    }
  },

  data() {
    return {
    }
  },
}
</script>
