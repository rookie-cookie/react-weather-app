(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},32:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(18),i=c.n(a),o=(c(25),c(26),c(5)),r=(c(27),c(20)),j=(c(28),c(8)),d=c.n(j),l=c(3),b=c(1);function O(e){var t=e.icon,c=null;return"01d"===t?c=Object(b.jsx)(l.g,{size:100,color:"#555"}):"01n"===t?c=Object(b.jsx)(l.m,{size:100,color:"#555"}):"02d"===t?c=Object(b.jsx)(l.b,{size:100,color:"#555"}):"02n"===t?c=Object(b.jsx)(l.i,{size:100,color:"#555"}):"03d"===t?c=Object(b.jsx)(l.a,{size:100,color:"#555"}):"03n"===t?c=Object(b.jsx)(l.n,{size:100,color:"#555"}):"04d"===t?c=Object(b.jsx)(l.c,{size:100,color:"#555"}):"04n"===t?c=Object(b.jsx)(l.o,{size:100,color:"#555"}):"09d"===t?c=Object(b.jsx)(l.e,{size:100,color:"#555"}):"09n"===t?c=Object(b.jsx)(l.k,{size:100,color:"#555"}):"10d"===t?c=Object(b.jsx)(l.d,{size:100,color:"#555"}):"10n"===t?c=Object(b.jsx)(l.j,{size:100,color:"#555"}):"11d"===t?c=Object(b.jsx)(l.h,{size:100,color:"#555"}):"11n"===t?c=Object(b.jsx)(l.l,{size:100,color:"#555"}):"13d"===t?c=Object(b.jsx)(l.f,{size:100,color:"#555"}):"13n"===t?c=Object(b.jsx)(l.p,{size:100,color:"#555"}):("50d"===t||"50n"===t)&&(c=Object(b.jsx)(l.q,{size:100,color:"#555"})),Object(b.jsx)("div",{children:c})}function u(e){var t=e.temperature;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"buttons convertC",onClick:function(){var e=Math.floor(.5556*(t-32));document.querySelector(".displaytemp").innerHTML="".concat(e,"&deg;C")},children:"C"}),Object(b.jsx)("div",{className:"buttons convertF",onClick:function(){var e=Math.floor(t);document.querySelector(".displaytemp").innerHTML="".concat(e,"&deg;F")},children:"F"})]})}function h(e){var t=e.temperature,c=e.city,s=e.humidity,n=e.windspeed,a=e.weatherdesc,i=e.icon;return Object(b.jsxs)("div",{className:"weatherinfo-container",children:[Object(b.jsxs)("div",{className:"row desc",children:[Object(b.jsx)("div",{className:"col-3 displayicon",children:Object(b.jsx)(O,{icon:i})}),Object(b.jsxs)("div",{className:"col-9",children:[Object(b.jsx)("p",{className:"displaylocation",children:c}),Object(b.jsxs)("p",{className:"displaydate",children:[d()().format("dddd"),", ",d()().format("LL")," "]}),Object(b.jsxs)("p",{className:"displaydesc",children:[a," - ",d()().format("h:mm a")]})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-10",children:Object(b.jsxs)("div",{className:"displaytemp",children:[Math.floor(t),"\xb0F"]})}),Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)(u,{temperature:t})})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("p",{className:"displayhumidity",children:["humidity: ",s," %"]})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("p",{className:"displaywind",children:["windspeed: ",n," m/s"]})})]})}c(32);function x(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{class:"lds-ring",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})}var m=c(19),p=c.n(m);function v(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(o.a)(a,2),j=i[0],d=i[1],l=Object(s.useState)(null),O=Object(o.a)(l,2),u=O[0],m=O[1],v=Object(s.useState)(""),f=Object(o.a)(v,2),w=f[0],N=f[1],y=Object(s.useState)(null),g=Object(o.a)(y,2),z=g[0],S=g[1],C=Object(s.useState)(null),F=Object(o.a)(C,2),L=F[0],M=F[1],k=Object(s.useState)(null),P=Object(o.a)(k,2),T=P[0],q=P[1],I=Object(s.useState)(""),J=Object(o.a)(I,2),A=J[0],B=J[1],D=Object(s.useState)(!0),E=Object(o.a)(D,2),H=E[0],R=E[1];return Object(s.useEffect)((function(){setTimeout((function(){return R(!1)}),6e3),navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),d(e.coords.longitude)})),p.a.get("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(c,"&lon=").concat(j,"&units=imperial&APPID=").concat("c42e64197e41b65a4650bf697ecbc97a")).then((function(e){m(e.data.main.temp),N(e.data.name),S(e.data.main.humidity),M(e.data.wind.speed),q(e.data.weather[0].description),B(e.data.weather[0].icon),console.log(e)})).catch((function(e){console.log("error",e)}))}),[c,j]),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"container weather-body",children:[Object(b.jsx)("div",{className:"weather-header",children:Object(b.jsxs)("h3",{children:["Local Weather Report  ",Object(b.jsx)(r.a,{})]})}),!1===H?Object(b.jsx)(h,{latitude:c,longitude:j,temperature:u,city:w,humidity:z,windspeed:L,weatherdesc:T,icon:A}):Object(b.jsx)(x,{})]}),Object(b.jsx)("div",{className:"container ",children:Object(b.jsx)("div",{className:"weather-footer",children:Object(b.jsx)("p",{children:"Made by Jona Reyes"})})})]})}var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(51);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.289eb42f.chunk.js.map