(this["webpackJsonpassigment-dheeraj"]=this["webpackJsonpassigment-dheeraj"]||[]).push([[0],{24:function(A,e,t){},29:function(A,e,t){},49:function(A,e,t){},50:function(A,e,t){"use strict";t.r(e);var c=t(0),n=t.n(c),a=t(5),s=t.n(a),I=(t(24),t(3)),i=t(6),r="FETCH_SUCCESS",o="FETCH_FAILED",C={BID:0,BID_SIZE:0,ASK:0,ASK_SIZE:0,DAILY_CHANGE:0,DAILY_CHANGE_RELATIVE:0,LAST_PRICE:0,VOLUME:0,HIGH:0,LOW:0},E=Object(I.b)({apiFetch:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r:return Object(i.a)(Object(i.a)({},A),{},{BID:e.payload[0],BID_SIZE:e.payload[1],ASK:e.payload[2],ASK_SIZE:e.payload[3],DAILY_CHANGE:e.payload[4],DAILY_CHANGE_RELATIVE:e.payload[5],LAST_PRICE:e.payload[6],VOLUME:e.payload[7],HIGH:e.payload[8],LOW:e.payload[9]});case o:return Object(i.a)({},A);default:return A}}}),l=t(19),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,O=Object(I.d)(E,d(Object(I.a)(l.a))),j=t(4),p=(t(29),t(9)),h=t.n(p),L=function(A){try{h.a.get("/v2/ticker/".concat("tBTCUSD","?''")).then((function(e){A({type:r,payload:e.data})}))}catch(e){A({type:o})}},R=t(1);function V(){var A=Object(j.b)();Object(c.useEffect)((function(){var e=setInterval((function(){A(L)}),1e3);return function(){return clearInterval(e)}}),[]);var e=Object(j.c)((function(A){return A.apiFetch}));return Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("img",{src:"data:image/png;base64,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",alt:"bitcoin img"}),Object(R.jsxs)("div",{className:"col1",children:[Object(R.jsx)("h3",{children:"BTC/USD"}),Object(R.jsxs)("h4",{children:[" ","VOL ",Object(R.jsx)("span",{children:e.VOLUME})," BTC"]}),Object(R.jsxs)("h4",{children:["LOW ",Object(R.jsx)("span",{children:e.LOW})]})]}),Object(R.jsxs)("div",{className:"col2",children:[Object(R.jsx)("h3",{children:e.ASK}),Object(R.jsxs)("h4",{style:e.DAILY_CHANGE>0?{color:"green"}:{color:"red"},children:[e.DAILY_CHANGE,"(",e.DAILY_CHANGE_RELATIVE,"%)"]}),Object(R.jsxs)("h4",{children:["HIGH ",Object(R.jsx)("span",{children:e.HIGH})]})]})]})}t(49);var g=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(V,{})})},q=O;s.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(j.a,{store:q,children:Object(R.jsx)(g,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ada6cf55.chunk.js.map