webpackJsonp([4],{"/ZvO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"color",template:'<dd-tabs primary>\n  <dd-tabs-item v-for="n in 3" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      <p v-for="nn in n">これはタブ{{n}}です。</p>\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>\n\n<dd-tabs background-color="indigo" text-color="shades-white">\n  <dd-tabs-item v-for="n in 3" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      <p v-for="nn in n">これはタブ{{n}}です。</p>\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>\n\n<dd-tabs warning active-color="shades-black">\n  <dd-tabs-item v-for="n in 3" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      <p v-for="nn in n">これはタブ{{n}}です。</p>\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:"",css:""}}}}},"/eK8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Mn2B"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("sNTK"),o=!1;var r=function(t){o||a("SKHE")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-429b92b4",null);c.options.__file="src/pages/components/tabs/-example-icons.vue",e.default=c.exports},"2y/1":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"4MGX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(a("tElH")),s=u(a("5qkS")),i=u(a("RLtI")),d=u(a("nZeq")),o=u(a("b6g7")),r=u(a("IZF4")),c=u(a("/eK8")),l=u(a("a5KH"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={components:{"my-example-basic":n.default,"my-example-use-model":s.default,"my-example-color":i.default,"my-example-centered":d.default,"my-example-scrollable":o.default,"my-example-wraped":r.default,"my-example-icons":c.default,"my-example-desktop-tabs":l.default},$_anchors:[{id:"basic",label:"basic"},{id:"use-model",label:"use model"},{id:"color",label:"color"},{id:"centered",label:"centered"},{id:"scrollable",label:"scrollable"},{id:"wraped",label:"wraped"},{id:"icons",label:"icons"},{id:"desktop-tabs",label:"desktop tabs"}],head:function(){return{title:"Tabs"}}}},"4mME":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"desktop-tabs",template:'<dd-tabs center background-color="grey-lighten-4" text-color="primary">\n  <dd-tabs-item v-for="tab in tabs" :key="tab.label">\n    <dd-tabs-trigger :icon="tab.icon" />\n    <dd-tabs-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:'export default {\n  data() {\n    return {\n      tabs: [\n        { icon: "phone", label: "RECENTS" },\n        { icon: "heart", label: "FAVORITES" },\n        { icon: "address-book", label: "NEARBY" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{tabs:[{icon:"phone",label:"RECENTS"},{icon:"heart",label:"FAVORITES"},{icon:"address-book",label:"NEARBY"}]}}}},"5n40":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{center:"","background-color":"grey-lighten-4","text-color":"primary"}},t._l(t.tabs,function(e){return a("dd-tabs-item",{key:e.label},[a("dd-tabs-trigger",{attrs:{icon:e.icon}}),a("dd-tabs-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ")])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"5qkS":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VcPb"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("FVdr"),o=!1;var r=function(t){o||a("MiTZ")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-1d01d06f",null);c.options.__file="src/pages/components/tabs/-example-use-model.vue",e.default=c.exports},"7+So":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{primary:""}},t._l(20,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ")])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"8s+o":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{info:"",center:""}},t._l(3,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",t._l(e,function(n){return a("p",[t._v("これはタブ"+t._s(e)+"です。")])}))],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},AIVZ:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},Bbs0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"centered",template:'<dd-tabs info center>\n  <dd-tabs-item v-for="n in 3" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      <p v-for="nn in n">これはタブ{{n}}です。</p>\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:"",css:""}}}}},C0J3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"scrollable",template:'<dd-tabs primary>\n  <dd-tabs-item v-for="n in 20" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:"",css:""}}}}},DA8p:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},FBf9:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"FQ+v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"basic",template:'<dd-tabs ref="tab">\n  <dd-tabs-item v-for="n in 3" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content class="dd-text--center">\n      <p v-for="nn in n">これはタブ{{n}}です。</p>\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:"",css:""}}}}},FVdr:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("p",[t._v("\n    アクティブなタブのIDは「"+t._s(t.selected)+"」です。\n    "),a("dd-btn",{attrs:{info:""},on:{click:t.next}},[t._v("Next")])],1),a("dd-tabs",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.tabs,function(e){return a("dd-tabs-item",{key:e,attrs:{id:e}},[a("dd-tabs-trigger",[t._v(t._s(e))]),a("dd-tabs-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ")])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},IZF4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("nJAC"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("K4L0"),o=!1;var r=function(t){o||a("kf5G")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-abe88de6",null);c.options.__file="src/pages/components/tabs/-example-wraped.vue",e.default=c.exports},Jss6:function(t,e,a){var n=a("zEPo");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("122c8ff2",n,!1,{sourceMap:!1})},K4L0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{wrap:"",secondary:""}},t._l(20,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ")])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},MiTZ:function(t,e,a){var n=a("vnW+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("2499f7f6",n,!1,{sourceMap:!1})},Mn2B:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"icons",template:'<dd-tabs center fixed background-color="cyan" text-color="shades-white">\n  <dd-tabs-item v-for="tab in tabs" :key="tab.label">\n    <dd-tabs-trigger :icon="tab.icon">{{tab.label}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:'export default {\n  data() {\n    return {\n      tabs: [\n        { icon: "phone", label: "RECENTS" },\n        { icon: "heart", label: "FAVORITES" },\n        { icon: "address-book", label: "NEARBY" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{tabs:[{icon:"phone",label:"RECENTS"},{icon:"heart",label:"FAVORITES"},{icon:"address-book",label:"NEARBY"}]}}}},RLtI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/ZvO"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("pqTq"),o=!1;var r=function(t){o||a("YmWM")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-b2cc7322",null);c.options.__file="src/pages/components/tabs/-example-color.vue",e.default=c.exports},SKHE:function(t,e,a){var n=a("Uh4Y");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("561a2783",n,!1,{sourceMap:!1})},"T/4m":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4MGX"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("jLtO"),o=!1;var r=function(t){o||a("lJEJ")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-35a6f2c6",null);c.options.__file="src/pages/components/tabs/index.vue",e.default=c.exports},Tmqf:function(t,e,a){var n=a("kL+d");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4d419e6c",n,!1,{sourceMap:!1})},Uh4Y:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},VcPb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"use-model",template:'<p>\n  アクティブなタブのIDは「{{selected}}」です。\n  <dd-btn info @click="next">Next</dd-btn>\n</p>\n<dd-tabs v-model="selected">\n  <dd-tabs-item v-for="id in tabs" :key="id" :id="id">\n    <dd-tabs-trigger>{{id}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:'export default {\n  data() {\n    return {\n      tabs: ["tab-1", "tab-2", "tab-3"],\n      selected: null\n    };\n  },\n\n  methods: {\n    next() {\n      const currentIndex = this.tabs.indexOf(this.selected);\n      const nextIndex =\n        currentIndex === this.tabs.length - 1 ? 0 : currentIndex + 1;\n      this.selected = this.tabs[nextIndex];\n    }\n  }\n};',css:""}}},data:function(){return{tabs:["tab-1","tab-2","tab-3"],selected:null}},methods:{next:function(){var t=this.tabs.indexOf(this.selected),e=t===this.tabs.length-1?0:t+1;this.selected=this.tabs[e]}}}},YmWM:function(t,e,a){var n=a("FBf9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0cd4976e",n,!1,{sourceMap:!1})},a5KH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4mME"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("5n40"),o=!1;var r=function(t){o||a("Tmqf")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-9f99bd9a",null);c.options.__file="src/pages/components/tabs/-example-desktop-tabs.vue",e.default=c.exports},agOI:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{ref:"tab"},t._l(3,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",{staticClass:"dd-text--center"},t._l(e,function(n){return a("p",[t._v("これはタブ"+t._s(e)+"です。")])}))],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},b6g7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("C0J3"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("7+So"),o=!1;var r=function(t){o||a("nbLi")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-19c11f4b",null);c.options.__file="src/pages/components/tabs/-example-scrollable.vue",e.default=c.exports},jLtO:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("dd-page",[e("dd-page-header",[this._v("Tabs")]),e("dd-page-intro",[this._v("\n    ほげほげ\n  ")]),e("my-example-basic",{attrs:{id:"basic","data-anchor-point":""}}),e("my-example-use-model",{attrs:{id:"use-model","data-anchor-point":""}}),e("my-example-color",{attrs:{id:"color","data-anchor-point":""}}),e("my-example-centered",{attrs:{id:"centered","data-anchor-point":""}}),e("my-example-scrollable",{attrs:{id:"scrollable","data-anchor-point":""}}),e("my-example-wraped",{attrs:{id:"wraped","data-anchor-point":""}}),e("my-example-icons",{attrs:{id:"icons","data-anchor-point":""}}),e("my-example-desktop-tabs",{attrs:{id:"desktop-tabs","data-anchor-point":""}})],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"kL+d":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},kf5G:function(t,e,a){var n=a("2y/1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("019cd2e6",n,!1,{sourceMap:!1})},lJEJ:function(t,e,a){var n=a("AIVZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("23b0abda",n,!1,{sourceMap:!1})},nJAC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"wraped",template:'<dd-tabs wrap secondary>\n  <dd-tabs-item v-for="n in 20" :key="n">\n    <dd-tabs-trigger>Item {{n}}</dd-tabs-trigger>\n    <dd-tabs-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </dd-tabs-content>\n  </dd-tabs-item>\n</dd-tabs>',script:"",css:""}}}}},nZeq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Bbs0"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("8s+o"),o=!1;var r=function(t){o||a("Jss6")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-26a44dd8",null);c.options.__file="src/pages/components/tabs/-example-centered.vue",e.default=c.exports},nbLi:function(t,e,a){var n=a("DA8p");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("55dc19ba",n,!1,{sourceMap:!1})},pqTq:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{primary:""}},t._l(3,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",t._l(e,function(n){return a("p",[t._v("これはタブ"+t._s(e)+"です。")])}))],1)})),a("dd-tabs",{attrs:{"background-color":"indigo","text-color":"shades-white"}},t._l(3,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",t._l(e,function(n){return a("p",[t._v("これはタブ"+t._s(e)+"です。")])}))],1)})),a("dd-tabs",{attrs:{warning:"","active-color":"shades-black"}},t._l(3,function(e){return a("dd-tabs-item",{key:e},[a("dd-tabs-trigger",[t._v("Item "+t._s(e))]),a("dd-tabs-content",t._l(e,function(n){return a("p",[t._v("これはタブ"+t._s(e)+"です。")])}))],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},sNTK:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[a("dd-tabs",{attrs:{center:"",fixed:"","background-color":"cyan","text-color":"shades-white"}},t._l(t.tabs,function(e){return a("dd-tabs-item",{key:e.label},[a("dd-tabs-trigger",{attrs:{icon:e.icon}},[t._v(t._s(e.label))]),a("dd-tabs-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ")])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},tElH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("FQ+v"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var d=a("agOI"),o=!1;var r=function(t){o||a("zbEQ")},c=a("VU/8")(s.a,d.a,!1,r,"data-v-697fe48c",null);c.options.__file="src/pages/components/tabs/-example-basic.vue",e.default=c.exports},"vnW+":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},xO11:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},zEPo:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},zbEQ:function(t,e,a){var n=a("xO11");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("1f07adee",n,!1,{sourceMap:!1})}});