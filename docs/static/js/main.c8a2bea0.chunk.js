(this["webpackJsonpsupermercado-client"]=this["webpackJsonpsupermercado-client"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(25),a(26),a(2)),i=a(3),s=a(4);function u(){var e=Object(i.a)(["\n    background-color: rgb(0, 113, 206);\n    font-size: 8pt;\n    color: #fff;\n"]);return u=function(){return e},e}function d(){var e=Object(i.a)(["\n    width: 152px; \n    height: 35px; \n    margin-top: 12px; \n    margin-bottom: 6px;\n"]);return d=function(){return e},e}var m=s.a.img(d()),p=s.a.div(u()),E=function(e){var t=e.setProductos,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1];return r.a.createElement(p,{className:"col-xs-8"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/catalogo/"},r.a.createElement(m,{alt:"Lider Logo",src:"https://www.lider.cl/catalogo/images/lider-logo.svg"}))),r.a.createElement("div",null,r.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),o.trim().length>0&&(t((function(e){return[o]})),i(""))}},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{name:"search",value:o,className:"form-control",type:"text",placeholder:"Buscar por Producto",onChange:function(e){i(e.target.value)}}))))))};function f(){var e=Object(i.a)(["\n    background-color: #041e42;\n    font-size: 8pt;\n    color: #fff;\n"]);return f=function(){return e},e}var v=s.a.div(f()),g=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v,null,r.a.createElement("span",null,"Servicio al cliente de Lider.cl: WhatsApp",r.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=56957211492&text=Hola!%20Tengo%20una%20consulta"},"+56957211492"),"| Horario: de lunes a viernes de 8:00 a 22:00 y s\xe1bado, domingo y festivos de 9:00 a 22:00")))},b=a(5),_=a.n(b),h=a(18),O=a(19),N=a.n(O).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL}),S=function(){var e=Object(h.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={search:t},e.next=4,N.post("/api/buscar",n);case 4:r=e.sent,console.log("respuesta: ",r.data.productos),console.log("respuesta: ",r.data.codigo),console.log("respuesta: ",r.data.isPalindromo),r&&"00"===r.data.codigo&&(a=r.data.productos.map((function(e){return{id:e.id,brand:e.brand,description:e.description,url:e.image?e.image:"",isDescuento:r.data.isPalindromo,precioConDescuento:Math.round(e.price),price:r.data.isPalindromo?2*e.price:e.price}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return console.log("productos:",a),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.producto,a="https://"+t.url;return r.a.createElement("div",{className:"col-md-4 mb-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:a,alt:a}),r.a.createElement("h1",{className:"card-header"},t.brand," ",r.a.createElement("span",{className:"description"}," ",t.description)),t.isDescuento?r.a.createElement("div",null,r.a.createElement("div",null," ",t.price,"  ")," ",t.precioConDescuento,r.a.createElement("div",null," ",t.price,"  ")):r.a.createElement("div",null,r.a.createElement("p",null," ",t.price,"  "),r.a.createElement("p",null," ",t.price," ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-light",onClick:function(){}},"Agregar"))))},T=function(e){var t=e.producto,a=function(e){console.log("Productos XXXX: ",e);var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){S(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,o=a.loading;return console.log("data=>",c),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),o&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(P,{key:e.id,producto:e})})))):r.a.createElement("div",{className:"styled__NoResultsText-sc-1w20d9o-5 dTOjoM"},"No encontramos resultados para tu b\xfasqueda de ",r.a.createElement("span",null,t," "))},C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return console.log("URL: ",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL),r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(E,{setProductos:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(T,{key:e,producto:e})}))))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c8a2bea0.chunk.js.map