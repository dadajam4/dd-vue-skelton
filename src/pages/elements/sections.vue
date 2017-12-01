<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Sections</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">HTMLの基本的な要素のうち、スタイルを定義している要素の一覧です。</p>
      </div>

      <section id="headings" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Headings</h2>

        <docs-element-guide name="h1 - h6">
          <template slot="overview">
            見出しのレベル1〜6です。それぞれフォントサイズやマージンなどの初期値を持っています。<br>
            関連するスタイル定義は<router-link :to="{name: 'style-typography'}">Style &gt; Typography</router-link>を参照してください
          </template>
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
        </docs-element-guide>

      </section>

      <section id="others" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Others</h2>

        <docs-element-guide name="address">
          <address>
            このウェブページの作者に連絡を取りたい方は、<a href="mailto:info@dummy.com">info@dummy.com</a>までメールをお送りいただくか、<a href="/dummy/">お問合わせフォーム</a>からメッセージをお送りください。
          </address>
        </docs-element-guide>
      </section>

<!--
      <section id="grouping-content" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Grouping content</h2>

        <h3>&lt;p&gt;</h3>
        <p><router-link :to="{name: 'style-content'}">Style &gt; Content</router-link>を参照してください</p>

        <h3>&lt;hr&gt;</h3>
        <hr>

        <h3>&lt;pre&gt;</h3>

        <pre><samp>あなたは、ある大きな白い家の玄関の前に立っています。
目の前に小さな郵便受けがあります。

></samp> <kbd>open mailbox</kbd>

<samp>郵便受けを開けました:
一枚のチラシがあります。

></samp></pre>

        <pre><code>function Panel(element, canClose, closeHandler) {
  this.element = element;
  this.canClose = canClose;
  this.closeHandler = function () { if (closeHandler) closeHandler() };
}</code></pre>

        <h3>&lt;ol&gt;</h3>
        <ol>
          <li>いちご</li>
          <li>人参</li>
          <li>サンダル</li>
        </ol>

        <h3>&lt;ol&gt;</h3>
        <ul>
          <li>いちご</li>
          <li>イチジク</li>
          <li>一味唐辛子</li>
        </ul>

        <h3>&lt;dl&gt;</h3>
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

        <h3>&lt;figure&gt;</h3>
        <figure>
          <img src="img/avatar/boy_1.png" width="280" alt="つまらなそうな男の子">
          <figcaption>思春期の男の子の一般的な生態</figcaption>
        </figure>
      </section>

      <section id="text-level-semantics" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Text-level semantics</h2>

        <h3>&lt;a&gt;</h3>
        <p>ここに<a href="javascript:void(0);">アンカーリンク</a>が入ります。</p>

        <h3>&lt;em&gt;</h3>
        <p>
          犬は苦手なの。<em>猫</em>はかわいいと思うけど…<br>
          あなたは、猫なんか<em>かわいくない</em>って言うけれど、私は猫は<em>とっても<em>かわいい</em></em>と思うの…
        </p>

        <h3>&lt;strong&gt;</h3>
        <p>
          <strong>警告：</strong>
          この迷宮は危険です。
          <strong>カモをよけてください。</strong>ゴールドを見つけたら取ってください。
          <strong><strong>ダイアモンドを取ってはいけません。</strong>それらは爆発して<strong>
          10メートル以内のものをすべて破壊します。</strong></strong>警告は以上です。
        </p>

        <h3>&lt;small&gt;</h3>
        <div>
          <address>
            さらに詳しい情報は、<a href="mailto:xxxxx@example.com">xxxxx@example.com</a>までメールでお問い合わせください。
          </address>
          <p><small>&copy; 2038 Example Corp.</small></p>
        </div>

        <h3>&lt;s&gt;</h3>
        <p>缶コーヒーがお買い得！</p>
        <p><s>通常価格: 1本100円</s></p>
        <p><strong>特別価格：1本59円！！</strong></p>

        <h3>&lt;q&gt;</h3>
        <p><span class="sakusya">夏目漱石</span>の<cite>草枕</cite>は、こんな風に始まります。</p>
        <blockquote cite="http://www.example.com/kusamakura.html">
        <p>山路を登りながら、こう考えた。<br>
        智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。</p>
        </blockquote>
        <p>この作品の主人公は30歳の洋画家ですが、世間にあまりなじめていない彼の芸術家らしい生きざまがすでに冒頭で表現されています。</p>

        <h3>&lt;dfn&gt;</h3>
        <p>いま解説している<dfn id="sample"><abbr title="HyperText Markup Language">HTML</abbr></dfn>は、ウェブページを作成するための言語の一つです。</p>
        <p><a href=#sample><abbr title="HyperText Markup Language">HTML</abbr></a>はそれほど難しいものではありません。簡単なウェブページなら数種類のタグを覚えれば十分に作成することが可能です。</p>

        <h3>&lt;abbr&gt;</h3>
        <p>
          <dfn id="whatwg"><abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr></dfn>は、2004年にHTML5の仕様策定を開始しています。
        </p>
        <p>
          <a href="#whatwg"><abbr>WHATWG</abbr></a>は、当時<abbr title="World Wide Web Consortium">W3C</abbr>が進めていたウェブ技術の標準化の方向性に満足しなかったApple、Mozilla、Operaによって設立されたグループです。
        </p>

        <h3>&lt;time&gt;</h3>
        <p>
          ジョンとポールが初めて出会ったのは、よく晴れた<time datetime="1957-7-6">夏の土曜日</time>だった。ポールは、教会の夏祭りで歌うジョンをたまたま観て、歌がうまくてカッコいいと思ったそうだ。
        </p>
        <p>
          私がビートルズを聴くようになったのは、中学生になった頃だろうか。そのころビートルズはすでに解散して伝説となっていた。
        </p>
        <p>
          今夜は、<time>23:00</time>からラジオでビートルズ特集を放送するらしい。
        </p>

        <h3>&lt;code&gt;</h3>
        <pre><code class="language-pascal">var i: Integer;
begin
i := 1;
end.</code></pre>

        <h3>&lt;var&gt;</h3>
        <p>
          鶴が<var>x</var>羽と亀が<var>y</var>匹います。頭の数はあわせて8で足の数はあわせて26です。<var>x</var>と<var>y</var>の値を求めなさい。
        </p>

        <h3>&lt;samp&gt;</h3>
        <p>コンピュータの画面には、<samp>このプログラムは不正な処理を行ったので強制終了されます。</samp>って表示されているんですけど、作成したデータは消えちゃうんですか？</p>

        <h3>&lt;kbd&gt;</h3>
        <p><kbd>Shift</kbd>という文字列を入力してください。</p>
        <p><kbd><kbd>Shift</kbd></kbd>キーを１回押してください。</p>
        <p><kbd><kbd>S</kbd><kbd>h</kbd><kbd>i</kbd><kbd>f</kbd><kbd>t</kbd></kbd>と５つのキーを順に１回ずつ押してください。</p>

        <h3>&lt;sub&gt;</h3>
        <p>
          <var>i</var>番目の座標は、
          (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>)
          で表すことができます。例えば、１０番目の座標は
          (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>)
          となります。
        </p>

        <h3>&lt;sup&gt;</h3>
        <p lang="en">
          The most beautiful women are
          <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and
          <span lang="fr"><abbr>M<sup>me</sup></abbr> Denise</span>.
        </p>
        <p lang="ja">
          （訳）もっとも美しい女性は、グウェンドライン嬢とデニス夫人です。
        </p>

        <h3>&lt;i&gt;</h3>
        <p>
          ジョバンニは思わずかけよって博士の前に立って、
          <i>ぼくはカムパネルラの行った方を知っていますぼくはカムパネルラといっしょに歩いていたのです</i>
          と云おうとしましたがもうのどがつまって何とも云えませんでした。
        </p>

        <h3>&lt;b&gt;</h3>
        <p>
          当軒は<b>注文の多い料理店</b>ですからどうかそこはご承知ください
        </p>

        <h3>&lt;mark&gt;</h3>
        <p>
          HTML5では、これまでのHTML 4と同じようなHTML文書を作成する<mark>機能</mark>が改良されているのに加えて、ウェブアプリケーションを開発するための様々な仕様が新たに盛り込まれています。 HTML5が普及した際には、今までプラグインなどのHTML以外の技術を併用しないと実現できなかった<mark>機能</mark>のいくつかが、標準のHTMLやJavaScriptで比較的シンプルに実現できるようになる予定です。
        </p>

        <h3>&lt;ruby&gt;</h3>
        <ruby>
          漢<rt>かん</rt>
          字<rt>じ</rt>
        </ruby><br>

        <ruby>
          漢<rp>(</rp><rt>かん</rt><rp>)</rp>
          字<rp>(</rp><rt>じ</rt><rp>)</rp>
        </ruby>

      </section>

      <section id="edits" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Edits</h2>

        <h3>&lt;ins&gt;</h3>
        <aside>
          <ins datetime="2005-03-16T00:00Z">
            <p>私は果物が好きです。</p>
          </ins>
          <ins datetime="2005-03-16T00:00Z">
            リンゴは美味しい。
          </ins>
          <ins datetime="2007-12-19T00:00Z">
            洋ナシも美味しい。
          </ins>
        </aside>

        <del>
          <p>従業員を募集しています。</p>
        </del>
        <ins>
          <p>定員に達しましたので従業員の募集を終了しました。たくさんのご応募ありがとうございました。 </p>
        </ins>

        <h3>&lt;del&gt;</h3>
        <ul>
          <li>プレゼン資料を作成する</li>
          <li><del datetime="2009-10-11T01:25-07:00">ソフトウェアのマニュアルを読む</del></li>
          <li><del datetime="2009-10-10T23:38-07:00">ソフトウェアをインストールする</del></li>
          <li>プリンタ用紙を買う</li>
        </ul>

      </section>
-->


    </main>
  </div>
</template>

<script>
import DocsElementGuide from '~/components/docs/ElementGuide';



export default {
  head() {
    return {
      title: 'Sections',
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
