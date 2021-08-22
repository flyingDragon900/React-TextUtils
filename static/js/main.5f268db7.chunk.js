(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(4),l=n.n(c),r=(n(9),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),o(e),c(e),l(e)}))}),s=n(2),i=n(0);function d(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}function b(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.navMode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:"Link"})})]}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary me-2",onClick:e.primaryMode}),Object(i.jsx)("button",{type:"button",className:"btn btn-danger me-2",onClick:e.dangerMode}),Object(i.jsx)("button",{type:"button",className:"btn btn-warning me-2",onClick:e.warningMode}),Object(i.jsxs)("div",{className:"form-check form-switch",onClick:e.darkMode,children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"darkMode"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"darkMode",style:{color:"light"===e.mode?"black":"white"},children:"Enable Dark Mode"})]})]})]})})})}function h(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"mb-3",style:{color:"light"===e.mode?"#212529":"white"},children:[Object(i.jsx)("h2",{className:"my-3",children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",id:"myform",value:o,onChange:function(e){console.log("on change"),c(e.target.value)},style:{backgroundColor:e.mode===e.color?"white":e.bgColor,color:"light"===e.mode?"#212529":"white"},rows:"6"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 me-2",onClick:function(){var t=o.toUpperCase();c(t),e.showAlert("Converted to upper Case","success")},children:"Conver to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 me-2",onClick:function(){var t=o.toLowerCase();c(t),e.showAlert("Converted to lower Case","success")},children:"Conver to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 me-2",onClick:function(){var t=document.getElementById("myform");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){var t=o.split(/[ ]+/);c(t.join(" ")),e.showAlert("Cleared extra spaces","success")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#212529":"white"},children:[Object(i.jsxs)("h3",{children:[o.length," letters and ",o.split(" ").length," words"]}),Object(i.jsxs)("p",{children:[.008*o.split(" ").length," minutes to read"]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter the text to preview"})]})]})}function m(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("light"),l=Object(s.a)(c,2),r=l[0],m=l[1],u=Object(a.useState)("light"),j=Object(s.a)(u,2),g=j[0],y=j[1],p=Object(a.useState)("light"),x=Object(s.a)(p,2),O=x[0],v=x[1],k=Object(a.useState)(null),C=Object(s.a)(k,2),f=C[0],w=C[1],N=function(e,t){w({msg:e,type:t}),setTimeout((function(){w(null)}),1500)},M=[function(){"light"===n?(o("dark"),m("dark"),y("light"),v("#212529"),N("Dark mode has been elabled","success"),document.body.style.backgroundColor="#212529"):(o("light"),m("light"),y("light"),N("light mode has been elabled","success"),document.body.style.backgroundColor="white")},function(){"light"===n?(o("primary"),m("dark"),y("light"),v("#15202B"),document.body.style.backgroundColor="#15202B",document.body.style.color="white"):(o("light"),m("light"),document.body.style.backgroundColor="white",document.body.style.color="black")},function(){"light"===n?(o("danger"),m("dark"),y("light"),v("#8c4850"),document.body.style.backgroundColor="#8c4850",document.body.style.color="white"):(o("light"),m("light"),document.body.style.backgroundColor="white",document.body.style.color="black")},function(){"light"===n?(o("warning"),m("light"),y("light"),v("#e8c869"),document.body.style.backgroundColor="#e8c869",document.body.style.color="black"):(o("light"),m("light"),document.body.style.backgroundColor="white",document.body.style.color="black")}];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:n,navMode:r,darkMode:M[0],primaryMode:M[1],dangerMode:M[2],warningMode:M[3]}),Object(i.jsx)(d,{alert:f}),Object(i.jsx)(h,{heading:"Enter the Text",showAlert:N,mode:n,color:g,bgColor:O,primaryMode:M[1],dangerMode:M[2],warningMode:M[3]})]})}l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),r()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5f268db7.chunk.js.map