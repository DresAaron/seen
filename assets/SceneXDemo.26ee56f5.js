import{h as W,c as Be,a as oe,r as U,w as xe,o as De,T as Xe,b as Ie,Q as Ke,u as Ve,d as Ge,g as He,i as We,q as Ye,e as Me,f as x,j as Se,k as X,l as Ze,m as H,n as Pe,p as et,s as Qe,t as Oe,v as $e,x as Re,y as tt,D as rt,z as nt,A as it,B as at,C as ie,E as he,F as we,G as Ce,H as st,I as ot,J as ve,K as lt,L as ut}from"./index.4deaee63.js";const ct=W("div",{class:"q-space"});var ft=Be({name:"QSpace",setup(){return()=>ct}});const dt={ratio:[String,Number]};function vt(s,o){return oe(()=>{const e=Number(s.ratio||(o!==void 0?o.value:void 0));return isNaN(e)!==!0&&e>0?{paddingBottom:`${100/e}%`}:null})}const _t=16/9;var ht=Be({name:"QImg",props:{...dt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:_t},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(s,{slots:o,emit:e}){const n=U(s.initialRatio),l=vt(s,n);let f=null,v=!1;const g=[U(null),U(q())],y=U(0),_=U(!1),O=U(!1),T=oe(()=>`q-img q-img--${s.noNativeMenu===!0?"no-":""}menu`),d=oe(()=>({width:s.width,height:s.height})),p=oe(()=>`q-img__image ${s.imgClass!==void 0?s.imgClass+" ":""}q-img__image--with${s.noTransition===!0?"out":""}-transition`),h=oe(()=>({...s.imgStyle,objectFit:s.fit,objectPosition:s.position}));xe(()=>S(),M);function S(){return s.src||s.srcset||s.sizes?{src:s.src,srcset:s.srcset,sizes:s.sizes}:null}function q(){return s.placeholderSrc!==void 0?{src:s.placeholderSrc}:null}function M(C){f!==null&&(clearTimeout(f),f=null),O.value=!1,C===null?(_.value=!1,g[y.value^1].value=q()):_.value=!0,g[y.value].value=C}function L({target:C}){v!==!0&&(f!==null&&(clearTimeout(f),f=null),n.value=C.naturalHeight===0?.5:C.naturalWidth/C.naturalHeight,R(C,1))}function R(C,w){v===!0||w===1e3||(C.complete===!0?F(C):f=setTimeout(()=>{f=null,R(C,w+1)},50))}function F(C){v!==!0&&(y.value=y.value^1,g[y.value].value=null,_.value=!1,O.value=!1,e("load",C.currentSrc||C.src))}function N(C){f!==null&&(clearTimeout(f),f=null),_.value=!1,O.value=!0,g[y.value].value=null,g[y.value^1].value=q(),e("error",C)}function V(C){const w=g[C].value,k={key:"img_"+C,class:p.value,style:h.value,crossorigin:s.crossorigin,decoding:s.decoding,referrerpolicy:s.referrerpolicy,height:s.height,width:s.width,loading:s.loading,fetchpriority:s.fetchpriority,"aria-hidden":"true",draggable:s.draggable,...w};return y.value===C?(k.class+=" q-img__image--waiting",Object.assign(k,{onLoad:L,onError:N})):k.class+=" q-img__image--loaded",W("div",{class:"q-img__container absolute-full",key:"img"+C},W("img",k))}function Z(){return _.value!==!0?W("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Ie(o[O.value===!0?"error":"default"])):W("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():s.noSpinner===!0?void 0:[W(Ke,{color:s.spinnerColor,size:s.spinnerSize})])}return M(S()),De(()=>{v=!0,f!==null&&(clearTimeout(f),f=null)}),()=>{const C=[];return l.value!==null&&C.push(W("div",{key:"filler",style:l.value})),O.value!==!0&&(g[0].value!==null&&C.push(V(0)),g[1].value!==null&&C.push(V(1))),C.push(W(Xe,{name:"q-transition--fade"},Z)),W("div",{class:T.value,style:d.value,role:"img","aria-label":s.alt},C)}}});const yt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],gt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Ee=Be({name:"QSkeleton",props:{...Ve,tag:{type:String,default:"div"},type:{type:String,validator:s=>yt.includes(s),default:"rect"},animation:{type:String,validator:s=>gt.includes(s),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(s,{slots:o}){const e=He(),n=Ge(s,e.proxy.$q),l=oe(()=>{const v=s.size!==void 0?[s.size,s.size]:[s.width,s.height];return{"--q-skeleton-speed":`${s.animationSpeed}ms`,width:v[0],height:v[1]}}),f=oe(()=>`q-skeleton q-skeleton--${n.value===!0?"dark":"light"} q-skeleton--type-${s.type}`+(s.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${s.animation}`:"")+(s.square===!0?" q-skeleton--square":"")+(s.bordered===!0?" q-skeleton--bordered":""));return()=>W(s.tag,{class:f.value,style:l.value},Ie(o.default))}});function pt(){return We(Ye)}var qe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function mt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var je={exports:{}},te={exports:{}};(function(s){var o,e,n,l,f,v,g,y,_,O,T,d,p,h,S,q,M,L,R,F,N,V,Z,C,w,k,A,$,K,le,Ue;(function(P){var me=typeof qe=="object"?qe:typeof self=="object"?self:typeof this=="object"?this:{};P(be(me,be(s.exports)));function be(de,t){return de!==me&&(typeof Object.create=="function"?Object.defineProperty(de,"__esModule",{value:!0}):de.__esModule=!0),function(r,i){return de[r]=t?t(r,i):i}}})(function(P){var me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])};o=function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");me(t,r);function i(){this.constructor=t}t.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)},e=Object.assign||function(t){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},n=function(t,r){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(i[a[c]]=t[a[c]]);return i},l=function(t,r,i,a){var c=arguments.length,u=c<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,i):a,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(t,r,i,a);else for(var j=t.length-1;j>=0;j--)(m=t[j])&&(u=(c<3?m(u):c>3?m(r,i,u):m(r,i))||u);return c>3&&u&&Object.defineProperty(r,i,u),u},f=function(t,r){return function(i,a){r(i,a,t)}},v=function(t,r,i,a,c,u){function m(_e){if(_e!==void 0&&typeof _e!="function")throw new TypeError("Function expected");return _e}for(var j=a.kind,J=j==="getter"?"get":j==="setter"?"set":"value",b=!r&&t?a.static?t:t.prototype:null,B=r||(b?Object.getOwnPropertyDescriptor(b,a.name):{}),D,E=!1,G=i.length-1;G>=0;G--){var re={};for(var ne in a)re[ne]=ne==="access"?{}:a[ne];for(var ne in a.access)re.access[ne]=a.access[ne];re.addInitializer=function(_e){if(E)throw new TypeError("Cannot add initializers after decoration has completed");u.push(m(_e||null))};var ue=(0,i[G])(j==="accessor"?{get:B.get,set:B.set}:B[J],re);if(j==="accessor"){if(ue===void 0)continue;if(ue===null||typeof ue!="object")throw new TypeError("Object expected");(D=m(ue.get))&&(B.get=D),(D=m(ue.set))&&(B.set=D),(D=m(ue.init))&&c.unshift(D)}else(D=m(ue))&&(j==="field"?c.unshift(D):B[J]=D)}b&&Object.defineProperty(b,a.name,B),E=!0},g=function(t,r,i){for(var a=arguments.length>2,c=0;c<r.length;c++)i=a?r[c].call(t,i):r[c].call(t);return a?i:void 0},y=function(t){return typeof t=="symbol"?t:"".concat(t)},_=function(t,r,i){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:i?"".concat(i," ",r):r})},O=function(t,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,r)},T=function(t,r,i,a){function c(u){return u instanceof i?u:new i(function(m){m(u)})}return new(i||(i=Promise))(function(u,m){function j(B){try{b(a.next(B))}catch(D){m(D)}}function J(B){try{b(a.throw(B))}catch(D){m(D)}}function b(B){B.done?u(B.value):c(B.value).then(j,J)}b((a=a.apply(t,r||[])).next())})},d=function(t,r){var i={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},a,c,u,m;return m={next:j(0),throw:j(1),return:j(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function j(b){return function(B){return J([b,B])}}function J(b){if(a)throw new TypeError("Generator is already executing.");for(;m&&(m=0,b[0]&&(i=0)),i;)try{if(a=1,c&&(u=b[0]&2?c.return:b[0]?c.throw||((u=c.return)&&u.call(c),0):c.next)&&!(u=u.call(c,b[1])).done)return u;switch(c=0,u&&(b=[b[0]&2,u.value]),b[0]){case 0:case 1:u=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,c=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(u=i.trys,!(u=u.length>0&&u[u.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!u||b[1]>u[0]&&b[1]<u[3])){i.label=b[1];break}if(b[0]===6&&i.label<u[1]){i.label=u[1],u=b;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(b);break}u[2]&&i.ops.pop(),i.trys.pop();continue}b=r.call(t,i)}catch(B){b=[6,B],c=0}finally{a=u=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},p=function(t,r){for(var i in t)i!=="default"&&!Object.prototype.hasOwnProperty.call(r,i)&&K(r,t,i)},K=Object.create?function(t,r,i,a){a===void 0&&(a=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(t,a,c)}:function(t,r,i,a){a===void 0&&(a=i),t[a]=r[i]},h=function(t){var r=typeof Symbol=="function"&&Symbol.iterator,i=r&&t[r],a=0;if(i)return i.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},S=function(t,r){var i=typeof Symbol=="function"&&t[Symbol.iterator];if(!i)return t;var a=i.call(t),c,u=[],m;try{for(;(r===void 0||r-- >0)&&!(c=a.next()).done;)u.push(c.value)}catch(j){m={error:j}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(m)throw m.error}}return u},q=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(S(arguments[r]));return t},M=function(){for(var t=0,r=0,i=arguments.length;r<i;r++)t+=arguments[r].length;for(var a=Array(t),c=0,r=0;r<i;r++)for(var u=arguments[r],m=0,j=u.length;m<j;m++,c++)a[c]=u[m];return a},L=function(t,r,i){if(i||arguments.length===2)for(var a=0,c=r.length,u;a<c;a++)(u||!(a in r))&&(u||(u=Array.prototype.slice.call(r,0,a)),u[a]=r[a]);return t.concat(u||Array.prototype.slice.call(r))},R=function(t){return this instanceof R?(this.v=t,this):new R(t)},F=function(t,r,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=i.apply(t,r||[]),c,u=[];return c={},m("next"),m("throw"),m("return"),c[Symbol.asyncIterator]=function(){return this},c;function m(E){a[E]&&(c[E]=function(G){return new Promise(function(re,ne){u.push([E,G,re,ne])>1||j(E,G)})})}function j(E,G){try{J(a[E](G))}catch(re){D(u[0][3],re)}}function J(E){E.value instanceof R?Promise.resolve(E.value.v).then(b,B):D(u[0][2],E)}function b(E){j("next",E)}function B(E){j("throw",E)}function D(E,G){E(G),u.shift(),u.length&&j(u[0][0],u[0][1])}},N=function(t){var r,i;return r={},a("next"),a("throw",function(c){throw c}),a("return"),r[Symbol.iterator]=function(){return this},r;function a(c,u){r[c]=t[c]?function(m){return(i=!i)?{value:R(t[c](m)),done:!1}:u?u(m):m}:u}},V=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t[Symbol.asyncIterator],i;return r?r.call(t):(t=typeof h=="function"?h(t):t[Symbol.iterator](),i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i);function a(u){i[u]=t[u]&&function(m){return new Promise(function(j,J){m=t[u](m),c(j,J,m.done,m.value)})}}function c(u,m,j,J){Promise.resolve(J).then(function(b){u({value:b,done:j})},m)}},Z=function(t,r){return Object.defineProperty?Object.defineProperty(t,"raw",{value:r}):t.raw=r,t};var be=Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r};C=function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&K(r,t,i);return be(r,t),r},w=function(t){return t&&t.__esModule?t:{default:t}},k=function(t,r,i,a){if(i==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?t!==r||!a:!r.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:r.get(t)},A=function(t,r,i,a,c){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!c)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?t!==r||!c:!r.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?c.call(t,i):c?c.value=i:r.set(t,i),i},$=function(t,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?r===t:t.has(r)},le=function(t,r,i){if(r!=null){if(typeof r!="object"&&typeof r!="function")throw new TypeError("Object expected.");var a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=r[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=r[Symbol.dispose]}if(typeof a!="function")throw new TypeError("Object not disposable.");t.stack.push({value:r,dispose:a,async:i})}else i&&t.stack.push({async:!0});return r};var de=typeof SuppressedError=="function"?SuppressedError:function(t,r,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=r,a};Ue=function(t){function r(a){t.error=t.hasError?new de(a,t.error,"An error was suppressed during disposal."):a,t.hasError=!0}function i(){for(;t.stack.length;){var a=t.stack.pop();try{var c=a.dispose&&a.dispose.call(a.value);if(a.async)return Promise.resolve(c).then(i,function(u){return r(u),i()})}catch(u){r(u)}}if(t.hasError)throw t.error}return i()},P("__extends",o),P("__assign",e),P("__rest",n),P("__decorate",l),P("__param",f),P("__esDecorate",v),P("__runInitializers",g),P("__propKey",y),P("__setFunctionName",_),P("__metadata",O),P("__awaiter",T),P("__generator",d),P("__exportStar",p),P("__createBinding",K),P("__values",h),P("__read",S),P("__spread",q),P("__spreadArrays",M),P("__spreadArray",L),P("__await",R),P("__asyncGenerator",F),P("__asyncDelegator",N),P("__asyncValues",V),P("__makeTemplateObject",Z),P("__importStar",C),P("__importDefault",w),P("__classPrivateFieldGet",k),P("__classPrivateFieldSet",A),P("__classPrivateFieldIn",$),P("__addDisposableResource",le),P("__disposeResources",Ue)})})(te);var ye={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.sleep=Q.omit=Q.isBase64=Q.isUrl=void 0;var bt=te.exports;function ze(s){var o=/^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;return o.test(s)}Q.isUrl=ze;function Fe(s){var o=/^data:[A-Za-z0-9+/]+;base64,/;return o.test(s)}Q.isBase64=Fe;function wt(s){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];var n=bt.__assign({},s);return o.forEach(function(l){return delete n[l]}),n}Q.omit=wt;var Ct=function(s){return new Promise(function(o){return setTimeout(o,s)})};Q.sleep=Ct;Q.default={isUrl:ze,isBase64:Fe};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.HTTPClient=void 0;var ee=te.exports,St=function(){function s(o){var e=o.baseURL,n=o.headers,l=o.options;this.baseURL=e,this.headers=n,this.options=l}return s.prototype.get=function(o){return ee.__awaiter(this,void 0,void 0,function(){var e;return ee.__generator(this,function(n){switch(n.label){case 0:return[4,fetch(this.baseURL+o,{headers:this.headers})];case 1:return e=n.sent(),[2,e.json()]}})})},s.prototype.post=function(o,e,n){return n===void 0&&(n=!0),ee.__awaiter(this,void 0,void 0,function(){var l,f;return ee.__generator(this,function(v){switch(v.label){case 0:return[4,fetch(this.baseURL+o,ee.__assign({method:"POST",body:JSON.stringify(e),headers:this.headers},this.options))];case 1:if(l=v.sent(),n!=!1)return[3,2];if(!l.body)throw"Remote API Error, body is missing";return[2,l.body.getReader()];case 2:return[4,l.json()];case 3:if(f=v.sent(),f.error)throw f.error;return[2,f]}})})},s.prototype.put=function(o,e){return ee.__awaiter(this,void 0,void 0,function(){var n;return ee.__generator(this,function(l){switch(l.label){case 0:return[4,fetch(this.baseURL+o,{method:"PUT",body:JSON.stringify(e),headers:this.headers})];case 1:return n=l.sent(),[2,n.json()]}})})},s.prototype.delete=function(o){return ee.__awaiter(this,void 0,void 0,function(){var e;return ee.__generator(this,function(n){switch(n.label){case 0:return[4,fetch(this.baseURL+o,{method:"DELETE",headers:this.headers})];case 1:return e=n.sent(),[2,e.json()]}})})},s}();Y.HTTPClient=St;Object.defineProperty(ye,"__esModule",{value:!0});ye.PromptPerfectClient=void 0;var z=te.exports,ae=Q,Pt=Y,Ot=function(s){z.__extends(o,s);function o(e){var n=e.headers,l=e.options,f=e.baseURL,v=f===void 0?"https://api.promptperfect.jina.ai":f,g={"Content-Type":"application/json"},y=z.__assign(z.__assign({},g),n);return s.call(this,{baseURL:v,headers:y,options:l||{}})||this}return o.prototype.fromArray=function(e,n){return{data:e.map(function(l){return z.__assign(z.__assign(z.__assign(z.__assign({},!(0,ae.isUrl)(l)&&!(0,ae.isBase64)(l)&&{prompt:l}),((0,ae.isUrl)(l)||(0,ae.isBase64)(l))&&{imagePrompt:l}),{targetModel:"chatgpt",features:[]}),n)})}},o.prototype.fromString=function(e,n){return{data:[z.__assign(z.__assign(z.__assign(z.__assign({},!(0,ae.isUrl)(e)&&!(0,ae.isBase64)(e)&&{prompt:e}),((0,ae.isUrl)(e)||(0,ae.isBase64)(e))&&{imagePrompt:e}),{targetModel:"chatgpt",features:[]}),n)]}},o.prototype.isOutput=function(e){return typeof e=="object"&&e.result&&e.result.every(function(n){return(n.prompt||n.imagePrompt)&&n.promptOptimized})},o.prototype.toSimplifiedOutout=function(e){if(!e.result||e.result.every(function(n){return n.promptOptimized!=""})==!1)throw"Remote API Error, bad output: "+JSON.stringify(e);return{results:e.result.map(function(n){return{output:n.promptOptimized}})}},o.prototype.optimize=function(e,n){return z.__awaiter(this,void 0,void 0,function(){var l,f;return z.__generator(this,function(v){switch(v.label){case 0:return[4,this.post("/optimizeBatch",e)];case 1:return l=v.sent(),f=this.toSimplifiedOutout(l),(n==null?void 0:n.raw)==!0&&(f.raw=l),[2,f]}})})},o}(Pt.HTTPClient);ye.PromptPerfectClient=Ot;var ke={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SceneXClient=s.autoFillFeatures=void 0;var o=te.exports,e=Q,n=Y,l=function(v){var g=(v==null?void 0:v.features)||[];return(v==null?void 0:v.question)&&g.includes("question_answer")==!1&&g.push("question_answer"),g};s.autoFillFeatures=l;var f=function(v){o.__extends(g,v);function g(y){var _=y.headers,O=y.options,T=y.baseURL,d=T===void 0?"https://api.scenex.jina.ai/v1":T,p={"Content-Type":"application/json"},h=o.__assign(o.__assign({},p),_);return v.call(this,{baseURL:d,headers:h,options:O||{}})||this}return g.prototype.fromArray=function(y,_){return{data:y.map(function(O){return o.__assign(o.__assign(o.__assign({image:O},_&&_.algorithm=="Inception"&&{video:O}),{features:(0,s.autoFillFeatures)(_)}),_)})}},g.prototype.fromString=function(y,_){return{data:[o.__assign(o.__assign(o.__assign({image:y},_&&_.algorithm=="Inception"&&{video:y}),{features:(0,s.autoFillFeatures)(_)}),_)]}},g.prototype.isOutput=function(y){return typeof y=="object"&&y.result&&y.result.every(function(_){return _.image||_.video})},g.prototype.toSimplifiedOutout=function(y){if(!y.result||y.result.every(function(_){return _.image||_.video})==!1)throw"Remote API Error, bad output: "+JSON.stringify(y);return{results:y.result.map(function(_){var O;return{output:_.answer?_.answer:_.text||"Processing...",i18n:_.i18n,tts:_.tts||void 0,ssml:((O=_.dialog)===null||O===void 0?void 0:O.ssml)||void 0}})}},g.prototype.describeVideo=function(y,_){return o.__awaiter(this,void 0,void 0,function(){var O=this;return o.__generator(this,function(T){switch(T.label){case 0:return[4,Promise.all(y.result.map(function(d,p){return o.__awaiter(O,void 0,void 0,function(){var h,S,q,M;return o.__generator(this,function(L){switch(L.label){case 0:L.trys.push([0,5,,6]),h=null,S=!1,L.label=1;case 1:return S!=!1?[3,4]:[4,this.get("/scene/".concat(d.id))];case 2:return h=L.sent(),_!=null&&_.reportProgress&&(q="".concat(h.result.data.status||"pending"," - ").concat(h.result.data.progress||"???"),_.reportProgress(p,q)),h.result.data.status!="pending"&&(S=!0),[4,(0,e.sleep)(1e4)];case 3:return L.sent(),[3,1];case 4:return h&&(y.result[p]=h==null?void 0:h.result.data),[3,6];case 5:return M=L.sent(),_!=null&&_.reportProgress&&_.reportProgress(p,JSON.stringify(M)),[3,6];case 6:return[2]}})})}))];case 1:return T.sent(),[2,y]}})})},g.prototype.describe=function(y,_){return o.__awaiter(this,void 0,void 0,function(){var O,T;return o.__generator(this,function(d){switch(d.label){case 0:return[4,this.post("/describe",y)];case 1:return O=d.sent(),(_==null?void 0:_.algorithm)!="Inception"?[3,3]:[4,this.describeVideo(O,_)];case 2:O=d.sent(),d.label=3;case 3:return T=this.toSimplifiedOutout(O),(_==null?void 0:_.raw)==!0&&(T.raw=O),[2,T]}})})},g}(n.HTTPClient);s.SceneXClient=f})(ke);var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.RationaleClient=void 0;var ce=te.exports,Tt=Y,Le=300,Rt=function(s){ce.__extends(o,s);function o(e){var n=e.headers,l=e.options,f=e.baseURL,v=f===void 0?"https://us-central1-rationale-ai.cloudfunctions.net":f,g={"Content-Type":"application/json"},y=ce.__assign(ce.__assign({},g),n);return s.call(this,{baseURL:v,headers:y,options:l||{}})||this}return o.prototype.fromArray=function(e,n){return{data:e.map(function(l){return ce.__assign({decision:l.substring(0,Le)},n)})}},o.prototype.fromString=function(e,n){return{data:[ce.__assign({decision:e.substring(0,Le)},n)]}},o.prototype.isOutput=function(e){return typeof e=="object"&&e.result&&e.result.result&&e.result.result.every(function(n){return n.decision&&n.keyResultsConclusion})},o.prototype.toSimplifiedOutout=function(e){if(!e.result||!e.result.result)throw"Remote API Error, bad output: "+JSON.stringify(e);return{results:e.result.result.map(function(n){return{proscons:n.analysis=="proscons"?n.keyResults:void 0,swot:n.analysis=="swot"?n.keyResults:void 0,multichoice:n.analysis=="multichoice"?n.keyResults:void 0,outcomes:n.analysis=="outcomes"?n.keyResults:void 0}})}},o.prototype.decide=function(e,n){return ce.__awaiter(this,void 0,void 0,function(){var l,f;return ce.__generator(this,function(v){switch(v.label){case 0:return[4,this.post("/analysisApi",e)];case 1:return l=v.sent(),f=this.toSimplifiedOutout(l),(n==null?void 0:n.raw)==!0&&(f.raw=l),[2,f]}})})},o}(Tt.HTTPClient);ge.RationaleClient=Rt;var pe={};Object.defineProperty(pe,"__esModule",{value:!0});pe.JinaChatClient=void 0;var I=te.exports,se=Q,jt=Y,kt=function(s){I.__extends(o,s);function o(e){var n=e.headers,l=e.options,f=e.baseURL,v=f===void 0?"https://api.chat.jina.ai/v1/chat":f,g={"Content-Type":"application/json"},y=I.__assign(I.__assign({},g),n);return s.call(this,{baseURL:v,headers:y,options:l||{}})||this}return o.prototype.fromArray=function(e,n){return I.__assign({messages:e.map(function(l){return I.__assign(I.__assign(I.__assign({content:l},n&&n.image&&((0,se.isUrl)(n.image)||(0,se.isBase64)(n.image))&&{image:n.image}),{role:"user"}),(0,se.omit)(n,"image"))})},(0,se.omit)(n,"image"))},o.prototype.fromString=function(e,n){return I.__assign({messages:[I.__assign(I.__assign(I.__assign({content:e},n&&n.image&&((0,se.isUrl)(n.image)||(0,se.isBase64)(n.image))&&{image:n.image}),{role:"user"}),(0,se.omit)(n,"image"))]},(0,se.omit)(n,"image"))},o.prototype.isOutput=function(e){return typeof e=="object"&&e.chatId&&e.responseContent},o.prototype.toSimplifiedOutout=function(e){if(!e.choices||e.choices.length<1||e.choices[0].message.content=="")throw"Remote API Error, bad output: "+JSON.stringify(e);return{output:e.choices[0].message.content,chatId:e.chatId}},o.prototype.generate=function(e,n){return I.__awaiter(this,void 0,void 0,function(){var l,f;return I.__generator(this,function(v){switch(v.label){case 0:return[4,this.post("/completions",e)];case 1:return l=v.sent(),f=this.toSimplifiedOutout(l),(n==null?void 0:n.raw)==!0&&(f.raw=l),[2,f]}})})},o.prototype.stream=function(e,n){return I.__awaiter(this,void 0,void 0,function(){return I.__generator(this,function(l){switch(l.label){case 0:return[4,this.post("/completions",e,!1)];case 1:return[2,l.sent()]}})})},o}(jt.HTTPClient);pe.JinaChatClient=kt;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.BestBannerClient=void 0;var fe=te.exports,Bt=Y,At=function(s){fe.__extends(o,s);function o(e){var n=e.headers,l=e.options,f=e.baseURL,v=f===void 0?"https://api.bestbanner.jina.ai/v1":f,g={"Content-Type":"application/json"},y=fe.__assign(fe.__assign({},g),n);return s.call(this,{baseURL:v,headers:y,options:l||{}})||this}return o.prototype.fromArray=function(e,n){return{data:e.map(function(l){return fe.__assign({text:l},n)})}},o.prototype.fromString=function(e,n){return{data:[fe.__assign({text:e},n)]}},o.prototype.isOutput=function(e){return typeof e=="object"&&e.result&&e.result.every(function(n){return n.banners})},o.prototype.toSimplifiedOutout=function(e){if(!e.result||e.result.every(function(n){return n.banners&&n.banners.length!=0})==!1)throw"Remote API Error, bad output: "+JSON.stringify(e);return{results:e.result.map(function(n){return{output:n.banners.map(function(l){return l.url})}})}},o.prototype.imagine=function(e,n){return fe.__awaiter(this,void 0,void 0,function(){var l,f;return fe.__generator(this,function(v){switch(v.label){case 0:return[4,this.post("/generate",e)];case 1:return l=v.sent(),f=this.toSimplifiedOutout(l),(n==null?void 0:n.raw)==!0&&(f.raw=l),[2,f]}})})},o}(Bt.HTTPClient);Te.BestBannerClient=At;var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});(function(s,o){Object.defineProperty(o,"__esModule",{value:!0});var e=te.exports,n=ye,l=ke,f=ge,v=pe,g=Te,y=Y,_=e.__importDefault(Q);e.__exportStar(Y,o),e.__exportStar(pe,o),e.__exportStar(ye,o),e.__exportStar(ge,o),e.__exportStar(ke,o),e.__exportStar(Ne,o);var O=function(){function T(d){var p,h,S,q,M;this.utils=_.default;var L=d||{},R=L.secrets,F=L.options,N=R&&R["promptperfect-secret"]?"token ".concat(R["promptperfect-secret"]):"",V=R&&R["scenex-secret"]?"token ".concat(R["scenex-secret"]):"",Z=R&&R["rationale-secret"]?"token ".concat(R["rationale-secret"]):"",C=R&&R["jinachat-secret"]?"Bearer ".concat(R["jinachat-secret"]):"",w=R&&R["bestbanner-secret"]?"token ".concat(R["bestbanner-secret"]):"",k=(p=d==null?void 0:d.baseUrls)===null||p===void 0?void 0:p.promptperfect,A=(h=d==null?void 0:d.baseUrls)===null||h===void 0?void 0:h.scenex,$=(S=d==null?void 0:d.baseUrls)===null||S===void 0?void 0:S.rationale,K=(q=d==null?void 0:d.baseUrls)===null||q===void 0?void 0:q.jinachat,le=(M=d==null?void 0:d.baseUrls)===null||M===void 0?void 0:M.bestbanner;this.PPClient=new n.PromptPerfectClient({headers:{"x-api-key":N},options:F,baseURL:k}),this.SXClient=new l.SceneXClient({headers:{"x-api-key":V},options:F,baseURL:A}),this.RAClient=new f.RationaleClient({headers:{"x-api-key":Z},options:F,baseURL:$}),this.CCClient=new v.JinaChatClient({headers:{authorization:C},options:F,baseURL:K}),this.BBClient=new g.BestBannerClient({headers:{"x-api-key":w},options:F,baseURL:le})}return T.prototype.decide=function(d,p){return e.__awaiter(this,void 0,void 0,function(){var h;return e.__generator(this,function(S){switch(S.label){case 0:return Array.isArray(d)?h=this.RAClient.fromArray(d,p):typeof d=="string"?h=this.RAClient.fromString(d,p):h=d,[4,this.RAClient.decide(h,p)];case 1:return[2,S.sent()]}})})},T.prototype.optimize=function(d,p){return e.__awaiter(this,void 0,void 0,function(){var h;return e.__generator(this,function(S){switch(S.label){case 0:return Array.isArray(d)?h=this.PPClient.fromArray(d,p):typeof d=="string"?h=this.PPClient.fromString(d,p):h=d,[4,this.PPClient.optimize(h,p)];case 1:return[2,S.sent()]}})})},T.prototype.describe=function(d,p){return e.__awaiter(this,void 0,void 0,function(){var h;return e.__generator(this,function(S){switch(S.label){case 0:return Array.isArray(d)?h=this.SXClient.fromArray(d,p):typeof d=="string"?h=this.SXClient.fromString(d,p):h=d,[4,this.SXClient.describe(h,p)];case 1:return[2,S.sent()]}})})},T.prototype.generate=function(d,p){return e.__awaiter(this,void 0,void 0,function(){var h;return e.__generator(this,function(S){switch(S.label){case 0:return Array.isArray(d)?h=this.CCClient.fromArray(d,p):typeof d=="string"?h=this.CCClient.fromString(d,p):h=d,p!=null&&p.stream?[4,this.CCClient.stream(h,p)]:[3,2];case 1:return[2,S.sent()];case 2:return[4,this.CCClient.generate(h,p)];case 3:return[2,S.sent()]}})})},T.prototype.imagine=function(d,p){return e.__awaiter(this,void 0,void 0,function(){var h;return e.__generator(this,function(S){switch(S.label){case 0:return Array.isArray(d)?h=this.BBClient.fromArray(d,p):typeof d=="string"?h=this.BBClient.fromString(d,p):h=d,[4,this.BBClient.imagine(h,p)];case 1:return[2,S.sent()]}})})},T.utils=_.default,T.HTTPClient=y.HTTPClient,T.BestBannerClient=g.BestBannerClient,T.JinaChatClient=v.JinaChatClient,T.SceneXClient=l.SceneXClient,T.RationaleClient=f.RationaleClient,T.PromptPerfectClient=n.PromptPerfectClient,T}();s.exports=O,o.default=O})(je,je.exports);var Ut=mt(je.exports);const Et=()=>!0;function qt(s){const o={};return s.forEach(e=>{o[e]=Et}),o}function Ae(){const{emit:s,proxy:o}=He(),e=U(null);function n(){e.value.show()}function l(){e.value.hide()}function f(g){s("ok",g),l()}function v(){s("hide")}return Object.assign(o,{show:n,hide:l}),{dialogRef:e,onDialogHide:v,onDialogOK:f,onDialogCancel:l}}const Je=["ok","hide"];Ae.emits=Je;Ae.emitsObject=qt(Je);const Lt=Re("div",{class:"text-h6 q-mb-md"},"API Key",-1),Dt=Me({__name:"ApiKeyComponent",setup(s){const{onDialogOK:o,dialogRef:e}=Ae(),n=U(""),l=()=>{o(n.value)};return(f,v)=>(x(),Se(Ze,{persistent:"",ref_key:"dialogRef",ref:e},{default:X(()=>[H($e,{style:{"min-width":"330px"}},{default:X(()=>[H(Pe,null,{default:X(()=>[Lt,H(et,{dense:"",modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=g=>n.value=g),label:"Your API Key"},null,8,["modelValue"])]),_:1}),H(Qe,{align:"right"},{default:X(()=>[H(Oe,{disable:!n.value,flat:"",label:"Confirm",color:"primary",onClick:l},null,8,["disable"])]),_:1})]),_:1})]),_:1},512))}}),It=tt("scene",()=>{const s=U(""),o=U();return{apiKey:s,describeImage:async l=>{var v;return await((v=o.value)==null?void 0:v.describe({data:[{image:l,algorithm:"Glide",features:["tts"],languages:["zh-CN"]}]}))},initApiKey:()=>new Promise(l=>{rt.create({component:Dt}).onOk(f=>{l(f),s.value=f,o.value=new Ut({secrets:{"scenex-secret":f}})})})}}),Ht={key:0},Mt={key:1,class:"q-mt-md",style:{width:"100%"},controls:""},Qt=["src"],$t={key:1,class:"q-pa-lg"},zt=1,Nt=Me({__name:"SceneXDemo",setup(s){const o=pt(),e=It(),{apiKey:n}=nt(e),l=U(null),f=oe(()=>o.platform.is.mobile),v=U(!1),g=U(),y=()=>{!g.value||(g.value.getTracks().forEach(w=>w.stop()),g.value=void 0)},_=async()=>{var k;v.value=!v.value;const w=l.value;if(!!w)if(v.value){let A=navigator.mediaDevices;if(!A||!A.getUserMedia){console.log("getUserMedia() not supported.");return}y(),g.value=await A.getUserMedia({video:!0}),"srcObject"in w?w.srcObject=g.value:w.src=window.URL.createObjectURL(g.value),w.onloadedmetadata=function($){w.play()}}else w.pause(),w.srcObject=null,w.src="",(k=g.value)==null||k.getTracks().forEach(A=>A.stop())};function O(w,k){k==null&&(k=1);var A=w.videoWidth*k,$=w.videoHeight*k,K=document.createElement("canvas");K.width=A,K.height=$;var le=K.getContext("2d");if(!!le)return le.drawImage(w,0,0,A,$),K}function T(){const w=l.value;if(!w)return;const k=O(w,zt);!k||(h.value=k.toDataURL("image/png"),V())}const d=w=>new Promise((k,A)=>{const $=new FileReader;$.readAsDataURL(w),$.onload=()=>k($.result),$.onerror=A}),p=U(!1),h=U(),S=U(""),q=U(null),M=()=>{!q.value||q.value.click()},L=U("portrait"),R=U("portrait"),F=async()=>{var k,A;const w=(A=(k=q.value)==null?void 0:k.files)==null?void 0:A[0];!w||(L.value=R.value,h.value=await d(w),V())},N=U(),V=async()=>{p.value=!0;try{const w=await e.describeImage(h.value);N.value=w.results[0]}catch(w){console.log(w),S.value=w.message}p.value=!1},Z=window.matchMedia("(orientation: portrait)"),C=w=>{w.matches?R.value="portrait":R.value="landscape"};return it(async()=>{await at(),n!=null&&n.value||await e.initApiKey(),Z.addEventListener("change",C)}),De(()=>{y(),Z.removeEventListener("change",C)}),(w,k)=>(x(),Se($e,{flat:"",class:"col-12",style:{"max-width":"500px",margin:"0 auto"}},{default:X(()=>[H(Pe,null,{default:X(()=>[f.value?(x(),ie("input",{key:1,type:"file",accept:"image/*",capture:"camera",ref_key:"inputRef",ref:q,onChange:F,style:{display:"none"}},null,544)):(x(),ie(Ce,{key:0},[Re("video",{ref_key:"videoCam",ref:l,style:{width:"100%",height:"300px"}},null,512),H(Pe,{class:"row"},{default:X(()=>[H(Oe,{onClick:_},{default:X(()=>[he(we(v.value?"Stop camera":"Start camera"),1)]),_:1}),H(ft),H(Oe,{onClick:T,disable:!v.value},{default:X(()=>[he("Capture")]),_:1},8,["disable"])]),_:1})],64)),H(ht,{"placeholder-src":"images/placeholder.png",src:h.value,style:{width:"100%"},fit:"contain",class:st({"q-mt-xl":!h.value})},null,8,["placeholder-src","src","class"]),h.value?(x(),Se(ot,{key:2,class:"q-my-md"})):ve("",!0),H(Pe,null,{default:X(()=>[p.value?p.value?(x(),ie("div",$t,[H(Ee,{type:"text",square:"",width:"30%"}),(x(),ie(Ce,null,lt([1,2,3,4,5],A=>H(Ee,{type:"text",square:"",width:"100%",key:A})),64))])):ve("",!0):(x(),ie(Ce,{key:0},[N.value?(x(),ie("div",Ht,we(N.value.i18n.en),1)):ve("",!0),N.value?(x(),ie("audio",Mt,[Re("source",{src:N.value.tts.en,type:"audio/wav"},null,8,Qt)])):ve("",!0),S.value?(x(),ie(Ce,{key:2},[he(we(S.value),1)],64)):ve("",!0)],64)),he(" api key - "+we(ut(n)),1)]),_:1}),H(Qe,null,{default:X(()=>[f.value?(x(),Se(Oe,{key:0,outline:"",color:"primary",class:"q-mx-auto",disable:p.value,onClick:M},{default:X(()=>[he("Open camera to capture ")]),_:1},8,["disable"])):ve("",!0)]),_:1})]),_:1})]),_:1}))}});export{Nt as default};