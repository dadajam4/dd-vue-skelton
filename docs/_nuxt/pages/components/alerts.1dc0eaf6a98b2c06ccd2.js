webpackJsonp([20],{"0oTx":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"5zA+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a("u9W2");var o=((n=r)&&n.__esModule?n:{default:n}).default["color-keys"].context;e.default={$_anchors:[{id:"contextual",label:"contextual"},{id:"closable",label:"closable"},{id:"outline",label:"outline"}],head:function(){return{title:"Alerts"}},data:function(){return{demo1:!0}},computed:{CONTEXT_TYPES:function(){return o}},methods:{},created:function(){}}},UIAw:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dd-page",[a("dd-page-header",[t._v("Alerts")]),a("dd-page-intro",[t._v("\n    ほげほげ\n  ")]),a("dd-page-section",{attrs:{title:"",id:"contextual","data-anchor-point":""}},t._l(t.CONTEXT_TYPES,function(e){return a("dd-alert",t._b({key:e,attrs:{value:"true"}},"dd-alert",((n={})[e]=!0,n),!1),[t._v("This is a "+t._s(e)+" alert.")]);var n})),a("dd-page-section",{attrs:{title:"",id:"closable","data-anchor-point":""}},[a("dd-alert",{attrs:{info:"",dismissible:"",transition:"dd-fade-transition"},model:{value:t.demo1,callback:function(e){t.demo1=e},expression:"demo1"}},[t._v("This is a info alert that is closable.")]),a("div",{staticClass:"dd-text--center"},[t.demo1?t._e():a("dd-btn",{attrs:{primary:""},on:{click:function(e){t.demo1=!0}}},[t._v("Reset")])],1)],1),a("dd-page-section",{attrs:{title:"",id:"outline","data-anchor-point":""}},t._l(t.CONTEXT_TYPES,function(e){return a("dd-alert",t._b({key:e,attrs:{value:"true",outline:"",dismissible:""}},"dd-alert",((n={})[e]=!0,n),!1),[t._v("This is a "+t._s(e)+" alert.")]);var n}))],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},opze:function(t,e,a){var n=a("0oTx");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("20815364",n,!1)},wjS0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("5zA+"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var i=a("UIAw"),d=!1;var l=function(t){d||a("opze")},s=a("VU/8")(r.a,i.a,!1,l,"data-v-448caddc",null);s.options.__file="src/pages/components/alerts.vue",e.default=s.exports}});