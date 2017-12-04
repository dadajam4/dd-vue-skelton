<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Grouping content</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">コンテンツの分類を示す要素セットです。</p>
      </div>

      <section id="basic" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Basic</h2>

        <docs-element-guide name="p" source="{{ddSourceDump.paragraph!}}">
          <template slot="overview">
            ひとつの段落（パラグラフ）であることを表す
          </template>

          <dd-source id="paragraph" immediately>
            <p>ユーザー登録をすると、あなた専用にカスタマイズされた操作メニューが表示されます。使い込むほどにコンテンツが最適化され、充実したサービスが得られるようになります。</p>

            <p>もし使い方に迷った時は<a href="javascript:void(0);">ユーザーガイド</a>を参照してください。</p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="hr" source="{{ddSourceDump.hr!}}">
          <template slot="overview">
            テーマや話題の区切りを表す
          </template>

          <dd-source id="hr" immediately>
            <p>吾輩は猫である。名前はまだ無い。</p>
            <p>どこで生れたかとんと見当がつかぬ。
            何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>
            <hr>
            <p>吾輩はここで始めて人間というものを見た。
            しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。
            この書生というのは時々我々を捕えて煮て食うという話である。</p>
            <p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。
            ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="pre" source="{{ddSourceDump.pre!}}">
          <template slot="overview">
            半角スペースや改行をそのまま表示する
          </template>

          <dd-source id="pre" immediately>
            <pre><code>function Panel(element, canClose, closeHandler) {
              this.element = element;
              this.canClose = canClose;
              this.closeHandler = function () { if (closeHandler) closeHandler() };
            }</code></pre>

            <pre><samp>あなたは、ある大きな白い家の玄関の前に立っています。
目の前に小さな郵便受けがあります。

></samp> <kbd>open mailbox</kbd>

<samp>郵便受けを開けました:
一枚のチラシがあります。

></samp></pre>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="list" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">List</h2>

        <docs-element-guide name="ol" source="{{ddSourceDump.ol!}}">
          <template slot="overview">
            順序のあるリストを表示する
          </template>

          <dd-source id="ol" immediately>
            <ol>
              <li>いちご</li>
              <li>人参</li>
              <li>サンダル</li>
            </ol>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="ul" source="{{ddSourceDump.ul!}}">
          <template slot="overview">
            順序のないリストを表示する
          </template>

          <dd-source id="ul" immediately>
            <ul>
              <li>いちご</li>
              <li>イチジク</li>
              <li>一味唐辛子</li>
            </ul>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="dl" source="{{ddSourceDump.dl!}}">
          <template slot="overview">
            定義・説明リストを表す
          </template>

          <dd-source id="dl" immediately>
            <dl>
              <dt>作者</dt>
              <dd>ジョン</dd>
              <dd>ポール</dd>
              <dd>ジョージ</dd>
              <dd>リンゴ</dd>
            </dl>

            <dl>
              <dt lang="ja"><dfn>色</dfn></dt>
              <dt lang="en-US"><dfn>color</dfn></dt>
              <dt lang="en-GB"><dfn>colour</dfn></dt>
              <dd>可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。</dd>
            </dl>

            <dl>
              <dt>金貨を獲得している場合</dt>
              <dd>金貨一枚につき１０ポイント加算されます。</dd>
              <dt>銀貨を獲得している場合</dt>
              <dd>銀貨一枚につき１ポイント加算されます。</dd>
              <dt>枚数に関わらず、金貨と銀貨の両方を獲得してる場合</dt>
              <dd>ボーナスポイントとして２０ポイント加算されます。 </dd>
              <dt>それ例外の場合</dt>
              <dd>ポイントは加算されません。</dd>
            </dl>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="table" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Table</h2>

        <docs-element-guide name="table" source="{{ddSourceDump.table!}}">
          <template slot="overview">
            テーブル（表）を作成する
          </template>

          <dd-source id="table" immediately>
            <table>
              <caption>
                <strong>お寿司をどこで食べるか？その長所と短所</strong>
              </caption>
              <thead>
                <tr>
                  <th>どこで食べるか</th>
                  <th>長所</th>
                  <th>短所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>銀座の高級店</th>
                  <td>ネタにこだわり、技術が素晴らしい</td>
                  <td>値段が時価で不安、予約が必要</td>
                </tr>
                <tr>
                  <th>回転寿司</th>
                  <td>値段が良心的、気軽に手に取れる</td>
                  <td>ネタが解凍もの、休みの日は混む</td>
                </tr>
              </tbody>
            </table>

            <table>
              <caption>
                <strong>お寿司をどこで食べるか？その長所と短所</strong>
                <details>
                  <summary>このテーブルの説明</summary>
                  <p>以下のテーブルでは、２番目のカラムに寿司店のタイプが入れられています。その左側にそのようなタイプのお店でお寿司を食べる場合の長所が、右側に短所が入れられています。</p>
                </details>
              </caption>
              <thead>
                <tr>
                  <th>長所</th>
                  <th>どこで食べるか</th>
                  <th>短所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ネタにこだわり、技術が素晴らしい</td>
                  <th>銀座の高級店</th>
                  <td>値段が時価で不安、予約が必要</td>
                </tr>
                <tr>
                  <td>値段が良心的、気軽に手に取れる</td>
                  <th>回転寿司</th>
                  <td>ネタが解凍もの、休みの日は混む</td>
                </tr>
              </tbody>
            </table>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="others" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Others</h2>

        <docs-element-guide name="figure" source="{{ddSourceDump.figure!}}">
          <template slot="overview">
            図表であることを示す
          </template>

          <dd-source id="figure" immediately>
            <figure>
              <img src="img/avatar/boy_1.png" width="280" alt="つまらなそうな男の子">
              <figcaption>思春期の男の子の一般的な生態</figcaption>
            </figure>
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
      title: 'Grouping content',
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
