(this["webpackJsonpproducts-list"]=this["webpackJsonpproducts-list"]||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){},17:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(9),r=c.n(a),i=(c(15),c(10)),u=c(2),o=(c(16),c(7)),l=(c(17),c(5)),d=c.n(l),j=(c(8),c(0)),b=function(t){var e=t.id,c=t.name,s=t.priority,a=t.selectProduct,r=t.status,i=t.removeProduct,o=Object(n.useState)(r),l=Object(u.a)(o,2),b=l[0],m=l[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),O=h[0],v=h[1];return Object(j.jsxs)("li",{className:"products-list__item item",children:[Object(j.jsxs)("div",{onClick:function(){return a(e)},style:{cursor:"pointer"},children:[Object(j.jsxs)("h2",{children:["Priority#",s]}),Object(j.jsx)("p",{children:c[0].toUpperCase()+c.slice(1,c.length)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var t=new Date,e=t.getMonth()+1,c=t.getDay(),n=t.getHours(),s=t.getMinutes();v("".concat(c<10?"0".concat(c):c,"/").concat(e<10?"0".concat(e):e," ").concat(n,":").concat(s)),m(!b)}()},className:"item__button--status",children:"Change status"}),Object(j.jsx)("p",{className:d()("item__status-value",{"item__status-value--have":b,"item__status-value--run-out":!b}),children:b?"have":"ran out"})]}),O&&Object(j.jsxs)("p",{className:"item__status-time",children:["Status changed: ",O]}),Object(j.jsx)("button",{type:"button",onClick:function(){return i(e)},className:"item__button--remove",children:"Remove"})]},e)},m=function(t){var e=t.selected,c=t.removeProduct,s=Object(n.useState)(!0),a=Object(u.a)(s,2),r=a[0],i=a[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),b=l[0],m=l[1];return e?Object(j.jsxs)("div",{className:"products-list__item item",style:{width:"230px",height:"350px",marginTop:"100px"},children:[Object(j.jsxs)("h2",{children:["Priority#",e.priority]}),Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:[Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var t=new Date,e=t.getMonth()+1,c=t.getDay(),n=t.getHours(),s=t.getMinutes();m("".concat(c<10?"0".concat(c):c,"/").concat(e<10?"0".concat(e):e," ").concat(n,":").concat(s)),i(!r)}(e.id)},className:"item__button--status",children:"Change status"}),Object(j.jsx)("p",{className:d()("item__status-value",{"item__status-value--have":r,"item__status-value--run-out":!r}),children:r?"have":"ran out"})]}),Object(j.jsxs)("p",{className:"item__status-time",children:["Status changed - ",b]}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(e.id)},className:"item__button--remove",children:"Remove"})]}):null},p=function(t){var e=t.products,c=t.removeProduct,n=t.selectedStatus,s=t.selectProduct,a=t.selectedProductId,r=e.sort((function(t,e){return t.priority-e.priority}));n&&(r=r.filter((function(t){return t.status.toString()===n})));var i=r.find((function(t){return t.id===a}));return Object(j.jsxs)("div",{className:"products",children:[Object(j.jsx)("ul",{className:"products-list",children:r.map((function(t){return Object(j.jsx)(b,Object(o.a)(Object(o.a)({},t),{},{removeProduct:c,selected:i,selectProduct:s}),t.id)}))}),Object(j.jsx)("div",{className:"selected-product__container",children:Object(j.jsx)(m,{selected:i,removeProduct:c})})]})},h=[{id:1,name:"bread",status:!0,priority:1},{id:2,name:"milk",status:!1,priority:5},{id:3,name:"eggs",status:!0,priority:4},{id:4,name:"sausage",status:!0,priority:2},{id:5,name:"apples",status:!1,priority:3}];var O=function(){var t=Object(n.useState)(h),e=Object(u.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(""),r=Object(u.a)(a,2),o=r[0],l=r[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),m=b[0],O=b[1],v=Object(n.useState)(0),x=Object(u.a)(v,2),f=x[0],g=x[1],_=Object(n.useState)(0),y=Object(u.a)(_,2),N=y[0],S=y[1];return console.log(f),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:c.length+1,name:o,status:!1,priority:m};o&&m&&(s((function(t){return[].concat(Object(i.a)(t),[e])})),l(""),O(""))},children:[Object(j.jsx)("input",{type:"text",placeholder:"Input product*",value:o,onChange:function(t){return l(t.target.value)},className:"input-add"}),Object(j.jsxs)("select",{value:m,onChange:function(t){return O(t.target.value)},className:"select-add",children:[Object(j.jsx)("option",{children:"Choose a priority:"}),[1,2,3,4,5].map((function(t){return Object(j.jsx)("option",{value:t,children:t},t)}))]}),Object(j.jsx)("button",{type:"submit",className:"button-add",children:"Add a product"})]}),"Status filter:",Object(j.jsxs)("select",{value:f,onChange:function(t){return g(t.target.value)},className:"select-status",children:[Object(j.jsx)("option",{value:"",children:"All"}),Object(j.jsx)("option",{value:"false",children:"Ran out"}),Object(j.jsx)("option",{value:"true",children:"Have"})]}),Object(j.jsx)(p,{products:c,removeProduct:function(t){s(c.filter((function(e){return e.id!==t})))},selectedStatus:f,selectProduct:function(t){S(t)},selectedProductId:N})]})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()},8:function(t,e,c){}},[[19,1,2]]]);
//# sourceMappingURL=main.26c301b0.chunk.js.map