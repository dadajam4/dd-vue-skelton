<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Basic</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">テキストの意味を示す要素です。</p>
      </div>

      <section id="link" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Link</h2>

        <docs-element-guide name="a" source="{{ddSourceDump.anchor!}}">
          <template slot="overview">
            ハイパーリンクを指定する
          </template>

          <dd-source id="anchor" immediately>
            <p>ここに<a href="javascript:void(0);">ハイパーリンク</a>が入ります。</p>
          </dd-source>
        </docs-element-guide>
      </section>


      <section id="strength" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Strength</h2>

        <docs-element-guide name="em" source="{{ddSourceDump.em!}}">
          <template slot="overview">
            強勢する（アクセントを付ける）箇所を表す
          </template>

          <dd-source id="em" immediately>
            <p>
              犬は苦手なの。<em>猫</em>はかわいいと思うけど…<br>
              あなたは、猫なんか<em>かわいくない</em>って言うけれど、私は猫は<em>とっても<em>かわいい</em></em>と思うの…
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="strong" source="{{ddSourceDump.strong!}}">
          <template slot="overview">
            強い重要性を表す
          </template>

          <dd-source id="strong" immediately>
            <p>
              <strong>警告：</strong>
              この迷宮は危険です。
              <strong>カモをよけてください。</strong>ゴールドを見つけたら取ってください。
              <strong><strong>ダイアモンドを取ってはいけません。</strong>それらは爆発して<strong>
              10メートル以内のものをすべて破壊します。</strong></strong>警告は以上です。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="b" source="{{ddSourceDump.b!}}">
          <template slot="overview">
            文書内のキーワードや製品名など、他と区別したいテキストを表す
          </template>

          <dd-source id="b" immediately>
            <p>
              当軒は<b>注文の多い料理店</b>ですからどうかそこはご承知ください
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="small" source="{{ddSourceDump.small!}}">
          <template slot="overview">
            免責・警告・著作権などの注釈や細目を表す
          </template>

          <dd-source id="small" immediately>
            <address>
              さらに詳しい情報は、<a href="mailto:xxxxx@example.com">xxxxx@example.com</a>までメールでお問い合わせください。
            </address>
            <p><small>&copy; 2038 Example Corp.</small></p>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="defined" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Defined</h2>

        <docs-element-guide name="dfn" source="{{ddSourceDump.dfn!}}">
          <template slot="overview">
            用語が使用されていることを示す
          </template>

          <dd-source id="dfn" immediately>
            <p>いま解説している<dfn id="sample"><abbr title="HyperText Markup Language">HTML</abbr></dfn>は、ウェブページを作成するための言語の一つです。</p>
            <p><a href=#sample><abbr title="HyperText Markup Language">HTML</abbr></a>はそれほど難しいものではありません。簡単なウェブページなら数種類のタグを覚えれば十分に作成することが可能です。</p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="abbr" source="{{ddSourceDump.abbr!}}">
          <template slot="overview">
            略語や頭字語であることを表す
          </template>

          <dd-source id="abbr" immediately>
            <p>
              <dfn id="whatwg"><abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr></dfn>は、2004年にHTML5の仕様策定を開始しています。
            </p>
            <p>
              <a href="#whatwg"><abbr>WHATWG</abbr></a>は、当時<abbr title="World Wide Web Consortium">W3C</abbr>が進めていたウェブ技術の標準化の方向性に満足しなかったApple、Mozilla、Operaによって設立されたグループです。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="time" source="{{ddSourceDump.time!}}">
          <template slot="overview">
            日付や時刻を正確に示す
          </template>

          <dd-source id="time" immediately>
            <p>
              ジョンとポールが初めて出会ったのは、よく晴れた<time datetime="1957-7-6">夏の土曜日</time>だった。ポールは、教会の夏祭りで歌うジョンをたまたま観て、歌がうまくてカッコいいと思ったそうだ。
            </p>
            <p>
              私がビートルズを聴くようになったのは、中学生になった頃だろうか。そのころビートルズはすでに解散して伝説となっていた。
            </p>
            <p>
              今夜は、<time>23:00</time>からラジオでビートルズ特集を放送するらしい。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="cite" source="{{ddSourceDump.cite!}}">
          <template slot="overview">
            作品のタイトルを表す
          </template>

          <dd-source id="cite" immediately>
            <p><span class="sakusya">夏目漱石</span>の<cite>草枕</cite>は、こんな風に始まります。</p>
            <blockquote cite="http://www.example.com/kusamakura.html">
              <p>山路を登りながら、こう考えた。<br>
              智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。</p>
            </blockquote>
            <p>この作品の主人公は30歳の洋画家ですが、世間にあまりなじめていない彼の芸術家らしい生きざまがすでに冒頭で表現されています。</p>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="meaning" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Meaning</h2>

        <docs-element-guide name="s" source="{{ddSourceDump.strike!}}">
          <template slot="overview">
            すでに正確ではなくなった内容を表す
          </template>

          <dd-source id="strike" immediately>
            <p>缶コーヒーがお買い得！</p>
            <p><s>通常価格: 1本100円</s></p>
            <p><strong>特別価格：1本59円！！</strong></p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="q" source="{{ddSourceDump.quote!}}">
          <template slot="overview">
            引用句・引用文であることを表す
          </template>

          <dd-source id="quote" immediately>
            <p>夏目漱石の<cite>草枕</cite>の中に出てくる
            <q cite="http://www.examle.xxx/kusamakura.html">智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。</q>
            という表現は大変有名です。</p>
            <p>教科書には<q>ウイリアム・クラーク博士が<q>少年よ大志を抱け</q>と言った</q>と書いてある。</p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="i" source="{{ddSourceDump.i!}}">
          <template slot="overview">
            声や心の中で思ったことなど、他と区別したいテキストを表す
          </template>

          <dd-source id="i" immediately>
            <p>
              ジョバンニは思わずかけよって博士の前に立って、
              <i>ぼくはカムパネルラの行った方を知っていますぼくはカムパネルラといっしょに歩いていたのです</i>
              と云おうとしましたがもうのどがつまって何とも云えませんでした。
            </p>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="edited" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Edited</h2>

        <docs-element-guide name="ins" source="{{ddSourceDump.ins!}}">
          <template slot="overview">
            追加された部分であることを示す
          </template>

          <dd-source id="ins" immediately>
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
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="del" source="{{ddSourceDump.del!}}">
          <template slot="overview">
            削除された部分であることを示す
          </template>

          <dd-source id="del" immediately>
            <ul>
              <li>プレゼン資料を作成する</li>
              <li><del datetime="2009-10-11T01:25-07:00">ソフトウェアのマニュアルを読む</del></li>
              <li><del datetime="2009-10-10T23:38-07:00">ソフトウェアをインストールする</del></li>
              <li>プリンタ用紙を買う</li>
            </ul>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="computed" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Computed</h2>
        <docs-element-guide name="code" source="{{ddSourceDump.code!}}">
          <template slot="overview">
            プログラムなどのコードであることを示す
          </template>

          <dd-source id="code" immediately>
            <p>最初に<code>npm run install</code>してください</p>

            <h6>Example</h6>
            <pre><code class="language-pascal">var i: Integer;
begin
i := 1;
end.</code></pre>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="var" source="{{ddSourceDump.var!}}">
          <template slot="overview">
            変数であることを示す
          </template>

          <dd-source id="var" immediately>
            <p>
              鶴が<var>x</var>羽と亀が<var>y</var>匹います。頭の数はあわせて8で足の数はあわせて26です。<var>x</var>と<var>y</var>の値を求めなさい。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="samp" source="{{ddSourceDump.samp!}}">
          <template slot="overview">
            プログラムによる出力結果のサンプルであることを示す
          </template>

          <dd-source id="samp" immediately>
            <p>コンピュータの画面には、<samp>このプログラムは不正な処理を行ったので強制終了されます。</samp>って表示されているんですけど、作成したデータは消えちゃうんですか？</p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="kbd" source="{{ddSourceDump.kbd!}}">
          <template slot="overview">
            ユーザーが入力する内容であることを示す
          </template>

          <dd-source id="kbd" immediately>
            <p><kbd>Shift</kbd>という文字列を入力してください。</p>
            <p><kbd><kbd>Shift</kbd></kbd>キーを１回押してください。</p>
            <p><kbd><kbd>S</kbd><kbd>h</kbd><kbd>i</kbd><kbd>f</kbd><kbd>t</kbd></kbd>と５つのキーを順に１回ずつ押してください。</p>
          </dd-source>
        </docs-element-guide>
      </section>

      <section id="styled" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Styled</h2>

        <docs-element-guide name="sub" source="{{ddSourceDump.sub!}}">
          <template slot="overview">
            下付き文字を表す
          </template>

          <dd-source id="sub" immediately>
            <p>
              <var>i</var>番目の座標は、
              (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>)
              で表すことができます。例えば、１０番目の座標は
              (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>)
              となります。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="sup" source="{{ddSourceDump.sup!}}">
          <template slot="overview">
            上付き文字を表す
          </template>

          <dd-source id="sup" immediately>
            <p lang="en">
              The most beautiful women are
              <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and
              <span lang="fr"><abbr>M<sup>me</sup></abbr> Denise</span>.
            </p>
            <p lang="ja">
              （訳）もっとも美しい女性は、グウェンドライン嬢とデニス夫人です。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="mark" source="{{ddSourceDump.mark!}}">
          <template slot="overview">
            文書内の該当テキストを目立たせる
          </template>

          <dd-source id="mark" immediately>
            <p>
              HTML5では、これまでのHTML 4と同じようなHTML文書を作成する<mark>機能</mark>が改良されているのに加えて、ウェブアプリケーションを開発するための様々な仕様が新たに盛り込まれています。 HTML5が普及した際には、今までプラグインなどのHTML以外の技術を併用しないと実現できなかった<mark>機能</mark>のいくつかが、標準のHTMLやJavaScriptで比較的シンプルに実現できるようになる予定です。
            </p>
          </dd-source>
        </docs-element-guide>

        <docs-element-guide name="ruby" source="{{ddSourceDump.ruby!}}">
          <template slot="overview">
            ルビをふる
          </template>

          <dd-source id="ruby" immediately>
            <ruby>
              漢<rt>かん</rt>
              字<rt>じ</rt>
            </ruby><br>

            <ruby>
              漢<rp>(</rp><rt>かん</rt><rp>)</rp>
              字<rp>(</rp><rt>じ</rt><rp>)</rp>
            </ruby>
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
      title: 'Basic',
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
