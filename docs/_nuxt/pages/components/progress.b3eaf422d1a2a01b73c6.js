webpackJsonp([13],{"1q2f":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".my-spinner[data-v-3ea720ed]{margin:1rem}",""])},OP59:function(t,e,a){"use strict";function n(t){a("j/d7")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("sN9r"),r=a.n(s),i=a("gws7"),o=a("VU/8"),d=n,c=o(r.a,i.a,!1,d,"data-v-3ea720ed",null);e.default=c.exports},gws7:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("main",{staticClass:"dd-page"},[t._m(1),a("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"default","data-anchor-point":""}},[a("h2",{staticClass:"dd-page__section-header"},[t._v("Default")]),a("div",t._l([0,20,40,60,80,100],function(t){return a("dd-spinner",{key:t,staticClass:"my-spinner",attrs:{value:t}})}))]),a("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"colored","data-anchor-point":""}},[a("h2",{staticClass:"dd-page__section-header"},[t._v("Colored")]),a("div",t._l(t.TEXT_COLORS,function(t){return a("dd-spinner",{key:t,staticClass:"my-spinner",attrs:{color:t,value:"50"}})}))]),a("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"indeterminate","data-anchor-point":""}},[a("h2",{staticClass:"dd-page__section-header"},[t._v("Indeterminate")]),a("div",t._l(t.TEXT_COLORS,function(t){return a("dd-spinner",{key:t,staticClass:"my-spinner",attrs:{color:t,indeterminate:""}})}))]),a("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"size-and-width","data-anchor-point":""}},[a("h2",{staticClass:"dd-page__section-header"},[t._v("Size & Width")]),a("div",[a("dd-spinner",{staticClass:"my-spinner",attrs:{color:"base",indeterminate:"",size:"50"}}),a("dd-spinner",{staticClass:"my-spinner",attrs:{color:"muted",indeterminate:"",width:"3"}}),a("dd-spinner",{staticClass:"my-spinner",attrs:{color:"primary",indeterminate:"",size:"70",width:"7"}}),a("dd-spinner",{staticClass:"my-spinner",attrs:{color:"secondary",indeterminate:"",width:"3"}}),a("dd-spinner",{staticClass:"my-spinner",attrs:{color:"info",indeterminate:"",size:"50"}})],1)]),a("section",{staticClass:"dd-page__section dd-page__container",attrs:{id:"rotate","data-anchor-point":""}},[a("h2",{staticClass:"dd-page__section-header"},[t._v("Rotate")]),a("div",t._l(t.rotateDefines,function(e){return a("dd-spinner",{key:e.color,staticClass:"my-spinner",attrs:{rotate:e.rotate,color:e.color,size:"100",width:"15",value:t.rotateValue}},[t._v(t._s(t.rotateValue))])}))])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"dd-page-header"},[a("h1",{staticClass:"dd-page-header__inner dd-page__container"},[t._v("Progress")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dd-page__container"},[a("p",{staticClass:"dd-page__introduction"},[t._v("Use our iOS integration to style your native iOS applications to be consistent with the "),a("span",[t._v("hogehoge")])])])}],r={render:n,staticRenderFns:s};e.a=r},"j/d7":function(t,e,a){var n=a("1q2f");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("35eef114",n,!0)},sN9r:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["base","muted","link","link-hover","primary","secondary","success","info","warning","danger"];e.default={head:function(){return{title:"Progress"}},data:function(){return{rotateInterval:{},rotateValue:0,rotateDefines:[{color:"base",rotate:360},{color:"primary",rotate:-90},{color:"warning",rotate:90},{color:"danger",rotate:180}]}},computed:{TEXT_COLORS:function(){return n}},methods:{},created:function(){},mounted:function(){var t=this;this.rotateInterval=setInterval(function(){if(100===t.rotateValue)return t.rotateValue=0;t.rotateValue+=10},1e3)},beforeDestroy:function(){clearInterval(this.rotateInterval)}}}});
//# sourceMappingURL=progress.b3eaf422d1a2a01b73c6.js.map