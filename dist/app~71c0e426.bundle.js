/*! For license information please see app~71c0e426.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[82],{769:(t,e,r)=>{r(666),r(46);var n=r(131);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:_(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function w(){}function b(){}function L(){}var E={};f(E,u,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(F([])));k&&k!==r&&n.call(k,u)&&(E=k);var j=L.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(a,i,c,u){var s=h(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=p;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=L,i(j,"constructor",{value:L,configurable:!0}),i(L,"constructor",{value:b,configurable:!0}),b.displayName=f(L,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},O(S.prototype),f(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(d(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),f(j,l,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}const c=function(){var t,e=(t=a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator){t.next=3;break}return console.log("Service Worker not supported in the browser"),t.abrupt("return");case 3:return e=new n.ZW("./sw.bundle.js"),t.prev=4,t.next=7,e.register();case 7:console.log("Service worker registered"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log("Failed to register service worker",t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return l(t,arguments,h(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),d(r,t)},s(t)}function l(t,e,r){return l=f()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&d(o,r.prototype),o},l.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof w?e:w,i=Object.create(a.prototype),c=new T(n||[]);return o(i,"_invoke",{value:_(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function w(){}function b(){}function L(){}var E={};l(E,i,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(F([])));k&&k!==r&&n.call(k,i)&&(E=k);var j=L.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return b.prototype=L,o(j,"constructor",{value:L,configurable:!0}),o(L,"constructor",{value:b,configurable:!0}),b.displayName=l(L,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},O(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),l(j,s,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function v(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){v(a,n,o,i,c,"next",t)}function c(t){v(a,n,o,i,c,"throw",t)}i(void 0)}))}}var g;r(90),r(770),self.addEventListener("install",(function(t){console.log("Installing Service Worker ...")})),self.addEventListener("activate",(function(t){console.log("Activating Service Worker ...")})),self.addEventListener("fetch",(function(t){console.log(t.request),t.respondWith(fetch(t.request))})),window.addEventListener("hashchange",(function(){var t=window.location.hash.substr(1);if(t.startsWith("detail/")){var e=t.split("/")[1];w(e)}else"favorites"===t&&k()})),window.addEventListener("load",(function(){c()}));var m=window.indexedDB.open("RestoranDB",1);m.onerror=function(t){console.log("Error: ",t.target.errorCode)},m.onsuccess=function(t){g=t.target.result,console.log("Database terbuka sukses"),b()},m.onupgradeneeded=function(t){t.target.result.createObjectStore("restoran",{keyPath:"id",autoIncrement:!0}).createIndex("favorite","favorite",{unique:!1}),console.log("Database berhasil diupgrade")},document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector('a[href="#home"]'),e=document.querySelector('a[href="#restoo"]'),r=document.querySelector('a[href="#about-us"]');t.addEventListener("click",(function(t){(window.location.href.includes("detail")||window.location.href.includes("favorites"))&&(t.preventDefault(),window.location.href="index.html")})),e.addEventListener("click",(function(t){(window.location.href.includes("detail")||window.location.href.includes("favorites"))&&(t.preventDefault(),window.location.href="index.html")})),r.addEventListener("click",(function(t){(window.location.href.includes("detail")||window.location.href.includes("favorites"))&&(t.preventDefault(),window.location.href="index.html")}))}));var w=function(){var t=y(p().mark((function t(e){var r,n,o,a,i,c,u,s,l;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector("main").innerHTML='<div id="detailPage"></div>',r=document.getElementById("detailPage"),t.prev=3,t.next=6,fetch("https://restaurant-api.dicoding.dev/detail/".concat(e));case 6:if((n=t.sent).ok){t.next=9;break}throw new Error("Network response was not ok");case 9:return t.next=11,n.json();case 11:return o=t.sent,a=o.restaurant,t.next=15,E(e);case 15:i=t.sent,c=i?"favorited":"",u=a.menus&&a.menus.foods?a.menus.foods.map((function(t){return t.name})).join(", "):"Data tidak tersedia",s=a.menus&&a.menus.drinks?a.menus.drinks.map((function(t){return t.name})).join(", "):"Data tidak tersedia",r.innerHTML='\n        <div class=\'resto-detail\'>\n          <div class="left">\n            <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/'.concat(a.pictureId," alt='").concat(a.name,"'>\n            <i class=\"fas fa-heart favorite-icon ").concat(c,'" data-restaurant-id="').concat(e,'" tabindex="0"></i>\n          </div>\n          <div class="right">\n            <h2>').concat(a.name,"</h2>\n            <p>Rating: ").concat(a.rating,"</p>\n            <p>Alamat: ").concat(a.address,"</p>\n            <p>Kota: ").concat(a.city,"</p>\n            <p>Deskripsi: ").concat(a.description,"</p>\n            <p>Menu Makanan: ").concat(u,"</p>\n            <p>Menu Minuman: ").concat(s,"</p>\n            <h3>Customer Reviews</h3>\n            <ul>\n              ").concat(a.customerReviews.map((function(t){return"<li>".concat(t.name,": ").concat(t.review,"</li>")})).join(""),"\n            </ul>\n          </div>\n        </div>\n      "),l=r.querySelector(".favorite-icon"),i?(l.classList.add("favorited"),l.style.color="#AD0000"):l.style.color="grey",l.addEventListener("click",y(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:t.sent?(x(e),l.classList.remove("favorited"),l.style.color="grey"):(L(e),l.classList.add("favorited"),l.style.color="#AD0000");case 4:case"end":return t.stop()}}),t)})))),r.querySelector("#backButton").addEventListener("click",(function(t){t.preventDefault(),window.location.href="index.html"})),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(3),console.error("Error fetching data:",t.t0);case 30:case"end":return t.stop()}}),t,null,[[3,27]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=y(p().mark((function t(){var e,r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("output"),r="",t.prev=2,t.next=5,fetch("https://restaurant-api.dicoding.dev/list");case 5:if((n=t.sent).ok){t.next=8;break}throw new Error("Network response was not ok");case 8:return t.next=10,n.json();case 10:t.sent.restaurants.forEach((function(t){var e=E(t.id)?"favorited":"";r+='\n        <div class=\'resto\' tabindex="0">\n            <a href="#detail/'.concat(t.id,'">\n                <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/').concat(t.pictureId," alt='").concat(t.name,"'>\n                <h2>").concat(t.name,"</h2>\n                <p>Rating: ").concat(t.rating,"</p>\n                <p>Kota: ").concat(t.city,'</p>\n            </a>\n            <i class="fas fa-heart favorite-icon ').concat(e,'" data-restaurant-id="').concat(t.id,'" tabindex="0"></i>\n        </div>\n      ')})),e.innerHTML=r,document.querySelectorAll(".favorite-icon").forEach(function(){var t=y(p().mark((function t(e){var r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.dataset.restaurantId,t.next=3,E(r);case 3:n=t.sent,e.style.color=n?"#AD0000":"grey",e.addEventListener("click",function(){var t=y(p().mark((function t(r){var n,o,a,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=r.target.dataset.restaurantId,o=r.target.classList.contains("favorited");try{a=g.transaction(["restoran"],"readwrite"),i=a.objectStore("restoran"),o?i.delete(n).onsuccess=function(t){console.log("Restaurant dengan ID ".concat(n," dihapus dari favorit")),e.style.color="grey"}:i.add({id:n,favorite:!0}).onsuccess=function(t){console.log("Restaurant dengan ID ".concat(n," ditambahkan ke favorit")),e.style.color="#AD0000"},r.target.classList.toggle("favorited")}catch(t){console.error("Error:",t)}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),console.error("Error fetching data:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=y(p().mark((function t(e){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=g.transaction(["restoran"],"readwrite"),r.objectStore("restoran").add({id:e,favorite:!0}).onsuccess=function(t){console.log("Restaurant dengan ID ".concat(e," ditambahkan ke favorit"))};case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=y(p().mark((function t(e){var r,n,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=g.transaction(["restoran"],"readonly"),n=r.objectStore("restoran"),o=n.get(e),t.abrupt("return",new Promise((function(t,e){o.onsuccess=function(e){var r=e.target.result;t(!!r)},o.onerror=function(t){e(t.target.error)}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=y(p().mark((function t(e){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=g.transaction(["restoran"],"readwrite"),r.objectStore("restoran").delete(e).onsuccess=function(t){console.log("Restaurant dengan ID ".concat(e," dihapus dari favorit"))};case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function k(){document.querySelector("main").innerHTML='\n    <header class="headF">\n      <h1>Your Favorite Restaurants</h1>\n    </header>\n    <main class="containerfav "id="favoritesList">\n      \x3c!-- Daftar restoran favorit akan ditampilkan di sini --\x3e\n    </main>\n  ';var t=document.getElementById("favoritesList");t.addEventListener("click",function(){var t=y(p().mark((function t(e){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.target.classList.contains("favorite-icon")){t.next=5;break}return r=e.target.dataset.restaurantId,t.next=4,x(r);case 4:e.target.parentElement.remove();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g.transaction(["restoran"],"readonly").objectStore("restoran").openCursor().onsuccess=function(e){var r=e.target.result;if(r){var n=r.value.id;fetch("https://restaurant-api.dicoding.dev/detail/".concat(n)).then((function(t){return t.json()})).then((function(e){var r=e.restaurant,n=document.createElement("div");n.classList.add("resto"),n.innerHTML='\n              <a href="#detail/'.concat(r.id,'">\n                <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/').concat(r.pictureId," alt='").concat(r.name,"'>\n                <h2>").concat(r.name,"</h2>\n                <p>Rating: ").concat(r.rating,"</p>\n              <p>Kota: ").concat(r.city,'</p>\n              </a>\n              <i class="fas fa-heart favorite-icon favorited" data-restaurant-id="').concat(r.id,'" style="color: #AD0000;" tabindex="0"></i>\n          '),t.appendChild(n)})),r.continue()}}}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".menu-toggle"),e=document.querySelector(".menu"),r=document.querySelectorAll(".bar"),n=document.querySelector(".close-icon"),o=function(){e.classList.toggle("active"),r.forEach((function(t){return t.classList.toggle("active")})),n.classList.toggle("active")};t.addEventListener("click",o),n.addEventListener("click",(function(){e.classList.remove("active"),r.forEach((function(t){return t.classList.remove("active")})),n.classList.remove("active")})),document.addEventListener("click",(function(o){e.contains(o.target)||t.contains(o.target)||(e.classList.remove("active"),r.forEach((function(t){return t.classList.remove("active")})),n.classList.remove("active"))})),document.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||o()}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector('a[href="#favorites"]').addEventListener("click",(function(t){t.preventDefault(),k(),window.location.hash="favorites"}))}));var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(a,t);var e,r,n,o=(r=a,n=f(),function(){var t,e=h(r);if(n){var o=h(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var e=(t=o.call(this)).attachShadow({mode:"open"}),r=document.createElement("footer");r.textContent="FOODIE ©2023, Aulia Augusta",e.appendChild(r);var n=document.createElement("style");return n.textContent="\n      footer {\n        background-color: #FFC670;\n        color: #FFEEEE;\n        padding: 15px;\n        text-align: center;\n      }\n    ",e.appendChild(n),t}return e=a,Object.defineProperty(e,"prototype",{writable:!1}),e}(s(HTMLElement));customElements.define("my-footer",j),r.e(474).then(r.t.bind(r,474,23)).then((function(t){return t.default})).catch((function(t){return alert(t)}))}}]);
//# sourceMappingURL=app~71c0e426.bundle.js.map