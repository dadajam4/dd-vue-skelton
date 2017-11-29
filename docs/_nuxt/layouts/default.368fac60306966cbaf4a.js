webpackJsonp([0],{"4Qka":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dd-app-drawer",{ref:"drawer",attrs:{right:"",static:"desktop"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("div",{staticClass:"my-logo"},[a("router-link",{attrs:{to:{name:"index"}}},[a("img",{staticClass:"dd-m-r--xs",attrs:{src:"img/logo/dd.svg",alt:"",width:"24"}}),t._v("\n      DD Vue Skelton\n    ")])],1),a("dd-list",[t._l(t.links,function(e,n){return[e.children?t._e():a("dd-list-tile",{key:n,attrs:{to:{name:e.name}}},[a("dd-list-tile-action",[a("dd-icon",[t._v(t._s(t.iconMap[e.name]))])],1),a("dd-list-tile-content",[a("dd-list-tile-title",{staticClass:"my-parent-name"},[t._v(t._s(e.name))])],1)],1),e.children?a("dd-list-group",{key:n,attrs:{group:e.path}},[a("dd-list-tile",{attrs:{slot:"item"},slot:"item"},[a("dd-list-tile-action",[a("dd-icon",[t._v(t._s(t.iconMap[e.name]))])],1),a("dd-list-tile-content",[a("dd-list-tile-title",{staticClass:"my-parent-name"},[t._v(t._s(e.name))])],1),a("dd-list-tile-action",[a("dd-icon",[t._v("angle-down")])],1)],1),t._l(e.children,function(e,n){return a("dd-list-tile",{key:n,attrs:{to:{name:e.name}}},[a("dd-list-tile-action",[t._v(" ")]),a("dd-list-tile-content",[a("dd-list-tile-title",{staticClass:"my-child-name"},[t._v(t._s(e._filename))])],1),a("dd-list-tile-action")],1)})],2):t._e()]})],2)],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},"7a3/":function(t,e,a){var n=a("RvdR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("78396f47",n,!0)},Ma2J:function(t,e,a){"use strict";function n(t){a("W4K0")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("n98g"),o=a.n(i),s=a("jF1i"),r=a("VU/8"),l=n,d=r(o.a,s.a,!1,l,"data-v-05583b06",null);e.default=d.exports},MhZo:function(t,e,a){"use strict";function n(t){a("xLyT")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("yRYW"),o=a.n(i),s=a("rA/6"),r=a("VU/8"),l=n,d=r(o.a,s.a,!1,l,"data-v-4a94803c",null);e.default=d.exports},RvdR:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".my-logo[data-v-15d1be26]{border-bottom:1px solid}.dd-theme--inverted .my-logo[data-v-15d1be26],.my-logo.dd-theme--inverted[data-v-15d1be26]{border-color:#616161}.dd-theme--base .my-logo[data-v-15d1be26],.my-logo.dd-theme--base[data-v-15d1be26],.my-logo[data-v-15d1be26]{border-color:#e3e3e3}.my-logo>a[data-v-15d1be26]{color:inherit;font-weight:700;display:-ms-flexbox;display:flex;padding-left:20px;height:64px;-ms-flex-align:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.my-logo>a[data-v-15d1be26]:focus,.my-logo>a[data-v-15d1be26]:hover{background:rgba(0,0,0,.1)}.my-child-name[data-v-15d1be26]:first-letter,.my-parent-name[data-v-15d1be26]:first-letter{text-transform:uppercase}",""])},VoaY:function(t,e,a){"use strict";function n(t){a("7a3/")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("fQAM"),o=a.n(i),s=a("4Qka"),r=a("VU/8"),l=n,d=r(o.a,s.a,!1,l,"data-v-15d1be26",null);e.default=d.exports},W4K0:function(t,e,a){var n=a("mAjw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("2fbdb9b2",n,!0)},"cQ+u":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},fQAM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{name:"getting-started",path:"/getting-started"},{name:"style",path:"/style",children:[{name:"style-colors",path:"/style/colors",_filename:"colors"},{name:"style-content",path:"/style/content",_filename:"content"},{name:"style-typography",path:"/style/typography",_filename:"typography"}]},{name:"components",path:"/components",children:[{name:"components-forms",path:"/components/forms",_filename:"forms"},{name:"components-buttons",path:"/components/buttons",_filename:"buttons"},{name:"components-lists",path:"/components/lists",_filename:"lists"},{name:"components-menus",path:"/components/menus",_filename:"menus"}]},{name:"layout",path:"/layout",children:[{name:"layout-grid",path:"/layout/grid",_filename:"grid"},{name:"layout-spacing",path:"/layout/spacing",_filename:"spacing"}]}];e.default={props:{value:{required:!1}},data:function(){return{isActive:this.value,links:n,iconMap:{"getting-started":"cube",components:"th-large",layout:"th-list",style:"columns"}}},computed:{lastRequested:{get:function(){return this.$refs.drawer.lastRequested},set:function(t){this.$refs.drawer.lastRequested=t}}},watch:{value:function(){this.isActive=this.value},isActive:function(){this.$emit("input",this.isActive)}},methods:{onDoneScroll:function(t){window.history.pushState(null,null,t)}}}},jF1i:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dd-app",{attrs:{header:"","header-fixed":""}},[t.hasNavigation?a("docs-header",{attrs:{title:t.title},on:{"click-toggle-drawer":t.requestToggleDrawer}}):t._e(),a("nuxt",{ref:"nuxt",staticClass:"my-nuxt"}),t.hasNavigation?a("docs-drawer",{ref:"drawer",model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}):t._e()],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},mAjw:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".my-nuxt[data-v-05583b06]{position:relative}",""])},n98g:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("MhZo"),o=n(i),s=a("VoaY"),r=n(s);e.default={components:{"docs-header":o.default,"docs-drawer":r.default},data:function(){var t=this.getCurrentHead();return{drawer:!1,theme:null,isTop:!1,routeReady:!1,title:t.title,hasNavigation:void 0===t.hasNavigation||t.hasNavigation}},computed:{},watch:{$route:function(t,e){this.updateHeadInfo()}},methods:{requestToggleDrawer:function(){this.drawer=!this.drawer,this.$refs.drawer.lastRequested=this.drawer},getCurrentComponent:function(){return this.$route.matched[0]&&this.$route.matched[0].components.default||null},getCurrentHead:function(){var t=this.getCurrentComponent();if(t){var e=void 0;if(t.head?e=t.head:t.options&&t.options.head&&(e=t.options.head),e)return"function"==typeof e?e():e}return{title:null}},updateHeadInfo:function(){var t=this.getCurrentHead();this.title=t.title,this.hasNavigation=void 0===t.hasNavigation||t.hasNavigation}}}},"rA/6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dd-app-header",[a("dd-toolbar-title",[t._v(t._s(t.title))]),a("dd-spacer"),a("dd-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.onClickToggleDrawer(e)}}})],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},xLyT:function(t,e,a){var n=a("cQ+u");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("15c33afa",n,!0)},yRYW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String},data:function(){return{}},watch:{},methods:{onClickToggleDrawer:function(t){this.$emit("click-toggle-drawer")}},created:function(){}}}});
//# sourceMappingURL=default.368fac60306966cbaf4a.js.map