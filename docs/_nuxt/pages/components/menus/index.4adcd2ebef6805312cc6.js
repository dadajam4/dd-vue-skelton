webpackJsonp([2],{AyXA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},BHRx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"absolute-position-without-activator",template:'<dd-card class="dd-portrait" img="img/portrait/portrait-2.jpg" height="450px" @contextmenu="showMenu"></dd-card>\n<dd-menu offset-y absolute v-model="menu.show" :position-x="menu.x" :position-y="menu.y">\n  <dd-list>\n    <dd-list-tile v-for="item in items" :key="item.title" @click="">\n      <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n    </dd-list-tile>\n  </dd-list>\n</dd-menu>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ],\n      menu: { show: false, x: 0, y: 0 }\n    };\n  },\n\n  methods: {\n    showMenu(e) {\n      e.preventDefault();\n      this.menu.show = false;\n      this.menu.x = e.clientX;\n      this.menu.y = e.clientY;\n      this.$nextTick(() => {\n        this.menu.show = true;\n      });\n    }\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],menu:{show:!1,x:0,y:0}}},methods:{showMenu:function(t){var e=this;t.preventDefault(),this.menu.show=!1,this.menu.x=t.clientX,this.menu.y=t.clientY,this.$nextTick(function(){e.menu.show=!0})}}}},C3IM:function(t,e,i){var n=i("QolP");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("57014a0b",n,!1)},CiBH:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},CsS1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("dd-card",{staticClass:"dd-portrait",attrs:{img:"img/portrait/portrait-2.jpg",height:"450px"},on:{contextmenu:t.showMenu}}),i("dd-menu",{attrs:{"offset-y":"",absolute:"","position-x":t.menu.x,"position-y":t.menu.y},model:{value:t.menu.show,callback:function(e){t.$set(t.menu,"show",e)},expression:"menu.show"}},[i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},DmGH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"basic",template:'<dd-menu offset-y>\n  <dd-btn primary dark slot="activator">Dropdown</dd-btn>\n  <dd-list>\n    <dd-list-tile v-for="item in items" :key="item.title" @click="">\n      <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n    </dd-list-tile>\n  </dd-list>\n</dd-menu>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}}},EB6q:function(t,e,i){var n=i("AyXA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("014ba9ab",n,!1)},IKXc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("SYHp"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("J6Ke"),o=!1;var d=function(t){o||i("JpBo")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-a1f2ab82",null);r.options.__file="src/pages/components/menus/-example-menu.vue",e.default=r.exports},J6Ke:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[n("dd-card",[n("dd-toolbar",{attrs:{color:"cyan",dark:""}},[n("dd-toolbar-side-icon"),n("dd-toolbar-title",[t._v("これはツールバーです。これはツールバーです。これはツールバーです。")]),n("dd-spacer"),n("dd-menu",{attrs:{bottom:"",left:""}},[n("dd-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("dd-list",t._l(t.items,function(e){return n("dd-list-tile",{key:e.title,on:{click:function(t){}}},[n("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),n("dd-list",[n("dd-list-tile",{on:{click:function(t){}}},[n("dd-list-tile-avatar",[n("img",{attrs:{src:i("JGqK"),alt:""}})]),n("dd-list-tile-content",[n("dd-list-tile-title",[t._v("タイトル")]),n("dd-list-tile-sub-title",[t._v("サブタイトル")])],1)],1)],1)],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},JGqK:function(t,e,i){t.exports=i.p+"img/boy_1.0ca576c.png"},JpBo:function(t,e,i){var n=i("cYUX");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("f03b6364",n,!1)},Kf9K:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("vTIZ"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("NHV8"),o=!1;var d=function(t){o||i("lcIE")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-8e89527c",null);r.options.__file="src/pages/components/menus/-example-custom-transitions.vue",e.default=r.exports},MXvQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("BHRx"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("CsS1"),o=!1;var d=function(t){o||i("C3IM")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-0998e592",null);r.options.__file="src/pages/components/menus/-example-absolute-position-without-activator.vue",e.default=r.exports},MYFX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"hover",template:'<dd-menu offset-y open-on-hover>\n  <dd-btn primary dark slot="activator">Dropdown</dd-btn>\n  <dd-list>\n    <dd-list-tile v-for="item in items" :key="item.title" @click="">\n      <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n    </dd-list-tile>\n  </dd-list>\n</dd-menu>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}}},NHV8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("div",{staticClass:"text-xs-center"},[i("dd-menu",{attrs:{origin:"center center",transition:"dd-scale-transition",bottom:""}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("\n        Scale Transition\n      ")]),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),i("dd-menu",{attrs:{transition:"dd-slide-x-transition",bottom:"",right:""}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("\n        Slide X Transition\n      ")]),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),i("dd-menu",{attrs:{transition:"dd-slide-y-transition",bottom:""}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("\n        Slide Y Transition\n      ")]),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)])};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},OMrf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("DmGH"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("gknI"),o=!1;var d=function(t){o||i("EB6q")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-2a284efe",null);r.options.__file="src/pages/components/menus/-example-basic.vue",e.default=r.exports},OzRS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("zGOY"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("wGRT"),o=!1;var d=function(t){o||i("bSfP")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-c08209e2",null);r.options.__file="src/pages/components/menus/-example-absolute-position.vue",e.default=r.exports},QK88:function(t,e,i){var n=i("CiBH");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("64575f2c",n,!1)},QolP:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},SYHp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"menu",template:'<dd-card>\n  <dd-toolbar color="cyan" dark>\n    <dd-toolbar-side-icon></dd-toolbar-side-icon>\n    <dd-toolbar-title>これはツールバーです。これはツールバーです。これはツールバーです。</dd-toolbar-title>\n    <dd-spacer></dd-spacer>\n    <dd-menu bottom left>\n      <dd-toolbar-side-icon slot="activator"></dd-toolbar-side-icon>\n      <dd-list>\n        <dd-list-tile v-for="item in items" :key="item.title" @click="">\n          <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n        </dd-list-tile>\n      </dd-list>\n    </dd-menu>\n  </dd-toolbar>\n\n  <dd-list>\n    <dd-list-tile @click="">\n      <dd-list-tile-avatar>\n        <img src="~assets/img/avatar/boy_1.png" alt="">\n      </dd-list-tile-avatar>\n      <dd-list-tile-content>\n        <dd-list-tile-title>タイトル</dd-list-tile-title>\n        <dd-list-tile-sub-title>サブタイトル</dd-list-tile-sub-title>\n      </dd-list-tile-content>\n    </dd-list-tile>\n  </dd-list>\n</dd-card>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}}},Spt2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"popover-menu",template:'<dd-menu offset-x :close-on-content-click="false" :nudge-width="200">\n  <dd-btn primary dark slot="activator">Dropdown</dd-btn>\n  <div>これはメニューです</div>\n</dd-menu>',script:"",css:""}}}}},U4Tx:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},XNNZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("psEd"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("j8SN"),o=!1;var d=function(t){o||i("tOrI")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-493115fc",null);r.options.__file="src/pages/components/menus/index.vue",e.default=r.exports},YQiA:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("dd-menu",{attrs:{"offset-y":"","open-on-hover":""}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("Dropdown")]),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},YSVD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Spt2"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("gwf3"),o=!1;var d=function(t){o||i("QK88")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-62693067",null);r.options.__file="src/pages/components/menus/-example-popover-menu.vue",e.default=r.exports},Ywfg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MYFX"),l=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var s=i("YQiA"),o=!1;var d=function(t){o||i("mcce")},r=i("VU/8")(l.a,s.a,!1,d,"data-v-2a73e5e8",null);r.options.__file="src/pages/components/menus/-example-hover.vue",e.default=r.exports},bSfP:function(t,e,i){var n=i("sHg7");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("91bc097c",n,!1)},cYUX:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},gknI:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("dd-menu",{attrs:{"offset-y":""}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("Dropdown")]),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},gwf3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("dd-menu",{attrs:{"offset-x":"","close-on-content-click":!1,"nudge-width":200}},[i("dd-btn",{attrs:{slot:"activator",primary:"",dark:""},slot:"activator"},[t._v("Dropdown")]),i("div",[t._v("これはメニューです")])],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},j8SN:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd-page",[i("dd-page-header",[t._v("Menus")]),i("dd-page-intro",[t._v("\n    Use our iOS integration to style your native iOS applications to be consistent with the "),i("span",[t._v("hogehoge")])]),i("my-example-basic",{attrs:{id:"basic","data-anchor-point":""}}),i("my-example-absolute-position",{attrs:{id:"absolute-position","data-anchor-point":""}}),i("my-example-absolute-position-without-activator",{attrs:{id:"absolute-position-without-activator","data-anchor-point":""}}),i("my-example-hover",{attrs:{id:"hover","data-anchor-point":""}}),i("my-example-menu",{attrs:{id:"menu","data-anchor-point":""}}),i("my-example-custom-transitions",{attrs:{id:"custom-transitions","data-anchor-point":""}}),i("my-example-popover-menu",{attrs:{id:"popover-menu","data-anchor-point":""}})],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},lcIE:function(t,e,i){var n=i("U4Tx");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7653802a",n,!1)},lp0t:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},mcce:function(t,e,i){var n=i("lp0t");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("ba575018",n,!1)},psEd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(i("OMrf")),l=c(i("OzRS")),a=c(i("MXvQ")),s=c(i("Ywfg")),o=c(i("IKXc")),d=c(i("Kf9K")),r=c(i("YSVD"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{"my-example-basic":n.default,"my-example-absolute-position":l.default,"my-example-absolute-position-without-activator":a.default,"my-example-hover":s.default,"my-example-menu":o.default,"my-example-custom-transitions":d.default,"my-example-popover-menu":r.default},$_anchors:[{id:"basic",label:"basic"},{id:"absolute-position",label:"absolute position"},{id:"absolute-position-without-activator",label:"absolute position without activator"},{id:"hover",label:"hover"},{id:"menu",label:"menu"},{id:"custom-transitions",label:"custom transitions"},{id:"popover-menu",label:"popover menu"}],head:function(){return{title:"Menus"}}}},s0sS:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},sHg7:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},tOrI:function(t,e,i){var n=i("s0sS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("c5101a50",n,!1)},vTIZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"custom-transitions",template:'<div class="text-xs-center">\n  <dd-menu\n    origin="center center"\n    transition="dd-scale-transition"\n    bottom\n  >\n    <dd-btn primary dark slot="activator">\n      Scale Transition\n    </dd-btn>\n    <dd-list>\n      <dd-list-tile v-for="item in items" :key="item.title" @click="">\n        <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n      </dd-list-tile>\n    </dd-list>\n  </dd-menu>\n\n  <dd-menu\n    transition="dd-slide-x-transition"\n    bottom\n    right\n  >\n    <dd-btn primary dark slot="activator">\n      Slide X Transition\n    </dd-btn>\n    <dd-list>\n      <dd-list-tile v-for="item in items" :key="item.title" @click="">\n        <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n      </dd-list-tile>\n    </dd-list>\n  </dd-menu>\n\n  <dd-menu\n    transition="dd-slide-y-transition"\n    bottom\n  >\n    <dd-btn primary dark slot="activator">\n      Slide Y Transition\n    </dd-btn>\n    <dd-list>\n      <dd-list-tile v-for="item in items" :key="item.title" @click="">\n        <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n      </dd-list-tile>\n    </dd-list>\n  </dd-menu>\n</div>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}}},wGRT:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("docs-example",{attrs:{id:t.$_docsExampleData.id,template:t.$_docsExampleData.template,script:t.$_docsExampleData.script,css:t.$_docsExampleData.css}},[i("dd-menu",{attrs:{"offset-y":"",absolute:"","full-width":""}},[i("dd-card",{staticClass:"portrait",attrs:{slot:"activator",img:"img/portrait/portrait-1.jpg",height:"450px"},slot:"activator"}),i("dd-list",t._l(t.items,function(e){return i("dd-list-tile",{key:e.title,on:{click:function(t){}}},[i("dd-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},zGOY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={computed:{$_docsExampleData:function(){return{id:"absolute-position",template:'<dd-menu offset-y absolute full-width>\n  <dd-card class="portrait" img="img/portrait/portrait-1.jpg" height="450px" slot="activator"></dd-card>\n  <dd-list>\n    <dd-list-tile v-for="item in items" :key="item.title" @click="">\n      <dd-list-tile-title>{{ item.title }}</dd-list-tile-title>\n    </dd-list-tile>\n  </dd-list>\n</dd-menu>',script:'export default {\n  data() {\n    return {\n      items: [\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me" },\n        { title: "Click Me 2" }\n      ]\n    };\n  }\n};',css:""}}},data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}}}});