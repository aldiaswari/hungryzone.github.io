(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,,,function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="content">\n    <h2 class="content__heading title">Best <span>Restaurant</span></h2>\n    <hr class="line-resto">\n    <loading-indicator></loading-indicator>\n    <div id="restaurant" class="restaurant">\n    </div>\n    </div>\n      '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("content-restaurant",e)},,,,,,,,,function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <header class="app-bar">\n    <div class="app-bar__menu">\n    <button id="hamburgerButton" class="hamburger-menu" aria-label="click to show navbar">☰</button>\n    </div>\n    <div class="app-bar__brand">\n    <img class="logo" src="/hungryzone.png" alt="Hungry Logo" crossorigin="anonymous"/>\n    </div>\n    <nav id="navigationDrawer" class="app-bar__navigation">\n        <ul>\n            <li><a class="active" href="#">Home</a></li>\n            <li><a href="#/favorite">Favorite</a></li>\n            <li><a href="https://github.com/aldiaswari">About</a></li>\n        </ul>\n    </nav>\n    </header>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("app-bar",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="hero">\n    <div class="hero-inner">\n      <p class="welcome-text">Welcome!</p>\n      <h1 class="title"><span>Hungry</span>Zone</h1>\n      <p class="tagline">The best restaurant recommendation site in all of Indonesia</p>\n    </div>\n  </div>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("hero-image",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="restaurant-services">\n        <section class="page-section">\n            <div class="container">\n                <div class="text-center">\n                    <h2 class="section-heading title">Our <span>Services</span></h2>\n                    <h3 class="section-subheading">Find your favorite restaurant</h3>\n                </div>\n            </div>\n        </section>\n        <div class="row">\n            <div class="col">\n                <span>\n                <img class"img-nearby lazyload" src="../assets/location-resto.png" alt="nearby"></img>\n                </span>\n                <h4 class="my-best-restaurant">Restaurant</h4>\n                <p class="text-best-restaurant">Banyak restaurant kesukaanmu dengan makanan yang lezat!</p>\n            </div>\n            <div class="col">\n                <span>\n                <img sclass"img-asyik lazyload" src="../assets/nyaman.png" alt="asyik"></img>\n                </span>\n                <h4 class="my-best-restaurant">Nyaman</h4>\n                <p class="text-best-restaurant">Dengan tempat yang asyik untuk bersantai sambil menghidangkan makanan</p>\n            </div>\n            <div class="col">\n                <span>\n                <img class"img-pelayanan lazyload" src="../assets/pelayanan.png" alt="pelayan"></img>\n                </span>\n                <h4 class="my-best-restaurant">Pelayanan</h4>\n                <p class="text-best-restaurant">Dengan pelayanan yang baik dan ramah membuat kamu semakin betah</p>\n            </div>\n        </div> \n      </div>\n     '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("our-services",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="gallery content">\n    <h1 class="title">Food Gallery</h1>\n    <div class="image-gallery">\n    <picture>\n    <source media="(max-width: 600px)" srcset="./images/1-small.jpg">\n      <img data-src="./images/1-large.jpg"\n        class="lazyload"\n        data-srcset="./images/1-small.jpg 480w, ./images/1-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="nasi goreng">\n    </picture>\n    <picture>\n    <source media="(max-width: 600px)" srcset="./images/2-small.jpg">\n      <img data-src="./images/2-large.jpg"\n        class="lazyload"\n        data-srcset="./images/2-small.jpg 480w, ./images/2-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="steak">\n    </picture>\n    <picture>\n    <source media="(max-width: 600px)" srcset="./images/3-small.jpg">\n      <img data-src="./images/3-large.jpg"\n        class="lazyload"\n        data-srcset="./images/3-small.jpg 480w, ./images/3-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="spaghetti">\n     </picture>\n     <picture>\n    <source media="(max-width: 600px)" srcset="./images/4-small.jpg">\n      <img data-src="./images/4-large.jpg"\n        class="lazyload"\n        data-srcset="./images/4-small.jpg 480w, ./images/4-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="hamburger">\n      </picture>\n      <picture>\n    <source media="(max-width: 600px)" srcset="./images/5-small.jpg">\n      <img data-src="./images/5-large.jpg"\n        class="lazyload"\n        data-srcset="./images/5-small.jpg 480w, ./images/5-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="sushi">\n      </picture>\n      <picture>\n      <source media="(max-width: 600px)" srcset="./images/6-small.jpg">\n      <img data-src="./images/6-large.jpg"\n        class="lazyload"\n        data-srcset="./images/6-small.jpg 480w, ./images/6-large.jpg 800w"\n        sizes="(max-width: 600px) 480px, 800px"\n        alt="pizza">\n      </picture>\n    </div>\n  </div>\n      '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("gallery-foods",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="loader"></div>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("loading-indicator",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="error-data">\n        <h1>Gagal memuat konten!</h1>\n        <p>Silahkan refresh kembali halaman untuk mencoba lagi</p>\n      </div>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("error-message",e)},function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="error-data">\n        <h1>Data tidak tersedia!</h1>\n        <p class="favorite-message">Data restaurant favorit tidak ditemukan</p>\n      </div>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("favorite-message",e)},,,function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(e){var r=u();return function(){var t,n=s(e);return t=r?(t=s(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),n=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):t}}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function r(t,n,e){return(r=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);r=new(Function.bind.apply(t,r));return e&&l(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,a(HTMLElement));var t,n,e,r=c(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <section class="review" id="review">\n\n    <h1 class="heading center"> our customers <span>reviews</span> </h1>\n\n    <div class="box-container">\n\n        <div class="box">\n        <picture>\n        <source media="(max-width: 600px)" srcset="./images/pic1-small.jpg">\n        <img data-src="./images/pic1-large.jpg"\n              class="lazyload"\n              data-srcset="./images/pic1-small.jpg 480w, ./images/pic1-large.jpg 800w"\n              sizes="(max-width: 600px) 480px, 800px"\n              alt="aldiaswari">\n        </picture>\n            <h3>Aldi Aswari</h3>\n            <div class="stars">\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>\n        </div>\n        <div class="box">\n        <picture>\n        <source media="(max-width: 600px)" srcset="./images/pic2-small.jpg">\n          <img data-src="./images/pic2-large.jpg"\n              class="lazyload"\n              data-srcset="./images/pic2-small.jpg 480w, ./images/pic2-large.jpg 800w"\n              sizes="(max-width: 600px) 480px, 800px"\n              alt="stringinteger">\n        </picture>\n            <h3>String Integer</h3>\n            <div class="stars">\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n                <i class="fa fa-star"></i>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>\n        </div>\n     </div>\n\n    </section>\n    '}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("home-review",e)}]]);