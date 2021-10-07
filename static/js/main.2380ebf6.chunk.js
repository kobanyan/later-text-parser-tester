(this["webpackJsonplater-text-parser-tester"]=this["webpackJsonplater-text-parser-tester"]||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(30),o=n.n(a),s=n(146),i=n(70),j=n(151),l=n(152),x=n(153),u=n(2),d=function(){return Object(u.jsx)(l.a,{component:"footer",children:Object(u.jsx)(x.a,{variant:"body2",textAlign:"center",children:"Copyright \xa9 kobanyan 2021."})})},b=n(69),h=n.n(b),O=n(155),p=n(154),g=n(158),f=n(157),m=function(){return Object(u.jsx)(p.a,{component:"header",sx:{flexGrow:1},children:Object(u.jsx)(O.a,{component:"div",position:"static",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(x.a,{variant:"h6",sx:{flexGrow:1},children:"@breejs/later Text Parser Tester"}),Object(u.jsx)(g.a,{href:"https://breejs.github.io/later/parsers.html#text",target:"_blank",rel:"noopener",color:"inherit",underline:"none",children:Object(u.jsxs)(x.a,{sx:{verticalAlign:"middle",display:"inline-flex"},children:[Object(u.jsx)(h.a,{fontSize:"small",sx:{marginRight:1}}),"Docs"]})})]})})})},y=n(13),v=n(150),C=n(156),T=n(15),w=function(e){var t=e.text,n=e.error,r=Object(T.a)(new Array(n)).map((function(){return"\xa0"})).concat("^");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{variant:"h5",children:"Error"}),Object(u.jsx)(x.a,{sx:{marginTop:1,paddingLeft:2},"data-testid":"text",children:t}),Object(u.jsx)(x.a,{color:"error",sx:{paddingLeft:2},"data-testid":"error",children:r})]})},F=n(147),k=function(e){var t=e.text,n=e.count,r=e.onTextChange,c=e.onCountChange;return Object(u.jsx)(p.a,{component:"form",noValidate:!0,autoComplete:"off",children:Object(u.jsxs)(v.a,{container:!0,spacing:2,children:[Object(u.jsx)(v.a,{item:!0,sm:10,children:Object(u.jsx)(F.a,{id:"text",label:"Text",fullWidth:!0,value:t,onChange:r})}),Object(u.jsx)(v.a,{item:!0,sm:2,children:Object(u.jsx)(F.a,{id:"count",label:"Count",type:"number",value:n,onChange:c})})]})})},L=n(38),S=n(64),A=n.n(S),D={text:"",count:1,error:-1,occurrences:[]},I=function(e){var t=e.text,n=e.count,r=A.a.parse.text(t),c=A.a.schedule(r).next(n);return{error:r.error,occurrences:c instanceof Date?[c]:c||[]}},P=function(e,t){switch(t.type){case"changeText":var n=I({text:t.payload,count:e.count});return Object(L.a)(Object(L.a)({},e),{},{text:t.payload,error:n.error,occurrences:n.occurrences});case"changeCount":var r=I({text:e.text,count:t.payload});return Object(L.a)(Object(L.a)({},e),{},{count:t.payload,error:r.error,occurrences:r.occurrences});default:return Object(L.a)({},e)}},R=n(159),B=n(148),E=n(160),G=function(e){var t=e.occurrences;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{variant:"h5",children:"Occurrences"}),Object(u.jsx)(R.a,{dense:!0,children:t.map((function(e,t){return Object(u.jsx)(B.a,{children:Object(u.jsx)(E.a,{primary:e.toLocaleString()})},t)}))})]})},J=function(){var e=c.a.useReducer(P,D),t=Object(y.a)(e,2),n=t[0],r=n.text,a=n.count,o=n.error,s=n.occurrences,i=t[1],j=c.a.useCallback((function(e){i({type:"changeText",payload:e.target.value})}),[]),l=c.a.useCallback((function(e){i({type:"changeCount",payload:Number(e.target.value)})}),[]);return Object(u.jsxs)(v.a,{component:"main",container:!0,justifyContent:"center",alignItems:"center",rowSpacing:2,margin:2,children:[Object(u.jsx)(v.a,{item:!0,xs:8,children:Object(u.jsx)(C.a,{sx:{padding:2},children:Object(u.jsx)(k,{text:r,count:a,onTextChange:j,onCountChange:l})})}),Object(u.jsx)(v.a,{item:!0,xs:8,children:Object(u.jsx)(C.a,{sx:{padding:2},children:o>-1?Object(u.jsx)(w,{text:r,error:o}):Object(u.jsx)(G,{occurrences:s})})})]})},M=Object(i.a)({typography:{fontFamily:["Roboto Mono"].join(", ")}}),z=function(){return Object(u.jsxs)(j.a,{theme:M,children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(m,{}),Object(u.jsx)(J,{}),Object(u.jsx)(d,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),N()}},[[99,1,2]]]);
//# sourceMappingURL=main.2380ebf6.chunk.js.map