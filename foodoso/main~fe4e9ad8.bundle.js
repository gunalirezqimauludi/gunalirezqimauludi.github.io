/*! For license information please see main~fe4e9ad8.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{24:function(t,n,e){e=e(59);e&&e.__esModule&&(e=e.default),t.exports="string"==typeof e?e:e.toString()},25:function(t,n){t.exports=""},58:function(t,n,o){"use strict";(function(u){var t=o(0),n=o(24),e=o.n(n),n=o(25),n=o.n(n);function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){j=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,f=Object.defineProperty||function(t,n,e){t[n]=e.value},n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",e=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function i(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{i({},"")}catch(a){i=function(t,n,e){return t[n]=e}}function c(t,n,e,r){var o,i,a,c,n=n&&n.prototype instanceof d?n:d,n=Object.create(n.prototype),r=new x(r||[]);return f(n,"_invoke",{value:(o=t,i=e,a=r,c="suspendedStart",function(t,n){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw n;return E()}for(a.method=t,a.arg=n;;){var e=a.delegate;if(e){var r=function t(n,e){var r=e.method,o=n.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=void 0,t(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;o=s(o,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var o=o.arg;return o?o.done?(e[n.resultName]=o.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}(e,a);if(r){if(r===l)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=s(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===l)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),n}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l={};function d(){}function p(){}function h(){}var m={};i(m,r,function(){return this});n=Object.getPrototypeOf,n=n&&n(n(O([])));n&&n!==t&&u.call(n,r)&&(m=n);var y=h.prototype=d.prototype=Object.create(m);function v(t){["next","throw","return"].forEach(function(n){i(t,n,function(t){return this._invoke(n,t)})})}function g(a,c){var n;f(this,"_invoke",{value:function(e,r){function t(){return new c(function(t,n){!function n(t,e,r,o){t=s(a[t],a,e);if("throw"!==t.type){var i=t.arg,e=i.value;return e&&"object"==L(e)&&u.call(e,"__await")?c.resolve(e.__await).then(function(t){n("next",t,r,o)},function(t){n("throw",t,r,o)}):c.resolve(e).then(function(t){i.value=t,r(i)},function(t){return n("throw",t,r,o)})}o(t.arg)}(e,r,t,n)})}return n=n?n.then(t,t):t()}})}function b(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function w(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function O(n){if(n){var t=n[r];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,t=function t(){for(;++e<n.length;)if(u.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return t.next=t}}return{next:E}}function E(){return{value:void 0,done:!0}}return f(y,"constructor",{value:p.prototype=h,configurable:!0}),f(h,"constructor",{value:p,configurable:!0}),p.displayName=i(h,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},a.awrap=function(t){return{__await:t}},v(g.prototype),i(g.prototype,e,function(){return this}),a.AsyncIterator=g,a.async=function(t,n,e,r,o){void 0===o&&(o=Promise);var i=new g(c(t,n,e,r),o);return a.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(y),i(y,o,"Generator"),i(y,r,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),a.keys=function(t){var n,e=Object(t),r=[];for(n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},a.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var n in this)"t"===n.charAt(0)&&u.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;0<=n;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),w(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;0<=n;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r,o=e.completion;return"throw"===o.type&&(r=o.arg,w(e)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},a}function f(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return e(t),0}c.done?n(u):Promise.resolve(u).then(r,o)}function s(t,n){for(var e,r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(e=function(t){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return String(t);t=n.call(t,"string");if("object"!==L(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(o.key),"symbol"===L(e)?e:String(e)),o)}}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)})(t)}function r(t,n,e){return(r=d()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&p(r,e.prototype),r}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t,n){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=Object(t.a)(n.a,e.a),e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&p(t,n)}(a,l(HTMLElement));var e,r,t,n,c,o,i=(e=a,r=d(),function(){var t,n=h(e);return function(t,n){if(n&&("object"===L(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r?(t=h(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments))});function a(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return t=a,n=[{key:"content",set:function(t){this._items=t,this.render()}},{key:"render",value:(c=j().mark(function t(){var n;return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u("card-food").html(m.content.cloneNode(!0)),n=this._items.map(function(t){return'\n    <div class="main-card">\n        <div class="col-image">\n            <img class="lazyload" src="assets/images/loading.gif" data-src="'.concat(t.picture.medium,'" \n                data-srcset="').concat(t.picture.small," 480w, ").concat(t.picture.large,' 800w"\n                sizes="(max-width: 600px) 480px, 800px"\n                alt="').concat(t.name,'" crossorigin="anonymous"/>\n        </div>\n        <div class="col-info">\n            <h1>').concat(t.name,'</h1>\n            <div class="basic-info">\n                <div class="basic-info-col">\n                    <i class="fa fa-star active" aria-hidden="true"></i>\n                    <span>').concat(t.rating,'</span>\n                </div>\n                <div class="basic-info-col">\n                    <i class="fa fa-clock-o" aria-hidden="true"></i>\n                    <span>').concat(t.time,' Mins</span>\n                </div>\n                <div class="basic-info-col">\n                    <i class="fa fa-info-circle" aria-hidden="true"></i>\n                    <span>').concat(t.category,'</span>\n                </div>\n            </div>\n            <p class="additional-info">\n                ').concat(t.description,"\n            </p>\n        </div>\n    </div>")}),u("card-food").append(n);case 3:case"end":return t.stop()}},t,this)}),o=function(){var t=this,a=arguments;return new Promise(function(n,e){var r=c.apply(t,a);function o(t){f(r,n,e,o,i,"next",t)}function i(t){f(r,n,e,o,i,"throw",t)}o(void 0)})},function(){return o.apply(this,arguments)})}],s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}();customElements.define("card-food",e)}).call(this,o(2))},59:function(t,n,e){(n=e(3)(!1)).push([t.i,".main-content card-food {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.main-content card-food .main-card {\n    display: grid;\n    grid-template-columns: 38% 62%;\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 5px 10px 0 rgba(51, 54, 69, 0.1);\n    margin-bottom: 15px;\n}\n\n.main-content card-food .main-card .col-image {\n    padding: 10px;\n    height: 100px;\n}\n\n.main-content card-food .main-card .col-image img {\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    object-fit: cover;\n}\n\n.main-content card-food .main-card .col-info {\n    padding: 15px 5px;\n}\n\n.main-content card-food .main-card .col-info h1 {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 1em;\n}\n\n.main-content card-food .main-card .col-info .basic-info {\n    display: grid;\n    grid-template-columns: 40px 62px 100px;\n    margin-bottom: 10px;\n    font-size: 10px;\n}\n\n.main-content card-food .main-card .col-info .basic-info i.fa.active {\n    color: #ffc107;\n}\n\n.main-content card-food .main-card .col-info .additional-info {\n    font-size: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-height: 5.6em;\n    line-height: 1.8em;\n    color: #6d6d6d;\n    margin-bottom: 0;\n}\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991.98px) {\n    .main-content card-food {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 20px;\n    }\n\n    .main-content card-food .main-card {\n        margin-bottom: 0;\n    }\n}\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) and (max-width: 1199.98px) {\n    .main-content card-food {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 15px;\n    }\n\n    .main-content card-food .main-card {\n        margin-bottom: 0;\n    }\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n    .main-content card-food {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 15px;\n    }\n\n    .main-content card-food .main-card {\n        margin-bottom: 0;\n    }\n}\n\n/* Min Large devices */\n@media (min-width: 992px) {\n    .main-content card-food .main-card {\n        margin-bottom: 0;\n    }\n}",""]),t.exports=n}}]);