!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(n.i,r,i),r.locals?r.locals:{});n.exports=a},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function c(n,e,t){for(var o=0;o<e.length;o++){var r={css:e[o][1],media:e[o][2],sourceMap:e[o][3]};a[n][o]?a[n][o](r):a[n].push(h(r,t))}}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),c(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),c(n,e,t);for(var o=e.length;o<a[n].length;o++)a[n][o]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){var o=t(3),r=t(4),i=t(5),a=t(6),c=t(7);e=o(!1);var d=r(i),s=r(a),l=r(c);e.push([n.i,"@font-face {\n    font-family: 'logoFont';\n    src: url("+d+") format('woff');\n  }\n  \n  @font-face {\n    font-family: 'bodyFont';\n    src: url("+s+") format('woff');\n  }\n  \n  body{\n    font-family: 'bodyFont';\n    background: url("+l+");\n    background-color: #c94747;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; \n    color:whitesmoke;\n  }\n  \n  #logo{\n    font-family: 'logoFont';\n    font-size: 3em;\n    background-color:rgba(73, 75, 78, 0.267) ;\n    color : white;\n    display: inline-block;\n    padding: 0px 7px;\n  }\n  \n  #navBar{\n    font-size: 2em;\n    background-color:rgba(73, 75, 78, 0.267) ;\n    color : white;\n    display: inline-block;\n    padding: 0px 7px;\n    margin-left: 5%;\n    cursor: pointer;\n  }\n  \n  a:hover {\n    color: yellow;\n    font-size: 1.2em;\n  }\n  \n  #content{\n    padding: 2% 25%;\n    background-color:rgba(151, 41, 41, 0.26);\n  }\n  form {\n    font-size: 1.5em;\n    display: inline-block;\n    padding: 0px 7px;\n    margin: 5% 0%;\n  }\n  input {\n    border-radius: 10px;\n    width: 50%;\n    font-size: 1em;\n  }\n  #submitBtn{\n    font-family: 'bodyFont';\n    border-radius: 10px;\n    border-style: solid;\n    font-size: 0.8em;\n    cursor: pointer;\n    width: auto;\n  }\n  ul li{\n    margin: 0% 10%;\n    font-size: 1.5em;\n    padding: 0 0 6px 0;\n  }\n\n  .infoSpan{\n    margin-right: 10%;\n  }\n  span {\n    color : rgb(240, 240, 9)\n  }\n  .weatherIcon{\n    width: 130px;\n    position: absolute;\n    top:43%;\n    left: 65%;\n    background-color: rgba(18, 22, 235, 0.884);\n  }\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  .switch input { \n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  #footer{\n    font-size: 0.8em;\n    text-align: center\n  }",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var r=[].concat(n[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"3c21ded77180ae28e84947c8728083fd.woff"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"819fafaadb04f684b249fdfc10065724.otf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"33e598028e51c26db3c7a0e649d56c3d.jpg"},function(n,e,t){"use strict";t.r(e);const o=document.getElementById("headerTemp");var r=function(){const n=document.createElement("HEADER"),e=document.createElement("H1");e.setAttribute("id","logo"),e.innerHTML="Weather-City",n.appendChild(e);const t=document.createElement("NAV");t.setAttribute("id","navBar");for(let n=0;n<3;n+=1){const e=document.createElement("A");e.setAttribute("id",`link ${n}`),t.appendChild(e)}const r=t.children;return r[0].innerHTML="HOME  |",r[1].innerHTML="  INFO  |",r[2].innerHTML="  CONTACT",n.appendChild(t),o.appendChild(n),o};const i=document.getElementById("footer");var a=function(){const n=document.createElement("P");n.innerHTML="The Weather-City App gives you information every day 24/24";const e=document.createElement("P");return e.innerHTML="&copy; By Othmane Namani, 2019, github:othman-19",i.appendChild(n).appendChild(e),i};const c=document.getElementById("content"),d=document.getElementById("temp"),s=document.getElementById("toggleTemp");function l(){c.innerHTML="",c.appendChild(d.content.cloneNode(!0));const n=document.createElement("UL");n.setAttribute("id","infoList");for(let e=0;e<5;e+=1){const t=document.createElement("li");t.setAttribute("id",`item-${e}`),n.appendChild(t)}const e=n.children;return e[0].innerText="City: ",e[0].insertAdjacentHTML("beforeend",'<span class ="infoSpan"></span>'),e[1].innerText="Main: ",e[1].insertAdjacentHTML("beforeend",'<span class ="infoSpan"></span>'),e[2].innerText="Temperator: ",e[2].insertAdjacentHTML("beforeend",'<span class ="infoSpan"></span>'),e[2].insertAdjacentHTML("beforeend",'<span id ="switchSpan"></span>'),e[3].innerText="Humidity : ",e[3].insertAdjacentHTML("beforeend",'<span class ="infoSpan"></span>'),e[4].innerText="WindSpeed: ",e[4].insertAdjacentHTML("beforeend",'<span class ="infoSpan"></span>'),c.appendChild(n),c}const u=document.getElementById("content");var p=function(){u.innerHTML="";const n=document.createElement("UL");n.setAttribute("id","menu");for(let e=0;e<10;e+=1){const t=document.createElement("li");t.setAttribute("id",`info ${e}`),n.appendChild(t)}const e=n.children;return e[0].innerHTML="Feature to be added in future",e[1].innerHTML="Feature to be added in future",e[2].innerHTML="Feature to be added in future",e[3].innerHTML="Feature to be added in future",u.appendChild(n),u};const f=document.getElementById("content");var m=function(){f.innerHTML="";const n=document.createElement("H2");n.innerHTML="CONTACT US";const e=document.createElement("P");e.innerHTML="For General Inquiries, please send a message to othmanenaamani@gmail.com.";const t=document.createElement("P");return t.innerHTML="Have a concern, comment or compliment from a\n  recent Weather-City experience? We wouldd like to hear from you.\n  By phone: 1-555-555-5555 ,666-666-6666",f.appendChild(n).appendChild(e).appendChild(t),f};t(0);const h=r(),b=l();document.body.appendChild(h),document.body.appendChild(b);const g=document.querySelectorAll(".infoSpan"),y=document.getElementById("navBar").childNodes;y[0].addEventListener("click",l,!1),y[1].addEventListener("click",p,!1),y[2].addEventListener("click",m,!1),document.body.appendChild(a());const v=(n,e)=>{for(let t=0;t<5;t+=1){const o=n[t];o.innerHTML=2===t?`${e[t]} C°`:e[t]}},T=(n,e)=>{const t=n[0],o=`http://openweathermap.org/img/w/${e[5]}.png`;t.insertAdjacentHTML("beforeend",`<img class ="weatherIcon" id = info[5] src = ${o}>`);const r=document.getElementById("switchSpan");r.innerHTML="",r.appendChild(s.content.cloneNode(!0)),document.body.style.backgroundImage=`url('./Wallpaper/${e[1]}.jpg')`};document.getElementById("submitBtn").addEventListener("click",n=>{(async n=>{try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&APPID=d917a8125d1d2b9470fefaa25bd2d8e3`,{mode:"cors"}),t=await e.json(),o=t.weather[0].main,r=t.weather[0].icon,i=t.main.humidity,a=t.main.temp,c=t.wind.speed;return[t.name,o,a,i,c,r]}catch(n){return v(g,"error"),n}})(document.getElementById("city_name").value).then(n=>{v(g,n),T(g,n);const e=document.getElementById("switchBtn"),t=document.getElementById("switchInput");e.addEventListener("change",()=>{((n,e)=>{const t=e,o=parseInt(g[2].innerText,10);console.log(n.checked),n.checked?t.innerText=`${Math.round(1.8*o+32)} F°`:t.innerText=`${Math.round(5/9*(o-32))} C°`})(t,g[2])},!1)}),n.preventDefault()})}]);