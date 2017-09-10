"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","e1c37feda2b2d5e079ce57b89b2a391f"],["service-worker.js","a36a41aabca7c7734ebc49de812769e5"],["static/css/app.e6fe5b255e9c9209a09008e4fc660780.css","37cdb5bc3fb0ad26b32939ca96e9302e"],["static/js/0.272827c39a0d9bb3bdff.js","ac86e1897ca0af7ca91c112d640699a2"],["static/js/1.226dac34f05c54fa82f6.js","195ce6e94fa9c1e2660900492d61c9d2"],["static/js/2.1bb1b799a0071c7b953e.js","ef9b3d35daf36fb76f0a74d4ac3ad13b"],["static/js/3.0f54fd7a623f62843bab.js","d139dca37c667071dac110b2832a2983"],["static/js/4.6d840f3300eea12e4a3e.js","edbeb3a08d474138c9b30928d96774b4"],["static/js/5.6202e3cbab222970359b.js","02ea72a1fa31934f73f9eed5916aadc2"],["static/js/6.75e8306cbc78a5d2a31b.js","aec3f55546ac4da3b25979cae231bb8d"],["static/js/7.f04f1b1da500674d7ad2.js","f670d53941c046a63884d8cf2727de71"],["static/js/8.930bc3919ecf10166394.js","ae2871e8faa46f30640659cc6f9dcdae"],["static/js/9.8af2d5ed2bbe992582fb.js","2289d164232acb8f0a73415f30b16ffd"],["static/js/app.e7a4a1a8dafbcaa74137.js","9cece1fb82d4a156e53e906b6f3ad6d9"],["static/js/manifest.3f1024d34afbd1d0850d.js","e5b009d402d88cb0184f4a79ed9a3e67"],["static/js/vendor.f980cec2fe46747e2993.js","46f03e148bbdba717caa8ed4339d4266"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,!1);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});