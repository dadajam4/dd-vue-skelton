webpackJsonp([3],{"543I":function(e,t,n){"use strict";function a(e){n("nCL+")}Object.defineProperty(t,"__esModule",{value:!0});var d=n("CJiQ"),s=n.n(d),i=n("7ZXo"),o=n("VU/8"),r=a,c=o(s.a,i.a,!1,r,"data-v-252d0db4",null);t.default=c.exports},"7ZXo":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my"},[n("h3",{staticClass:"my__name"},[n("span",{staticStyle:{"vertical-align":"middle"}},[e._v("<"+e._s(e.name)+">")]),e.source?n("dd-btn",{staticClass:"dd-m-l--sm",attrs:{sm:"",primary:""},on:{click:function(t){e.sourceActive=!e.sourceActive}}},[e._v("\n      "+e._s(e.sourceActive?"Hide":"View")+" Source\n    ")]):e._e()],1),e.source?n("dd-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.sourceActive,expression:"sourceActive"}],staticClass:"my__source-container"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.source,expression:"source"}],staticClass:"my__pre"},[n("code",{ref:"code",staticClass:"my__code",class:e.lang})]),n("dd-btn",{staticClass:"my__btn-source-copy",attrs:{icon:""},on:{click:e.copy}},[n("dd-icon",[e._v("copy")])],1)],1)]):e._e(),n("p",{staticClass:"my__overview"},[e._t("overview")],2),n("div",{staticClass:"my__body"},[e._t("default")],2)],1)},d=[],s={render:a,staticRenderFns:d};t.a=s},BzlO:function(e,t,n){"use strict";function a(e){n("sEOU")}Object.defineProperty(t,"__esModule",{value:!0});var d=n("J5gu"),s=n.n(d),i=n("jxJQ"),o=n("VU/8"),r=a,c=o(s.a,i.a,!1,r,"data-v-78272144",null);t.default=c.exports},CJiQ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,source:String,lang:String},data:function(){return{sourceActive:!1}},methods:{copy:function(){var e=document.createRange();e.selectNode(this.$refs.code);var t=getSelection();t.removeAllRanges(),t.addRange(e),document.execCommand("copy")}},created:function(){}}},Fsmh:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"",""])},J5gu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("543I"),d=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={head:function(){return{title:"Grouping content"}},components:{DocsElementGuide:d.default},data:function(){return{}}}},iHro:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".my__body[data-v-252d0db4]{margin-top:2rem}.my__source-container[data-v-252d0db4]{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.my__pre[data-v-252d0db4]{margin:0!important}.my__code[data-v-252d0db4]{padding:2.5em 1.5em}.my__btn-source-copy[data-v-252d0db4]{position:absolute;right:0;top:0;color:#fff}",""])},jxJQ:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("main",{staticClass:"dd-page"},[e._m(1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"basic","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[e._v("Basic")]),n("docs-element-guide",{attrs:{name:"p",source:'<p>ユーザー登録をすると、あなた専用にカスタマイズされた操作メニューが表示されます。使い込むほどにコンテンツが最適化され、充実したサービスが得られるようになります。</p>\n\n<p>もし使い方に迷った時は<a href="javascript:void(0);">ユーザーガイド</a>を参照してください。</p>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            ひとつの段落（パラグラフ）であることを表す\n          ")]),n("p",[e._v("ユーザー登録をすると、あなた専用にカスタマイズされた操作メニューが表示されます。使い込むほどにコンテンツが最適化され、充実したサービスが得られるようになります。")]),n("p",[e._v("もし使い方に迷った時は"),n("a",{attrs:{href:"javascript:void(0);"}},[e._v("ユーザーガイド")]),e._v("を参照してください。")])],2),n("docs-element-guide",{attrs:{name:"hr",source:"<p>吾輩は猫である。名前はまだ無い。</p>\n<p>どこで生れたかとんと見当がつかぬ。\n何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>\n<hr>\n<p>吾輩はここで始めて人間というものを見た。\nしかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。\nこの書生というのは時々我々を捕えて煮て食うという話である。</p>\n<p>しかしその当時は何という考もなかったから別段恐しいとも思わなかった。\nただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</p>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            テーマや話題の区切りを表す\n          ")]),n("p",[e._v("吾輩は猫である。名前はまだ無い。")]),n("p",[e._v("どこで生れたかとんと見当がつかぬ。\n何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。")]),n("hr"),n("p",[e._v("吾輩はここで始めて人間というものを見た。\nしかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。\nこの書生というのは時々我々を捕えて煮て食うという話である。")]),n("p",[e._v("しかしその当時は何という考もなかったから別段恐しいとも思わなかった。\nただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。")])],2),n("docs-element-guide",{attrs:{name:"pre",source:"<pre><code>function Panel(element, canClose, closeHandler) {\n  this.element = element;\n  this.canClose = canClose;\n  this.closeHandler = function () { if (closeHandler) closeHandler() };\n}</code></pre>\n\n<pre><samp>あなたは、ある大きな白い家の玄関の前に立っています。\n目の前に小さな郵便受けがあります。\n\n></samp> <kbd>open mailbox</kbd>\n\n<samp>郵便受けを開けました:\n一枚のチラシがあります。\n\n></samp></pre>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            半角スペースや改行をそのまま表示する\n          ")]),n("pre",[n("code",[e._v("function Panel(element, canClose, closeHandler) {\n  this.element = element;\n  this.canClose = canClose;\n  this.closeHandler = function () { if (closeHandler) closeHandler() };\n}")])]),n("pre",[n("samp",[e._v("あなたは、ある大きな白い家の玄関の前に立っています。\n目の前に小さな郵便受けがあります。\n\n>")]),e._v(" "),n("kbd",[e._v("open mailbox")]),e._v("\n\n"),n("samp",[e._v("郵便受けを開けました:\n一枚のチラシがあります。\n\n>")])])],2)],1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"list","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[e._v("List")]),n("docs-element-guide",{attrs:{name:"ol",source:"<ol>\n  <li>いちご</li>\n  <li>人参</li>\n  <li>サンダル</li>\n</ol>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            順序のあるリストを表示する\n          ")]),n("ol",[n("li",[e._v("いちご")]),n("li",[e._v("人参")]),n("li",[e._v("サンダル")])])],2),n("docs-element-guide",{attrs:{name:"ul",source:"<ul>\n  <li>いちご</li>\n  <li>イチジク</li>\n  <li>一味唐辛子</li>\n</ul>"}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            順序のないリストを表示する\n          ")]),n("ul",[n("li",[e._v("いちご")]),n("li",[e._v("イチジク")]),n("li",[e._v("一味唐辛子")])])],2),n("docs-element-guide",{attrs:{name:"dl",source:'<dl>\n  <dt>作者</dt>\n  <dd>ジョン</dd>\n  <dd>ポール</dd>\n  <dd>ジョージ</dd>\n  <dd>リンゴ</dd>\n</dl>\n\n<dl>\n  <dt lang="ja"><dfn>色</dfn></dt>\n  <dt lang="en-US"><dfn>color</dfn></dt>\n  <dt lang="en-GB"><dfn>colour</dfn></dt>\n  <dd>可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。</dd>\n</dl>\n\n<dl>\n  <dt>金貨を獲得している場合</dt>\n  <dd>金貨一枚につき１０ポイント加算されます。</dd>\n  <dt>銀貨を獲得している場合</dt>\n  <dd>銀貨一枚につき１ポイント加算されます。</dd>\n  <dt>枚数に関わらず、金貨と銀貨の両方を獲得してる場合</dt>\n  <dd>ボーナスポイントとして２０ポイント加算されます。 </dd>\n  <dt>それ例外の場合</dt>\n  <dd>ポイントは加算されません。</dd>\n</dl>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            定義・説明リストを表す\n          ")]),n("dl",[n("dt",[e._v("作者")]),n("dd",[e._v("ジョン")]),n("dd",[e._v("ポール")]),n("dd",[e._v("ジョージ")]),n("dd",[e._v("リンゴ")])]),n("dl",[n("dt",{attrs:{lang:"ja"}},[n("dfn",[e._v("色")])]),n("dt",{attrs:{lang:"en-US"}},[n("dfn",[e._v("color")])]),n("dt",{attrs:{lang:"en-GB"}},[n("dfn",[e._v("colour")])]),n("dd",[e._v("可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。")])]),n("dl",[n("dt",[e._v("金貨を獲得している場合")]),n("dd",[e._v("金貨一枚につき１０ポイント加算されます。")]),n("dt",[e._v("銀貨を獲得している場合")]),n("dd",[e._v("銀貨一枚につき１ポイント加算されます。")]),n("dt",[e._v("枚数に関わらず、金貨と銀貨の両方を獲得してる場合")]),n("dd",[e._v("ボーナスポイントとして２０ポイント加算されます。 ")]),n("dt",[e._v("それ例外の場合")]),n("dd",[e._v("ポイントは加算されません。")])])],2)],1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"others","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[e._v("Others")]),n("docs-element-guide",{attrs:{name:"figure",source:'<figure>\n  <img src="img/avatar/boy_1.png" width="280" alt="つまらなそうな男の子">\n  <figcaption>思春期の男の子の一般的な生態</figcaption>\n</figure>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            図表であることを示す\n          ")]),n("figure",[n("img",{attrs:{src:"img/avatar/boy_1.png",width:"280",alt:"つまらなそうな男の子"}}),n("figcaption",[e._v("思春期の男の子の一般的な生態")])])],2)],1)])])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"dd-page-header"},[n("h1",{staticClass:"dd-page-header__inner dd-page__container"},[e._v("Grouping content")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dd-page__container"},[n("p",{staticClass:"dd-page__introduction"},[e._v("コンテンツの分類を示す要素セットです。")])])}],s={render:a,staticRenderFns:d};t.a=s},"nCL+":function(e,t,n){var a=n("iHro");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("59ee4b26",a,!0)},sEOU:function(e,t,n){var a=n("Fsmh");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("22cd2298",a,!0)}});
//# sourceMappingURL=grouping-content.74802541cab0ab8e4e29.js.map