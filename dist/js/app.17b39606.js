(function(e){function t(t){for(var r,a,s=t[0],i=t[1],o=t[2],d=0,l=[];d<s.length;d++)a=s[d],u[a]&&l.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0af7b3":"a6617f57","chunk-3724786e":"2a8c9f36","chunk-37e943fe":"c0462638","chunk-3d661144":"277f7dae","chunk-4625afc8":"60323d12","chunk-49b9853a":"f9ffc85f","chunk-642dc40e":"0280afc5","chunk-6d4dd45c":"161d5f92","chunk-70e2e68d":"eccd4bc2","chunk-80d60fa8":"a6077e53","chunk-d1346f52":"64b82e4d","chunk-d649a6ae":"2d0ba648"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3724786e":1,"chunk-37e943fe":1,"chunk-3d661144":1,"chunk-4625afc8":1,"chunk-49b9853a":1,"chunk-642dc40e":1,"chunk-6d4dd45c":1,"chunk-70e2e68d":1,"chunk-80d60fa8":1,"chunk-d1346f52":1,"chunk-d649a6ae":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0af7b3":"31d6cfe0","chunk-3724786e":"8c397865","chunk-37e943fe":"41f0c134","chunk-3d661144":"bc9b10e1","chunk-4625afc8":"88f2ce51","chunk-49b9853a":"d6b4ac98","chunk-642dc40e":"faeb4dee","chunk-6d4dd45c":"cf2a76d2","chunk-70e2e68d":"83a6e96f","chunk-80d60fa8":"2e38d1d7","chunk-d1346f52":"30bb0e64","chunk-d649a6ae":"d794cb89"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var o=c[s],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===r||d===u))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){o=l[s],d=o.getAttribute("data-href");if(d===r||d===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[e]=0}));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=c);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e),o=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}u[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:d})},12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3df2":function(e,t,n){"use strict";var r=n("959a"),a=n.n(r);a.a},"5c48":function(e,t,n){},"5c57":function(e,t,n){"use strict";n("96cf");var r,a,u=n("3b8d"),c=n("bd86"),s=n("5d0f"),i=n("bc3a"),o=n.n(i),d={timeout:5e3,baseURL:"/api"},l=o.a.create(d),p=o.a.create(d);l.interceptors.response.use(function(e){return e},function(e){var t=e.response,n=e.config;e.code,"".concat(n.method.toUpperCase()," ").concat(n.url);return t&&t.status,Promise.reject(t)}),p.interceptors.response.use(function(e){return e},function(e){var t=e.response;return Promise.reject(t)});var f,m,h,b,v,k,g,O={namespaced:!0,state:function(){return{user:null}},mutations:Object(c["a"])({},s["f"],function(e,t){e.user=t}),actions:(r={},Object(c["a"])(r,s["e"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.prev=1,e.next=4,p.put("/login",n);case 4:if(a=e.sent,u=a.data,!u.status){e.next=12;break}return e.next=9,r(s["d"]);case 9:return e.abrupt("return",Promise.resolve("OK"));case 12:return e.abrupt("return",Promise.resolve("fail"));case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 18:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(r,s["g"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.dispatch,e.prev=1,e.next=4,p.post("/register",n);case 4:if(r=e.sent,a=r.data,!a.status){e.next=10;break}return e.abrupt("return",Promise.resolve("OK"));case 10:return e.abrupt("return",Promise.resolve("fail"));case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(r,s["d"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,p.get("/user");case 4:if(r=e.sent,a=r.data,!a.status){e.next=11;break}return n(s["f"],a.data),e.abrupt("return",Promise.resolve("OK"));case 11:return e.abrupt("return",Promise.resolve(a.msg));case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 17:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}()),Object(c["a"])(r,s["f"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,p.put("/user",n);case 4:if(a=e.sent,u=a.data,!u.status){e.next=9;break}return r(s["f"],n),e.abrupt("return",u);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e["catch"](1),e.abrupt("return",e.t0.data);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t,n){return e.apply(this,arguments)}}()),r),getters:(a={},Object(c["a"])(a,s["a"],function(e){return e.user?e.user.nickname:""}),Object(c["a"])(a,s["b"],function(e){return e.user}),Object(c["a"])(a,s["c"],function(e){return null!==e.user}),a)},_=(n("c5f6"),n("6ee6")),w=(n("7f7f"),n("456d"),n("ac6a"),n("e519")),S={namespaced:!0,state:function(){return{currentQuestionnaire:null,questionnaireSumitList:[]}},actions:(f={},Object(c["a"])(f,w["d"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,p.get("/tasks/".concat(n));case 4:a=e.sent,u=a.data,u.data&&(c={id:u.data.id,title:u.data.title,summary:u.data.description,publisher_id:u.data.creator,content:JSON.parse(u.data.content),bounty:u.data.reward,type:"TASK_TYPE_SURVEY",limit:u.data.limit,assigned:u.data.assigned},r("".concat(w["f"]),c)),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(f,w["e"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,p.get("/tasks/".concat(n,"/assignments"));case 4:a=e.sent,u=a.data,u.data&&(c=[],u.data.forEach(function(e){var t={id:e.id,task_id:e.task_id,status:e.status,created_at:e.created_at,updated_at:e.updated_at,content:e.payload};c.push(t)}),r("".concat(w["g"]),c)),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(f,w["h"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r={title:n.title,description:n.summary,type:""===n.type?"TASK_TYPE_SURVEY":n.type,content:n.content?JSON.stringify(n.content):"",reward:n.reward,limit:n.limit,files:n.files?n.files:""},a=new FormData,Object.keys(r).forEach(function(e){"files"===e?r[e]&&r[e].forEach(function(e){a.append("files",e,e.name)}):a.append(e,r[e])}),e.prev=4,e.next=7,p.post("/tasks",a,{headers:{"Content-Type":"multipart/form-data"}});case 7:if(u=e.sent,c=u.data,!c.status){e.next=13;break}return e.abrupt("return",Promise.resolve("OK"));case 13:return e.abrupt("return",Promise.resolve(c.msg));case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e["catch"](4),e.abrupt("return",Promise.resolve(e.t0.data.msg));case 19:case"end":return e.stop()}},e,null,[[4,16]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(f,w["j"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object(_["a"])(t),e.prev=1,e.next=4,p.post("/assignments",{task_id:Number(n.task_id)});case 4:if(r=e.sent,a=r.data,!a.status&&"OK"!==a.msg){e.next=9;break}if(!a.data){e.next=9;break}return e.abrupt("return",Promise.resolve(String(a.data.id)));case 9:return e.abrupt("return",Promise.resolve(a.msg));case 12:return e.prev=12,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(f,w["c"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object(_["a"])(t),e.prev=1,e.next=4,p.put("/tasks/".concat(n.task_id,"/assignments/").concat(n.aid),{pass:n.status});case 4:if(r=e.sent,204!==r.status){e.next=7;break}return e.abrupt("return",Promise.resolve("OK"));case 7:return e.abrupt("return",Promise.resolve(r.data.msg));case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t,n){return e.apply(this,arguments)}}()),f),getters:(m={},Object(c["a"])(m,w["a"],function(e){return e.currentQuestionnaire}),Object(c["a"])(m,w["b"],function(e){return e.questionnaireSumitList}),Object(c["a"])(m,w["i"],function(e){return 0!==e.questionnaireSumitList.length}),m),mutations:(h={},Object(c["a"])(h,w["f"],function(e,t){e.currentQuestionnaire=t}),Object(c["a"])(h,w["g"],function(e,t){e.questionnaireSumitList=t}),h)},y=n("afe4"),j={namespaced:!0,state:function(){return{allAssignments:[]}},mutations:Object(c["a"])({},y["c"],function(e,t){e.allAssignments=t}),getters:Object(c["a"])({},y["a"],function(e){return e.allAssignments}),actions:(b={},Object(c["a"])(b,y["b"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,p.get("/assignments");case 4:r=e.sent,a=r.data,(a.status||"OK"===a.msg)&&n(y["c"],a.data),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()),Object(c["a"])(b,y["d"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=n.aid,a=n.payload,e.prev=2,e.next=5,p.put("/assignments/".concat(r),{payload:JSON.stringify(a)});case 5:return u=e.sent,u.data,e.abrupt("return",Promise.resolve("OK"));case 10:return e.prev=10,e.t0=e["catch"](2),e.abrupt("return",Promise.resolve(e.t0));case 13:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t,n){return e.apply(this,arguments)}}()),b)},x=n("2b0e"),E=n("2f62"),R=n("9bc5"),A={namespaced:!0,state:function(){return{publicTasks:[],ownTasks:[]}},actions:(v={},Object(c["a"])(v,R["d"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,p.get("/tasks");case 4:if(r=e.sent,a=r.data,!a.status&&"OK"!==a.msg){e.next=11;break}return n(R["g"],a.data),e.abrupt("return",Promise.resolve("OK"));case 11:return e.abrupt("return",Promise.resolve(a.msg));case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 17:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}()),Object(c["a"])(v,R["f"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object(_["a"])(t),e.prev=1,e.next=4,p.get("/tasks/".concat(n.id,"/files/").concat(n.filename),{responseType:"blob"});case 4:if(r=e.sent,a=r.data,!a){e.next=10;break}return e.abrupt("return",Promise.resolve(a));case 10:return e.abrupt("return",Promise.resolve("no file"));case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(c["a"])(v,R["e"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,p.get("/tasks?scope=owned");case 4:if(r=e.sent,a=r.data,!a.status&&"OK"!==a.msg){e.next=11;break}return n(R["h"],a.data),e.abrupt("return",Promise.resolve("OK"));case 11:return e.abrupt("return",Promise.resolve(a.msg));case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 17:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}()),Object(c["a"])(v,R["a"],function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object(_["a"])(t),e.prev=1,e.next=4,p.put("/tasks/".concat(n));case 4:if(r=e.sent,a=r.data,!a.status&&"OK"!==a.msg){e.next=10;break}return e.abrupt("return",Promise.resolve("OK"));case 10:return e.abrupt("return",Promise.resolve(a.msg));case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e["catch"](1),e.abrupt("return",Promise.resolve(e.t0));case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t,n){return e.apply(this,arguments)}}()),v),mutations:(k={},Object(c["a"])(k,R["g"],function(e,t){e.publicTasks=t}),Object(c["a"])(k,R["h"],function(e,t){e.ownTasks=t}),k),getters:(g={},Object(c["a"])(g,R["b"],function(e){return e.publicTasks}),Object(c["a"])(g,R["c"],function(e){return e.ownTasks}),g)};x["default"].use(E["a"]);var T={user:O,questionnaire:S,assignment:j,task:A},I=new E["a"].Store({modules:T,strict:!1});t["a"]=I},"5d0f":function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return u}),n.d(t,"g",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o});var r="MODIFY_USER_PROFILE",a="LOAD_USER_PROFILE",u="LOGIN",c="SIGNUP",s="CURRENT_NICKNAME",i="CURRENT_USER_INFO",o="IS_LOGIN"},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"959a":function(e,t,n){},9819:function(e,t,n){},"9bc5":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"f",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"h",function(){return d});var r="GET_ALL_TASKS",a="GET_ALL_TASKS_OWN",u="LOAD_ALL_TASKS",c="LOAD_ALL_TASKS_OWN",s="FINISH_TASK",i="LOAD_FILE",o="MODIFY_ALL_TASKS",d="MODIFY_ALL_TASKS_OWN"},afe4:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return c});var r="GET_ALL_ASSIGNMENTS",a="MODIFY_ALL_ASSIGNMENTS",u="LOAD_ALL_ASSIGNMENTS",c="SUBMIT_ASSIGNMENT_ANSWER"},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},a=[],u=(n("7c55"),n("2877")),c={},s=Object(u["a"])(c,r,a,!1,null,null,null),i=s.exports,o=n("2b0e"),d=(n("96cf"),n("3b8d")),l=n("8c4f"),p=n("5c57"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"basic-layout"}},[n("Layout",{attrs:{id:"slider"}},[n("Sider",{style:{position:"fixed",minWidth:"214px",height:"100vh",left:0,overflow:"auto"}},[n("div",{staticClass:"logo"},[n("div",{staticStyle:{color:"white"},on:{click:e.ClickLogo}},[n("span",[e._v("Surplus")])]),n("h1",{staticStyle:{color:"white"}},[e._v("有余")])]),n("Menu",{ref:"leftMenu",attrs:{theme:"dark",width:"auto",accordion:""},on:{"on-select":e.handleClick}},[n("MenuItem",{attrs:{name:"tasks"}},[n("Icon",{attrs:{type:"logo-dropbox",size:"16"}}),n("span",[e._v("请求大厅")])],1),e.loginStatus?n("MenuItem",{attrs:{name:"personalCenter"}},[n("Icon",{attrs:{type:"md-person",size:"16"}}),n("span",[e._v("个人中心")])],1):e._e(),e.loginStatus?n("Submenu",{attrs:{name:"assignments"}},[n("template",{slot:"title"},[n("div",{staticClass:"submenu-title"},[n("Icon",{attrs:{type:"md-reorder",size:"16"}}),n("span",[e._v("我的请求")])],1)]),n("MenuItem",{attrs:{name:"a-accepted"}},[e._v("已接受")]),n("MenuItem",{attrs:{name:"a-published"}},[e._v("已发布")])],2):e._e(),e.loginStatus?n("Submenu",{attrs:{name:"publish"}},[n("template",{slot:"title"},[n("div",{staticClass:"submenu-title"},[n("Icon",{attrs:{type:"md-add",size:"16"}}),n("span",[e._v("发布请求")])],1)]),n("MenuItem",{attrs:{name:"questionnaire"}},[e._v("发布问卷")]),n("MenuItem",{attrs:{name:"customtask"}},[e._v("发布任务")])],2):e._e(),n("MenuItem",{attrs:{name:"about"}},[n("Icon",{attrs:{type:"ios-information-circle-outline",size:"16"}}),n("span",[e._v("有余简介")])],1)],1)],1),n("Layout",{style:{marginLeft:"214px"}},[n("Header",{attrs:{id:"header"}},[e.loginStatus?n("div",{staticClass:"user-info"},[n("Dropdown",{staticClass:"avatar-container",on:{"on-click":e.drapDownClick}},[n("div",{staticClass:"avatar-wrapper",staticStyle:{height:"55px"}},[n("img",{staticClass:"user-avatar",attrs:{src:e.userAvatar}})]),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"personalCenter"}},[e._v("个人中心")]),n("DropdownItem",{attrs:{name:"logOut"}},[e._v("退出")])],1)],1)],1):n("Button",{staticClass:"login-button",attrs:{icon:"md-person",type:"primary"},on:{click:e.login}},[e._v("登录")])],1),n("Content",{attrs:{id:"content"}},[n("Card",[n("router-view",{key:e.key,on:{updateAvatar:e.updateAvatar}})],1)],1)],1)],1)],1)},m=[],h=n("d225"),b=n("b0b4"),v=n("308d"),k=n("6bb5"),g=n("4e2b"),O=n("9ab4"),_=n("60a3"),w=n("5d0f"),S=n("e21f"),y=n.n(S),j=function(e){function t(){var e;return Object(h["a"])(this,t),e=Object(v["a"])(this,Object(k["a"])(t).apply(this,arguments)),e.loginStatus=!0,e.uid=0,e.userAvatar=y.a,e}return Object(g["a"])(t,e),Object(b["a"])(t,[{key:"handleClick",value:function(e){this.$router.push({name:e})}},{key:"login",value:function(){this.$router.push({name:"login"})}},{key:"logOut",value:function(){this.$router.push({name:"login"})}},{key:"drapDownClick",value:function(e){if("personalCenter"===e){var t=this.$refs.leftMenu;t.currentActiveName="personalCenter",this.handleClick(e)}else this.logOut()}},{key:"ClickLogo",value:function(){var e=this.$refs.leftMenu;e.currentActiveName="tasks",this.handleClick("home")}},{key:"updateAvatar",value:function(){this.userAvatar="/api/user/".concat(this.uid,"/avatar?t=").concat(Math.random())}},{key:"key",get:function(){return this.$route.path+Math.random()}}]),t}(_["d"]);j=O["a"]([Object(_["a"])({name:"BasicLayout",beforeRouteEnter:function(e,t,n){var r,a=p["a"].getters["user/".concat(w["c"])];a&&(r=p["a"].getters["user/".concat(w["b"])]),n(function(e){e.loginStatus=a,a&&(e.uid=r.uid,e.userAvatar="/api/user/".concat(r.uid,"/avatar"))})}})],j);var x=j,E=x,R=(n("3df2"),Object(u["a"])(E,f,m,!1,null,"309765ec",null)),A=R.exports;o["default"].use(l["a"]);var T=new l["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-37e943fe").then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-642dc40e").then(n.bind(null,"34c3"))}},{path:"/",component:A,beforeEnter:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].dispatch("user/".concat(w["d"]));case 2:null!==p["a"].getters["user/".concat(w["b"])]?r():r("/login");case 3:case"end":return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}(),children:[{path:"",name:"home",redirect:"/tasks"},{path:"/tasks",name:"tasks",component:function(){return n.e("chunk-49b9853a").then(n.bind(null,"3b38"))}},{path:"assignments/published",name:"a-published",component:function(){return n.e("chunk-d649a6ae").then(n.bind(null,"726f"))}},{path:"assignments/accepted",name:"a-accepted",component:function(){return n.e("chunk-d649a6ae").then(n.bind(null,"726f"))}},{path:"assignments/published/:aid/questionnaire",name:"published-questionnaire-detail",component:function(){return n.e("chunk-80d60fa8").then(n.bind(null,"06b8"))}},{path:"assignments/published/:aid/task",name:"published-custom-task-detail",component:function(){return n.e("chunk-d1346f52").then(n.bind(null,"0a0b"))}},{path:"about",name:"about",component:function(){return n.e("chunk-6d4dd45c").then(n.bind(null,"ef46"))}},{path:"personalCenter",name:"personalCenter",component:function(){return n.e("chunk-3724786e").then(n.bind(null,"f2ea"))}},{path:"ordersCenter",name:"ordersCenter",component:function(){return n.e("chunk-2d0af7b3").then(n.bind(null,"0f07"))}},{path:"publish/questionnaire",name:"questionnaire",component:function(){return n.e("chunk-80d60fa8").then(n.bind(null,"06b8"))}},{path:"questionnaire/:sid",name:"view-questionnaire",component:function(){return n.e("chunk-4625afc8").then(n.bind(null,"cddc"))}},{path:"custom/:tid",name:"view-custom-task",component:function(){return n.e("chunk-70e2e68d").then(n.bind(null,"d1ba"))}},{path:"publish/customtask",name:"customtask",component:function(){return n.e("chunk-d1346f52").then(n.bind(null,"0a0b"))}},{name:"answer-questionnaire",path:"assignments/:aid/questionnaire",component:function(){return n.e("chunk-4625afc8").then(n.bind(null,"cddc"))}},{name:"answer-custom-task",path:"assignments/:aid/task",component:function(){return n.e("chunk-70e2e68d").then(n.bind(null,"d1ba"))}},{path:"publish/questionnaire/:aid/Statistics",name:"questionnaire-statistics",component:function(){return n.e("chunk-3d661144").then(n.bind(null,"1391"))}},{path:"publish/custom/:aid/Statistics",name:"custom-task-statistics",component:function(){return n.e("chunk-3d661144").then(n.bind(null,"1391"))}}]}]}),I=n("e069"),P=n.n(I);n("dcad"),n("9819");o["default"].config.productionTip=!1,o["default"].use(P.a),new o["default"]({router:T,store:p["a"],render:function(e){return e(i)}}).$mount("#app")},e21f:function(e,t,n){e.exports=n.p+"img/default-avatar.b6541da3.png"},e519:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"i",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"h",function(){return s}),n.d(t,"j",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return d}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return p});var r="GET_CURRENT_QUESTIONARE",a="GET_QUESTIONARE_SUBMITS",u="QUESTIONARE_SUBMITS_EXIST",c="LOAD_QUESTIONARE",s="POST_QUESTIONARE",i="RECEIVE_QUESTIONARE",o="LOAD_QUESTIONARE_SUBMITS",d="JUDGE_QUESTIONARE_SUBMIT",l="MODIFY_CURRENT_QUESTIONARE",p="MODIFY_QUESTIONARE_SUBMITS"}});
//# sourceMappingURL=app.17b39606.js.map