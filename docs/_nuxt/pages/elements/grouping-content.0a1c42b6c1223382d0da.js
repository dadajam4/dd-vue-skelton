webpackJsonp([3],{"543I":function(t,e,n){"use strict";function a(t){n("nCL+")}Object.defineProperty(e,"__esModule",{value:!0});var d=n("CJiQ"),s=n.n(d),o=n("7ZXo"),i=n("VU/8"),r=a,c=i(s.a,o.a,!1,r,"data-v-252d0db4",null);e.default=c.exports},"7ZXo":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my"},[n("h3",{staticClass:"my__name"},[n("span",{staticStyle:{"vertical-align":"middle"}},[t._v("<"+t._s(t.name)+">")]),t.source?n("dd-btn",{staticClass:"dd-m-l--sm",attrs:{sm:"",primary:""},on:{click:function(e){t.sourceActive=!t.sourceActive}}},[t._v("\n      "+t._s(t.sourceActive?"Hide":"View")+" Source\n    ")]):t._e()],1),t.source?n("dd-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.sourceActive,expression:"sourceActive"}],staticClass:"my__source-container"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.source,expression:"source"}],staticClass:"my__pre"},[n("code",{ref:"code",staticClass:"my__code",class:t.lang})]),n("dd-btn",{staticClass:"my__btn-source-copy",attrs:{icon:""},on:{click:t.copy}},[n("dd-icon",[t._v("copy")])],1)],1)]):t._e(),n("p",{staticClass:"my__overview"},[t._t("overview")],2),n("div",{staticClass:"my__body"},[t._t("default")],2)],1)},d=[],s={render:a,staticRenderFns:d};e.a=s},BzlO:function(t,e,n){"use strict";function a(t){n("mUIL")}Object.defineProperty(e,"__esModule",{value:!0});var d=n("J5gu"),s=n.n(d),o=n("JlA2"),i=n("VU/8"),r=a,c=i(s.a,o.a,!1,r,"data-v-1ea78582",null);e.default=c.exports},CJiQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{name:String,source:String,lang:String},data:function(){return{sourceActive:!1}},methods:{copy:function(){var t=document.createRange();t.selectNode(this.$refs.code);var e=getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy")}},created:function(){}}},J5gu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("543I"),d=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={head:function(){return{title:"Grouping content"}},components:{DocsElementGuide:d.default},data:function(){return{}}}},JlA2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("main",{staticClass:"dd-page"},[t._m(1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"basic","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[t._v("Basic")]),n("docs-element-guide",{attrs:{name:"p",source:'<p>ユーザー登録をすると、あなた専用にカスタマイズされた操作メニューが表示されます。使い込むほどにコンテンツが最適化され、充実したサービスが得られるようになります。</p>\n\n<p>もし使い方に迷った時は<a href="javascript:void(0);">ユーザーガイド</a>を参照してください。</p>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            ひとつの段落（パラグラフ）であることを表す\n          ")]),n("p",[t._v("ユーザー登録をすると、あなた専用にカスタマイズされた操作メニューが表示されます。使い込むほどにコンテンツが最適化され、充実したサービスが得られるようになります。")]),n("p",[t._v("もし使い方に迷った時は"),n("a",{attrs:{href:"javascript:void(0);"}},[t._v("ユーザーガイド")]),t._v("を参照してください。")])],2),n("docs-element-guide",{attrs:{name:"hr",source:"<p>吾輩は猫である。名前はまだ無い。</p>\n<p>どこで生れたかとんと見当がつかぬ。\n何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>\n<hr>\n<p>吾輩はここで始めて人間というものを見た。\nしかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。\nこの書生というのは時々我々を捕えて煮て食うという話である。</p>\n<p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。\nただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</p>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            テーマや話題の区切りを表す\n          ")]),n("p",[t._v("吾輩は猫である。名前はまだ無い。")]),n("p",[t._v("どこで生れたかとんと見当がつかぬ。\n何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。")]),n("hr"),n("p",[t._v("吾輩はここで始めて人間というものを見た。\nしかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。\nこの書生というのは時々我々を捕えて煮て食うという話である。")]),n("p",[t._v("しかしその当時は何という考もなかったから別段恐しいとも思わなかった。\nただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。")])],2),n("docs-element-guide",{attrs:{name:"pre",source:"<pre><code>function Panel(element, canClose, closeHandler) {\n  this.element = element;\n  this.canClose = canClose;\n  this.closeHandler = function () { if (closeHandler) closeHandler() };\n}</code></pre>\n\n<pre><samp>あなたは、ある大きな白い家の玄関の前に立っています。\n目の前に小さな郵便受けがあります。\n\n></samp> <kbd>open mailbox</kbd>\n\n<samp>郵便受けを開けました:\n一枚のチラシがあります。\n\n></samp></pre>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            半角スペースや改行をそのまま表示する\n          ")]),n("pre",[n("code",[t._v("function Panel(element, canClose, closeHandler) {\n  this.element = element;\n  this.canClose = canClose;\n  this.closeHandler = function () { if (closeHandler) closeHandler() };\n}")])]),n("pre",[n("samp",[t._v("あなたは、ある大きな白い家の玄関の前に立っています。\n目の前に小さな郵便受けがあります。\n\n>")]),t._v(" "),n("kbd",[t._v("open mailbox")]),t._v("\n\n"),n("samp",[t._v("郵便受けを開けました:\n一枚のチラシがあります。\n\n>")])])],2)],1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"list","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[t._v("List")]),n("docs-element-guide",{attrs:{name:"ol",source:"<ol>\n  <li>いちご</li>\n  <li>人参</li>\n  <li>サンダル</li>\n</ol>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            順序のあるリストを表示する\n          ")]),n("ol",[n("li",[t._v("いちご")]),n("li",[t._v("人参")]),n("li",[t._v("サンダル")])])],2),n("docs-element-guide",{attrs:{name:"ul",source:"<ul>\n  <li>いちご</li>\n  <li>イチジク</li>\n  <li>一味唐辛子</li>\n</ul>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            順序のないリストを表示する\n          ")]),n("ul",[n("li",[t._v("いちご")]),n("li",[t._v("イチジク")]),n("li",[t._v("一味唐辛子")])])],2),n("docs-element-guide",{attrs:{name:"dl",source:'<dl>\n  <dt>作者</dt>\n  <dd>ジョン</dd>\n  <dd>ポール</dd>\n  <dd>ジョージ</dd>\n  <dd>リンゴ</dd>\n</dl>\n\n<dl>\n  <dt lang="ja"><dfn>色</dfn></dt>\n  <dt lang="en-US"><dfn>color</dfn></dt>\n  <dt lang="en-GB"><dfn>colour</dfn></dt>\n  <dd>可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。</dd>\n</dl>\n\n<dl>\n  <dt>金貨を獲得している場合</dt>\n  <dd>金貨一枚につき１０ポイント加算されます。</dd>\n  <dt>銀貨を獲得している場合</dt>\n  <dd>銀貨一枚につき１ポイント加算されます。</dd>\n  <dt>枚数に関わらず、金貨と銀貨の両方を獲得してる場合</dt>\n  <dd>ボーナスポイントとして２０ポイント加算されます。 </dd>\n  <dt>それ例外の場合</dt>\n  <dd>ポイントは加算されません。</dd>\n</dl>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            定義・説明リストを表す\n          ")]),n("dl",[n("dt",[t._v("作者")]),n("dd",[t._v("ジョン")]),n("dd",[t._v("ポール")]),n("dd",[t._v("ジョージ")]),n("dd",[t._v("リンゴ")])]),n("dl",[n("dt",{attrs:{lang:"ja"}},[n("dfn",[t._v("色")])]),n("dt",{attrs:{lang:"en-US"}},[n("dfn",[t._v("color")])]),n("dt",{attrs:{lang:"en-GB"}},[n("dfn",[t._v("colour")])]),n("dd",[t._v("可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。")])]),n("dl",[n("dt",[t._v("金貨を獲得している場合")]),n("dd",[t._v("金貨一枚につき１０ポイント加算されます。")]),n("dt",[t._v("銀貨を獲得している場合")]),n("dd",[t._v("銀貨一枚につき１ポイント加算されます。")]),n("dt",[t._v("枚数に関わらず、金貨と銀貨の両方を獲得してる場合")]),n("dd",[t._v("ボーナスポイントとして２０ポイント加算されます。 ")]),n("dt",[t._v("それ例外の場合")]),n("dd",[t._v("ポイントは加算されません。")])])],2)],1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"table","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[t._v("Table")]),n("docs-element-guide",{attrs:{name:"table",source:"<table>\n  <caption>\n    <strong>お寿司をどこで食べるか？その長所と短所</strong>\n  </caption>\n  <thead>\n    <tr>\n      <th>どこで食べるか</th>\n      <th>長所</th>\n      <th>短所</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>銀座の高級店</th>\n      <td>ネタにこだわり、技術が素晴らしい</td>\n      <td>値段が時価で不安、予約が必要</td>\n    </tr>\n    <tr>\n      <th>回転寿司</th>\n      <td>値段が良心的、気軽に手に取れる</td>\n      <td>ネタが解凍もの、休みの日は混む</td>\n    </tr>\n  </tbody>\n</table>\n\n<table>\n  <caption>\n    <strong>お寿司をどこで食べるか？その長所と短所</strong>\n    <details>\n      <summary>このテーブルの説明</summary>\n      <p>以下のテーブルでは、２番目のカラムに寿司店のタイプが入れられています。その左側にそのようなタイプのお店でお寿司を食べる場合の長所が、右側に短所が入れられています。</p>\n    </details>\n  </caption>\n  <thead>\n    <tr>\n      <th>長所</th>\n      <th>どこで食べるか</th>\n      <th>短所</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>ネタにこだわり、技術が素晴らしい</td>\n      <th>銀座の高級店</th>\n      <td>値段が時価で不安、予約が必要</td>\n    </tr>\n    <tr>\n      <td>値段が良心的、気軽に手に取れる</td>\n      <th>回転寿司</th>\n      <td>ネタが解凍もの、休みの日は混む</td>\n    </tr>\n  </tbody>\n</table>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            テーブル（表）を作成する\n          ")]),n("table",[n("caption",[n("strong",[t._v("お寿司をどこで食べるか？その長所と短所")])]),n("thead",[n("tr",[n("th",[t._v("どこで食べるか")]),n("th",[t._v("長所")]),n("th",[t._v("短所")])])]),n("tbody",[n("tr",[n("th",[t._v("銀座の高級店")]),n("td",[t._v("ネタにこだわり、技術が素晴らしい")]),n("td",[t._v("値段が時価で不安、予約が必要")])]),n("tr",[n("th",[t._v("回転寿司")]),n("td",[t._v("値段が良心的、気軽に手に取れる")]),n("td",[t._v("ネタが解凍もの、休みの日は混む")])])])]),n("table",[n("caption",[n("strong",[t._v("お寿司をどこで食べるか？その長所と短所")]),n("details",[n("summary",[t._v("このテーブルの説明")]),n("p",[t._v("以下のテーブルでは、２番目のカラムに寿司店のタイプが入れられています。その左側にそのようなタイプのお店でお寿司を食べる場合の長所が、右側に短所が入れられています。")])])]),n("thead",[n("tr",[n("th",[t._v("長所")]),n("th",[t._v("どこで食べるか")]),n("th",[t._v("短所")])])]),n("tbody",[n("tr",[n("td",[t._v("ネタにこだわり、技術が素晴らしい")]),n("th",[t._v("銀座の高級店")]),n("td",[t._v("値段が時価で不安、予約が必要")])]),n("tr",[n("td",[t._v("値段が良心的、気軽に手に取れる")]),n("th",[t._v("回転寿司")]),n("td",[t._v("ネタが解凍もの、休みの日は混む")])])])])],2)],1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"others","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[t._v("Others")]),n("docs-element-guide",{attrs:{name:"figure",source:'<figure>\n  <img src="img/avatar/boy_1.png" width="280" alt="つまらなそうな男の子">\n  <figcaption>思春期の男の子の一般的な生態</figcaption>\n</figure>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[t._v("\n            図表であることを示す\n          ")]),n("figure",[n("img",{attrs:{src:"img/avatar/boy_1.png",width:"280",alt:"つまらなそうな男の子"}}),n("figcaption",[t._v("思春期の男の子の一般的な生態")])])],2)],1)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"dd-page-header"},[n("h1",{staticClass:"dd-page-header__inner dd-page__container"},[t._v("Grouping content")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dd-page__container"},[n("p",{staticClass:"dd-page__introduction"},[t._v("コンテンツの分類を示す要素セットです。")])])}],s={render:a,staticRenderFns:d};e.a=s},Kiph:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},iHro:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".my__body[data-v-252d0db4]{margin-top:2rem}.my__source-container[data-v-252d0db4]{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.my__pre[data-v-252d0db4]{margin:0!important}.my__code[data-v-252d0db4]{padding:2.5em 1.5em}.my__btn-source-copy[data-v-252d0db4]{position:absolute;right:0;top:0;color:#fff}",""])},mUIL:function(t,e,n){var a=n("Kiph");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("b19639d0",a,!0)},"nCL+":function(t,e,n){var a=n("iHro");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("59ee4b26",a,!0)}});
//# sourceMappingURL=grouping-content.0a1c42b6c1223382d0da.js.map