webpackJsonp([13],{"+Ko7":function(e,t,n){var a=n("hLy9");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("0ea8f09d",a,!1,{sourceMap:!1})},"01dW":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},"0GBs":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("MOUs"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("cVjo"),o=!1;var c=function(e){o||n("RdsU")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-117701a6",null);i.options.__file="src/pages/components/inputs/range/-example-colors.vue",t.default=i.exports},"2/J+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("u/OP"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("6yuF"),o=!1;var c=function(e){o||n("t+2R")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-8f72f6c2",null);i.options.__file="src/pages/components/inputs/range/index.vue",t.default=i.exports},"2H4i":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"icon",template:'<dd-range\n  label="Media volume"\n  rules="max_value:75 | ボリュームが大きすぎるかもしれません"\n>\n  <dd-icon>volume-up</dd-icon>\n</dd-range>\n\n<dd-range\n  label="Brightness"\n>\n  <dd-icon right>lightbulb-o</dd-icon>\n</dd-range>',script:"",css:""}}}}},"2X8M":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},"4fCM":function(e,t,n){var a=n("x8Eg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("6f6acd40",a,!1,{sourceMap:!1})},"6yuF":function(e,t,n){"use strict";var a=function(){var e=this.$createElement,t=this._self._c||e;return t("dd-page",[t("dd-page-header",[this._v("Range")]),t("dd-page-intro",[t("code",[this._v("dd-range")]),this._v(" コンポーネントを利用する事で、特定の範囲から入力を行う事が可能です。\n  ")]),t("my-example-basic",{attrs:{id:"basic","data-anchor-point":""}}),t("my-example-multiple",{attrs:{id:"multiple","data-anchor-point":""}}),t("my-example-tick-mark",{attrs:{id:"tick-mark","data-anchor-point":""}}),t("my-example-icon",{attrs:{id:"icon","data-anchor-point":""}}),t("my-example-thumbnail-label",{attrs:{id:"thumbnail-label","data-anchor-point":""}}),t("my-example-colors",{attrs:{id:"colors","data-anchor-point":""}})],1)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},"7xDp":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},E5BK:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("docs-example",{attrs:{id:e.$_docsExampleData.id,template:e.$_docsExampleData.template,script:e.$_docsExampleData.script,css:e.$_docsExampleData.css}},[n("template",{slot:"description"},[e._v("\n    基本的な利用例です。\n  ")]),n("dd-range",{attrs:{label:"ラベル",hint:"50以下で入力してください",rules:"max_value:50 | 50以下で入力してください"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),n("pre",[e._v("    "),n("code",[e._v(e._s(e.range))]),e._v("\n  ")])],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},GojA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("2H4i"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("tr1y"),o=!1;var c=function(e){o||n("+Ko7")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-255fd6f6",null);i.options.__file="src/pages/components/inputs/range/-example-icon.vue",t.default=i.exports},"Gt+Z":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bSah"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("Jiwf"),o=!1;var c=function(e){o||n("4fCM")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-0de0f334",null);i.options.__file="src/pages/components/inputs/range/-example-thumbnail-label.vue",t.default=i.exports},Jiwf:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("docs-example",{attrs:{id:e.$_docsExampleData.id,template:e.$_docsExampleData.template,script:e.$_docsExampleData.script,css:e.$_docsExampleData.css}},[n("template",{slot:"description"},[n("code",[e._v("thumb-label")]),e._v(" 属性を指定する事で、操作中の間サムネイルにラベルを表示可能です。"),n("br"),e._v("\n    操作中のみでなく常にラベルを表示させる場合、 "),n("code",[e._v("persistent-thumb-label")]),e._v(" 属性を指定してください。"),n("br"),n("code",[e._v("thumb-label")]),e._v(" 属性にコールバックを指定する事で表示内容をカスタマイズ可能です。このコールバックはプレーンなテキスト、もしくはvnodeインスタンスを返却してください。\n  ")]),n("dd-range",{attrs:{label:"ラベル",multiple:"","thumb-label":"",step:"10"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),n("pre",[e._v("    "),n("code",[e._v(e._s(e.range))]),e._v("\n  ")]),n("dd-range",{attrs:{label:"ラベル","thumb-label":function(e){return e+"cm"},"persistent-thumb-label":""}})],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},LRN5:function(e,t,n){var a=n("7xDp");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("41882879",a,!1,{sourceMap:!1})},MOUs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"colors",template:'<dd-range\n  value="50"\n  thumb-color="info"\n  track-fill-color="red"\n  tick-color="green"\n  ticks\n  persistent-ticks\n  thumb-label\n  thumb-label-color="secondary"\n  persistent-thumb-label\n  icon-active-color="blue"\n  step="10"\n>\n  <dd-icon>volume-up</dd-icon>\n</dd-range>',script:"",css:""}}}}},NHiQ:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},RdsU:function(e,t,n){var a=n("woSI");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("4401c38b",a,!1,{sourceMap:!1})},TuMK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"basic",template:'<dd-range\n  v-model="range"\n  label="ラベル"\n  hint="50以下で入力してください"\n  rules="max_value:50 | 50以下で入力してください"\n/>\n\n<pre>\n  <code>{{range}}</code>\n</pre>',script:"export default {\n  data() {\n    return {\n      range: null\n    };\n  }\n};",css:""}}},data:function(){return{range:null}}}},XJmf:function(e,t,n){var a=n("01dW");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("930684e6",a,!1,{sourceMap:!1})},Xeu7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"tick-mark",template:'<dd-range\n  v-model="range"\n  label="Normal"\n  hint="50以下で入力してください"\n  rules="max_value:50 | 50以下で入力してください"\n  ticks\n  step="20"\n/>\n\n<dd-range\n  v-model="range"\n  label="Persistent"\n  hint="50以下で入力してください"\n  rules="max_value:50 | 50以下で入力してください"\n  ticks\n  persistent-ticks\n  step="20"\n/>\n\n<pre>\n  <code>{{range}}</code>\n</pre>',script:"export default {\n  data() {\n    return {\n      range: null\n    };\n  }\n};",css:""}}},data:function(){return{range:null}}}},b5rn:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("docs-example",{attrs:{id:e.$_docsExampleData.id,template:e.$_docsExampleData.template,script:e.$_docsExampleData.script,css:e.$_docsExampleData.css}},[n("template",{slot:"description"},[n("code",[e._v("ticks")]),e._v(" 属性を指定する事で、操作中の間入力が可能な位置（step属性で指定された位置）に目盛り表示が行われます。"),n("br"),e._v("\n    この表示を操作中ではなく常に表示させるには、 "),n("code",[e._v("persistent-ticks")]),e._v(" 属性を指定してください。\n  ")]),n("dd-range",{attrs:{label:"Normal",hint:"50以下で入力してください",rules:"max_value:50 | 50以下で入力してください",ticks:"",step:"20"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),n("dd-range",{attrs:{label:"Persistent",hint:"50以下で入力してください",rules:"max_value:50 | 50以下で入力してください",ticks:"","persistent-ticks":"",step:"20"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),n("pre",[e._v("    "),n("code",[e._v(e._s(e.range))]),e._v("\n  ")])],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},bSah:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"thumbnail-label",template:'<dd-range\n  v-model="range"\n  label="ラベル"\n  multiple\n  thumb-label\n  step="10"\n/>\n\n<pre>\n  <code>{{range}}</code>\n</pre>\n\n<dd-range\n  label="ラベル"\n  :thumb-label="e => { return e + \'cm\' }"\n  persistent-thumb-label\n/>',script:"export default {\n  data() {\n    return {\n      range: null\n    };\n  }\n};",css:""}}},data:function(){return{range:null}}}},cVjo:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("docs-example",{attrs:{id:e.$_docsExampleData.id,template:e.$_docsExampleData.template,script:e.$_docsExampleData.script,css:e.$_docsExampleData.css}},[n("template",{slot:"description"},[e._v("\n    いくつかの色を以下の属性で指定可能です。 thumb-color、thumb-label-color、track-fill-colorは multiple属性と併用する際、配列で値を注入する事で個別に色指定が可能です。\n    "),n("dl",[n("dt",[n("code",[e._v("thumb-color")])]),n("dd",[e._v("サムネイル")]),n("dt",[n("code",[e._v("thumb-label-color")])]),n("dd",[e._v("サムネイルラベル")]),n("dt",[n("code",[e._v("track-fill-color")])]),n("dd",[e._v("トラックを埋める色")]),n("dt",[n("code",[e._v("tick-color")])]),n("dd",[e._v("目盛り")]),n("dt",[n("code",[e._v("icon-active-color")])]),n("dd",[e._v("アクティブ時のアイコン色")])])]),n("dd-range",{attrs:{value:"50","thumb-color":"info","track-fill-color":"red","tick-color":"green",ticks:"","persistent-ticks":"","thumb-label":"","thumb-label-color":"secondary","persistent-thumb-label":"","icon-active-color":"blue",step:"10"}},[n("dd-icon",[e._v("volume-up")])],1)],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},g39W:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xeu7"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("b5rn"),o=!1;var c=function(e){o||n("LRN5")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-f7db3060",null);i.options.__file="src/pages/components/inputs/range/-example-tick-mark.vue",t.default=i.exports},hLy9:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},j0uC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={computed:{$_docsExampleData:function(){return{id:"multiple",template:'<dd-range\n  v-model="range"\n  label="ラベル"\n  multiple\n/>\n\n<pre>\n  <code>{{range}}</code>\n</pre>',script:"export default {\n  data() {\n    return {\n      range: null\n    };\n  }\n};",css:""}}},data:function(){return{range:null}}}},k1tO:function(e,t,n){var a=n("2X8M");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("a55c60ca",a,!1,{sourceMap:!1})},nOcT:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("docs-example",{attrs:{id:e.$_docsExampleData.id,template:e.$_docsExampleData.template,script:e.$_docsExampleData.script,css:e.$_docsExampleData.css}},[n("template",{slot:"description"},[n("code",[e._v("multiple")]),e._v(" 属性を指定する事で、2つの入力を同時に行う事ができます。"),n("br"),e._v("\n    この場合内部的には2つのinput要素が生成され、 v-model 利用時は配列が同期されます。\n  ")]),n("dd-range",{attrs:{label:"ラベル",multiple:""},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),n("pre",[e._v("    "),n("code",[e._v(e._s(e.range))]),e._v("\n  ")])],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},"t+2R":function(e,t,n){var a=n("NHiQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("031c8f41",a,!1,{sourceMap:!1})},tr1y:function(e,t,n){"use strict";var a=function(){var e=this.$createElement,t=this._self._c||e;return t("docs-example",{attrs:{id:this.$_docsExampleData.id,template:this.$_docsExampleData.template,script:this.$_docsExampleData.script,css:this.$_docsExampleData.css}},[t("template",{slot:"description"},[this._v("\n    アイコンを挿入可能です。\n  ")]),t("dd-range",{attrs:{label:"Media volume",rules:"max_value:75 | ボリュームが大きすぎるかもしれません"}},[t("dd-icon",[this._v("volume-up")])],1),t("dd-range",{attrs:{label:"Brightness"}},[t("dd-icon",{attrs:{right:""}},[this._v("lightbulb-o")])],1)],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r},"u/OP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("xcfw")),r=i(n("vl4p")),l=i(n("g39W")),s=i(n("GojA")),o=i(n("Gt+Z")),c=i(n("0GBs"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{"my-example-basic":a.default,"my-example-multiple":r.default,"my-example-tick-mark":l.default,"my-example-icon":s.default,"my-example-thumbnail-label":o.default,"my-example-colors":c.default},$_anchors:[{id:"basic",label:"basic"},{id:"multiple",label:"multiple"},{id:"tick-mark",label:"tick mark"},{id:"icon",label:"icon"},{id:"thumbnail-label",label:"thumbnail label"},{id:"colors",label:"colors"}],head:function(){return{title:"Range"}}}},vl4p:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("j0uC"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("nOcT"),o=!1;var c=function(e){o||n("XJmf")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-0ae3e28d",null);i.options.__file="src/pages/components/inputs/range/-example-multiple.vue",t.default=i.exports},woSI:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},x8Eg:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},xcfw:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("TuMK"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);var s=n("E5BK"),o=!1;var c=function(e){o||n("k1tO")},i=n("VU/8")(r.a,s.a,!1,c,"data-v-76d48001",null);i.options.__file="src/pages/components/inputs/range/-example-basic.vue",t.default=i.exports}});