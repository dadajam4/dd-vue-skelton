webpackJsonp([17],{HMFh:function(t,n,d){(t.exports=d("FZ+f")(!1)).push([t.i,"",""])},YEEb:function(t,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,e=d("u9W2");var o=((a=e)&&a.__esModule?a:{default:a}).default["color-keys"].context;n.default={$_anchors:[{id:"flat",label:"flat"},{id:"fill",label:"fill"},{id:"outline",label:"outline"},{id:"color",label:"color"},{id:"block",label:"block"},{id:"size",label:"size"},{id:"icon",label:"icon"},{id:"includes-icon",label:"includes-icon"},{id:"disabled",label:"disabled"},{id:"loaders",label:"loaders"}],head:function(){return{title:"Button"}},data:function(){return{loading1:!1,loading2:!1,loading3:!1,loading4:!1}},computed:{CONTEXT_TYPES:function(){return o}},methods:{startLoading:function(t){var n=this;this[t]=!0,setTimeout(function(){return n[t]=!1},3e3)}},created:function(){}}},ZC1M:function(t,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=d("YEEb"),e=d.n(a);for(var o in a)"default"!==o&&function(t){d.d(n,t,function(){return a[t]})}(o);var i=d("fluj"),r=!1;var l=function(t){r||d("xEks")},s=d("VU/8")(e.a,i.a,!1,l,"data-v-2a2859e8",null);s.options.__file="src/pages/components/buttons.vue",n.default=s.exports},fluj:function(t,n,d){"use strict";var a=function(){var t=this,n=t.$createElement,d=t._self._c||n;return d("dd-page",[d("dd-page-header",[t._v("Buttons")]),d("dd-page-intro",[t._v("\n    Use our iOS integration to style your native iOS applications to be consistent with the "),d("span",[t._v("hogehoge")])]),d("dd-page-section",{attrs:{title:"",id:"flat","data-anchor-point":""}},t._l(t.CONTEXT_TYPES,function(n){return d("dd-btn",t._b({key:n,attrs:{flat:""}},"dd-btn",((a={})[n]=!0,a),!1),[t._v(t._s(n))]);var a})),d("dd-page-section",{attrs:{title:"",id:"fill","data-anchor-point":""}},t._l(t.CONTEXT_TYPES,function(n){return d("dd-btn",t._b({key:n},"dd-btn",((a={})[n]=!0,a),!1),[t._v(t._s(n))]);var a})),d("dd-page-section",{attrs:{title:"",id:"outline","data-anchor-point":""}},t._l(t.CONTEXT_TYPES,function(n){return d("dd-btn",t._b({key:n,attrs:{outline:""}},"dd-btn",((a={})[n]=!0,a),!1),[t._v(t._s(n))]);var a})),d("dd-page-section",{attrs:{title:"",id:"color","data-anchor-point":""}},[d("dd-btn",{staticClass:"dd-text--shades-white",attrs:{"layer-color":"indigo"}},[t._v("indigo")]),d("dd-btn",{staticClass:"dd-text--shades-white",attrs:{"layer-color":"brown-lighten-2"}},[t._v("brown-lighten-2")]),d("dd-btn",{staticClass:"dd-text--shades-white",attrs:{"layer-color":"deep-orange"}},[t._v("deep-orange")]),d("dd-btn",{attrs:{"layer-color":"indigo",outline:""}},[t._v("indigo")]),d("dd-btn",{attrs:{"layer-color":"brown-lighten-2",outline:""}},[t._v("brown-lighten-2")]),d("dd-btn",{attrs:{"layer-color":"deep-orange",outline:""}},[t._v("deep-orange")])],1),d("dd-page-section",{attrs:{title:"",id:"block","data-anchor-point":""}},[d("dd-btn",{attrs:{primary:"",block:""}},[t._v("Block")])],1),d("dd-page-section",{attrs:{title:"",id:"size","data-anchor-point":""}},t._l(["sm","default","lg"],function(n){return d("dd-btn",t._b({key:n,attrs:{info:""}},"dd-btn",((a={})[n]="default"!==n,a),!1),[t._v(t._s(n))]);var a})),d("dd-page-section",{attrs:{title:"",id:"icon","data-anchor-point":""}},[t._l(["sm","default","lg"],function(n){return d("dd-btn",t._b({key:n,attrs:{icon:""}},"dd-btn",((a={})[n]="default"!==n,a),!1),[d("dd-icon",[t._v("bars")])],1);var a}),t._l(["sm","default","lg"],function(n){return d("dd-btn",t._b({key:n,attrs:{icon:"",primary:""}},"dd-btn",((a={})[n]="default"!==n,a),!1),[d("dd-icon",[t._v("bars")])],1);var a}),t._l(["sm","default","lg"],function(n){return d("dd-btn",t._b({key:n,attrs:{icon:"",outline:"",info:""}},"dd-btn",((a={})[n]="default"!==n,a),!1),[d("dd-icon",[t._v("bars")])],1);var a})],2),d("dd-page-section",{attrs:{title:"",id:"includes-icon","data-anchor-point":""}},[d("dd-btn",{attrs:{primary:""}},[d("dd-icon",{attrs:{left:""}},[t._v("address-book")]),t._v("\n      left\n    ")],1),d("dd-btn",{attrs:{info:""}},[t._v("\n      right\n      "),d("dd-icon",{attrs:{right:""}},[t._v("cloud-upload")])],1),d("dd-btn",{attrs:{info:""}},[d("dd-icon",{attrs:{left:""}},[t._v("code")]),t._v("\n      both\n      "),d("dd-icon",{attrs:{right:""}},[t._v("comments")])],1)],1),d("dd-page-section",{attrs:{title:"",id:"disabled","data-anchor-point":""}},[t._l(["flat","default","outline"],function(n){return d("dd-btn",t._b({key:n,attrs:{info:"",disabled:""}},"dd-btn",((a={})[n]="default"!==n,a),!1),[t._v(t._s(n))]);var a}),d("dd-btn",{attrs:{icon:"",disabled:""}},[d("dd-icon",[t._v("bars")])],1)],2),d("dd-page-section",{attrs:{title:"",id:"loaders","data-anchor-point":""}},[d("dd-btn",{attrs:{secondary:"",loading:t.loading1,disabled:t.loading1},on:{click:function(n){t.startLoading("loading1")}}},[t._v("\n      Accept Terms\n    ")]),d("dd-btn",{attrs:{primary:"",loading:t.loading2,disabled:t.loading2},on:{click:function(n){t.startLoading("loading2")}}},[d("dd-icon",{attrs:{left:""}},[t._v("address-book")]),t._v("\n      left\n    ")],1),d("dd-btn",{attrs:{info:"",loading:t.loading3,disabled:t.loading3},on:{click:function(n){t.startLoading("loading3")}}},[t._v("\n      Custom Loader\n      "),d("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])]),d("dd-btn",{attrs:{warning:"",loading:t.loading4,disabled:t.loading4},on:{click:function(n){t.startLoading("loading4")}}},[t._v("\n      Icon Loader\n      "),d("span",{attrs:{slot:"loader"},slot:"loader"},[d("dd-icon",{attrs:{rotate:""}},[t._v("refresh")])],1)])],1)],1)};a._withStripped=!0;var e={render:a,staticRenderFns:[]};n.a=e},xEks:function(t,n,d){var a=d("HMFh");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);d("rjj0")("74004af7",a,!1)}});