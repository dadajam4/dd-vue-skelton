webpackJsonp([14],{"+NJp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},"0F0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default[0]:t("div",{class:{"no-ssr-placeholder":!0}},this.placeholder)}}},"5h1T":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},"5o+h":function(t,e,n){"use strict";t.exports=n("JzPG").polyfill()},F88d:function(t,e,n){"use strict";function r(t){n("Rqmf")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("R6WF"),i=n.n(o),a=n("JrFp"),u=n("VU/8"),s=r,c=u(i.a,a.a,!1,s,null,null);e.default=c.exports},"HBB+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),o=(function(t){t&&t.__esModule}(r),["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"]),i=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];e.default={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,r=e.data;r.nuxtChild=!0;for(var a=n,u=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;r.nuxtChildDepth=c;var l=u[c]||s,f={};o.forEach(function(t){void 0!==l[t]&&(f[t]=l[t])});var p={};return i.forEach(function(t){"function"==typeof l[t]&&(p[t]=l[t].bind(a))}),t("transition",{props:f,on:p},[t("router-view",r)])}}},JrFp:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nuxt-progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],i={render:r,staticRenderFns:o};e.a=i},KNEl:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])}],i={render:r,staticRenderFns:o};e.a=i},OF3B:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("/5sW"),i=r(o),a=n("HBB+"),u=r(a),s=n("ct3O"),c=r(s),l=n("YLfZ");e.default={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){i.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||(0,l.compile)(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:u.default,NuxtError:c.default}}},P8S3:function(t,e,n){var r=n("5h1T");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("553007e5",r,!0)},R6WF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,o.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},Rqmf:function(t,e,n){var r=n("yRIW");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("3c8489c9",r,!0)},T1b2:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("/5sW"),i=r(o),a=n("F88d"),u=r(a),s={_default:function(){return n.e(0).then(n.bind(null,"lfHO")).then(function(t){return t.default||t})}},c={};e.default={head:{titleTemplate:"%s | dd-vue-skelton",meta:[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{hid:"description",name:"description",content:"ディスクリプションです"}],link:[{rel:"icon",type:"image/vnd.microsoft.icon",href:"/favicon.ico"},{rel:"shortcut icon",type:"image/vnd.microsoft.icon",href:"/favicon.ico"},{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon.png"},{rel:"stylesheet",href:"css/docs.css?v=1512093524580"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){i.default.util.defineReactive(this,"nuxt",this.$options._nuxt)},created:function(){i.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?Promise.resolve(c[n]):s[n]().then(function(t){return c[n]=t,delete s[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:u.default}}},T23V:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}function i(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}function a(t,e,n){var r=function(t){var r=i(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function u(t,e){return k.serverRendered&&e&&(0,w.applyAsyncData)(t,e),t._Ctor=t,t}function s(t){var e=(0,w.getLocation)(t.options.base,t.options.mode);return(0,w.flatMapComponents)(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var i=u((0,w.sanitizeComponent)(t),k.data?k.data[o]:null);return n.components[r]=i,i}return t().then(function(t){var e=u((0,w.sanitizeComponent)(t),k.data?k.data[o]:null);return n.components[r]=e,e})})}function c(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof g.default[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g.default[t]}),!i)return(0,w.middlewareSeries)(o,e)}function l(t,e){(0,w.flatMapComponents)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":d(t))||t.options||(t=x.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function f(t,e){var n=this;this._hashChanged||x.default.nextTick(function(){var e=(0,w.getMatchedComponentsInstances)(t);$=e.map(function(t,e){if(!t)return"";if(C[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?b.NuxtError.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function p(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),E.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){var t=o(regeneratorRuntime.mark(function t(e,n,r){var o,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],i=e.fullPath.split("#")[0],this._hashChanged=o===i,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Promise.all((0,w.flatMapComponents)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=(0,w.sanitizeComponent)(t);return n.components[r]=o,o}return t().then(function(t){var e=(0,w.sanitizeComponent)(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),m=function(){var t=o(regeneratorRuntime.mark(function t(e,n,r){var o,i,u,s,l,f,p,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(o=!1,i=function(t){h.$loading.finish&&h.$loading.finish(),o||(o=!0,r(t))},u=(0,w.getContext)({to:e,from:n,isClient:!0,next:i.bind(this),error:this.error.bind(this)},R),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,s=(0,w.getMatchedComponents)(e),s.length){t.next=23;break}return t.next=12,c.call(this,s,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof b.NuxtError.layout?b.NuxtError.layout(u):b.NuxtError.layout);case 16:return l=t.sent,t.next=19,c.call(this,s,u,l);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(a(s,e,n)),t.prev=25,t.next=28,c.call(this,s,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return f=s[0].options.layout,"function"==typeof f&&(f=f(u)),t.next=34,this.loadLayout(f);case 34:return f=t.sent,t.next=37,c.call(this,s,u,f);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(p=!0,s.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{}}))}),p){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 44:return t.next=46,Promise.all(s.map(function(t,n){if(t._path=(0,w.compile)(e.matched[n].path)(e.params),!h._hadError&&h._isMounted&&t._path===C[n]&&n+1!==s.length)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,a=o&&i?30:45;if(o){var c=(0,w.promisify)(t.options.asyncData,u).then(function(e){(0,w.applyAsyncData)(t,e),h.$loading.increase&&h.$loading.increase(a)});r.push(c)}if(i){var l=t.options.fetch(u);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){h.$loading.increase&&h.$loading.increase(a)}),r.push(l)}return Promise.all(r)}));case 46:C=s.map(function(t,n){return(0,w.compile)(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),o||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),C=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,d=b.NuxtError.layout,"function"==typeof d&&(d=d(u)),t.next=60,this.loadLayout(d);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),v=function(){var t=o(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=e.app,E=e.router,t.next=4,Promise.all(s(E));case 4:return n=t.sent,r=new x.default(R),o=k.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),x.default.nextTick(function(){p(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(a(n,E.currentRoute)),C=E.currentRoute.matched.map(function(t){return(0,w.compile)(t.path)(E.currentRoute.params)}),$=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},k.error&&r.error(k.error),E.beforeEach(h.bind(r)),E.beforeEach(m.bind(r)),E.afterEach(l),E.afterEach(f.bind(r)),!k.serverRendered){t.next=23;break}return i(),t.abrupt("return");case 23:m.call(r,E.currentRoute,E.currentRoute,function(t){if(!t)return l(E.currentRoute,E.currentRoute),f.call(r,E.currentRoute,E.currentRoute),void i();var e=!1;E.afterEach(function(){e||(e=!0,i())}),E.push(t)});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),y=n("/5sW"),x=r(y),_=n("unZF"),g=r(_),b=n("qcny"),w=n("YLfZ"),C=[],$=[],R=void 0,E=void 0,k=window.__NUXT__||{};(0,b.createApp)().then(v).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW");!function(t){t&&t.__esModule}(r);e.default={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";function r(t,e){var n=t.options.data||$;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=C.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function i(t){return[].concat.apply([],t.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})}))}function a(t){return[].concat.apply([],t.matched.map(function(t){return Object.keys(t.instances).map(function(e){return t.instances[e]})}))}function u(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function s(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isStatic:!0,isDev:!1,isHMR:t.isHMR||!1,app:e,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:(document.baseURI || document.getElementsByTagName('base')[0].href).replace(new RegExp('^' + location.protocol + '//' + location.host), ''),env:{}},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":g(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n.isClient&&window.__NUXT__&&(n.nuxtState=window.__NUXT__),n}function c(t,e){return!t.length||e._redirected?Promise.resolve():l(t[0],e).then(function(){return c(t.slice(1),e)})}function l(t,e){var n=void 0;return n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function f(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function p(){return[].slice.call(arguments).join("/").replace(/\/+/g,"/")}function d(t,e){return y(h(t,e))}function h(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=R.exec(t));){var s=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+s.length,c)a+=c[1];else{var f=t[i],p=n[2],d=n[3],h=n[4],m=n[5],v=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=p&&null!=f&&f!==p,b="+"===v||"*"===v,w="?"===v||"*"===v,C=n[2]||u,$=h||m;r.push({name:d||o++,prefix:p||"",delimiter:C,optional:w,repeat:b,partial:g,asterisk:!!y,pattern:$?_($):y?".*":"[^"+x(C)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function m(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function y(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===g(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?m:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var l,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(l=u(f[p]),!e[s].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===p?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?v(f):u(f),!e[s].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function x(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function _(t){return t.replace(/([=!:$\/()])/g,"\\$1")}Object.defineProperty(e,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.applyAsyncData=r,e.sanitizeComponent=o,e.getMatchedComponents=i,e.getMatchedComponentsInstances=a,e.flatMapComponents=u,e.getContext=s,e.middlewareSeries=c,e.promisify=l,e.getLocation=f,e.urlJoin=p,e.compile=d;var w=n("/5sW"),C=function(t){return t&&t.__esModule?t:{default:t}}(w),$=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},cgKi:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},o=[],i={render:r,staticRenderFns:o};e.a=i},cs8z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OF3B"),o=n.n(r),i=n("cgKi"),a=n("VU/8"),u=a(o.a,i.a,!1,null,null,null);e.default=u.exports},ct3O:function(t,e,n){"use strict";function r(t){n("P8S3")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("+NJp"),i=n.n(o),a=n("KNEl"),u=n("VU/8"),s=r,c=u(i.a,a.a,!1,s,null,null);e.default=c.exports},gGuR:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.nuxt.err?"nuxt":t.layout,{tag:"component"}):t._e()],1)},o=[],i={render:r,staticRenderFns:o};e.a=i},"gXG+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("T1b2"),o=n.n(r),i=n("gGuR"),a=n("VU/8"),u=a(o.a,i.a,!1,null,null,null);e.default=u.exports},mtxM:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}function i(){return new c.default({mode:"history",base:(document.baseURI || document.getElementsByTagName('base')[0].href).replace(new RegExp('^' + location.protocol + '//' + location.host), ''),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:w,routes:[{path:"/",component:l,name:"index"},{path:"/getting-started",component:f,name:"getting-started"},{path:"/components/lists",component:p,name:"components-lists"},{path:"/style/typography",component:d,name:"style-typography"},{path:"/layout/grid",component:h,name:"layout-grid"},{path:"/components/menus",component:m,name:"components-menus"},{path:"/style/colors",component:v,name:"style-colors"},{path:"/components/buttons",component:y,name:"components-buttons"},{path:"/components/forms",component:x,name:"components-forms"},{path:"/components/progress",component:_,name:"components-progress"},{path:"/layout/spacing",component:g,name:"layout-spacing"},{path:"/style/content",component:b,name:"style-content"}],fallback:!1})}Object.defineProperty(e,"__esModule",{value:!0}),e.createRouter=i;var a=n("/5sW"),u=r(a),s=n("/ocq"),c=r(s);u.default.use(c.default);var l=function(){return n.e(8).then(n.bind(null,"2NXm")).then(function(t){return t.default||t})},f=function(){return n.e(9).then(n.bind(null,"L6rg")).then(function(t){return t.default||t})},p=function(){return n.e(1).then(n.bind(null,"bH6B")).then(function(t){return t.default||t})},d=function(){return n.e(3).then(n.bind(null,"LEtz")).then(function(t){return t.default||t})},h=function(){return n.e(7).then(n.bind(null,"82O9")).then(function(t){return t.default||t})},m=function(){return n.e(2).then(n.bind(null,"RmO+")).then(function(t){return t.default||t})},v=function(){return n.e(5).then(n.bind(null,"Ykwf")).then(function(t){return t.default||t})},y=function(){return n.e(12).then(n.bind(null,"ZC1M")).then(function(t){return t.default||t})},x=function(){return n.e(11).then(n.bind(null,"OWc8")).then(function(t){return t.default||t})},_=function(){return n.e(10).then(n.bind(null,"OP59")).then(function(t){return t.default||t})},g=function(){return n.e(6).then(n.bind(null,"4VLn")).then(function(t){return t.default||t})},b=function(){return n.e(4).then(n.bind(null,"VAfm")).then(function(t){return t.default||t})},w=function(){var t=o(regeneratorRuntime.mark(function t(e,n,r){var o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.abrupt("return",r);case 4:return o={},i=500,e.matched.length<2?(o.x=0,o.y=0):e.matched.some(function(t){return t.components.default.options.scrollToTop})&&(o.x=0,o.y=0),e.hash&&(o.selector=e.hash,document.querySelector(e.hash)&&(i=0)),t.next=10,new Promise(function(t){return setTimeout(t,i)});case 10:return t.abrupt("return",o);case 11:case"end":return t.stop()}},t,void 0)}));return function(e,n,r){return t.apply(this,arguments)}}()},qcny:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.NuxtError=e.createApp=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){var t=o(regeneratorRuntime.mark(function t(e){var n,r,o,a,u,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=(0,f.createRouter)(),r=i({router:n,_nuxt:{defaultTransition:k,transitions:[k],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},k,{name:t}):Object.assign({},k,t):k}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},C.default),o=e?e.next:function(t){return r.router.push(t)},a=void 0,e?a=n.resolve(e.url).route:(u=(0,$.getLocation)(n.options.base),a=n.resolve(u).route),c=(0,$.getContext)({isServer:!!e,isClient:!e,route:a,next:o,error:r._nuxt.error.bind(r),req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},r),l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");t="$"+t,r[t]=e,s.default.use(function(){var e="__nuxt_"+t+"_installed__";s.default[e]||(s.default[e]=!0,s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}}))})},"function"!=typeof E.default){t.next=10;break}return t.next=10,(0,E.default)(c,l);case 10:t.next=13;break;case 13:return t.abrupt("return",{app:r,router:n});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();n("5o+h");var u=n("/5sW"),s=r(u),c=n("p3jY"),l=r(c),f=n("mtxM"),p=n("0F0d"),d=r(p),h=n("HBB+"),m=r(h),v=n("WRRc"),y=r(v),x=n("ct3O"),_=r(x),g=n("cs8z"),b=r(g),w=n("gXG+"),C=r(w),$=n("YLfZ"),R=n("JCUq"),E=r(R);s.default.component(d.default.name,d.default),s.default.component(m.default.name,m.default),s.default.component(y.default.name,y.default),s.default.component(b.default.name,b.default),s.default.use(l.default,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var k={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};e.createApp=a,e.NuxtError=_.default},unZF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},yRIW:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])}},["T23V"]);
//# sourceMappingURL=app.5b6a007ddf4102de5d5e.js.map