(this["webpackJsonplater-text-parser-tester"]=this["webpackJsonplater-text-parser-tester"]||[]).push([[0],{108:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(31),o=r.n(a),s=r(162),i=r(76),j=r(168),u=r(169),l=r(170),x=r(2),b=function(){return Object(x.jsx)(u.a,{component:"footer",sx:{marginBottom:2},children:Object(x.jsx)(l.a,{variant:"body2",textAlign:"center",children:"Copyright \xa9 kobanyan 2021."})})},d=r(75),h=r.n(d),O=r(74),p=r.n(O),g=r(172),m=r(171),f=r(174),y=r(175),C=r(163),v=function(e){var t=e.title,r=e.url,n=e.children,a=c.a.useCallback((function(){return window.open(r,"_blank")}),[r]);return Object(x.jsx)(C.a,{title:t,children:Object(x.jsx)(y.a,{color:"inherit",size:"large",onClick:a,children:n})})},T=function(){return Object(x.jsx)(m.a,{component:"header",sx:{flexGrow:1},children:Object(x.jsx)(g.a,{component:"div",position:"static",children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(l.a,{variant:"h6",sx:{flexGrow:1},children:"@breejs/later Text Parser Tester"}),Object(x.jsx)(v,{title:"Open GitHub",url:"https://github.com/kobanyan/later-text-parser-tester",children:Object(x.jsx)(p.a,{})}),Object(x.jsx)(v,{title:"Open @breejs/later Documents",url:"https://breejs.github.io/later/parsers.html#text",children:Object(x.jsx)(h.a,{})})]})})})},k=r(13),w=r(167),F=r(173),L=r(15),S=function(e){var t=e.text,r=e.error,n=Object(L.a)(new Array(r)).map((function(){return"\xa0"})).concat("^");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{variant:"h5",children:"Error"}),Object(x.jsx)(l.a,{sx:{marginTop:1,paddingLeft:2},"data-testid":"text",children:t}),Object(x.jsx)(l.a,{color:"error",sx:{paddingLeft:2},"data-testid":"error",children:n})]})},B=r(164),D=function(e){var t=e.text,r=e.count,n=e.onTextChange,c=e.onCountChange;return Object(x.jsx)(m.a,{component:"form",noValidate:!0,autoComplete:"off",children:Object(x.jsxs)(w.a,{container:!0,spacing:2,children:[Object(x.jsx)(w.a,{item:!0,sm:10,children:Object(x.jsx)(B.a,{id:"text",label:"Text",fullWidth:!0,value:t,onChange:n})}),Object(x.jsx)(w.a,{item:!0,sm:2,children:Object(x.jsx)(B.a,{id:"count",label:"Count",type:"number",value:r,onChange:c})})]})})},G=r(40),I=r(66),P=r.n(I),A={text:"",count:1,error:-1,occurrences:[]},E=function(e){var t=e.text,r=e.count;try{var n=P.a.parse.text(t),c=P.a.schedule(n).next(r);return{error:n.error,occurrences:c instanceof Date?[c]:c||[]}}catch(a){return console.error(a),{error:0,occurrences:[]}}},J=function(e,t){switch(t.type){case"changeText":var r=E({text:t.payload,count:e.count});return Object(G.a)(Object(G.a)({},e),{},{text:t.payload,error:r.error,occurrences:r.occurrences});case"changeCount":var n=E({text:e.text,count:t.payload});return Object(G.a)(Object(G.a)({},e),{},{count:t.payload,error:n.error,occurrences:n.occurrences});default:return Object(G.a)({},e)}},M=r(176),R=r(166),z=r(177),H=function(e){var t=e.occurrences;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{variant:"h5",children:"Occurrences"}),Object(x.jsx)(M.a,{dense:!0,children:t.map((function(e,t){return Object(x.jsx)(R.a,{children:Object(x.jsx)(z.a,{primary:e.toLocaleString()})},t)}))})]})},N=function(){var e=c.a.useReducer(J,A),t=Object(k.a)(e,2),r=t[0],n=r.text,a=r.count,o=r.error,s=r.occurrences,i=t[1],j=c.a.useCallback((function(e){i({type:"changeText",payload:e.target.value})}),[]),u=c.a.useCallback((function(e){i({type:"changeCount",payload:Number(e.target.value)})}),[]);return Object(x.jsxs)(w.a,{component:"main",container:!0,justifyContent:"center",alignItems:"center",rowSpacing:2,margin:2,children:[Object(x.jsx)(w.a,{item:!0,xs:8,children:Object(x.jsx)(F.a,{sx:{padding:2},children:Object(x.jsx)(D,{text:n,count:a,onTextChange:j,onCountChange:u})})}),Object(x.jsx)(w.a,{item:!0,xs:8,children:Object(x.jsx)(F.a,{sx:{padding:2},children:o>-1?Object(x.jsx)(S,{text:n,error:o}):Object(x.jsx)(H,{occurrences:s})})})]})},V=Object(i.a)({typography:{fontFamily:["Roboto Mono"].join(", ")}}),W=function(){return Object(x.jsxs)(j.a,{theme:V,children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(T,{}),Object(x.jsx)(N,{}),Object(x.jsx)(b,{})]})},_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,178)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),_()}},[[108,1,2]]]);
//# sourceMappingURL=main.4a5e2f7c.chunk.js.map