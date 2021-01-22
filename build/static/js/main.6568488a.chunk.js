(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),s=n(33),o=n.n(s),u=(n(129),n(130),n(131),n(23)),i=(n(78),n(27));var p={badges:[]};var b=c.a.createContext(p),l=function(){return Object(a.useContext)(b)},d=function(e){var t=e.children,n=Object(a.useState)(p),c=Object(u.a)(n,2),s=c[0];c[1];return Object(r.jsx)(b.Provider,{value:s,children:t})},f=n(7),j=n.n(f),h=n(14),g=n(215),v=n(216),x=n(217),O=n(218),w=(n(132),function(e){var t=e.badge,n=Object(a.useState)(localStorage.getItem(t.webScraperOrder)),c=Object(u.a)(n,2),s=c[0],o=(c[1],Object(a.useState)(s||t.imageSrc)),i=Object(u.a)(o,2),p=i[0];i[1];Object(a.useEffect)((function(){}),[]);return Object(r.jsx)(O.a,{wrapperStyle:{minHeight:80},onLoad:function(e){return t.imageSrc},loading:"lazy",alt:t.gameHref,src:p})}),m=n(102),S=n.n(m),k=n(44),y=n(45),E="/badge",I=n(103),P=n.n(I),C=(n(104),new(function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,[{key:"apiBaseUrl",get:function(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API||"https://secret-narrow-water.glitch.me/api"}}]),e}())),B=function(e){return e>=200&&e<300},A=new(function(){function e(){Object(k.a)(this,e),this.axiosInstance=void 0,this.axiosInstance=P.a.create({baseURL:C.apiBaseUrl,headers:{Accept:"application/json","Content-Type":"application/json"},validateStatus:B,timeout:2e4})}return Object(y.a)(e,[{key:"get",value:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axiosInstance.get(n,{params:r});case 3:return a=t.sent,console.log(n),t.abrupt("return",e.handleResponse(a));case 8:throw t.prev=8,t.t0=t.catch(0),e.translateAxiosError(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(h.a)(j.a.mark((function t(n,r,a){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axiosInstance.post(n,r,a);case 3:return c=t.sent,t.abrupt("return",e.handleResponse(c));case 7:throw t.prev=7,t.t0=t.catch(0),e.translateAxiosError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(h.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axiosInstance.delete(n);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),e.translateAxiosError(t.t0);case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(h.a)(j.a.mark((function t(n,r,a){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axiosInstance.put(n,r,a);case 3:return c=t.sent,t.abrupt("return",e.handleResponse(c));case 7:throw t.prev=7,t.t0=t.catch(0),e.translateAxiosError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axiosInstance.patch(n,r);case 3:return a=t.sent,t.abrupt("return",e.handleResponse(a));case 7:throw t.prev=7,t.t0=t.catch(0),e.translateAxiosError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"axios",get:function(){return this.axiosInstance}}],[{key:"handleResponse",value:function(e){return{data:e.data}}},{key:"translateAxiosError",value:function(e){var t=e.response;return"ECONNABORTED"===e.code?new Error(e.message):null!=t?new Error(t.data):new Error("Unable to contact the server at this time. Please try again later")}}]),e}()),z=new(function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,[{key:"getBadge",value:function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get(E);case 2:if(t=e.sent,console.log(t),!t||!t.data){e.next=6;break}return e.abrupt("return",t.data);case 6:throw new Error("Get Badge service returns null.");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadgePaged",value:function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("".concat(E,"?pageIndex=").concat(t.index,"&pageSize=").concat(t.size,"&pageCount=").concat(t.count));case 2:if(n=e.sent,console.log(n),!n||!n.data){e.next=6;break}return e.abrupt("return",n.data);case 6:throw new Error("Get Badge service returns null.");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createBadge",value:function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,A.post(E,{badge:t});case 3:if(n=e.sent,console.log(n),!n){e.next=7;break}return e.abrupt("return",Promise.resolve());case 7:throw new Error("Get Badge service returns null.");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createBadges",value:function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,A.post(E,{badges:t},{timeout:1e5});case 3:if(n=e.sent,console.log(n),!n){e.next=7;break}return e.abrupt("return",Promise.resolve());case 7:throw new Error("Get Badge service returns null.");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),R={index:0,size:100,count:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=Object(a.useState)(e.index),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(e.size),o=Object(u.a)(s,2),i=o[0],p=o[1],b=Object(a.useState)(e.count),l=Object(u.a)(b,2),d=l[0],f=l[1];return{pageIndex:r,pageSize:i,pageCount:d,setPageIndex:c,setPageSize:p,setPageCount:f}},_={maxWidth:"60em",margin:"auto"},L={index:0,size:100,count:0},D=function(){var e=l(),t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=T(L),p=o.pageIndex,b=o.pageSize,d=o.pageCount,f=o.setPageIndex,O=(o.setPageSize,o.setPageCount),m=Object(a.useState)(!1),k=Object(u.a)(m,2),y=k[0],E=k[1],I=Object(a.useState)([]),P=Object(u.a)(I,2),C=P[0],B=P[1],A=Object(a.useState)([]),R=Object(u.a)(A,2),D=R[0],F=R[1];Object(a.useEffect)((function(){c||y||p>0||N()}),[]),Object(a.useEffect)((function(){e.badges&&e.badges.length>0&&E(!1),H()}),[e]),Object(a.useEffect)((function(){C.map((function(e,t){F([].concat(Object(i.a)(D),[Object(r.jsx)(g.a,{span:4.5,children:Object(r.jsx)(w,{badge:e})})]))}))}),[C]);var H=function(){for(var t=[],n=0;n<e.badges.length;n++){var r=e.badges.pop();r&&t.push(r)}t.length&&B([].concat(Object(i.a)(C),t)),O(d+1)},N=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=2;break}return e.abrupt("return");case 2:return s(!0),t={count:d,index:p,size:b},e.next=6,z.getBadgePaged(t).then((function(e){if(e){var t=e.maxPages,n=e.rows;n.length&&(E(!0),B([].concat(Object(i.a)(C),Object(i.a)(n))),f(p+1),s(!1)),t<=p&&E(!1)}}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(v.a,{align:"bottom",justify:"center",children:Object(r.jsx)(g.a,{children:Object(r.jsx)(v.a,{children:Object(r.jsx)(S.a,{pageStart:0,loadMore:N,hasMore:y,loader:Object(r.jsx)("div",{className:"loader",children:"Loading ..."},0),children:Object(r.jsx)(x.b,{grid:{gutter:0,xxl:6},style:_,bordered:!0,dataSource:C,renderItem:function(e){return Object(r.jsxs)(x.b.Item,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(w,{badge:e}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:e.gameHref,target:"_blank",children:e.text})]},e.webScraperOrder)}})})})})})},F=function(){return Object(r.jsx)(d,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{children:Object(r.jsx)(D,{})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),H()}},[[210,1,2]]]);
//# sourceMappingURL=main.6568488a.chunk.js.map