<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Headings</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">HTMLの基本的な要素のうち、スタイルを定義している要素の一覧です。</p>
      </div>

      <section id="levels" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Levels</h2>

        <docs-element-guide name="h1 - h6" source="{{ddSourceDump.heading!}}">
          <template slot="overview">
            見出しのレベル1〜6です。それぞれフォントサイズやマージンなどの初期値を持っています。<br>
            関連するスタイル定義は<router-link :to="{name: 'style-typography'}">Style &gt; Typography</router-link>を参照してください
          </template>

          <dd-source id="heading" immediately>
            <h1>5秒でかめは●波！？　驚きのクリティカル豆ソッド</h1>
            <p>
              <i>明日学校であいつにかめは●波が出せれていたらいいのに</i>。。。
              そんな妄想誰でも1度は考えた事があるはず。<br>
              ここではまだ誰にも知られていない
              <s>というかそんなものないので知られるはずがない</s>
              驚きのハイパーメソッドをお教えします。
            </p>

            <h2>クラスで一番豆が好きなA君の場合</h2>
            <p>A君は誰よりも豆を食べていました。誰に勧められたわけでもありません。ただそこに<em>豆があったから</em>というただそれだけの理由です。</p>

            <h3>豆があった理由の補足</h3>
            <p>誰が置いたのでしょうね。</p>

            <h4>豆成分の補足</h4>
            <p>非常に多くの豆成分を含んでいます。</p>

            <h5>豆が効かない方へ</h5>
            <p>心配しないでください。正常運転です。詳しくは<a href="https://ja.wikipedia.org/wiki/%E3%81%8B%E3%82%81%E3%81%AF%E3%82%81%E6%B3%A2" target="_blank">ここ</a>で事実だけを知ってください。</p>

            <h6>A君のお休み予定一覧</h6>
            <ul>
              <li>豆から逃げる</li>
              <li>豆を眺める</li>
              <li>寝る</li>
            </ul>
          </dd-source>
        </docs-element-guide>

      </section>

    </main>
  </div>
</template>

<script>
import DocsElementGuide from '~/components/docs/ElementGuide';



export default {
  head() {
    return {
      title: 'Headings',
    }
  },

  components: {
    DocsElementGuide,
  },

  data() {
    return {
    }
  },
}
</script>
