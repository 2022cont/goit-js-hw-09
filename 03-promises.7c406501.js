!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function a(e,n){return new Promise((function(t,o){var i=Math.round()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var u=function(e){return document.querySelector(e)},l=u('input[name = "amount"]'),c=u('input[name = "delay"]'),f=u('input[name = "step"]');u('button[type = "submit"]').addEventListener("click",(function(n){n.preventDefault();for(var t=parseInt(l.value),o=parseInt(c.value),i=parseInt(f.value),u=1;u<=t;u++)a(u,o).then((function(n){var t=n.position,o=n.delay;e(r).Notify.info("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.info("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),o=+i}))}();
//# sourceMappingURL=03-promises.7c406501.js.map
