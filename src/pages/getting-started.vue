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
        <h2 class="vc@page__section-header">タイポグラフィのテスト</h2>

        <div>
          <h1>h1レベルの見出し</h1>

          <h2>あの有名なダミーテキスト</h2>

          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>

          <h2>また見出しがここに来て</h2>

          <p>ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。</p>
          <p>ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。</p>
          <h3>ここに小見出しがきて</h3>
          <p>ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。</p>

          <p>ここに段落が入ります。ここに段落が入ります。<em>ここに強調文が入ります。ここに強調文が入ります。ここに強調文が入ります。</em>ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。ここに段落が入ります。</p>

          <h4>ここにh4見出し</h4>
          <p>段落</p>

          <h5>ここにh5見出し</h5>
          <p>段落</p>

          <h6>ここにh6見出し</h6>
          <p>段落</p>
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
      title: 'Getting Started',
    }
  },

  data() {
    return {
    }
  },
}
</script>
