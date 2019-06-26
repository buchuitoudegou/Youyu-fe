(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1346f52"],{"02f4":function(t,e,r){var i=r("4588"),n=r("be13");t.exports=function(t){return function(e,r){var s,a,u=String(n(e)),o=i(r),c=u.length;return o<0||o>=c?t?"":void 0:(s=u.charCodeAt(o),s<55296||s>56319||o+1===c||(a=u.charCodeAt(o+1))<56320||a>57343?t?u.charAt(o):s:t?u.slice(o,o+2):a-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var i=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?i(t,e).length:1)}},"0a0b":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"publish-customtask"},[r("h1",{staticStyle:{"margin-top":"1rem","text-align":"center","margin-bottom":"2rem"}},[t._v("创建你的任务")]),r("div",{staticClass:"title-wrapper"},[r("h3",{staticStyle:{"margin-bottom":"1rem"}},[t._v("标题")]),r("Input",{staticStyle:{width:"45%","min-width":"400px","max-width":"500px"},attrs:{type:"text",placeholder:"请输入任务标题",size:"large"},model:{value:t.currentCustomTask.title,callback:function(e){t.$set(t.currentCustomTask,"title",e)},expression:"currentCustomTask.title"}})],1),r("div",{staticClass:"description-wrapper"},[r("h3",{staticStyle:{"margin-bottom":"1rem"}},[t._v("描述")]),r("Input",{staticStyle:{width:"45%","min-width":"400px","max-width":"500px"},attrs:{type:"textarea",rows:4,placeholder:"请输入任务描述",size:"large"},model:{value:t.currentCustomTask.summary,callback:function(e){t.$set(t.currentCustomTask,"summary",e)},expression:"currentCustomTask.summary"}})],1),r("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"45%","min-width":"400px","max-width":"500px",margin:"0 auto"}},[r("div",{staticClass:"bounty-wrapper",staticStyle:{width:"70%"}},[r("h3",{staticStyle:{"margin-bottom":"1rem"}},[t._v("报酬")]),r("Input",{attrs:{prefix:"logo-usd",size:"large"},model:{value:t.currentCustomTask.bounty,callback:function(e){t.$set(t.currentCustomTask,"bounty",e)},expression:"currentCustomTask.bounty"}})],1),r("div",{staticClass:"limit-wrapper",staticStyle:{width:"25%"}},[r("h3",{staticStyle:{"margin-bottom":"1rem"}},[t._v("人数限制")]),r("InputNumber",{staticStyle:{width:"100%"},attrs:{size:"large",max:400,min:1},model:{value:t.currentCustomTask.limit,callback:function(e){t.$set(t.currentCustomTask,"limit",e)},expression:"currentCustomTask.limit"}})],1)]),r("div",{staticClass:"uploader-wrapper"},[r("h3",{staticStyle:{"margin-bottom":"1rem"}},[t._v("附件")]),t.taskExisted?t._e():r("Upload",{staticStyle:{width:"45%","min-width":"400px","max-width":"500px"},attrs:{"before-upload":t.handleUpload,multiple:"","show-upload-list":!0,action:"",type:"drag"}},[r("div",{staticStyle:{padding:"20px 0"}},[r("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),r("p",[t._v("点击或拖拽上传附件")])],1)]),this.currentCustomTask.files&&this.currentCustomTask.files.length?r("div",{staticClass:"file-list",staticStyle:{width:"45%","min-width":"400px","max-width":"500px",margin:"0 auto"}},t._l(this.currentCustomTask.files,function(e,i){return r("div",{key:i,staticClass:"file-item"},[r("div",{staticClass:"file-name"},[t._v(t._s(e.name||e))]),t.taskExisted?t._e():r("Button",{staticClass:"delete-file-btn",staticStyle:{"padding-right":"8px","padding-left":"8px"},attrs:{icon:"md-close"},on:{click:function(e){return t.delFile(i)}}})],1)}),0):t._e()],1),t.taskExisted?r("div",{staticClass:"submit-btn-wrapper"},[r("Button",{staticStyle:{"margin-right":"1rem"},on:{click:function(e){t.showFinishDialog=!0}}},[t._v("结束任务")]),r("Button",{staticStyle:{"margin-right":"1rem"},attrs:{type:"info"},on:{click:t.getTaskStatics}},[t._v("查看完成情况")]),r("Modal",{attrs:{title:"结束任务"},on:{"on-ok":t.finishTask},model:{value:t.showFinishDialog,callback:function(e){t.showFinishDialog=e},expression:"showFinishDialog"}},[r("p",[t._v("确定结束任务吗？")])])],1):r("div",{staticClass:"submit-btn-wrapper"},[r("Button",{staticStyle:{"margin-right":"1rem"},on:{click:t.clear}},[t._v("重置")]),r("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)])},n=[],s=(r("0d6d"),r("ac4d"),r("8a81"),r("ac6a"),r("28a5"),r("7f7f"),r("96cf"),r("3b8d")),a=r("d225"),u=r("b0b4"),o=r("308d"),c=r("6bb5"),l=r("4e2b"),f=r("9ab4"),p=r("60a3"),h=r("5d0f"),m=r("e519"),d=r("9bc5"),b=r("5c57"),v=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.taskTitle="",t.taskDescription="",t.taskPayment=0,t.file=null,t.taskExisted=!1,t.showFinishDialog=!1,t.currentCustomTask={title:"",publisher_id:-1,summary:"",bounty:0,type:"TASK_TYPE_CUSTOM",limit:1,files:[]},t}return Object(l["a"])(e,t),Object(u["a"])(e,[{key:"mounted",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,i,n,s,a,u,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("published-custom-task-detail"!==this.$route.name){t.next=33;break}r=b["a"].getters["task/".concat(d["c"])],i=this.$store.getters["user/".concat(h["b"])].uid,n=!0,s=!1,a=void 0,t.prev=6,u=r[Symbol.iterator]();case 8:if(n=(o=u.next()).done){t.next=18;break}if(c=o.value,c.id!==+this.$route.params.aid){t.next=15;break}return e=Object.assign({},c),this.currentCustomTask={title:e.title,summary:e.description,publisher_id:i,bounty:e.reward,type:"TASK_TYPE_CUSTOM",limit:e.limit,files:e.files?e.files:[]},this.taskExisted=!0,t.abrupt("break",18);case 15:n=!0,t.next=8;break;case 18:t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](6),s=!0,a=t.t0;case 24:t.prev=24,t.prev=25,n||null==u.return||u.return();case 27:if(t.prev=27,!s){t.next=30;break}throw a;case 30:return t.finish(27);case 31:return t.finish(24);case 32:this.currentCustomTask.files&&"string"===typeof this.currentCustomTask.files&&(this.currentCustomTask.files=this.currentCustomTask.files.split("/"),""===this.currentCustomTask.files[this.currentCustomTask.files.length-1]&&this.currentCustomTask.files.pop());case 33:case"end":return t.stop()}},t,this,[[6,20,24,32],[25,,27,31]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleUpload",value:function(t){return this.currentCustomTask.files&&"string"!==typeof this.currentCustomTask.files&&this.currentCustomTask.files.push(t),!1}},{key:"clear",value:function(){this.currentCustomTask={title:"",publisher_id:-1,summary:"",bounty:0,type:"TASK_TYPE_CUSTOM",limit:1,files:[]}}},{key:"submit",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.currentCustomTask.title&&""!==this.currentCustomTask.summary){t.next=3;break}return this.$Notice.error({title:"标题和描述不能为空",duration:2}),t.abrupt("return");case 3:return t.next=5,this.$store.dispatch("questionnaire/".concat(m["h"]),Object.freeze({title:this.currentCustomTask.title,summary:this.currentCustomTask.summary,limit:this.currentCustomTask.limit,type:"TASK_TYPE_CUSTOM",reward:this.currentCustomTask.bounty,files:this.currentCustomTask.files}));case 5:e=t.sent,"OK"===e?(this.$Notice.success({title:"发布成功",duration:2}),this.clear(),this.$router.push({name:"tasks"})):this.$Notice.error({title:e,duration:2});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getTaskStatics",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("questionnaire/".concat(m["e"]),this.$route.params.aid);case 2:this.$store.getters["questionnaire/".concat(m["i"])]?this.$router.push({name:"custom-task-statistics",params:{aid:this.$route.params.aid}}):this.$Notice.error({title:"暂时无人接受任务",duration:2});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"finishTask",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("task/".concat(d["a"]),this.$route.params.aid);case 2:e=t.sent,"OK"===e?(this.$Notice.success({title:"操作成功"}),this.$router.push({name:"a-published"})):this.$Notice.error({title:e&&e.msg||"fail"});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"delFile",value:function(t){this.currentCustomTask.files&&"string"!==typeof this.currentCustomTask.files&&this.currentCustomTask.files.splice(t,1)}}]),e}(p["d"]);v=f["a"]([Object(p["a"])({name:"publish-customtask"})],v);var y=v,g=y,k=(r("8e84"),r("2877")),x=Object(k["a"])(g,i,n,!1,null,"1969c5c4",null);e["default"]=x.exports},"0bfb":function(t,e,r){"use strict";var i=r("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0d6d":function(t,e,r){var i=r("d3f4"),n=r("67ab").onFreeze;r("5eda")("freeze",function(t){return function(e){return t&&i(e)?t(n(e)):e}})},1169:function(t,e,r){var i=r("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"214f":function(t,e,r){"use strict";r("b0c5");var i=r("2aba"),n=r("32e9"),s=r("79e5"),a=r("be13"),u=r("2b4c"),o=r("520a"),c=u("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=u(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),m=h?!s(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!e}):void 0;if(!h||!m||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],b=r(a,p,""[t],function(t,e,r,i,n){return e.exec===o?h&&!n?{done:!0,value:d.call(e,r,i)}:{done:!0,value:t.call(r,e,i)}:{done:!1}}),v=b[0],y=b[1];i(String.prototype,t,v),n(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"28a5":function(t,e,r){"use strict";var i=r("aae3"),n=r("cb7c"),s=r("ebd6"),a=r("0390"),u=r("9def"),o=r("5f1b"),c=r("520a"),l=r("79e5"),f=Math.min,p=[].push,h="split",m="length",d="lastIndex",b=4294967295,v=!l(function(){RegExp(b,"y")});r("214f")("split",2,function(t,e,r,l){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return r.call(n,t,e);var s,a,u,o=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?b:e>>>0,v=new RegExp(t.source,l+"g");while(s=c.call(v,n)){if(a=v[d],a>f&&(o.push(n.slice(f,s.index)),s[m]>1&&s.index<n[m]&&p.apply(o,s.slice(1)),u=s[0][m],f=a,o[m]>=h))break;v[d]===s.index&&v[d]++}return f===n[m]?!u&&v.test("")||o.push(""):o.push(n.slice(f)),o[m]>h?o.slice(0,h):o}:"0"[h](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,i){var n=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n,i):y.call(String(n),r,i)},function(t,e){var i=l(y,t,this,e,y!==r);if(i.done)return i.value;var c=n(t),p=String(this),h=s(c,RegExp),m=c.unicode,d=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),g=new h(v?c:"^(?:"+c.source+")",d),k=void 0===e?b:e>>>0;if(0===k)return[];if(0===p.length)return null===o(g,p)?[p]:[];var x=0,w=0,S=[];while(w<p.length){g.lastIndex=v?w:0;var C,T=o(g,v?p:p.slice(w));if(null===T||(C=f(u(g.lastIndex+(v?0:w)),p.length))===x)w=a(p,w,m);else{if(S.push(p.slice(x,w)),S.length===k)return S;for(var O=1;O<=T.length-1;O++)if(S.push(T[O]),S.length===k)return S;w=x=C}}return S.push(p.slice(x)),S}]})},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var i=r("7726"),n=r("8378"),s=r("2d00"),a=r("37c8"),u=r("86cc").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},"520a":function(t,e,r){"use strict";var i=r("0bfb"),n=RegExp.prototype.exec,s=String.prototype.replace,a=n,u="lastIndex",o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[u]||0!==e[u]}(),c=void 0!==/()??/.exec("")[1],l=o||c;l&&(a=function(t){var e,r,a,l,f=this;return c&&(r=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),o&&(e=f[u]),a=n.call(f,t),o&&a&&(f[u]=f.global?a.index+a[0].length:e),c&&a&&a.length>1&&s.call(a[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,r){"use strict";var i=r("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var s=r.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"67ab":function(t,e,r){var i=r("ca5a")("meta"),n=r("d3f4"),s=r("69a8"),a=r("86cc").f,u=0,o=Object.isExtensible||function(){return!0},c=!r("79e5")(function(){return o(Object.preventExtensions({}))}),l=function(t){a(t,i,{value:{i:"O"+ ++u,w:{}}})},f=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,i)){if(!o(t))return"F";if(!e)return"E";l(t)}return t[i].i},p=function(t,e){if(!s(t,i)){if(!o(t))return!0;if(!e)return!1;l(t)}return t[i].w},h=function(t){return c&&m.NEED&&o(t)&&!s(t,i)&&l(t),t},m=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:p,onFreeze:h}},"7bbc":function(t,e,r){var i=r("6821"),n=r("9093").f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?u(t):n(i(t))}},"8a81":function(t,e,r){"use strict";var i=r("7726"),n=r("69a8"),s=r("9e1e"),a=r("5ca1"),u=r("2aba"),o=r("67ab").KEY,c=r("79e5"),l=r("5537"),f=r("7f20"),p=r("ca5a"),h=r("2b4c"),m=r("37c8"),d=r("3a72"),b=r("d4c0"),v=r("1169"),y=r("cb7c"),g=r("d3f4"),k=r("4bf8"),x=r("6821"),w=r("6a99"),S=r("4630"),C=r("2aeb"),T=r("7bbc"),O=r("11e9"),E=r("2621"),_=r("86cc"),j=r("0d58"),$=O.f,R=_.f,F=T.f,N=i.Symbol,P=i.JSON,I=P&&P.stringify,A="prototype",z=h("_hidden"),D=h("toPrimitive"),K={}.propertyIsEnumerable,M=l("symbol-registry"),U=l("symbols"),J=l("op-symbols"),Y=Object[A],B="function"==typeof N&&!!E.f,q=i.QObject,W=!q||!q[A]||!q[A].findChild,G=s&&c(function(){return 7!=C(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,e,r){var i=$(Y,e);i&&delete Y[e],R(t,e,r),i&&t!==Y&&R(Y,e,i)}:R,Q=function(t){var e=U[t]=C(N[A]);return e._k=t,e},H=B&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},L=function(t,e,r){return t===Y&&L(J,e,r),y(t),e=w(e,!0),y(r),n(U,e)?(r.enumerable?(n(t,z)&&t[z][e]&&(t[z][e]=!1),r=C(r,{enumerable:S(0,!1)})):(n(t,z)||R(t,z,S(1,{})),t[z][e]=!0),G(t,e,r)):R(t,e,r)},V=function(t,e){y(t);var r,i=b(e=x(e)),n=0,s=i.length;while(s>n)L(t,r=i[n++],e[r]);return t},X=function(t,e){return void 0===e?C(t):V(C(t),e)},Z=function(t){var e=K.call(this,t=w(t,!0));return!(this===Y&&n(U,t)&&!n(J,t))&&(!(e||!n(this,t)||!n(U,t)||n(this,z)&&this[z][t])||e)},tt=function(t,e){if(t=x(t),e=w(e,!0),t!==Y||!n(U,e)||n(J,e)){var r=$(t,e);return!r||!n(U,e)||n(t,z)&&t[z][e]||(r.enumerable=!0),r}},et=function(t){var e,r=F(x(t)),i=[],s=0;while(r.length>s)n(U,e=r[s++])||e==z||e==o||i.push(e);return i},rt=function(t){var e,r=t===Y,i=F(r?J:x(t)),s=[],a=0;while(i.length>a)!n(U,e=i[a++])||r&&!n(Y,e)||s.push(U[e]);return s};B||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===Y&&e.call(J,r),n(this,z)&&n(this[z],t)&&(this[z][t]=!1),G(this,t,S(1,r))};return s&&W&&G(Y,t,{configurable:!0,set:e}),Q(t)},u(N[A],"toString",function(){return this._k}),O.f=tt,_.f=L,r("9093").f=T.f=et,r("52a7").f=Z,E.f=rt,s&&!r("2d00")&&u(Y,"propertyIsEnumerable",Z,!0),m.f=function(t){return Q(h(t))}),a(a.G+a.W+a.F*!B,{Symbol:N});for(var it="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;it.length>nt;)h(it[nt++]);for(var st=j(h.store),at=0;st.length>at;)d(st[at++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return n(M,t+="")?M[t]:M[t]=N(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!B,"Object",{create:X,defineProperty:L,defineProperties:V,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ut=c(function(){E.f(1)});a(a.S+a.F*ut,"Object",{getOwnPropertySymbols:function(t){return E.f(k(t))}}),P&&a(a.S+a.F*(!B||c(function(){var t=N();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var e,r,i=[t],n=1;while(arguments.length>n)i.push(arguments[n++]);if(r=e=i[1],(g(e)||void 0!==t)&&!H(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!H(e))return e}),i[1]=e,I.apply(P,i)}}),N[A][D]||r("32e9")(N[A],D,N[A].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},"8e84":function(t,e,r){"use strict";var i=r("ed04"),n=r.n(i);n.a},aae3:function(t,e,r){var i=r("d3f4"),n=r("2d95"),s=r("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},ac4d:function(t,e,r){r("3a72")("asyncIterator")},b0c5:function(t,e,r){"use strict";var i=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d4c0:function(t,e,r){var i=r("0d58"),n=r("2621"),s=r("52a7");t.exports=function(t){var e=i(t),r=n.f;if(r){var a,u=r(t),o=s.f,c=0;while(u.length>c)o.call(t,a=u[c++])&&e.push(a)}return e}},ed04:function(t,e,r){}}]);
//# sourceMappingURL=chunk-d1346f52.64b82e4d.js.map