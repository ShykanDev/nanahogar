import{d as zo,h as Qt,o as gt,c as hn,a as N,n as Tt,t as tn,F as Jr,i as Zr,g as ie,_ as $o,q as Wu,L as Hu,s as Xu,C as Yu,x as Ki,y as Ju,z as Ot,A as Zu,B as tl,D as el,S as nl,E as rl,G as le,H as sl,I as il,J as ol,f as Vt,w as al,e as ul,k as Gt,l as jn,K as Qi,v as Wi,p as zn,u as Hi}from"./index-BazVqrHq.js";const ll={class:"w-5/6 p-4 mx-auto bg-white rounded-lg shadow-md font-poppins"},cl={class:"flex items-center justify-between pb-2 mb-4 border-b"},hl={class:"text-sm text-gray-500"},dl={class:"text-lg font-bold text-gray-800"},fl={class:"mb-4"},ml={class:"text-gray-700"},pl={class:"py-1 text-xs text-gray-500 text-start"},gl={class:"flex items-center space-x-1"},_l={class:"flex items-center justify-end w-full space-x-2"},yl=zo({__name:"CommentCard",props:{title:{type:String,default:"Titulo no especificado"},name:{type:String,default:"Usuario Anónimo"},date:{type:String,default:"Fecha no especificada"},comment:{type:String,default:"Este usuario no ha dejado ningún comentario."},stars:{type:Number,default:3,validator:r=>r>=1&&r<=5},role:{type:String}},setup(r){const t=Qt(!1),e=Qt(Math.floor(Math.random()*100)),n=()=>{t.value?(t.value=!1,e.value--):(t.value=!0,e.value++)};return(i,o)=>(gt(),hn("div",ll,[N("header",cl,[N("h2",{class:Tt(["text-lg italic font-bold text-gray-800",r.role==="asesora"?"text-rose-600":"text-sky-800"])},'"'+tn(r.title)+'"',3),N("p",hl,tn(r.date&&r.date.toDate?r.date.toDate().toLocaleString():"Fecha no válida"),1)]),N("h2",dl,tn(r.name),1),N("div",fl,[N("p",ml,tn(r.comment),1)]),N("p",pl,"Calificación que dió "+tn(r.name),1),N("footer",gl,[(gt(),hn(Jr,null,Zr(5,u=>N("span",{key:u,class:Tt(["text-xl",u<=r.stars?"text-yellow-400":"text-gray-300"])},o[0]||(o[0]=[N("i",{class:"fas fa-star"},null,-1)]),2)),64)),N("div",_l,[N("button",{onClick:n,class:Tt(["hover:text-blue-500",{"text-blue-500 animate-jump":t.value}])},[N("i",{class:Tt(["fas fa-thumbs-up",{"text-blue-500":t.value}])},null,2),o[1]||(o[1]=ie(" Me gusta "))],2),o[2]||(o[2]=N("a",{href:"#comentar"},[N("button",{class:"text-gray-500 hover:text-blue-500"},[N("i",{class:"fas fa-comment"}),ie(" Comentar ")])],-1))])])]))}}),Xi=$o(yl,[["__scopeId","data-v-b5c9fc82"]]),vl={},El={class:"page"};function Tl(r,t){return gt(),hn("main",El,t[0]||(t[0]=[Wu('<div class="page-content" data-v-040b547d><div class="placeholder-content" data-v-040b547d><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div><div class="placeholder-content_item" data-v-040b547d></div></div></div>',1)]))}const Kt=$o(vl,[["render",Tl],["__scopeId","data-v-040b547d"]]);var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ae,Go;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,v,w){for(var g=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)g[Nt-2]=arguments[Nt];return m.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],v=T.g[2];var w=T.g[3],g=m+(w^_&(v^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[2]+606105819&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[6]+2821735955&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[10]+4294925233&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(w^_&(v^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(v^m&(_^v))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=v+(_^w&(m^_))+y[14]+2792965006&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(m^v&(w^m))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^w&(_^v))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[11]+643717713&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[15]+3634488961&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[3]+4107603335&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^w&(_^v))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(w^m))+y[7]+1735328473&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(v^w))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[11]+1839030562&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[7]+4139469664&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[3]+3572445317&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^v)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=v+(w^m^_)+y[15]+530742520&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^m)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[14]+2878612391&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[10]+4293915773&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[6]+2734768916&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~v))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=v+(m^(w|~_))+y[2]+718787259&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+w&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,v=this.h,w=0;w<m;){if(v==0)for(;w<=_;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[v++]=T.charCodeAt(w++),v==this.blockSize){i(this,y),v=0;break}}else for(;w<m;)if(y[v++]=T[w++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,v=T.length-1;0<=v;v--){var w=T[v]|0;y&&w==m||(_[v]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return b(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=E,v=0;v<T.length;v+=8){var w=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),I=h(1),P=h(16777216);r=u.prototype,r.m=function(){if(M(this))return-b(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(M(this))return"-"+b(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var v=st(_,m).g;_=$(_,v.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,D(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}r.l=function(T){return T=$(this,T),M(T)?-1:D(T)?0:1};function b(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(I)}r.abs=function(){return M(this)?b(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,v=0;v<=m;v++){var w=y+(this.i(v)&65535)+(T.i(v)&65535),g=(w>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);y=g>>>16,w&=65535,g&=65535,_[v]=g<<16|w}return new u(_,_[_.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(b(m))}r.j=function(T){if(D(this)||D(T))return E;if(M(this))return M(T)?b(this).j(b(T)):b(b(this).j(T));if(M(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<T.g.length;v++){var w=this.i(y)>>>16,g=this.i(y)&65535,Nt=T.i(v)>>>16,Oe=T.i(v)&65535;_[2*y+2*v]+=g*Oe,K(_,2*y+2*v),_[2*y+2*v+1]+=w*Oe,K(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Nt,K(_,2*y+2*v+1),_[2*y+2*v+2]+=w*Nt,K(_,2*y+2*v+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function K(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Q(T,m){this.g=T,this.h=m}function st(T,m){if(D(m))throw Error("division by zero");if(D(T))return new Q(E,E);if(M(T))return m=st(b(T),m),new Q(b(m.g),b(m.h));if(M(m))return m=st(T,b(m)),new Q(b(m.g),m.h);if(30<T.g.length){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=m;0>=y.l(T);)_=xt(_),y=xt(y);var v=ot(_,1),w=ot(y,1);for(y=ot(y,2),_=ot(_,2);!D(y);){var g=w.add(y);0>=g.l(T)&&(v=v.add(_),w=g),y=ot(y,1),_=ot(_,1)}return m=$(T,v.j(m)),new Q(v,m)}for(v=E;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(m);M(g)||0<g.l(T);)_-=y,w=f(_),g=w.j(m);D(w)&&(w=I),v=v.add(w),T=$(T,g)}return new Q(v,T)}r.A=function(T){return st(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function xt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,v=[],w=0;w<y;w++)v[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new u(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Go=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=p,ae=u}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});var $n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ko,en,Qo,Hn,ts,Wo,Ho,Xo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $n=="object"&&$n];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in l))break t;l=l[A]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,A={next:function(){if(!d&&l<s.length){var R=l++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,l){return s.call.apply(s.bind,arguments)}function E(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),s.apply(a,A)}}return function(){return s.apply(a,arguments)}}function I(s,a,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,I.apply(null,arguments)}function P(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,A,R){for(var S=Array(arguments.length-2),W=2;W<arguments.length;W++)S[W-2]=arguments[W];return a.prototype[A].apply(d,S)}}function M(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const A=s.length||0,R=d.length||0;s.length=A+R;for(let S=0;S<R;S++)s[A+S]=d[S]}else s.push(d)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function st(s){return st[" "](s),s}st[" "]=function(){};var xt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ot(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(l in d)s[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function v(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function w(s){c.setTimeout(()=>{throw s},0)}function g(){var s=wr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,l){const d=Oe.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Oe=new $(()=>new fu,s=>s.reset());class fu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,wr=new Nt,Ks=()=>{const s=c.Promise.resolve(void 0);Fe=()=>{s.then(mu)}};var mu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){w(l)}var a=Oe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ue=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var pu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function qe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(xt){t:{try{st(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:gu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&qe.aa.h.call(this)}}D(qe,ht);var gu={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),_u=0;function yu(s,a,l,d,A){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=A,this.key=++_u,this.da=this.fa=!1}function wn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Rn(s){this.src=s,this.g={},this.h=0}Rn.prototype.add=function(s,a,l,d,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var S=Pr(s,a,d,A);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new yu(a,this.src,R,!!d,A),a.fa=l,s.push(a)),a};function Rr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],A=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=A)&&Array.prototype.splice.call(d,A,1),R&&(wn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Pr(s,a,l,d){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==a&&R.capture==!!l&&R.ha==d)return A}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Cr={};function Qs(s,a,l,d,A){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Qs(s,a[R],l,d,A);return null}return l=Xs(l),s&&s[An]?s.K(a,l,f(d)?!!d.capture:!!d,A):vu(s,a,l,!1,d,A)}function vu(s,a,l,d,A,R){if(!a)throw Error("Invalid event type");var S=f(A)?!!A.capture:!!A,W=br(s);if(W||(s[Vr]=W=new Rn(s)),l=W.add(a,l,d,S,R),l.proxy)return l;if(d=Eu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)pu||(A=S),A===void 0&&(A=!1),s.addEventListener(a.toString(),d,A);else if(s.attachEvent)s.attachEvent(Hs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Eu(){function s(l){return a.call(s.src,s.listener,l)}const a=Tu;return s}function Ws(s,a,l,d,A){if(Array.isArray(a))for(var R=0;R<a.length;R++)Ws(s,a[R],l,d,A);else d=f(d)?!!d.capture:!!d,l=Xs(l),s&&s[An]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],l=Pr(R,l,d,A),-1<l&&(wn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=br(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Pr(a,l,d,A)),(l=-1<s?a[s]:null)&&Sr(l))}function Sr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[An])Rr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Hs(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=br(a))?(Rr(l,s),l.h==0&&(l.src=null,a[Vr]=null)):wn(s)}}}function Hs(s){return s in Cr?Cr[s]:Cr[s]="on"+s}function Tu(s,a){if(s.da)s=!0;else{a=new qe(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Sr(s),s=l.call(d,a)}return s}function br(s){return s=s[Vr],s instanceof Rn?s:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xs(s){return typeof s=="function"?s:(s[kr]||(s[kr]=function(a){return s.handleEvent(a)}),s[kr])}function dt(){Bt.call(this),this.i=new Rn(this),this.M=this,this.F=null}D(dt,Bt),dt.prototype[An]=!0,dt.prototype.removeEventListener=function(s,a,l,d){Ws(this,s,a,l,d)};function vt(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var A=a;a=new ht(d,s),y(a,A)}if(A=!0,l)for(var R=l.length-1;0<=R;R--){var S=a.g=l[R];A=Pn(S,d,!0,a)&&A}if(S=a.g=s,A=Pn(S,d,!0,a)&&A,A=Pn(S,d,!1,a)&&A,l)for(R=0;R<l.length;R++)S=a.g=l[R],A=Pn(S,d,!1,a)&&A}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)wn(l[d]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},dt.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function Pn(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,R=0;R<a.length;++R){var S=a[R];if(S&&!S.da&&S.capture==l){var W=S.listener,at=S.ha||S.src;S.fa&&Rr(s.i,S),A=W.call(at,d)!==!1&&A}}return A&&!d.defaultPrevented}function Ys(s,a,l){if(typeof s=="function")l&&(s=I(s,l));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Js(s){s.g=Ys(()=>{s.g=null,s.i&&(s.i=!1,Js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Iu extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Js(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(s){Bt.call(this),this.h=s,this.g={}}D(Be,Bt);var Zs=[];function ti(s){ot(s.g,function(a,l){this.g.hasOwnProperty(l)&&Sr(a)},s),s.g={}}Be.prototype.N=function(){Be.aa.N.call(this),ti(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=c.JSON.stringify,Au=c.JSON.parse,wu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function ei(s){return s.h||(s.h=s.i())}function ni(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nr(){ht.call(this,"d")}D(Nr,ht);function Mr(){ht.call(this,"c")}D(Mr,ht);var ee={},ri=null;function Vn(){return ri=ri||new dt}ee.La="serverreachability";function si(s){ht.call(this,ee.La,s)}D(si,ht);function ze(s){const a=Vn();vt(a,new si(a))}ee.STAT_EVENT="statevent";function ii(s,a){ht.call(this,ee.STAT_EVENT,s),this.stat=a}D(ii,ht);function Et(s){const a=Vn();vt(a,new ii(a,s))}ee.Ma="timingevent";function oi(s,a){ht.call(this,ee.Ma,s),this.size=a}D(oi,ht);function $e(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function Ru(s,a,l,d,A,R){s.info(function(){if(s.g)if(R)for(var S="",W=R.split("&"),at=0;at<W.length;at++){var z=W[at].split("=");if(1<z.length){var ft=z[0];z=z[1];var mt=ft.split("_");S=2<=mt.length&&mt[1]=="type"?S+(ft+"="+z+"&"):S+(ft+"=redacted&")}}else S=null;else S=R;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+a+`
`+l+`
`+S})}function Pu(s,a,l,d,A,R,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+a+`
`+l+`
`+R+" "+S})}function ge(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Cu(s,l)+(d?" "+d:"")})}function Vu(s,a){s.info(function(){return"TIMEOUT: "+a})}Ge.prototype.info=function(){};function Cu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var S=1;S<A.length;S++)A[S]=""}}}}return Dr(l)}catch{return a}}var Cn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function Sn(){}D(Sn,xr),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},Lr=new Sn;function jt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ui}function ui(){this.i=null,this.g="",this.h=!1}var li={},Or={};function Fr(s,a,l){s.L=1,s.v=xn(Mt(a)),s.m=l,s.P=!0,ci(s,null)}function ci(s,a){s.F=Date.now(),bn(s),s.A=Mt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),wi(l.i,"t",d),s.C=0,l=s.j.J,s.h=new ui,s.g=ji(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Iu(I(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Zs[0]=A.toString()),A=Zs);for(var R=0;R<A.length;R++){var S=Qs(l,A[R],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),ze(),Ru(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Lt(s)==3?a.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Lt(this.g);var a=this.g.Ba();const ve=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||ki(this.g)))){this.J||mt!=4||a==7||(a==8||0>=ve?ze(3):ze(2)),Ur(this);var l=this.g.Z();this.X=l;e:if(hi(this)){var d=ki(this.g);s="";var A=d.length,R=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),Ke(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==A-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Pu(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(W)){var z=W;break e}}z=null}if(l=z)ge(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,l);else{this.o=!1,this.s=3,Et(12),ne(this),Ke(this);break t}}if(this.P){l=!0;let Pt;for(;!this.J&&this.C<S.length;)if(Pt=Su(this,S),Pt==Or){mt==4&&(this.s=4,Et(14),l=!1),ge(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==li){this.s=4,Et(15),ge(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else ge(this.i,this.l,Pt,null),qr(this,Pt);if(hi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||S.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)ge(this.i,this.l,S,"[Invalid Chunked Response]"),ne(this),Ke(this);else if(0<S.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Kr(ft),ft.M=!0,Et(11))}}else ge(this.i,this.l,S,null),qr(this,S);mt==4&&ne(this),this.o&&!this.J&&(mt==4?Fi(this.j,this):(this.o=!1,bn(this)))}else Ku(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ne(this),Ke(this)}}}catch{}finally{}};function hi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Su(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?Or:(l=Number(a.substring(l,d)),isNaN(l)?li:(d+=1,d+l>a.length?Or:(a=a.slice(d,d+l),s.C=d+l,a)))}jt.prototype.cancel=function(){this.J=!0,ne(this)};function bn(s){s.S=Date.now()+s.I,di(s,s.I)}function di(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=$e(I(s.ba,s),a)}function Ur(s){s.B&&(c.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Vu(this.i,this.A),this.L!=2&&(ze(),Et(17)),ne(this),this.s=2,Ke(this)):di(this,this.S-s)};function Ke(s){s.j.G==0||s.J||Fi(s.j,s)}function ne(s){Ur(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ti(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function qr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Br(l.h,s))){if(!s.K&&Br(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Un(l),On(l);else break t;Gr(l),Et(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=$e(I(l.Za,l),6e3));if(1>=pi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else se(l,11)}else if((s.K||l.g==s)&&Un(l),!K(a))for(A=l.Da.g.parse(a),a=0;a<A.length;a++){let z=A[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const ft=z[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=z[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const ve=z[5];ve!=null&&typeof ve=="number"&&0<ve&&(d=1.5*ve,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Pt=s.g;if(Pt){const Bn=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bn){var R=d.h;R.g||Bn.indexOf("spdy")==-1&&Bn.indexOf("quic")==-1&&Bn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(jr(R,R.h),R.h=null))}if(d.D){const Qr=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(d.ya=Qr,H(d.I,d.D,Qr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=s;if(d.qa=Bi(d,d.J?d.ia:null,d.W),S.K){gi(d.h,S);var W=S,at=d.L;at&&(W.I=at),W.B&&(Ur(W),bn(W)),d.g=S}else Li(d);0<l.i.length&&Fn(l)}else z[0]!="stop"&&z[0]!="close"||se(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?se(l,7):$r(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}ze(4)}catch{}}var bu=class{constructor(s,a){this.g=s,this.map=a}};function fi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function pi(s){return s.h?1:s.g?s.g.size:0}function Br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function jr(s,a){s.g?s.g.add(a):s.h=a}function gi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}fi.prototype.cancel=function(){if(this.i=_i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function _i(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return M(s.i)}function ku(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function Du(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function yi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Du(s),d=ku(s),A=d.length,R=0;R<A;R++)a.call(void 0,d[R],l&&l[R],s)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),A=null;if(0<=d){var R=s[l].substring(0,d);A=s[l].substring(d+1)}else R=s[l];a(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function re(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof re){this.h=s.h,kn(this,s.j),this.o=s.o,this.g=s.g,Dn(this,s.s),this.l=s.l;var a=s.i,l=new He;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ei(this,l),this.m=s.m}else s&&(a=String(s).match(vi))?(this.h=!1,kn(this,a[1]||"",!0),this.o=Qe(a[2]||""),this.g=Qe(a[3]||"",!0),Dn(this,a[4]),this.l=Qe(a[5]||"",!0),Ei(this,a[6]||"",!0),this.m=Qe(a[7]||"")):(this.h=!1,this.i=new He(null,this.h))}re.prototype.toString=function(){var s=[],a=this.j;a&&s.push(We(a,Ti,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(We(a,Ti,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(We(l,l.charAt(0)=="/"?Lu:Mu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",We(l,Fu)),s.join("")};function Mt(s){return new re(s)}function kn(s,a,l){s.j=l?Qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Dn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ei(s,a,l){a instanceof He?(s.i=a,Uu(s.i,s.h)):(l||(a=We(a,Ou)),s.i=new He(a,s.h))}function H(s,a,l){s.i.set(a,l)}function xn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Nu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Nu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ti=/[#\/\?@]/g,Mu=/[#\?:]/g,Lu=/[#\?]/g,Ou=/[#\?@]/g,Fu=/#/g;function He(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&xu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=He.prototype,r.add=function(s,a){zt(this),this.i=null,s=_e(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ii(s,a){zt(s),a=_e(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ai(s,a){return zt(s),a=_e(s,a),s.g.has(a)}r.forEach=function(s,a){zt(this),this.g.forEach(function(l,d){l.forEach(function(A){s.call(a,A,d,this)},this)},this)},r.na=function(){zt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const A=s[d];for(let R=0;R<A.length;R++)l.push(a[d])}return l},r.V=function(s){zt(this);let a=[];if(typeof s=="string")Ai(this,s)&&(a=a.concat(this.g.get(_e(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return zt(this),this.i=null,s=_e(this,s),Ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function wi(s,a,l){Ii(s,a),0<l.length&&(s.i=null,s.g.set(_e(s,a),M(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const R=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var A=R;S[d]!==""&&(A+="="+encodeURIComponent(String(S[d]))),s.push(A)}}return this.i=s.join("&")};function _e(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Uu(s,a){a&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(l,d){var A=d.toLowerCase();d!=A&&(Ii(this,d),wi(this,A,l))},s)),s.j=a}function qu(s,a){const l=new Ge;if(c.Image){const d=new Image;d.onload=P($t,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P($t,l,"TestLoadImage: error",!1,a,d),d.onabort=P($t,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P($t,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Bu(s,a){const l=new Ge,d=new AbortController,A=setTimeout(()=>{d.abort(),$t(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(A),R.ok?$t(l,"TestPingServer: ok",!0,a):$t(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),$t(l,"TestPingServer: error",!1,a)})}function $t(s,a,l,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(l)}catch{}}function ju(){this.g=new wu}function zu(s,a,l){const d=l||"";try{yi(s,function(A,R){let S=A;f(A)&&(S=Dr(A)),a.push(d+R+"="+encodeURIComponent(S))})}catch(A){throw a.push(d+"type="+encodeURIComponent("_badmap")),A}}function Nn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Nn,xr),Nn.prototype.g=function(){return new Mn(this.l,this.j)},Nn.prototype.i=function(s){return function(){return s}}({});function Mn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Mn,dt),r=Mn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ye(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ri(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ri(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Xe(this):Ye(this),this.readyState==3&&Ri(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},r.Qa=function(s){this.g&&(this.response=s,Xe(this))},r.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ye(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Pi(s){let a="";return ot(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function zr(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Pi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var $u=/^https?$/i,Gu=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?ei(this.o):ei(Lr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Vi(this,R);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)l.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gu,a,void 0))||d||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,S]of l)this.g.setRequestHeader(R,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Vi(this,R)}};function Vi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ci(s),Ln(s)}function Ci(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ln(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Si(this):this.bb())},r.bb=function(){Si(this)};function Si(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Lt(s)!=4||s.Z()!=2)){if(s.u&&Lt(s)==4)Ys(s.Ea,0,s);else if(vt(s,"readystatechange"),Lt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var A=String(s.D).match(vi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!$u.test(A?A.toLowerCase():"")}l=d}if(l)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var R=2<Lt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Ci(s)}}finally{Ln(s)}}}}function Ln(s,a){if(s.g){bi(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||vt(s,"ready");try{l.onreadystatechange=d}catch{}}}function bi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Lt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Au(a)}};function ki(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ku(s){const a={};s=(s.g&&2<=Lt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(K(s[d]))continue;var l=v(s[d]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=a[A]||[];a[A]=R,R.push(l)}T(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Di(s){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new fi(s&&s.concurrentRequestLimit),this.Da=new ju,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Di.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){Et(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Bi(this,null,this.W),Fn(this)};function $r(s){if(xi(s),s.G==3){var a=s.U++,l=Mt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),Ze(s,l),a=new jt(s,s.j,a),a.L=2,a.v=xn(Mt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ji(a.j,null),a.g.ea(a.v)),a.F=Date.now(),bn(a)}qi(s)}function On(s){s.g&&(Kr(s),s.g.cancel(),s.g=null)}function xi(s){On(s),s.u&&(c.clearTimeout(s.u),s.u=null),Un(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Fn(s){if(!mi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Fe||Ks(),Ue||(Fe(),Ue=!0),wr.add(a,s),s.B=0}}function Qu(s,a){return pi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=$e(I(s.Ga,s,a),Ui(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new jt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Mi(this,A,a),l=Mt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Ze(this,l),R&&(this.O?a="headers="+encodeURIComponent(String(Pi(R)))+"&"+a:this.m&&zr(l,this.m,R)),jr(this.h,A),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),A.T=!0,Fr(A,l,null)):Fr(A,l,a),this.G=2}}else this.G==3&&(s?Ni(this,s):this.i.length==0||mi(this.h)||Ni(this))};function Ni(s,a){var l;a?l=a.l:l=s.U++;const d=Mt(s.I);H(d,"SID",s.K),H(d,"RID",l),H(d,"AID",s.T),Ze(s,d),s.m&&s.o&&zr(d,s.m,s.o),l=new jt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Mi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),jr(s.h,l),Fr(l,d,a)}function Ze(s,a){s.H&&ot(s.H,function(l,d){H(a,d,l)}),s.l&&yi({},function(l,d){H(a,d,l)})}function Mi(s,a,l){l=Math.min(s.i.length,l);var d=s.l?I(s.l.Na,s.l,s):null;t:{var A=s.i;let R=-1;for(;;){const S=["count="+l];R==-1?0<l?(R=A[0].g,S.push("ofs="+R)):R=0:S.push("ofs="+R);let W=!0;for(let at=0;at<l;at++){let z=A[at].g;const ft=A[at].map;if(z-=R,0>z)R=Math.max(0,A[at].g-100),W=!1;else try{zu(ft,S,"req"+z+"_")}catch{d&&d(ft)}}if(W){d=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Li(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Fe||Ks(),Ue||(Fe(),Ue=!0),wr.add(a,s),s.v=0}}function Gr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=$e(I(s.Fa,s),Ui(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Oi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=$e(I(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),On(this),Oi(this))};function Kr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Oi(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Mt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Ze(s,a),s.m&&s.o&&zr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=xn(Mt(a)),l.m=null,l.P=!0,ci(l,s)}r.Za=function(){this.C!=null&&(this.C=null,On(this),Gr(this),Et(19))};function Un(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Fi(s,a){var l=null;if(s.g==a){Un(s),Kr(s),s.g=null;var d=2}else if(Br(s.h,a))l=a.D,gi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var A=s.B;d=Vn(),vt(d,new oi(d,l)),Fn(s)}else Li(s);else if(A=a.s,A==3||A==0&&0<a.X||!(d==1&&Qu(s,a)||d==2&&Gr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),A){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function Ui(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function se(s,a){if(s.j.info("Error code "+a),a==2){var l=I(s.fb,s),d=s.Xa;const A=!d;d=new re(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||kn(d,"https"),xn(d),A?qu(d.toString(),l):Bu(d.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),qi(s),xi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function qi(s){if(s.G=0,s.ka=[],s.l){const a=_i(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Bi(s,a,l){var d=l instanceof re?Mt(l):new re(l);if(d.g!="")a&&(d.g=a+"."+d.g),Dn(d,d.s);else{var A=c.location;d=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var R=new re(null);d&&kn(R,d),a&&(R.g=a),A&&Dn(R,A),l&&(R.l=l),d=R}return l=s.D,a=s.ya,l&&a&&H(d,l,a),H(d,"VER",s.la),Ze(s,d),d}function ji(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new Nn({eb:l})):new J(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function zi(){}r=zi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qn(){}qn.prototype.g=function(s,a){return new At(s,a)};function At(s,a){dt.call(this),this.g=new Di(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ye(this)}D(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){$r(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Dr(s),s=l);a.i.push(new bu(a.Ya++,s)),a.G==3&&Fn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,$r(this.g),delete this.g,At.aa.N.call(this)};function $i(s){Nr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D($i,Nr);function Gi(){Mr.call(this),this.status=1}D(Gi,Mr);function ye(s){this.g=s}D(ye,zi),ye.prototype.ua=function(){vt(this.g,"a")},ye.prototype.ta=function(s){vt(this.g,new $i(s))},ye.prototype.sa=function(s){vt(this.g,new Gi)},ye.prototype.ra=function(){vt(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Xo=function(){return new qn},Ho=function(){return Vn()},Wo=ee,ts={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cn.NO_ERROR=0,Cn.TIMEOUT=8,Cn.HTTP_ERROR=6,Hn=Cn,ai.COMPLETE="complete",Qo=ai,ni.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",dt.prototype.listen=dt.prototype.K,en=ni,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Ko=J}).apply(typeof $n<"u"?$n:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Hu("@firebase/firestore");function Ee(){return ce.logLevel}function k(r,...t){if(ce.logLevel<=Ot.DEBUG){const e=t.map(ps);ce.debug(`Firestore (${De}): ${r}`,...e)}}function Ut(r,...t){if(ce.logLevel<=Ot.ERROR){const e=t.map(ps);ce.error(`Firestore (${De}): ${r}`,...e)}}function Re(r,...t){if(ce.logLevel<=Ot.WARN){const e=t.map(ps);ce.warn(`Firestore (${De}): ${r}`,...e)}}function ps(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: `+r;throw Ut(t),new Error(t)}function G(r,t){r||O()}function U(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ju{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Al{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wl{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ue,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ue)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new Yo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new _t(t)}}class Rl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Pl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Rl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new Vl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Sl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function Pe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new nt(0,0))}static max(){return new F(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return dn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof dn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends dn{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends dn{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return bl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(X.fromString(t))}static fromName(t){return new L(X.fromString(t).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new X(t.slice()))}}function kl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Xt(i,L.empty(),t)}function Dl(r){return new Xt(r.readTime,r.key,-1)}class Xt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Xt(F.min(),L.empty(),-1)}static max(){return new Xt(F.max(),L.empty(),-1)}}function xl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ml{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Nl)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(i=>i?V.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{u[f]=p,++c,c===o&&n(u)},p=>i(p))}})}static doWhile(t,e){return new V((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Ll(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ne(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}hr.oe=-1;function dr(r){return r==null}function er(r){return r===0&&1/r==-1/0}function Ol(r){return typeof r=="number"&&Number.isInteger(r)&&!er(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Zi(t)),t=Ul(r.get(e),t);return Zi(t)}function Ul(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Zi(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function he(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Zo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ut(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new eo(this.data.getIterator())}getIteratorFrom(t){return new eo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class eo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new rt(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ta("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ql=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(r){if(G(!!r),typeof r=="string"){let t=0;const e=ql.exec(r);if(G(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jt(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function fr(r){const t=r.mapValue.fields.__previous_value__;return gs(t)?fr(t):t}function fn(r){const t=Yt(r.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class mn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gs(r)?4:zl(r)?9007199254740991:jl(r)?10:11:O()}function Dt(r,t){if(r===t)return!0;const e=Zt(r);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return fn(r).isEqual(fn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Yt(i.timestampValue),c=Yt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?er(u)===er(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Pe(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(to(u)!==to(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Dt(u[h],c[h])))return!1;return!0}(r,t);default:return O()}}function pn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Ve(r,t){if(r===t)return 0;const e=Zt(r),n=Zt(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return no(r.timestampValue,t.timestampValue);case 4:return no(fn(r),fn(t));case 5:return B(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Jt(o),h=Jt(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=B(c[f],h[f]);if(p!==0)return p}return B(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=B(Z(o.latitude),Z(u.latitude));return c!==0?c:B(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ro(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,p;const E=o.fields||{},I=u.fields||{},P=(c=E.value)===null||c===void 0?void 0:c.arrayValue,D=(h=I.value)===null||h===void 0?void 0:h.arrayValue,M=B(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:ro(P,D)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Kn.mapValue&&u===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(u===Kn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const I=B(h[E],p[E]);if(I!==0)return I;const P=Ve(c[h[E]],f[p[E]]);if(P!==0)return P}return B(h.length,p.length)}(r.mapValue,t.mapValue);default:throw O()}}function no(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Yt(r),n=Yt(t),i=B(e.seconds,n.seconds);return i!==0?i:B(e.nanos,n.nanos)}function ro(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ve(e[i],n[i]);if(o)return o}return B(e.length,n.length)}function Ce(r){return es(r)}function es(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Yt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Jt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return L.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=es(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${es(e.fields[u])}`;return i+"}"}(r.mapValue):O()}function Xn(r){switch(Zt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fr(r);return t?16+Xn(t):16;case 5:return 2*r.stringValue.length;case 6:return Jt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Xn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return he(n.fields,(o,u)=>{i+=o.length+Xn(u)}),i}(r.mapValue);default:throw O()}}function so(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ns(r){return!!r&&"integerValue"in r}function _s(r){return!!r&&"arrayValue"in r}function io(r){return!!r&&"nullValue"in r}function oo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Yn(r){return!!r&&"mapValue"in r}function jl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function on(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return he(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=on(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(r.arrayValue.values[e]);return t}return Object.assign({},r)}function zl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=lt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=on(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Yn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){he(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Rt(on(this.value))}}function ea(r){const t=[];return he(r.fields,(e,n)=>{const i=new lt([e]);if(Yn(n)){const o=ea(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,F.min(),F.min(),F.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,i){return new yt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new yt(t,2,e,F.min(),F.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,F.min(),F.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.position=t,this.inclusive=e}}function ao(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=L.comparator(L.fromName(u.referenceValue),e.key):n=Ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function uo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function $l(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{}class et extends na{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Kl(t,e,n):e==="array-contains"?new Hl(t,n):e==="in"?new Xl(t,n):e==="not-in"?new Yl(t,n):e==="array-contains-any"?new Jl(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ql(t,n):new Wl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends na{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return ra(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ra(r){return r.op==="and"}function sa(r){return Gl(r)&&ra(r)}function Gl(r){for(const t of r.filters)if(t instanceof St)return!1;return!0}function rs(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(sa(r))return r.filters.map(t=>rs(t)).join(",");{const t=r.filters.map(e=>rs(e)).join(",");return`${r.op}(${t})`}}function ia(r,t){return r instanceof et?function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(r,t):r instanceof St?function(n,i){return i instanceof St&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&ia(u,i.filters[c]),!0):!1}(r,t):void O()}function oa(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(r):r instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(oa).join(" ,")+"}"}(r):"Filter"}class Kl extends et{constructor(t,e,n){super(t,e,n),this.key=L.fromName(n.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ql extends et{constructor(t,e){super(t,"in",e),this.keys=aa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Wl extends et{constructor(t,e){super(t,"not-in",e),this.keys=aa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function aa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>L.fromName(n.referenceValue))}class Hl extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&pn(e.arrayValue,this.value)}}class Xl extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class Yl extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!pn(this.value.arrayValue,e)}}class Jl extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>pn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function lo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Zl(r,t,e,n,i,o,u)}function ys(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>rs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),dr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ce(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ce(n)).join(",")),t.ue=e}return t.ue}function vs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!$l(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ia(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!uo(r.startAt,t.startAt)&&uo(r.endAt,t.endAt)}function ss(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tc(r,t,e,n,i,o,u,c){return new Me(r,t,e,n,i,o,u,c)}function Es(r){return new Me(r)}function co(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ua(r){return r.collectionGroup!==null}function an(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new rt(lt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new gn(o,n))}),e.has(lt.keyField().canonicalString())||t.ce.push(new gn(lt.keyField(),n))}return t.ce}function bt(r){const t=U(r);return t.le||(t.le=ec(t,an(r))),t.le}function ec(r,t){if(r.limitType==="F")return lo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new gn(i.field,o)});const e=r.endAt?new nr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new nr(r.startAt.position,r.startAt.inclusive):null;return lo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function is(r,t){const e=r.filters.concat([t]);return new Me(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function os(r,t,e){return new Me(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function mr(r,t){return vs(bt(r),bt(t))&&r.limitType===t.limitType}function la(r){return`${ys(bt(r))}|lt:${r.limitType}`}function Te(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>oa(i)).join(", ")}]`),dr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ce(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ce(i)).join(",")),`Target(${n})`}(bt(r))}; limitType=${r.limitType})`}function pr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):L.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of an(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=ao(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,an(n),i)||n.endAt&&!function(u,c,h){const f=ao(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,an(n),i))}(r,t)}function nc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ca(r){return(t,e)=>{let n=!1;for(const i of an(r)){const o=rc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function rc(r,t,e){const n=r.field.isKeyField()?L.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ve(h,f):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Zo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Y(L.comparator);function qt(){return sc}const ha=new Y(L.comparator);function nn(...r){let t=ha;for(const e of r)t=t.insert(e.key,e);return t}function da(r){let t=ha;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function oe(){return un()}function fa(){return un()}function un(){return new de(r=>r.toString(),(r,t)=>r.isEqual(t))}const ic=new Y(L.comparator),oc=new rt(L.comparator);function q(...r){let t=oc;for(const e of r)t=t.add(e);return t}const ac=new rt(B);function uc(){return ac}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function ma(r){return{integerValue:""+r}}function lc(r,t){return Ol(t)?ma(t):Ts(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this._=void 0}}function cc(r,t,e){return r instanceof rr?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&gs(o)&&(o=fr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof _n?ga(r,t):r instanceof yn?_a(r,t):function(i,o){const u=pa(i,o),c=ho(u)+ho(i.Pe);return ns(u)&&ns(i.Pe)?ma(c):Ts(i.serializer,c)}(r,t)}function hc(r,t,e){return r instanceof _n?ga(r,t):r instanceof yn?_a(r,t):e}function pa(r,t){return r instanceof sr?function(n){return ns(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class rr extends gr{}class _n extends gr{constructor(t){super(),this.elements=t}}function ga(r,t){const e=ya(t);for(const n of r.elements)e.some(i=>Dt(i,n))||e.push(n);return{arrayValue:{values:e}}}class yn extends gr{constructor(t){super(),this.elements=t}}function _a(r,t){let e=ya(t);for(const n of r.elements)e=e.filter(i=>!Dt(i,n));return{arrayValue:{values:e}}}class sr extends gr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ho(r){return Z(r.integerValue||r.doubleValue)}function ya(r){return _s(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function dc(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof _n&&i instanceof _n||n instanceof yn&&i instanceof yn?Pe(n.elements,i.elements,Dt):n instanceof sr&&i instanceof sr?Dt(n.Pe,i.Pe):n instanceof rr&&i instanceof rr}(r.transform,t.transform)}class fc{constructor(t,e){this.version=t,this.transformResults=e}}class Ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class _r{}function va(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ta(r.key,Ft.none()):new vn(r.key,r.data,Ft.none());{const e=r.data,n=Rt.empty();let i=new rt(lt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new fe(r.key,n,new Ct(i.toArray()),Ft.none())}}function mc(r,t,e){r instanceof vn?function(i,o,u){const c=i.value.clone(),h=mo(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof fe?function(i,o,u){if(!Jn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=mo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Ea(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ln(r,t,e,n){return r instanceof vn?function(o,u,c,h){if(!Jn(o.precondition,u))return c;const f=o.value.clone(),p=po(o.fieldTransforms,h,u);return f.setAll(p),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof fe?function(o,u,c,h){if(!Jn(o.precondition,u))return c;const f=po(o.fieldTransforms,h,u),p=u.data;return p.setAll(Ea(o)),p.setAll(f),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(r,t,e,n):function(o,u,c){return Jn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function pc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=pa(n.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,o))}return e||null}function fo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Pe(n,i,(o,u)=>dc(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class vn extends _r{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fe extends _r{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ea(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function mo(r,t,e){const n=new Map;G(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,hc(u,c,e[i]))}return n}function po(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,cc(o,u,t))}return n}class Ta extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gc extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&mc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ln(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ln(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=va(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,n)=>fo(e,n))&&Pe(this.baseMutations,t.baseMutations,(e,n)=>fo(e,n))}}class Is{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length);let i=function(){return ic}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Is(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,j;function Ec(r){switch(r){default:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Ia(r){if(r===void 0)return Ut("GRPC error has no .code"),C.UNKNOWN;switch(r){case tt.OK:return C.OK;case tt.CANCELLED:return C.CANCELLED;case tt.UNKNOWN:return C.UNKNOWN;case tt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case tt.INTERNAL:return C.INTERNAL;case tt.UNAVAILABLE:return C.UNAVAILABLE;case tt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case tt.NOT_FOUND:return C.NOT_FOUND;case tt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case tt.ABORTED:return C.ABORTED;case tt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case tt.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(j=tt||(tt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new ae([4294967295,4294967295],0);function go(r){const t=Tc().encode(r),e=new Go;return e.update(t),new Uint8Array(e.digest())}function _o(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ae([e,n],0),new ae([i,o],0)]}class As{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new rn(`Invalid padding: ${e}`);if(n<0)throw new rn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new rn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new rn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=ae.fromNumber(this.Te)}Ee(t,e,n){let i=t.add(e.multiply(ae.fromNumber(n)));return i.compare(Ic)===1&&(i=new ae([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=go(t),[n,i]=_o(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new As(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=go(t),[n,i]=_o(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,En.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new yr(F.min(),i,new Y(B),qt(),q())}}class En{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new En(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Aa{constructor(t,e){this.targetId=t,this.me=e}}class wa{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class yo{constructor(){this.fe=0,this.ge=vo(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),n=q();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}}),new En(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=vo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ac{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Qn(),this.Qe=Qn(),this.Ke=new Y(B)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,n=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(ss(o))if(n===0){const u=new L(o.path);this.We(e,u,yt.newNoDocument(u,F.min()))}else G(n===1);else{const u=this.Ze(e);if(u!==n){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Jt(n).toUint8Array()}catch(h){if(h instanceof ta)return Re("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new As(u,i,o)}catch(h){return Re(h instanceof rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&ss(c.target)){const h=new L(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,yt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=q();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new yr(t,e,this.Ke,this.ke,n);return this.ke=qt(),this.qe=Qn(),this.Qe=Qn(),this.Ke=new Y(B),i}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new yo,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new rt(B),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new rt(B),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new yo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Qn(){return new Y(L.comparator)}function vo(){return new Y(L.comparator)}const wc={asc:"ASCENDING",desc:"DESCENDING"},Rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pc={and:"AND",or:"OR"};class Vc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function as(r,t){return r.useProto3Json||dr(t)?t:{value:t}}function ir(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ra(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Cc(r,t){return ir(r,t.toTimestamp())}function kt(r){return G(!!r),F.fromTimestamp(function(e){const n=Yt(e);return new nt(n.seconds,n.nanos)}(r))}function ws(r,t){return us(r,t).canonicalString()}function us(r,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Pa(r){const t=X.fromString(r);return G(ka(t)),t}function ls(r,t){return ws(r.databaseId,t.path)}function Wr(r,t){const e=Pa(t);if(e.get(1)!==r.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new L(Ca(e))}function Va(r,t){return ws(r.databaseId,t)}function Sc(r){const t=Pa(r);return t.length===4?X.emptyPath():Ca(t)}function cs(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ca(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Eo(r,t,e){return{name:ls(r,t),fields:e.value.mapValue.fields}}function bc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(G(p===void 0||typeof p=="string"),ct.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ct.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const p=f.code===void 0?C.UNKNOWN:Ia(f.code);return new x(p,f.message||"")}(u);e=new wa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Wr(r,n.document.name),o=kt(n.document.updateTime),u=n.document.createTime?kt(n.document.createTime):F.min(),c=new Rt({mapValue:{fields:n.document.fields}}),h=yt.newFoundDocument(i,o,u,c),f=n.targetIds||[],p=n.removedTargetIds||[];e=new Zn(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Wr(r,n.document),o=n.readTime?kt(n.readTime):F.min(),u=yt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Zn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Wr(r,n.document),o=n.removedTargetIds||[];e=new Zn([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new vc(i,o),c=n.targetId;e=new Aa(c,u)}}return e}function kc(r,t){let e;if(t instanceof vn)e={update:Eo(r,t.key,t.value)};else if(t instanceof Ta)e={delete:ls(r,t.key)};else if(t instanceof fe)e={update:Eo(r,t.key,t.data),updateMask:qc(t.fieldMask)};else{if(!(t instanceof gc))return O();e={verify:ls(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof rr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _n)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof sr)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Cc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function Dc(r,t){return r&&r.length>0?(G(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?kt(i.updateTime):kt(o);return u.isEqual(F.min())&&(u=kt(o)),new fc(u,i.transformResults||[])}(e,t))):[]}function xc(r,t){return{documents:[Va(r,t.path)]}}function Nc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Va(r,i);const o=function(f){if(f.length!==0)return ba(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(p=>function(I){return{field:Ie(I.field),direction:Oc(I.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=as(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:i}}function Mc(r){let t=Sc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const I=Sa(E);return I instanceof St&&sa(I)?I.getFilters():[I]}(e.where));let u=[];e.orderBy&&(u=function(E){return E.map(I=>function(D){return new gn(Ae(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(I))}(e.orderBy));let c=null;e.limit&&(c=function(E){let I;return I=typeof E=="object"?E.value:E,dr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(E){const I=!!E.before,P=E.values||[];return new nr(P,I)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const I=!E.before,P=E.values||[];return new nr(P,I)}(e.endAt)),tc(t,i,u,o,c,"F",h,f)}function Lc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ae(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ae(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ae(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ae(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return et.create(Ae(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>Sa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Oc(r){return wc[r]}function Fc(r){return Rc[r]}function Uc(r){return Pc[r]}function Ie(r){return{fieldPath:r.canonicalString()}}function Ae(r){return lt.fromServerFormat(r.fieldPath)}function ba(r){return r instanceof et?function(e){if(e.op==="=="){if(oo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(io(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(io(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:Fc(e.op),value:e.value}}}(r):r instanceof St?function(e){const n=e.getFilters().map(i=>ba(i));return n.length===1?n[0]:{compositeFilter:{op:Uc(e.op),filters:n}}}(r):O()}function qc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ka(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,n,i,o=F.min(),u=F.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.ht=t}}function jc(r){const t=Mc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?os(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.ln=new $c}addToCollectionParentIndex(t,e){return this.ln.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Xt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class $c{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rt(X.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Se(0)}static Qn(){return new Se(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io([r,t],[e,n]){const i=B(r,e);return i===0?B(t,n):i}class Gc{constructor(t){this.Gn=t,this.buffer=new rt(Io),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Io(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){k("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ne(e)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await xe(e)}await this.Yn(3e5)})}}class Qc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return V.resolve(hr.oe);const n=new Gc(e);return this.Zn.forEachTarget(t,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(To)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),To):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,i,o,u,c,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,u=Date.now(),this.nthSequenceNumber(t,i))).next(E=>(n=E,c=Date.now(),this.removeTargets(t,n,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(E=>(f=Date.now(),Ee()<=Ot.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:E})))}}function Wc(r,t){return new Qc(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&ln(n.mutation,i,Ct.empty(),nt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=oe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=nn();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=qt();const u=un(),c=function(){return un()}();return e.forEach((h,f)=>{const p=n.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof fe)?o=o.insert(f.key,f):p!==void 0?(u.set(f.key,p.mutation.getFieldMask()),ln(p.mutation,f,p.mutation.getFieldMask(),nt.now())):u.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>u.set(f,p)),e.forEach((f,p)=>{var E;return c.set(f,new Xc(p,(E=u.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const n=un();let i=new Y((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=n.get(h)||Ct.empty();p=c.applyToLocalView(f,p),n.set(h,p);const E=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,E)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,E=fa();p.forEach(I=>{if(!o.has(I)){const P=va(e.get(I),n.get(I));P!==null&&E.set(I,P),o=o.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,E))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return L.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ua(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(oe());let c=-1,h=o;return u.next(f=>V.forEach(f,(p,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(p)?V.resolve():this.remoteDocumentCache.getEntry(t,p).next(I=>{h=h.insert(p,I)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(p=>({batchId:c,changes:da(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(n=>{let i=nn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=nn();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(E,I){return new Me(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(p=>{p.forEach((E,I)=>{u=u.insert(E,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const p=f.getKey();u.get(p)===null&&(u=u.insert(p,yt.newInvalidDocument(p)))});let c=nn();return u.forEach((h,f)=>{const p=o.get(h);p!==void 0&&ln(p.mutation,f,Ct.empty(),nt.now()),pr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return V.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:jc(i.bundledQuery),readTime:kt(i.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.overlays=new Y(L.comparator),this.Er=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Tt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=oe(),o=e.length+1,u=new L(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((f,p)=>f-p);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let p=o.get(f.largestBatchId);p===null&&(p=oe(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=oe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return V.resolve(c)}Tt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new yc(e,n));let o=this.Er.get(e);o===void 0&&(o=q(),this.Er.set(e,o)),this.Er.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.dr=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new it(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new it(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new L(new X([])),n=new it(e,t),i=new it(e,t+1),o=[];return this.Rr.forEachInRange([n,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new L(new X([])),n=new it(e,t),i=new it(e,t+1);let o=q();return this.Rr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return L.comparator(t.key,e.key)||B(t.br,e.br)}static Vr(t,e){return B(t.br,e.br)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new _c(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Fr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([n,i],u=>{const c=this.Cr(u.br);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(B);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{n=n.add(c.br)})}),V.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;L.isDocumentKey(o)||(o=o.child(""));const u=new it(new L(o),0);let c=new rt(B);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.br)),!0)},u),V.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(n=>{const i=this.Cr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return V.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new it(e,0),i=this.vr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.Nr=t,this.docs=function(){return new Y(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=qt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=qt();const u=e.path,c=new L(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||xl(Dl(p),n)<=0||(i.has(p.key)||pr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O()}Lr(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new rh(this)}getSize(t){return V.resolve(this.size)}}class rh extends Hc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t){this.persistence=t,this.Br=new de(e=>ys(e),vs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new Rs,this.targetCount=0,this.Qr=Se.qn()}forEachTarget(t,e){return this.Br.forEach((n,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),V.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Un(e),V.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.Kr={},this.overlays={},this.$r=new hr(0),this.Ur=!1,this.Ur=!0,this.Wr=new th,this.referenceDelegate=t(this),this.Gr=new sh(this),this.indexManager=new zc,this.remoteDocumentCache=function(i){return new nh(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Bc(e),this.jr=new Jc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Zc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new eh(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new ih(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return V.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class ih extends Ml{constructor(t){super(),this.currentSequenceNumber=t}}class Ps{constructor(t){this.persistence=t,this.Zr=new Rs,this.Xr=null}static ei(t){return new Ps(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),V.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,n=>{const i=L.fromPath(n);return this.ni(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return V.or([()=>V.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class or{constructor(t,e){this.persistence=t,this.ri=new de(n=>Fl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Wc(this,e)}static ei(t,e){return new or(t,e)}Hr(){}Jr(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return V.forEach(this.ri,(n,i)=>this.ir(t,n,i).next(o=>o?V.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(n++,o.removeEntry(u,F.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Xn(t.data.value)),e}ir(t,e,n){return V.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return V.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=i}static zi(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return sl()?8:Ll(il())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new oh;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,n,i){return n.documentReadCount<this.Ji?(Ee()<=Ot.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Te(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(Ee()<=Ot.DEBUG&&k("QueryEngine","Query:",Te(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(Ee()<=Ot.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Te(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):V.resolve())}Xi(t,e){if(co(e))return V.resolve(null);let n=bt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=os(e,null,"F"),n=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.rs(e,c);return this.ss(e,f,u,h.readTime)?this.Xi(t,os(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,n,i){return co(e)||i.isEqual(F.min())?V.resolve(null):this.Zi.getDocuments(t,n).next(o=>{const u=this.rs(e,o);return this.ss(e,u,n,i)?V.resolve(null):(Ee()<=Ot.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Te(e)),this.os(t,u,e,kl(i,-1)).next(c=>c))})}rs(t,e){let n=new rt(ca(t));return e.forEach((i,o)=>{pr(t,o)&&(n=n.add(o))}),n}ss(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,n){return Ee()<=Ot.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Te(e)),this.Zi.getDocumentsMatchingQuery(t,e,Xt.min(),n)}os(t,e,n,i){return this.Zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,n,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new Y(B),this.cs=new de(o=>ys(o),vs),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function lh(r,t,e,n){return new uh(r,t,e,n)}async function xa(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const f of i){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:c}))})})}function ch(r,t){const e=U(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const E=f.batch,I=E.keys();let P=V.resolve();return I.forEach(D=>{P=P.next(()=>p.getEntry(h,D)).next(M=>{const b=f.docVersions.get(D);G(b!==null),M.version.compareTo(b)<0&&(E.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),p.addEntry(M)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Na(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function hh(r,t){const e=U(r),n=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((p,E)=>{const I=i.get(E);if(!I)return;c.push(e.Gr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.Gr.addMatchingKeys(o,p.addedDocuments,E)));let P=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?P=P.withResumeToken(ct.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,n)),i=i.insert(E,P),function(M,b,$){return M.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(I,P,p)&&c.push(e.Gr.updateTargetData(o,P))});let h=qt(),f=q();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(dh(o,u,t.documentUpdates).next(p=>{h=p.Is,f=p.Es})),!n.isEqual(F.min())){const p=e.Gr.getLastRemoteSnapshotVersion(o).next(E=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=i,o))}function dh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=qt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:u,Es:i}})}function fh(r,t){const e=U(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function mh(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Gr.getTargetData(n,t).next(o=>o?(i=o,V.resolve(i)):e.Gr.allocateTargetId(n).next(u=>(i=new Wt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function hs(r,t,e){const n=U(r),i=n.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ne(u))throw u;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.us=n.us.remove(t),n.cs.delete(i.target)}function Ao(r,t,e){const n=U(r);let i=F.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,p){const E=U(h),I=E.cs.get(p);return I!==void 0?V.resolve(E.us.get(I)):E.Gr.getTargetData(f,p)}(n,u,bt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n._s.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:q())).next(c=>(ph(n,nc(t),c),{documents:c,ds:o})))}function ph(r,t,e){let n=r.ls.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ls.set(t,n)}class wo{constructor(){this.activeTargetIds=uc()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gh{constructor(){this._o=new wo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new wo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=null;function Hr(){return Wn===null?Wn=function(){return 268435456+Math.round(2147483648*Math.random())}():Wn++,"0x"+Wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Eh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,n,i,o,u){const c=Hr(),h=this.No(e,n.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,u),this.Bo(e,h,f,i).then(p=>(k("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Re("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}ko(e,n,i,o,u,c){return this.Oo(e,n,i,o,u)}Lo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,n){const i=yh[e];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,i){const o=Hr();return new Promise((u,c)=>{const h=new Ko;h.setWithCredentials(!0),h.listenOnce(Qo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Hn.NO_ERROR:const p=h.getResponseJson();k(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),u(p);break;case Hn.TIMEOUT:k(pt,`RPC '${t}' ${o} timed out`),c(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:const E=h.getStatus();if(k(pt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const D=function(b){const $=b.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN}(P.status);c(new x(D,P.message))}else c(new x(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);k(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}qo(t,e,n){const i=Hr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Xo(),c=Ho(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");k(pt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const E=u.createWebChannel(p,h);let I=!1,P=!1;const D=new vh({Eo:b=>{P?k(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(I||(k(pt,`Opening RPC '${t}' stream ${i} transport.`),E.open(),I=!0),k(pt,`RPC '${t}' stream ${i} sending:`,b),E.send(b))},Ao:()=>E.close()}),M=(b,$,K)=>{b.listen($,Q=>{try{K(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return M(E,en.EventType.OPEN,()=>{P||(k(pt,`RPC '${t}' stream ${i} transport opened.`),D.So())}),M(E,en.EventType.CLOSE,()=>{P||(P=!0,k(pt,`RPC '${t}' stream ${i} transport closed`),D.Do())}),M(E,en.EventType.ERROR,b=>{P||(P=!0,Re(pt,`RPC '${t}' stream ${i} transport errored:`,b),D.Do(new x(C.UNAVAILABLE,"The operation could not be completed")))}),M(E,en.EventType.MESSAGE,b=>{var $;if(!P){const K=b.data[0];G(!!K);const Q=K,st=(Q==null?void 0:Q.error)||(($=Q[0])===null||$===void 0?void 0:$.error);if(st){k(pt,`RPC '${t}' stream ${i} received error:`,st);const xt=st.status;let ot=function(_){const y=tt[_];if(y!==void 0)return Ia(y)}(xt),T=st.message;ot===void 0&&(ot=C.INTERNAL,T="Unknown error status: "+xt+" with message "+st.message),P=!0,D.Do(new x(ot,T)),E.close()}else k(pt,`RPC '${t}' stream ${i} received:`,K),D.vo(K)}}),M(c,Wo.STAT_EVENT,b=>{b.stat===ts.PROXY?k(pt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ts.NOPROXY&&k(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function Xr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(r){return new Vc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,n=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e,n,i,o,u,c,h){this.li=t,this.Yo=n,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ma(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ut(e.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===e&&this.I_(n,i)},n=>{t(()=>{const i=new x(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Th extends La{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=bc(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?kt(u.readTime):F.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=cs(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=ss(h)?{documents:xc(o,h)}:{query:Nc(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Ra(o,u.resumeToken);const f=as(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=ir(o,u.snapshotVersion.toTimestamp());const f=as(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Lc(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=cs(this.serializer),e.removeTarget=t,this.c_(e)}}class Ih extends La{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Dc(t.writeResults,t.commitTime),n=kt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=cs(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>kc(this.serializer,n))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,us(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}ko(t,e,n,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,us(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(C.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class wh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ut(e),this.C_=!1):k("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{n.enqueueAndForget(async()=>{me(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=U(h);f.k_.add(4),await Tn(f),f.K_.set("Unknown"),f.k_.delete(4),await Er(f)}(this))})}),this.K_=new wh(n,i)}}async function Er(r){if(me(r))for(const t of r.q_)await t(!0)}async function Tn(r){for(const t of r.q_)await t(!1)}function Oa(r,t){const e=U(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),ks(e)?bs(e):Le(e).s_()&&Ss(e,t))}function Cs(r,t){const e=U(r),n=Le(e);e.B_.delete(t),n.s_()&&Fa(e,t),e.B_.size===0&&(n.s_()?n.a_():me(e)&&e.K_.set("Unknown"))}function Ss(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Le(r).V_(t)}function Fa(r,t){r.U_.xe(t),Le(r).m_(t)}function bs(r){r.U_=new Ac({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),Le(r).start(),r.K_.F_()}function ks(r){return me(r)&&!Le(r).i_()&&r.B_.size>0}function me(r){return U(r).k_.size===0}function Ua(r){r.U_=void 0}async function Ph(r){r.K_.set("Online")}async function Vh(r){r.B_.forEach((t,e)=>{Ss(r,t)})}async function Ch(r,t){Ua(r),ks(r)?(r.K_.O_(t),bs(r)):r.K_.set("Unknown")}async function Sh(r,t,e){if(r.K_.set("Online"),t instanceof wa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.B_.delete(c),i.U_.removeTarget(c))}(r,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ar(r,n)}else if(t instanceof Zn?r.U_.$e(t):t instanceof Aa?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(F.min()))try{const n=await Na(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.B_.get(f);p&&o.B_.set(f,p.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const p=o.B_.get(h);if(!p)return;o.B_.set(h,p.withResumeToken(ct.EMPTY_BYTE_STRING,p.snapshotVersion)),Fa(o,h);const E=new Wt(p.target,h,f,p.sequenceNumber);Ss(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await ar(r,n)}}async function ar(r,t,e){if(!Ne(t))throw t;r.k_.add(1),await Tn(r),r.K_.set("Offline"),e||(e=()=>Na(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await Er(r)})}function qa(r,t){return t().catch(e=>ar(r,e,t))}async function Tr(r){const t=U(r),e=te(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;bh(t);)try{const i=await fh(t.localStore,n);if(i===null){t.L_.length===0&&e.a_();break}n=i.batchId,kh(t,i)}catch(i){await ar(t,i)}Ba(t)&&ja(t)}function bh(r){return me(r)&&r.L_.length<10}function kh(r,t){r.L_.push(t);const e=te(r);e.s_()&&e.f_&&e.g_(t.mutations)}function Ba(r){return me(r)&&!te(r).i_()&&r.L_.length>0}function ja(r){te(r).start()}async function Dh(r){te(r).w_()}async function xh(r){const t=te(r);for(const e of r.L_)t.g_(e.mutations)}async function Nh(r,t,e){const n=r.L_.shift(),i=Is.from(n,t,e);await qa(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Tr(r)}async function Mh(r,t){t&&te(r).f_&&await async function(n,i){if(function(u){return Ec(u)&&u!==C.ABORTED}(i.code)){const o=n.L_.shift();te(n).__(),await qa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Tr(n)}}(r,t),Ba(r)&&ja(r)}async function Po(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=me(e);e.k_.add(3),await Tn(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Er(e)}async function Lh(r,t){const e=U(r);t?(e.k_.delete(2),await Er(e)):t||(e.k_.add(2),await Tn(e),e.K_.set("Unknown"))}function Le(r){return r.W_||(r.W_=function(e,n,i){const o=U(e);return o.b_(),new Th(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:Ph.bind(null,r),mo:Vh.bind(null,r),po:Ch.bind(null,r),R_:Sh.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),ks(r)?bs(r):r.K_.set("Unknown")):(await r.W_.stop(),Ua(r))})),r.W_}function te(r){return r.G_||(r.G_=function(e,n,i){const o=U(e);return o.b_(),new Ih(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Dh.bind(null,r),po:Mh.bind(null,r),p_:xh.bind(null,r),y_:Nh.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await Tr(r)):(await r.G_.stop(),r.L_.length>0&&(k("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Ds(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xs(r,t){if(Ut("AsyncQueue",`${t}: ${r}`),Ne(r))return new x(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static emptySet(t){return new we(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||L.comparator(e.key,n.key):(e,n)=>L.comparator(e.key,n.key),this.keyedMap=nn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new we;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.z_=new Y(L.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class be{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new be(t,e,we.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Fh{constructor(){this.queries=Co(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const i=U(e),o=i.queries;i.queries=Co(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(n)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Co(){return new de(r=>la(r),mr)}async function Uh(r,t){const e=U(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(n=2):(o=new Oh,n=t.Z_()?0:1);try{switch(n){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=xs(u,`Initialization of query '${Te(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&Ns(e)}async function qh(r,t){const e=U(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Bh(r,t){const e=U(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(i)&&(n=!0);u.H_=i}}n&&Ns(e)}function jh(r,t,e){const n=U(r),i=n.queries.get(t);if(i)for(const o of i.J_)o.onError(e);n.queries.delete(t)}function Ns(r){r.X_.forEach(t=>{t.next()})}var ds,So;(So=ds||(ds={})).na="default",So.Cache="cache";class zh{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new be(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==ds.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.key=t}}class $a{constructor(t){this.key=t}}class $h{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=q(),this.mutatedKeys=q(),this.Va=ca(t),this.ma=new we(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Vo,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,E)=>{const I=i.get(p),P=pr(this.query,E)?E:null,D=!!I&&this.mutatedKeys.has(I.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;I&&P?I.data.isEqual(P.data)?D!==M&&(n.track({type:3,doc:P}),b=!0):this.ya(I,P)||(n.track({type:2,doc:P}),b=!0,(h&&this.Va(P,h)>0||f&&this.Va(P,f)<0)&&(c=!0)):!I&&P?(n.track({type:0,doc:P}),b=!0):I&&!P&&(n.track({type:1,doc:I}),b=!0,(h||f)&&(c=!0)),b&&(P?(u=u.add(P),o=M?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{ma:u,pa:n,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((p,E)=>function(P,D){const M=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return M(P)-M(D)}(p.type,E.type)||this.Va(p.doc,E.doc)),this.wa(n),i=i!=null&&i;const c=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,f=h!==this.Aa;return this.Aa=h,u.length!==0||f?{snapshot:new be(this.query,t.ma,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Vo,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=q(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new $a(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new za(n))}),e}va(t){this.da=t.ds,this.Ra=q();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return be.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Gh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Kh{constructor(t){this.key=t,this.Fa=!1}}class Qh{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new de(c=>la(c),mr),this.Oa=new Map,this.Na=new Set,this.La=new Y(L.comparator),this.Ba=new Map,this.ka=new Rs,this.qa={},this.Qa=new Map,this.Ka=Se.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Wh(r,t,e=!0){const n=Xa(r);let i;const o=n.xa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await Ga(n,t,e,!0),i}async function Hh(r,t){const e=Xa(r);await Ga(e,t,!0,!1)}async function Ga(r,t,e,n){const i=await mh(r.localStore,bt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Xh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Oa(r.remoteStore,i),c}async function Xh(r,t,e,n,i){r.Ua=(E,I,P)=>async function(M,b,$,K){let Q=b.view.ga($);Q.ss&&(Q=await Ao(M.localStore,b.query,!1).then(({documents:T})=>b.view.ga(T,Q)));const st=K&&K.targetChanges.get(b.targetId),xt=K&&K.targetMismatches.get(b.targetId)!=null,ot=b.view.applyChanges(Q,M.isPrimaryClient,st,xt);return ko(M,b.targetId,ot.ba),ot.snapshot}(r,E,I,P);const o=await Ao(r.localStore,t,!0),u=new $h(t,o.ds),c=u.ga(o.documents),h=En.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);ko(r,e,f.ba);const p=new Gh(t,e,u);return r.xa.set(t,p),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),f.snapshot}async function Yh(r,t,e){const n=U(r),i=n.xa.get(t),o=n.Oa.get(i.targetId);if(o.length>1)return n.Oa.set(i.targetId,o.filter(u=>!mr(u,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await hs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Cs(n.remoteStore,i.targetId),fs(n,i.targetId)}).catch(xe)):(fs(n,i.targetId),await hs(n.localStore,i.targetId,!0))}async function Jh(r,t){const e=U(r),n=e.xa.get(t),i=e.Oa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Cs(e.remoteStore,n.targetId))}async function Zh(r,t,e){const n=od(r);try{const i=await function(u,c){const h=U(u),f=nt.now(),p=c.reduce((P,D)=>P.add(D.key),q());let E,I;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=qt(),M=q();return h.hs.getEntries(P,p).next(b=>{D=b,D.forEach(($,K)=>{K.isValidDocument()||(M=M.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(b=>{E=b;const $=[];for(const K of c){const Q=pc(K,E.get(K.key).overlayedDocument);Q!=null&&$.push(new fe(K.key,Q,ea(Q.value.mapValue),Ft.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,$,c)}).next(b=>{I=b;const $=b.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(P,b.batchId,$)})}).then(()=>({batchId:I.batchId,changes:da(E)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.qa[u.currentUser.toKey()];f||(f=new Y(B)),f=f.insert(c,h),u.qa[u.currentUser.toKey()]=f}(n,i.batchId,e),await In(n,i.changes),await Tr(n.remoteStore)}catch(i){const o=xs(i,"Failed to persist write");e.reject(o)}}async function Ka(r,t){const e=U(r);try{const n=await hh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ba.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?G(u.Fa):i.removedDocuments.size>0&&(G(u.Fa),u.Fa=!1))}),await In(e,n,t)}catch(n){await xe(n)}}function bo(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=U(u);h.onlineState=c;let f=!1;h.queries.forEach((p,E)=>{for(const I of E.J_)I.ea(c)&&(f=!0)}),f&&Ns(h)}(n.eventManager,t),i.length&&n.Ma.R_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function td(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ba.get(t),o=i&&i.key;if(o){let u=new Y(L.comparator);u=u.insert(o,yt.newNoDocument(o,F.min()));const c=q().add(o),h=new yr(F.min(),new Map,new Y(B),u,c);await Ka(n,h),n.La=n.La.remove(o),n.Ba.delete(t),Ms(n)}else await hs(n.localStore,t,!1).then(()=>fs(n,t,e)).catch(xe)}async function ed(r,t){const e=U(r),n=t.batch.batchId;try{const i=await ch(e.localStore,t);Wa(e,n,null),Qa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await In(e,i)}catch(i){await xe(i)}}async function nd(r,t,e){const n=U(r);try{const i=await function(u,c){const h=U(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(E=>(G(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(n.localStore,t);Wa(n,t,e),Qa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await In(n,i)}catch(i){await xe(i)}}function Qa(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function Wa(r,t,e){const n=U(r);let i=n.qa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.qa[n.currentUser.toKey()]=i}}function fs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||Ha(r,n)})}function Ha(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(Cs(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),Ms(r))}function ko(r,t,e){for(const n of e)n instanceof za?(r.ka.addReference(n.key,t),rd(r,n)):n instanceof $a?(k("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||Ha(r,n.key)):O()}function rd(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(k("SyncEngine","New document in limbo: "+e),r.Na.add(n),Ms(r))}function Ms(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new L(X.fromString(t)),n=r.Ka.next();r.Ba.set(n,new Kh(e)),r.La=r.La.insert(e,n),Oa(r.remoteStore,new Wt(bt(Es(e.path)),n,"TargetPurposeLimboResolution",hr.oe))}}async function In(r,t,e){const n=U(r),i=[],o=[],u=[];n.xa.isEmpty()||(n.xa.forEach((c,h)=>{u.push(n.Ua(h,t,e).then(f=>{var p;if((f||e)&&n.isPrimaryClient){const E=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){i.push(f);const E=Vs.zi(h.targetId,f);o.push(E)}}))}),await Promise.all(u),n.Ma.R_(i),await async function(h,f){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>V.forEach(f,I=>V.forEach(I.Wi,P=>p.persistence.referenceDelegate.addReference(E,I.targetId,P)).next(()=>V.forEach(I.Gi,P=>p.persistence.referenceDelegate.removeReference(E,I.targetId,P)))))}catch(E){if(!Ne(E))throw E;k("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const I=E.targetId;if(!E.fromCache){const P=p.us.get(I),D=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(D);p.us=p.us.insert(I,M)}}}(n.localStore,o))}async function sd(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const n=await xa(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new x(C.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await In(e,n.Ts)}}function id(r,t){const e=U(r),n=e.Ba.get(t);if(n&&n.Fa)return q().add(n.key);{let i=q();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const c=e.xa.get(u);i=i.unionWith(c.view.fa)}return i}}function Xa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ka.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=id.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=td.bind(null,t),t.Ma.R_=Bh.bind(null,t.eventManager),t.Ma.Wa=jh.bind(null,t.eventManager),t}function od(r){const t=U(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ed.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nd.bind(null,t),t}class ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return lh(this.persistence,new ah,t.initialUser,this.serializer)}ja(t){return new Da(Ps.ei,this.serializer)}za(t){return new gh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ur.provider={build:()=>new ur};class ad extends ur{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){G(this.persistence.referenceDelegate instanceof or);const n=this.persistence.referenceDelegate.garbageCollector;return new Kc(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Da(n=>or.ei(n,e),this.serializer)}}class ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>bo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=sd.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Fh}()}createDatastore(t){const e=vr(t.databaseInfo.databaseId),n=function(o){return new Eh(o)}(t.databaseInfo);return function(o,u,c,h){return new Ah(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Rh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>bo(this.syncEngine,e,0),function(){return Ro.p()?new Ro:new _h}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,p){const E=new Qh(i,o,u,c,h,f);return p&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=U(i);k("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Tn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ms.provider={build:()=>new ms};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ut("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{k("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(k("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=xs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Yr(r,t){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await xa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Do(r,t){r.asyncQueue.verifyOperationInProgress();const e=await cd(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Po(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Po(t.remoteStore,i)),r._onlineComponents=t}async function cd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await Yr(r,new ur)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Yr(r,new ad(void 0));return r._offlineComponents}async function Ya(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Do(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Do(r,new ms))),r._onlineComponents}function hd(r){return Ya(r).then(t=>t.syncEngine)}async function xo(r){const t=await Ya(r),e=t.eventManager;return e.onListen=Wh.bind(null,t.syncEngine),e.onUnlisten=Yh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Hh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jh.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function dd(r,t,e,n){if(t===!0&&n===!0)throw new x(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Mo(r){if(!L.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lo(r){if(L.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ir(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function cn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ir(r);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ja((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ar{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Il;switch(n.type){case"firstParty":return new Pl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=No.get(e);n&&(k("ComponentProvider","Removing Datastore"),No.delete(e),n.terminate())}(this),Promise.resolve()}}function fd(r,t,e,n={}){var i;const o=(r=cn(r,Ar))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=_t.MOCK_USER;else{c=rl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}r._authCredentials=new Al(new Yo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pe(this.firestore,t,this._query)}}class wt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Ht extends pe{constructor(t,e,n){super(t,e,Es(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new L(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function Fo(r,t,...e){if(r=le(r),Za("collection","path",t),r instanceof Ar){const n=X.fromString(t,...e);return Lo(n),new Ht(r,null,n)}{if(!(r instanceof wt||r instanceof Ht))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Lo(n),new Ht(r.firestore,null,n)}}function md(r,t,...e){if(r=le(r),arguments.length===1&&(t=Jo.newId()),Za("doc","path",t),r instanceof Ar){const n=X.fromString(t,...e);return Mo(n),new wt(r,null,new L(n))}{if(!(r instanceof wt||r instanceof Ht))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Mo(n),new wt(r.firestore,r instanceof Ht?r.converter:null,new L(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ma(this,"async_queue_retry"),this.fu=()=>{const n=Xr();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=Xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new ue;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Ne(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ut("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,n,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function qo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class lr extends Ar{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Uo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uo(t),this._firestoreClient=void 0,await t}}}function pd(r,t){const e=Zu(),n="(default)",i=tl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=el("firestore");o&&fd(i,...o)}return i}function tu(r){if(r._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gd(r),r._firestoreClient}function gd(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,p){return new Bl(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ja(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ld(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(ct.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ke(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=/^__.*__$/;class yd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}}function nu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Us{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Us(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Lu(t),i}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return cr(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(nu(this.Mu)&&_d.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class vd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||vr(t)}$u(t,e,n,i=!1){return new Us({Mu:t,methodName:e,Ku:n,path:lt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ru(r){const t=r._freezeSettings(),e=vr(r._databaseId);return new vd(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Ed(r,t,e,n,i,o={}){const u=r.$u(o.merge||o.mergeFields?2:0,t,e,i);ou("Data must be an object, but it was:",u,n);const c=su(n,u);let h,f;if(o.merge)h=new Ct(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const I=Id(t,E,e);if(!u.contains(I))throw new x(C.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);wd(p,I)||p.push(I)}h=new Ct(p),f=u.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=u.fieldTransforms;return new yd(new Rt(c),h,f)}function Td(r,t,e,n=!1){return qs(e,r.$u(n?4:3,t))}function qs(r,t){if(iu(r=le(r)))return ou("Unsupported field value:",t,r),su(r,t);if(r instanceof eu)return function(n,i){if(!nu(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=qs(c,i.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:ir(i.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(i.serializer,o)}}if(n instanceof Os)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ke)return{bytesValue:Ra(i.serializer,n._byteString)};if(n instanceof wt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ws(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Fs)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Ts(c.serializer,h)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${Ir(n)}`)}(r,t)}function su(r,t){const e={};return Zo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(r,(n,i)=>{const o=qs(i,t.Ou(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function iu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Os||r instanceof ke||r instanceof wt||r instanceof eu||r instanceof Fs)}function ou(r,t,e){if(!iu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ir(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function Id(r,t,e){if((t=le(t))instanceof Ls)return t._internalPath;if(typeof t=="string")return au(r,t);throw cr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Ad=new RegExp("[~\\*/\\[\\]]");function au(r,t,e){if(t.search(Ad)>=0)throw cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ls(...t.split("."))._internalPath}catch{throw cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function cr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new x(C.INVALID_ARGUMENT,c+r+h)}function wd(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rd extends uu{data(){return super.data()}}function Bs(r,t){return typeof t=="string"?au(r,t):t instanceof Ls?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class js{}class lu extends js{}function Vd(r,t,...e){let n=[];t instanceof js&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof $s).length,c=o.filter(h=>h instanceof zs).length;if(u>1||u>0&&c>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class zs extends lu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new zs(t,e,n)}_apply(t){const e=this._parse(t);return cu(t._query,e),new pe(t.firestore,t.converter,is(t._query,e))}_parse(t){const e=ru(t.firestore);return function(o,u,c,h,f,p,E){let I;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){jo(E,p);const P=[];for(const D of E)P.push(Bo(h,o,D));I={arrayValue:{values:P}}}else I=Bo(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||jo(E,p),I=Td(c,u,E,p==="in"||p==="not-in");return et.create(f,p,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class $s extends js{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new $s(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:St.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)cu(u,h),u=is(u,h)}(t._query,e),new pe(t.firestore,t.converter,is(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gs extends lu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Gs(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gn(o,u)}(t._query,this._field,this._direction);return new pe(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new Me(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Cd(r,t="asc"){const e=t,n=Bs("orderBy",r);return Gs._create(n,e)}function Bo(r,t,e){if(typeof(e=le(e))=="string"){if(e==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ua(t)&&e.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(X.fromString(e));if(!L.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return so(r,new L(n))}if(e instanceof wt)return so(r,e._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ir(e)}.`)}function jo(r,t){if(!Array.isArray(r)||r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function cu(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Sd{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return he(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>Z(u.doubleValue));return new Fs(o)}convertGeoPoint(t){return new Os(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=fr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);G(ka(n));const i=new mn(n.get(1),n.get(3)),o=new L(n.popFirst(5));return i.isEqual(e)||Ut(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hu extends uu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Bs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tr extends hu{data(t={}){return super.data(t)}}class kd{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new sn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new tr(this._firestore,this._userDataWriter,n.key,n,new sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new tr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new sn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new tr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new sn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),p=u.indexOf(c.doc.key)),{type:Dd(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Dd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class du extends Sd{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function xd(r,t){const e=cn(r.firestore,lr),n=md(r),i=bd(r.converter,t);return Md(e,[Ed(ru(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ft.exists(!1))]).then(()=>n)}function Nd(r,...t){var e,n,i;r=le(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||qo(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(qo(t[u])){const E=t[u];t[u]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[u+1]=(n=E.error)===null||n===void 0?void 0:n.bind(E),t[u+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,f,p;if(r instanceof wt)f=cn(r.firestore,lr),p=Es(r._key.path),h={next:E=>{t[u]&&t[u](Ld(f,r,E))},error:t[u+1],complete:t[u+2]};else{const E=cn(r,pe);f=cn(E.firestore,lr),p=E._query;const I=new du(f);h={next:P=>{t[u]&&t[u](new kd(f,I,E,P))},error:t[u+1],complete:t[u+2]},Pd(r._query)}return function(I,P,D,M){const b=new ud(M),$=new zh(P,b,D);return I.asyncQueue.enqueueAndForget(async()=>Uh(await xo(I),$)),()=>{b.eu(),I.asyncQueue.enqueueAndForget(async()=>qh(await xo(I),$))}}(tu(f),p,c,h)}function Md(r,t){return function(n,i){const o=new ue;return n.asyncQueue.enqueueAndForget(async()=>Zh(await hd(n),i,o)),o.promise}(tu(r),t)}function Ld(r,t,e){const n=e.docs.get(t._key),i=new du(r);return new hu(r,i,t._key,n,new sn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){De=i})(nl),Xu(new Yu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new lr(new wl(n.getProvider("auth-internal")),new Cl(n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(f.options.projectId,p)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ki(Ji,"4.7.5",t),Ki(Ji,"4.7.5","esm2017")})();const Od={class:"overflow-hidden"},Fd={class:"flex overflow-hidden"},Ud={class:"w-1/2 space-y-4 overflow-auto animate-fade-left md:h-[700px] border-r-4 border-sky-600"},qd={class:"w-1/2 space-y-4 bg-slate-50 animate-fade-left animate-delay-200 md:h-[700px] overflow-auto border-l-2 border-red-500"},Bd={class:"py-5 bg-gray-50"},jd={class:"mb-4"},zd={class:"flex items-center mt-2 space-x-4"},$d={for:"owner",class:"flex items-center font-semibold cursor-pointer text-sky-800"},Gd={for:"helper",class:"flex items-center font-semibold cursor-pointer text-rose-600"},Kd={class:"mb-4"},Qd={class:"mb-4"},Wd={class:"flex items-center mb-4 space-x-1"},Hd={class:"flex items-center"},tf=zo({__name:"HistoriesView",setup(r){const t=Qt("dueño"),e=Qt(""),n=Qt(""),i=Qt(3),o=E=>{i.value=E},u=pd(),c=async()=>{if(e.value===""||n.value===""){zn.error("Por favor, complete todos los campos",{autoClose:2e3,theme:"dark"});return}try{const E=await xd(Fo(u,"commentsBoss"),{comment:n.value,date:nt.now(),name:Hi().getUserName,rating:i.value,title:e.value,role:t.value,uid:Hi().getUserUid});zn.info("Comentario enviado con exito",{autoClose:2e3,theme:"dark"}),e.value="",n.value="",i.value=1,console.log("Comentario añadido con ID: ",E.id)}catch(E){console.error("Error añadiendo comentario: ",E),zn.error(`Error al intentar agregar el comentario ${E}`,{autoClose:5e3,theme:"dark"})}},h=Qt([]);function f(){const E=Qt([]),I=Vd(Fo(u,"commentsBoss"),Cd("date","desc"));Nd(I,P=>{E.value=[],P.forEach(D=>{E.value.push({id:D.id,...D.data()})}),h.value=E.value,console.log("Comentarios actualizados:",E.value)},P=>{console.error("Error escuchando los comentarios:",P),zn.error(`Error al recibir los comentarios ${P}`,{autoClose:5e3,theme:"dark"})})}const p=E=>{t.value=E};return ol(()=>{f()}),(E,I)=>(gt(),Vt(ul,null,{main:al(()=>[N("article",Od,[N("section",Fd,[N("article",Ud,[I[12]||(I[12]=N("h2",{class:"sticky top-0 z-40 py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md bg-opacity-85 min-h-20 text-sky-800 font-poppins"},[N("i",{class:"mr-2 fas fa-comment"}),ie(" Comentarios de Dueños del Hogar "),N("i",{class:"mr-2 fas fa-home"})],-1)),N("div",{onClick:I[0]||(I[0]=P=>p("dueño")),class:"flex justify-center w-full animate-shake animate-delay-500"},I[11]||(I[11]=[N("a",{href:"#comentar",class:"px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"}," Comentar como dueño ",-1)])),(gt(!0),hn(Jr,null,Zr(h.value.filter(P=>P.role==="dueño"),P=>(gt(),Vt(Xi,{title:P.title,key:P.name,name:P.name,date:P.date,comment:P.comment,stars:P.rating,role:P.role},null,8,["title","name","date","comment","stars","role"]))),128)),h.value.length<1?(gt(),Vt(Kt,{key:0})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:1})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:2})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:3})):Gt("",!0)]),N("article",qd,[I[14]||(I[14]=N("h2",{class:"sticky top-0 z-40 py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md bg-opacity-85 min-h-20 text-rose-800 font-poppins"},[N("i",{class:"mr-2 fas fa-female"}),ie(" Comentarios de Asesoras del Hogar "),N("i",{class:"ml-2 fas fa-comment-dots"})],-1)),N("div",{onClick:I[1]||(I[1]=P=>p("asesora")),class:"flex justify-center w-full animate-shake animate-delay-500"},I[13]||(I[13]=[N("a",{href:"#comentar",class:"px-6 py-2 mt-5 text-sm font-semibold text-white rounded-md bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"}," Comentar como asesora de hogar ",-1)])),(gt(!0),hn(Jr,null,Zr(h.value.filter(P=>P.role==="asesora"),P=>(gt(),Vt(Xi,{title:P.title,key:P.name,name:P.name,date:P.date,comment:P.comment,stars:P.rating,role:P.role},null,8,["title","name","date","comment","stars","role"]))),128)),h.value.length<1?(gt(),Vt(Kt,{key:0})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:1})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:2})):Gt("",!0),h.value.length<1?(gt(),Vt(Kt,{key:3})):Gt("",!0)])]),N("section",Bd,[I[24]||(I[24]=N("div",{class:"py-8",id:"comentar"},null,-1)),N("section",{class:Tt(["w-11/12 p-6 mx-auto transition-colors duration-1000 ease-out bg-white border-4 rounded-lg shadow-lg font-poppins",t.value==="dueño"?"border-sky-600":"border-rose-600"])},[N("h2",{class:Tt(["mb-4 text-3xl font-semibold text-center",t.value==="dueño"?"text-sky-800":"text-rose-800"])},"Compartir historia",2),N("div",jd,[I[19]||(I[19]=N("label",{class:"text-sm font-semibold text-gray-600"},"Comentar como:",-1)),N("div",zd,[N("label",$d,[I[15]||(I[15]=N("i",{class:"mr-2 fas fa-user-tie text-sky-900"},null,-1)),jn(N("input",{type:"radio",id:"owner","onUpdate:modelValue":I[2]||(I[2]=P=>t.value=P),value:"dueño",class:"mr-2"},null,512),[[Qi,t.value]]),I[16]||(I[16]=ie(" Dueño "))]),N("label",Gd,[I[17]||(I[17]=N("i",{class:"mr-2 fas fa-female text-rose-600"},null,-1)),jn(N("input",{type:"radio",id:"helper","onUpdate:modelValue":I[3]||(I[3]=P=>t.value=P),value:"asesora",class:"mr-2"},null,512),[[Qi,t.value]]),I[18]||(I[18]=ie(" Asesora del hogar "))])])]),N("div",Kd,[I[20]||(I[20]=N("h3",{class:"py-2 text-sm italic font-medium text-gray-600"},"Se usará automáticamente el nombre de usuario con el que se registró",-1)),N("label",{for:"comment",class:Tt(["block text-sm font-medium",t.value==="dueño"?"text-sky-800":"text-rose-800"])},"Título de la Historia",2),jn(N("input",{type:"text",id:"comment","onUpdate:modelValue":I[4]||(I[4]=P=>e.value=P),placeholder:"Agradezco a mi trabajadora doméstica por su honestidad y compromiso",class:"w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"},null,512),[[Wi,e.value]])]),N("div",Qd,[N("label",{for:"fullComment",class:Tt(["block text-sm font-medium text-gray-700",t.value==="dueño"?"text-sky-800":"text-rose-800"])},"Historia",2),jn(N("textarea",{id:"fullComment","onUpdate:modelValue":I[5]||(I[5]=P=>n.value=P),placeholder:"Soy Laura Méndez y quiero compartir mi experiencia trabajando con la familia Pérez. Durante casi dos años, me encargué de las tareas del hogar, pero lo que realmente me hizo sentir especial fue la forma en que me trataron. Siempre hubo respeto y un ambiente de apoyo mutuo, especialmente en los momentos difíciles.",class:"w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500",rows:"4"},null,512),[[Wi,n.value]])]),I[23]||(I[23]=N("p",{class:"mb-2 text-sm font-medium text-gray-700 underline"},"Califique su experiencia",-1)),N("div",Wd,[I[21]||(I[21]=N("span",{class:"text-sm font-medium text-gray-700"},"Calificación:",-1)),N("div",Hd,[N("span",{onClick:I[6]||(I[6]=P=>o(1)),class:Tt([{"text-yellow-500":i.value>=1,"text-gray-300":i.value<1},"cursor-pointer fas fa-star fa-lg"])},null,2),N("span",{onClick:I[7]||(I[7]=P=>o(2)),class:Tt([{"text-yellow-500":i.value>=2,"text-gray-300":i.value<2},"cursor-pointer fas fa-star fa-lg"])},null,2),N("span",{onClick:I[8]||(I[8]=P=>o(3)),class:Tt([{"text-yellow-500":i.value>=3,"text-gray-300":i.value<3},"cursor-pointer fas fa-star fa-lg"])},null,2),N("span",{onClick:I[9]||(I[9]=P=>o(4)),class:Tt([{"text-yellow-500":i.value>=4,"text-gray-300":i.value<4},"cursor-pointer fas fa-star fa-lg"])},null,2),N("span",{onClick:I[10]||(I[10]=P=>o(5)),class:Tt([{"text-yellow-500":i.value>=5,"text-gray-300":i.value<5},"cursor-pointer fas fa-star fa-lg"])},null,2)])]),N("button",{onClick:c,class:Tt(["w-full py-2 text-white transition-colors duration-1000 ease-in-out rounded-md shadow-md",{"bg-sky-600 hover:bg-sky-700":t.value==="dueño","bg-rose-600 hover:bg-rose-700":t.value==="asesora"}])},I[22]||(I[22]=[N("i",{class:"mr-2 fas fa-paper-plane"},null,-1),ie(" Enviar Historia ")]),2)],2)])])]),_:1}))}});export{tf as default};
