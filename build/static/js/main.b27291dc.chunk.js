(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),l=t.n(r),c=(t(5),t(2)),u=function(e){var n=e.newName,t=e.newNumber,a=e.addRecod,r=e.handleNameChange,l=e.handleNumberChange;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null," name: ",o.a.createElement("input",{value:n,onChange:r})," "),o.a.createElement("div",null," number: ",o.a.createElement("input",{value:t,onChange:l})," "),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},i=function(e){var n=e.persons,t=e.filter,a=e.handleDelete;return n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return o.a.createElement("div",{key:e.name},e.name," ",e.number," ",o.a.createElement("button",{onClick:function(){return a(e.id)}},"delete")," ")}))},d=function(e){var n=e.handleFilterChange;return o.a.createElement("div",null,"filter shown with",o.a.createElement("input",{onChange:n}))},m=t(3),f=t.n(m),s="/api/persons",h=function(){return f.a.get(s)},b=function(e){return f.a.post(s,e)},g=function(e){return f.a.delete("".concat(s,"/").concat(e))},p=function(e,n){return f.a.put("".concat(s,"/").concat(e),n)},v=function(e){var n=e.message,t=e.type;if(null===n)return null;var a={color:"ok"===t?"green":"red",background:"rgb(236, 234, 234)",fontSize:15,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return o.a.createElement("div",{style:a},n)},E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),m=Object(c.a)(l,2),f=m[0],s=m[1],E=Object(a.useState)(""),k=Object(c.a)(E,2),w=k[0],O=k[1],j=Object(a.useState)(""),C=Object(c.a)(j,2),y=C[0],S=C[1],N=Object(a.useState)(null),R=Object(c.a)(N,2),T=R[0],D=R[1],B=Object(a.useState)(""),F=Object(c.a)(B,2),I=F[0],J=F[1];return Object(a.useEffect)((function(){console.log("effect"),h().then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]),console.log("render\xf6ity",t.length,"kpl"),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(v,{message:T,type:I}),o.a.createElement(d,{handleFilterChange:function(e){console.log(e.target.value),S(e.target.value)}}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(u,{addRecod:function(e){if(e.preventDefault(),t.find((function(e){return e.name===f}))){if(window.confirm('"'.concat(f,'" is already added to phonebook. Replace the old number with the new one?'))){var n=t.find((function(e){return e.name===f})),a={name:f,number:w};p(n.id,a).then((function(e){s(""),O(""),r(t.map((function(t){return t.id!==n.id?t:e.data}))),D('"'.concat(n.name,'" updated to phonebook')),J("ok"),setTimeout((function(){D(null)}),5e3)})).catch((function(e){console.log("ERROR"),D('Information of "'.concat(n.name,'" has already been removed from server')),J("not ok"),setTimeout((function(){D(null)}),5e3),r(t.filter((function(e){return e.id!==n.id})))}))}s(""),O("")}else{var o={name:f,number:w};console.log("button cliked",e.target),r(t.concat(o)),s(""),O(""),b(o).then((function(e){r(t.concat(e.data)),D('"'.concat(o.name,'" added to phonebook')),J("ok"),setTimeout((function(){D(null)}),5e3)})).catch((function(e){D("".concat(e.response.data.error)),J("not ok"),setTimeout((function(){D(null)}),5e3),console.log("front-end: Validation error",e.response.data)}))}},newName:f,handleNameChange:function(e){console.log(e.target.value),s(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement("ul",null,o.a.createElement(i,{handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm('Want to delete "'.concat(n.name,'"'))&&(console.log("handleDelete, id:",e),g(e).then((function(a){r(t.filter((function(n){return n.id!==e}))),D('"'.concat(n.name,'" removed from phonebook')),J("ok"),setTimeout((function(){D(null)}),5e3)})))},persons:t,setPersons:r,filter:y})))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.b27291dc.chunk.js.map