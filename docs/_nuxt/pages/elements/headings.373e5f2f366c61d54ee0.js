webpackJsonp([1],{"3kB6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("543I"),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={head:function(){return{title:"Headings"}},components:{DocsElementGuide:s.default},data:function(){return{}}}},"543I":function(e,t,n){"use strict";function a(e){n("nCL+")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("NUjr"),i=n.n(s),r=n("7ZXo"),o=n("VU/8"),c=a,d=o(i.a,r.a,!1,c,"data-v-252d0db4",null);t.default=d.exports},"7ZXo":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my"},[n("h3",{staticClass:"my__name"},[n("span",{staticStyle:{"vertical-align":"middle"}},[e._v("<"+e._s(e.name)+">")]),e.source?n("dd-btn",{staticClass:"dd-m-l--sm",attrs:{sm:"",primary:""},on:{click:function(t){e.sourceActive=!e.sourceActive}}},[e._v("\n      "+e._s(e.sourceActive?"Hide":"View")+" Source\n    ")]):e._e()],1),e.source?n("dd-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.sourceActive,expression:"sourceActive"}],staticClass:"my__source-container"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.source,expression:"source"}],staticClass:"my__pre"},[n("code",{ref:"code",staticClass:"my__code",class:e.lang})]),n("dd-btn",{staticClass:"my__btn-source-copy",attrs:{icon:""},on:{click:e.copy}},[n("dd-icon",[e._v("copy")])],1)],1)]):e._e(),n("p",{staticClass:"my__overview"},[e._t("overview")],2),n("div",{staticClass:"my__body"},[e._t("default")],2)],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},"8EBm":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"",""])},NUjr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,source:String,lang:String},data:function(){return{sourceActive:!1}},methods:{copy:function(){var e=document.createRange();e.selectNode(this.$refs.code);var t=getSelection();t.removeAllRanges(),t.addRange(e),document.execCommand("copy")}},created:function(){}}},PMxt:function(e,t,n){var a=n("8EBm");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("5d70abf8",a,!0)},iHro:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".my__body[data-v-252d0db4]{margin-top:2rem}.my__source-container[data-v-252d0db4]{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.my__pre[data-v-252d0db4]{margin:0!important}.my__code[data-v-252d0db4]{padding:2.5em 1.5em}.my__btn-source-copy[data-v-252d0db4]{position:absolute;right:0;top:0;color:#fff}",""])},"nCL+":function(e,t,n){var a=n("iHro");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("59ee4b26",a,!0)},nIzh:function(e,t,n){"use strict";function a(e){n("PMxt")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("3kB6"),i=n.n(s),r=n("ulnK"),o=n("VU/8"),c=a,d=o(i.a,r.a,!1,c,"data-v-55376bad",null);t.default=d.exports},ulnK:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("main",{staticClass:"dd-page"},[e._m(1),n("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"levels","data-anchor-point":""}},[n("h2",{staticClass:"dd-page__section-header"},[e._v("Levels")]),n("docs-element-guide",{attrs:{name:"h1 - h6",source:'<h1>5秒でかめは●波！？　驚きのクリティカル豆ソッド</h1>\n<p>\n  <i>明日学校であいつにかめは●波が出せれていたらいいのに</i>。。。\n  そんな妄想誰でも1度は考えた事があるはず。<br>\n  ここではまだ誰にも知られていない\n  <s>というかそんなものないので知られるはずがない</s>\n  驚きのハイパーメソッドをお教えします。\n</p>\n\n<h2>クラスで一番豆が好きなA君の場合</h2>\n<p>A君は誰よりも豆を食べていました。誰に勧められたわけでもありません。ただそこに<em>豆があったから</em>というただそれだけの理由です。</p>\n\n<h3>豆があった理由の補足</h3>\n<p>誰が置いたのでしょうね。</p>\n\n<h4>豆成分の補足</h4>\n<p>非常に多くの豆成分を含んでいます。</p>\n\n<h5>豆が効かない方へ</h5>\n<p>心配しないでください。正常運転です。詳しくは<a href="https://ja.wikipedia.org/wiki/%E3%81%8B%E3%82%81%E3%81%AF%E3%82%81%E6%B3%A2" target="_blank">ここ</a>で事実だけを知ってください。</p>\n\n<h6>A君のお休み予定一覧</h6>\n<ul>\n  <li>豆から逃げる</li>\n  <li>豆を眺める</li>\n  <li>寝る</li>\n</ul>'}},[n("template",{attrs:{slot:"overview"},slot:"overview"},[e._v("\n            見出しのレベル1〜6です。それぞれフォントサイズやマージンなどの初期値を持っています。"),n("br"),e._v("\n            関連するスタイル定義は"),n("router-link",{attrs:{to:{name:"style-typography"}}},[e._v("Style > Typography")]),e._v("を参照してください\n          ")],1),n("h1",[e._v("5秒でかめは●波！？　驚きのクリティカル豆ソッド")]),n("p",[n("i",[e._v("明日学校であいつにかめは●波が出せれていたらいいのに")]),e._v("。。。\n  そんな妄想誰でも1度は考えた事があるはず。"),n("br"),e._v("\n  ここではまだ誰にも知られていない\n  "),n("s",[e._v("というかそんなものないので知られるはずがない")]),e._v("\n  驚きのハイパーメソッドをお教えします。\n")]),n("h2",[e._v("クラスで一番豆が好きなA君の場合")]),n("p",[e._v("A君は誰よりも豆を食べていました。誰に勧められたわけでもありません。ただそこに"),n("em",[e._v("豆があったから")]),e._v("というただそれだけの理由です。")]),n("h3",[e._v("豆があった理由の補足")]),n("p",[e._v("誰が置いたのでしょうね。")]),n("h4",[e._v("豆成分の補足")]),n("p",[e._v("非常に多くの豆成分を含んでいます。")]),n("h5",[e._v("豆が効かない方へ")]),n("p",[e._v("心配しないでください。正常運転です。詳しくは"),n("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E3%81%8B%E3%82%81%E3%81%AF%E3%82%81%E6%B3%A2",target:"_blank"}},[e._v("ここ")]),e._v("で事実だけを知ってください。")]),n("h6",[e._v("A君のお休み予定一覧")]),n("ul",[n("li",[e._v("豆から逃げる")]),n("li",[e._v("豆を眺める")]),n("li",[e._v("寝る")])])],2)],1)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"dd-page-header"},[n("h1",{staticClass:"dd-page-header__inner dd-page__container"},[e._v("Headings")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dd-page__container"},[n("p",{staticClass:"dd-page__introduction"},[e._v("HTMLの基本的な要素のうち、スタイルを定義している要素の一覧です。")])])}],i={render:a,staticRenderFns:s};t.a=i}});
//# sourceMappingURL=headings.373e5f2f366c61d54ee0.js.map