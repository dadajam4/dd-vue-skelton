webpackJsonp([3],{"+hVw":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("543I"),a=(n=o)&&n.__esModule?n:{default:n};t.default={$_anchors:[{id:"link",label:"link"},{id:"strength",label:"strength"},{id:"defined",label:"defined"},{id:"meaning",label:"meaning"},{id:"edited",label:"edited"},{id:"computed",label:"computed"},{id:"styled",label:"styled"}],head:function(){return{title:"Basic"}},components:{DocsElementGuide:a.default},data:function(){return{}},mounted:function(){}}},"2yG1":function(e,t,r){var n=r("na5j");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("0e4efcfa",n,!1)},"543I":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("y/gT"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);var c=r("87cF"),s=!1;var l=function(e){s||r("2yG1")},i=r("VU/8")(o.a,c.a,!1,l,"data-v-19167af4",null);i.options.__file="src/components/docs/ElementGuide.vue",t.default=i.exports},"87cF":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my"},[r("h3",{staticClass:"my__name"},[r("span",{staticStyle:{"vertical-align":"middle"}},[e._v("<"+e._s(e.name)+">")]),e.source?r("dd-btn",{staticClass:"dd-m-l--sm",attrs:{sm:"",primary:""},on:{click:function(t){e.sourceActive=!e.sourceActive}}},[e._v("\n      "+e._s(e.sourceActive?"Hide":"View")+" Source\n    ")]):e._e()],1),e.source?r("dd-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.sourceActive,expression:"sourceActive"}],staticClass:"my__source-container"},[r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.source,expression:"source"}],staticClass:"my__pre"},[r("code",{ref:"code",staticClass:"my__code",class:e.lang})]),r("dd-btn",{staticClass:"my__btn-source-copy",attrs:{icon:""},on:{click:e.copy}},[r("dd-icon",[e._v("copy")])],1)],1)]):e._e(),r("p",{staticClass:"my__overview"},[e._t("overview")],2),r("div",{staticClass:"my__body"},[e._t("default")],2)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};t.a=o},K2V8:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("dd-page",[r("dd-page-header",[e._v("Basic")]),r("dd-page-intro",[e._v("\n      テキストの意味を示す要素です。\n    ")]),r("dd-page-section",{attrs:{title:"",id:"link","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"a",source:'<p>ここに<a href="javascript:void(0);">ハイパーリンク</a>が入ります。</p>'}},[r("template",{slot:"overview"},[e._v("\n          ハイパーリンクを指定する\n        ")]),r("p",[e._v("ここに"),r("a",{attrs:{href:"javascript:void(0);"}},[e._v("ハイパーリンク")]),e._v("が入ります。")])],2)],1),r("dd-page-section",{attrs:{title:"",id:"strength","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"em",source:"<p>\n  犬は苦手なの。<em>猫</em>はかわいいと思うけど…<br>\n  あなたは、猫なんか<em>かわいくない</em>って言うけれど、私は猫は<em>とっても<em>かわいい</em></em>と思うの…\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          強勢する（アクセントを付ける）箇所を表す\n        ")]),r("p",[e._v("\n  犬は苦手なの。"),r("em",[e._v("猫")]),e._v("はかわいいと思うけど…"),r("br"),e._v("\n  あなたは、猫なんか"),r("em",[e._v("かわいくない")]),e._v("って言うけれど、私は猫は"),r("em",[e._v("とっても"),r("em",[e._v("かわいい")])]),e._v("と思うの…\n")])],2),r("docs-element-guide",{attrs:{name:"strong",source:"<p>\n  <strong>警告：</strong>\n  この迷宮は危険です。\n  <strong>カモをよけてください。</strong>ゴールドを見つけたら取ってください。\n  <strong><strong>ダイアモンドを取ってはいけません。</strong>それらは爆発して<strong>\n  10メートル以内のものをすべて破壊します。</strong></strong>警告は以上です。\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          強い重要性を表す\n        ")]),r("p",[r("strong",[e._v("警告：")]),e._v("\n  この迷宮は危険です。\n  "),r("strong",[e._v("カモをよけてください。")]),e._v("ゴールドを見つけたら取ってください。\n  "),r("strong",[r("strong",[e._v("ダイアモンドを取ってはいけません。")]),e._v("それらは爆発して"),r("strong",[e._v("\n  10メートル以内のものをすべて破壊します。")])]),e._v("警告は以上です。\n")])],2),r("docs-element-guide",{attrs:{name:"b",source:"<p>\n  当軒は<b>注文の多い料理店</b>ですからどうかそこはご承知ください\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          文書内のキーワードや製品名など、他と区別したいテキストを表す\n        ")]),r("p",[e._v("\n  当軒は"),r("b",[e._v("注文の多い料理店")]),e._v("ですからどうかそこはご承知ください\n")])],2),r("docs-element-guide",{attrs:{name:"small",source:'<address>\n  さらに詳しい情報は、<a href="mailto:xxxxx@example.com">xxxxx@example.com</a>までメールでお問い合わせください。\n</address>\n<p><small>&copy; 2038 Example Corp.</small></p>'}},[r("template",{slot:"overview"},[e._v("\n          免責・警告・著作権などの注釈や細目を表す\n        ")]),r("address",[e._v("\n  さらに詳しい情報は、"),r("a",{attrs:{href:"mailto:xxxxx@example.com"}},[e._v("xxxxx@example.com")]),e._v("までメールでお問い合わせください。\n")]),r("p",[r("small",[e._v("© 2038 Example Corp.")])])],2)],1),r("dd-page-section",{attrs:{title:"",id:"defined","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"dfn",source:'<p>いま解説している<dfn id="sample"><abbr title="HyperText Markup Language">HTML</abbr></dfn>は、ウェブページを作成するための言語の一つです。</p>\n<p><a href=#sample><abbr title="HyperText Markup Language">HTML</abbr></a>はそれほど難しいものではありません。簡単なウェブページなら数種類のタグを覚えれば十分に作成することが可能です。</p>'}},[r("template",{slot:"overview"},[e._v("\n          用語が使用されていることを示す\n        ")]),r("p",[e._v("いま解説している"),r("dfn",{attrs:{id:"sample"}},[r("abbr",{attrs:{title:"HyperText Markup Language"}},[e._v("HTML")])]),e._v("は、ウェブページを作成するための言語の一つです。")]),r("p",[r("a",{attrs:{href:"#sample"}},[r("abbr",{attrs:{title:"HyperText Markup Language"}},[e._v("HTML")])]),e._v("はそれほど難しいものではありません。簡単なウェブページなら数種類のタグを覚えれば十分に作成することが可能です。")])],2),r("docs-element-guide",{attrs:{name:"abbr",source:'<p>\n  <dfn id="whatwg"><abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr></dfn>は、2004年にHTML5の仕様策定を開始しています。\n</p>\n<p>\n  <a href="#whatwg"><abbr>WHATWG</abbr></a>は、当時<abbr title="World Wide Web Consortium">W3C</abbr>が進めていたウェブ技術の標準化の方向性に満足しなかったApple、Mozilla、Operaによって設立されたグループです。\n</p>'}},[r("template",{slot:"overview"},[e._v("\n          略語や頭字語であることを表す\n        ")]),r("p",[r("dfn",{attrs:{id:"whatwg"}},[r("abbr",{attrs:{title:"Web Hypertext Application Technology Working Group"}},[e._v("WHATWG")])]),e._v("は、2004年にHTML5の仕様策定を開始しています。\n")]),r("p",[r("a",{attrs:{href:"#whatwg"}},[r("abbr",[e._v("WHATWG")])]),e._v("は、当時"),r("abbr",{attrs:{title:"World Wide Web Consortium"}},[e._v("W3C")]),e._v("が進めていたウェブ技術の標準化の方向性に満足しなかったApple、Mozilla、Operaによって設立されたグループです。\n")])],2),r("docs-element-guide",{attrs:{name:"time",source:'<p>\n  ジョンとポールが初めて出会ったのは、よく晴れた<time datetime="1957-7-6">夏の土曜日</time>だった。ポールは、教会の夏祭りで歌うジョンをたまたま観て、歌がうまくてカッコいいと思ったそうだ。\n</p>\n<p>\n  私がビートルズを聴くようになったのは、中学生になった頃だろうか。そのころビートルズはすでに解散して伝説となっていた。\n</p>\n<p>\n  今夜は、<time>23:00</time>からラジオでビートルズ特集を放送するらしい。\n</p>'}},[r("template",{slot:"overview"},[e._v("\n          日付や時刻を正確に示す\n        ")]),r("p",[e._v("\n  ジョンとポールが初めて出会ったのは、よく晴れた"),r("time",{attrs:{datetime:"1957-7-6"}},[e._v("夏の土曜日")]),e._v("だった。ポールは、教会の夏祭りで歌うジョンをたまたま観て、歌がうまくてカッコいいと思ったそうだ。\n")]),r("p",[e._v("\n  私がビートルズを聴くようになったのは、中学生になった頃だろうか。そのころビートルズはすでに解散して伝説となっていた。\n")]),r("p",[e._v("\n  今夜は、"),r("time",[e._v("23:00")]),e._v("からラジオでビートルズ特集を放送するらしい。\n")])],2),r("docs-element-guide",{attrs:{name:"cite",source:'<p><span class="sakusya">夏目漱石</span>の<cite>草枕</cite>は、こんな風に始まります。</p>\n<blockquote cite="http://www.example.com/kusamakura.html">\n  <p>山路を登りながら、こう考えた。<br>\n  智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。</p>\n</blockquote>\n<p>この作品の主人公は30歳の洋画家ですが、世間にあまりなじめていない彼の芸術家らしい生きざまがすでに冒頭で表現されています。</p>'}},[r("template",{slot:"overview"},[e._v("\n          作品のタイトルを表す\n        ")]),r("p",[r("span",{staticClass:"sakusya"},[e._v("夏目漱石")]),e._v("の"),r("cite",[e._v("草枕")]),e._v("は、こんな風に始まります。")]),r("blockquote",{attrs:{cite:"http://www.example.com/kusamakura.html"}},[r("p",[e._v("山路を登りながら、こう考えた。"),r("br"),e._v("\n  智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。")])]),r("p",[e._v("この作品の主人公は30歳の洋画家ですが、世間にあまりなじめていない彼の芸術家らしい生きざまがすでに冒頭で表現されています。")])],2)],1),r("dd-page-section",{attrs:{title:"",id:"meaning","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"s",source:"<p>缶コーヒーがお買い得！</p>\n<p><s>通常価格: 1本100円</s></p>\n<p><strong>特別価格：1本59円！！</strong></p>"}},[r("template",{slot:"overview"},[e._v("\n          すでに正確ではなくなった内容を表す\n        ")]),r("p",[e._v("缶コーヒーがお買い得！")]),r("p",[r("s",[e._v("通常価格: 1本100円")])]),r("p",[r("strong",[e._v("特別価格：1本59円！！")])])],2),r("docs-element-guide",{attrs:{name:"q",source:'<p>夏目漱石の<cite>草枕</cite>の中に出てくる\n<q cite="http://www.examle.xxx/kusamakura.html">智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。</q>\nという表現は大変有名です。</p>\n<p>教科書には<q>ウイリアム・クラーク博士が<q>少年よ大志を抱け</q>と言った</q>と書いてある。</p>'}},[r("template",{slot:"overview"},[e._v("\n          引用句・引用文であることを表す\n        ")]),r("p",[e._v("夏目漱石の"),r("cite",[e._v("草枕")]),e._v("の中に出てくる\n"),r("q",{attrs:{cite:"http://www.examle.xxx/kusamakura.html"}},[e._v("智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。")]),e._v("\nという表現は大変有名です。")]),r("p",[e._v("教科書には"),r("q",[e._v("ウイリアム・クラーク博士が"),r("q",[e._v("少年よ大志を抱け")]),e._v("と言った")]),e._v("と書いてある。")])],2),r("docs-element-guide",{attrs:{name:"i",source:"<p>\n  ジョバンニは思わずかけよって博士の前に立って、\n  <i>ぼくはカムパネルラの行った方を知っていますぼくはカムパネルラといっしょに歩いていたのです</i>\n  と云おうとしましたがもうのどがつまって何とも云えませんでした。\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          声や心の中で思ったことなど、他と区別したいテキストを表す\n        ")]),r("p",[e._v("\n  ジョバンニは思わずかけよって博士の前に立って、\n  "),r("i",[e._v("ぼくはカムパネルラの行った方を知っていますぼくはカムパネルラといっしょに歩いていたのです")]),e._v("\n  と云おうとしましたがもうのどがつまって何とも云えませんでした。\n")])],2)],1),r("dd-page-section",{attrs:{title:"",id:"edited","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"ins",source:'<aside>\n  <ins datetime="2005-03-16T00:00Z">\n    <p>私は果物が好きです。</p>\n  </ins>\n  <ins datetime="2005-03-16T00:00Z">\n    リンゴは美味しい。\n  </ins>\n  <ins datetime="2007-12-19T00:00Z">\n    洋ナシも美味しい。\n  </ins>\n</aside>\n\n<del>\n  <p>従業員を募集しています。</p>\n</del>\n<ins>\n  <p>定員に達しましたので従業員の募集を終了しました。たくさんのご応募ありがとうございました。 </p>\n</ins>'}},[r("template",{slot:"overview"},[e._v("\n          追加された部分であることを示す\n        ")]),r("aside",[r("ins",{attrs:{datetime:"2005-03-16T00:00Z"}},[r("p",[e._v("私は果物が好きです。")])]),r("ins",{attrs:{datetime:"2005-03-16T00:00Z"}},[e._v("\n    リンゴは美味しい。\n  ")]),r("ins",{attrs:{datetime:"2007-12-19T00:00Z"}},[e._v("\n    洋ナシも美味しい。\n  ")])]),r("del",[r("p",[e._v("従業員を募集しています。")])]),r("ins",[r("p",[e._v("定員に達しましたので従業員の募集を終了しました。たくさんのご応募ありがとうございました。 ")])])],2),r("docs-element-guide",{attrs:{name:"del",source:'<ul>\n  <li>プレゼン資料を作成する</li>\n  <li><del datetime="2009-10-11T01:25-07:00">ソフトウェアのマニュアルを読む</del></li>\n  <li><del datetime="2009-10-10T23:38-07:00">ソフトウェアをインストールする</del></li>\n  <li>プリンタ用紙を買う</li>\n</ul>'}},[r("template",{slot:"overview"},[e._v("\n          削除された部分であることを示す\n        ")]),r("ul",[r("li",[e._v("プレゼン資料を作成する")]),r("li",[r("del",{attrs:{datetime:"2009-10-11T01:25-07:00"}},[e._v("ソフトウェアのマニュアルを読む")])]),r("li",[r("del",{attrs:{datetime:"2009-10-10T23:38-07:00"}},[e._v("ソフトウェアをインストールする")])]),r("li",[e._v("プリンタ用紙を買う")])])],2)],1),r("dd-page-section",{attrs:{title:"",id:"computed","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"code",source:'<p>最初に <code>npm run install</code> してください</p>\n\n<h6>Example</h6>\n<pre><code class="language-pascal">var i: Integer;\nbegin\ni := 1;\nend.</code></pre>'}},[r("template",{slot:"overview"},[e._v("\n          プログラムなどのコードであることを示す\n        ")]),r("p",[e._v("最初に "),r("code",[e._v("npm run install")]),e._v(" してください")]),r("h6",[e._v("Example")]),r("pre",[r("code",{staticClass:"language-pascal"},[e._v("var i: Integer;\nbegin\ni := 1;\nend.")])])],2),r("docs-element-guide",{attrs:{name:"var",source:"<p>\n  鶴が<var>x</var>羽と亀が<var>y</var>匹います。頭の数はあわせて8で足の数はあわせて26です。<var>x</var>と<var>y</var>の値を求めなさい。\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          変数であることを示す\n        ")]),r("p",[e._v("\n  鶴が"),r("var",[e._v("x")]),e._v("羽と亀が"),r("var",[e._v("y")]),e._v("匹います。頭の数はあわせて8で足の数はあわせて26です。"),r("var",[e._v("x")]),e._v("と"),r("var",[e._v("y")]),e._v("の値を求めなさい。\n")])],2),r("docs-element-guide",{attrs:{name:"samp",source:"<p>コンピュータの画面には、<samp>このプログラムは不正な処理を行ったので強制終了されます。</samp>って表示されているんですけど、作成したデータは消えちゃうんですか？</p>"}},[r("template",{slot:"overview"},[e._v("\n          プログラムによる出力結果のサンプルであることを示す\n        ")]),r("p",[e._v("コンピュータの画面には、"),r("samp",[e._v("このプログラムは不正な処理を行ったので強制終了されます。")]),e._v("って表示されているんですけど、作成したデータは消えちゃうんですか？")])],2),r("docs-element-guide",{attrs:{name:"kbd",source:"<p><kbd>Shift</kbd> という文字列を入力してください。</p>\n<p><kbd><kbd>Shift</kbd></kbd> キーを１回押してください。</p>\n<p><kbd><kbd>S</kbd><kbd>h</kbd><kbd>i</kbd><kbd>f</kbd><kbd>t</kbd></kbd> と５つのキーを順に１回ずつ押してください。</p>"}},[r("template",{slot:"overview"},[e._v("\n          ユーザーが入力する内容であることを示す\n        ")]),r("p",[r("kbd",[e._v("Shift")]),e._v(" という文字列を入力してください。")]),r("p",[r("kbd",[r("kbd",[e._v("Shift")])]),e._v(" キーを１回押してください。")]),r("p",[r("kbd",[r("kbd",[e._v("S")]),r("kbd",[e._v("h")]),r("kbd",[e._v("i")]),r("kbd",[e._v("f")]),r("kbd",[e._v("t")])]),e._v(" と５つのキーを順に１回ずつ押してください。")])],2)],1),r("dd-page-section",{attrs:{title:"",id:"styled","data-anchor-point":""}},[r("docs-element-guide",{attrs:{name:"sub",source:"<p>\n  <var>i</var>番目の座標は、\n  (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>)\n  で表すことができます。例えば、１０番目の座標は\n  (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>)\n  となります。\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          下付き文字を表す\n        ")]),r("p",[r("var",[e._v("i")]),e._v("番目の座標は、\n  ("),r("var",[e._v("x"),r("sub",[r("var",[e._v("i")])])]),e._v(", "),r("var",[e._v("y"),r("sub",[r("var",[e._v("i")])])]),e._v(")\n  で表すことができます。例えば、１０番目の座標は\n  ("),r("var",[e._v("x"),r("sub",[e._v("10")])]),e._v(", "),r("var",[e._v("y"),r("sub",[e._v("10")])]),e._v(")\n  となります。\n")])],2),r("docs-element-guide",{attrs:{name:"sup",source:'<p lang="en">\n  The most beautiful women are\n  <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and\n  <span lang="fr"><abbr>M<sup>me</sup></abbr> Denise</span>.\n</p>\n<p lang="ja">\n  （訳）もっとも美しい女性は、グウェンドライン嬢とデニス夫人です。\n</p>'}},[r("template",{slot:"overview"},[e._v("\n          上付き文字を表す\n        ")]),r("p",{attrs:{lang:"en"}},[e._v("\n  The most beautiful women are\n  "),r("span",{attrs:{lang:"fr"}},[r("abbr",[e._v("M"),r("sup",[e._v("lle")])]),e._v(" Gwendoline")]),e._v(" and\n  "),r("span",{attrs:{lang:"fr"}},[r("abbr",[e._v("M"),r("sup",[e._v("me")])]),e._v(" Denise")]),e._v(".\n")]),r("p",{attrs:{lang:"ja"}},[e._v("\n  （訳）もっとも美しい女性は、グウェンドライン嬢とデニス夫人です。\n")])],2),r("docs-element-guide",{attrs:{name:"mark",source:"<p>\n  HTML5では、これまでのHTML 4と同じようなHTML文書を作成する<mark>機能</mark>が改良されているのに加えて、ウェブアプリケーションを開発するための様々な仕様が新たに盛り込まれています。 HTML5が普及した際には、今までプラグインなどのHTML以外の技術を併用しないと実現できなかった<mark>機能</mark>のいくつかが、標準のHTMLやJavaScriptで比較的シンプルに実現できるようになる予定です。\n</p>"}},[r("template",{slot:"overview"},[e._v("\n          文書内の該当テキストを目立たせる\n        ")]),r("p",[e._v("\n  HTML5では、これまでのHTML 4と同じようなHTML文書を作成する"),r("mark",[e._v("機能")]),e._v("が改良されているのに加えて、ウェブアプリケーションを開発するための様々な仕様が新たに盛り込まれています。 HTML5が普及した際には、今までプラグインなどのHTML以外の技術を併用しないと実現できなかった"),r("mark",[e._v("機能")]),e._v("のいくつかが、標準のHTMLやJavaScriptで比較的シンプルに実現できるようになる予定です。\n")])],2),r("docs-element-guide",{attrs:{name:"ruby",source:"<ruby>\n  漢<rt>かん</rt>\n  字<rt>じ</rt>\n</ruby><br>\n\n<ruby>\n  漢<rp>(</rp><rt>かん</rt><rp>)</rp>\n  字<rp>(</rp><rt>じ</rt><rp>)</rp>\n</ruby>"}},[r("template",{slot:"overview"},[e._v("\n          ルビをふる\n        ")]),r("ruby",[e._v("\n  漢"),r("rt",[e._v("かん")]),e._v("\n  字"),r("rt",[e._v("じ")])]),r("br"),r("ruby",[e._v("\n  漢"),r("rp",[e._v("(")]),r("rt",[e._v("かん")]),r("rp",[e._v(")")]),e._v("\n  字"),r("rp",[e._v("(")]),r("rt",[e._v("じ")]),r("rp",[e._v(")")])])],2)],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};t.a=o},clBk:function(e,t,r){var n=r("tvy7");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("6599ac12",n,!1)},na5j:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"[data-v-19167af4]:root{--text-color:rgba(0,0,0,.87);--text-muted-color:rgba(0,0,0,.26);--link-color:#42b983;--divider-light-color:hsla(0,0%,62%,.25);--divider-color:hsla(0,0%,62%,.5);--divider-dark-color:#9e9e9e;--form-divider-color:#e0e0e0;--switch-track-color:rgba(0,0,0,.38);--switch-pointer-color:#fafafa;--background-color:#fff;--background-active-color:#e0e0e0;--background-light-color:#eee;--background-grey-color:#bdbdbd;--background-dark-color:#757575;--background-darken-color:#424242;--background-highlight-color:#ffeb3b;--context-primary-color:#42b983;--context-secondary-color:#2c3e50;--context-info-color:#2196f3;--context-success-color:#4caf50;--context-warning-color:#ffc107;--context-error-color:#ff5252;--context-light-color:#e0e0e0;--context-grey-color:#9e9e9e;--context-dark-color:#616161;--context-darken-color:#212121;--context-muted-color:rgba(0,0,0,.12);--context-muted-text-color:rgba(0,0,0,.26);--backdrop-color:rgba(0,0,0,.4);--text-inverted-color:#fff;--text-sub-color:#9e9e9e;--link-hover-color:#42b983;--text-primary-color:#42b983;--text-secondary-color:#2c3e50;--text-info-color:#2196f3;--text-success-color:#4caf50;--text-warning-color:#ffc107;--text-error-color:#ff5252;--text-light-color:#e0e0e0;--text-grey-color:#9e9e9e;--text-dark-color:#616161;--text-darken-color:#212121;--background-primary-color:#42b983;--background-secondary-color:#2c3e50;--background-info-color:#2196f3;--background-success-color:#4caf50;--background-warning-color:#ffc107;--background-error-color:#ff5252;--background-muted-color:rgba(0,0,0,.12);--context-primary-border-color:#42b983;--context-primary-text-color:#fff;--context-primary-link-color:hsla(0,0%,100%,.9);--context-primary-link-hover-color:hsla(0,0%,100%,.8);--context-secondary-border-color:#2c3e50;--context-secondary-text-color:#fff;--context-secondary-link-color:hsla(0,0%,100%,.9);--context-secondary-link-hover-color:hsla(0,0%,100%,.8);--context-info-border-color:#2196f3;--context-info-text-color:#fff;--context-info-link-color:hsla(0,0%,100%,.9);--context-info-link-hover-color:hsla(0,0%,100%,.8);--context-success-border-color:#4caf50;--context-success-text-color:#fff;--context-success-link-color:hsla(0,0%,100%,.9);--context-success-link-hover-color:hsla(0,0%,100%,.8);--context-warning-border-color:#ffc107;--context-warning-text-color:#fff;--context-warning-link-color:hsla(0,0%,100%,.9);--context-warning-link-hover-color:hsla(0,0%,100%,.8);--context-error-border-color:#ff5252;--context-error-text-color:#fff;--context-error-link-color:hsla(0,0%,100%,.9);--context-error-link-hover-color:hsla(0,0%,100%,.8);--context-light-border-color:#e0e0e0;--context-light-text-color:rgba(0,0,0,.87);--context-light-link-color:rgba(0,0,0,.9);--context-light-link-hover-color:rgba(0,0,0,.8);--context-grey-border-color:#9e9e9e;--context-grey-text-color:#fff;--context-grey-link-color:hsla(0,0%,100%,.9);--context-grey-link-hover-color:hsla(0,0%,100%,.8);--context-dark-border-color:#616161;--context-dark-text-color:#fff;--context-dark-link-color:hsla(0,0%,100%,.9);--context-dark-link-hover-color:hsla(0,0%,100%,.8);--context-darken-border-color:#212121;--context-darken-text-color:#fff;--context-darken-link-color:hsla(0,0%,100%,.9);--context-darken-link-hover-color:hsla(0,0%,100%,.8);--context-muted-border-color:rgba(0,0,0,.12);--context-muted-link-color:rgba(0,0,0,.9);--context-muted-link-hover-color:rgba(0,0,0,.8)}.my__body[data-v-19167af4]{margin-top:2rem}.my__source-container[data-v-19167af4]{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.my__pre[data-v-19167af4]{margin:0!important}.my__code[data-v-19167af4]{padding:2.5em 1.5em}.my__btn-source-copy[data-v-19167af4]{position:absolute;right:0;top:0;color:#fff}",""])},tvy7:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},"y/gT":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,source:String,lang:String},data:function(){return{sourceActive:!1}},methods:{copy:function(){var e=document.createRange();e.selectNode(this.$refs.code);var t=getSelection();t.removeAllRanges(),t.addRange(e),document.execCommand("copy")}},created:function(){}}},zpTF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("+hVw"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);var c=r("K2V8"),s=!1;var l=function(e){s||r("clBk")},i=r("VU/8")(o.a,c.a,!1,l,"data-v-9b41a4cc",null);i.options.__file="src/pages/elements/basic.vue",t.default=i.exports}});