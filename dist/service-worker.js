if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let f=Promise.resolve();return c[e]||(f=new Promise(async f=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=f}else importScripts(e),f()})),f.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},f=(f,c)=>{Promise.all(f.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(f)};self.define=(f,r,d)=>{c[f]||(c[f]=Promise.resolve().then(()=>{let c={};const a={uri:location.origin+f.slice(1)};return Promise.all(r.map(f=>{switch(f){case"exports":return c;case"module":return a;default:return e(f)}})).then(e=>{const f=d(...e);return c.default||(c.default=f),c})}))}}define("./service-worker.js",["./workbox-fae34d38"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"398544877871237554ccfd6afdc1910c"},{url:"1f3772178d9e5bed38a6ca738d28cd4b.woff2",revision:"4b162098158528431aeb5636116777f0"},{url:"3ac6859b28be946745f95de1136a7251.woff2",revision:"e2f5b365c7d3d4497da73148ddfae997"},{url:"3cd9fb8fcec4ad0f99d4062cd547a4ba.ttf",revision:"40e6df55734232692408d76ad5f9c34a"},{url:"41c0f706d8ce93933771be0292757b92.woff2",revision:"328a9d0f59f0ebb55cddac6f39995bea"},{url:"450a5c898f0b184b968b971eaf7c5fa4.ttf",revision:"0ef11ce096706bcafc520aee12162ae4"},{url:"4ee7f902d88f819e251c9129d67419de.woff2",revision:"6ddaf31a1e0e05490f6919cbb3347e9d"},{url:"50f6996115942255ac34992fbd5fa8f4.ttf",revision:"2d60119748ad949c9cc5e0cff0b1478e"},{url:"8679cfe4aaf7056177c5c3d759b01abf.ttf",revision:"ac605c1d14dde74f6afaa71459fc6fd1"},{url:"b1a653db79258eeccc5d0bb8726f6600.ttf",revision:"c0bf087a238488d351270a35c8f0cca0"},{url:"be7cc766f09a5d90818316628b017b34.ttf",revision:"64a681b63dd04aa89f4e6ffa38922f9c"},{url:"d609eb3603ef0c74c4391ccc1369bc7e.ttf",revision:"9d62b75141c859f4e7f23cc1bb29521f"},{url:"e314b618134d5be20996d79e7245160b.ttf",revision:"36818ecc50af8ea6c4cbef88d0b2baad"},{url:"ea7b858b9013751e5fa1f1dd6d6bcd35.jpg",revision:"a8a958b008141caa063308d0e67c998f"},{url:"main.css",revision:"72f0f7bea7475282931579eb3e769bd7"},{url:"main.js",revision:"3c86eece93464092df60a709b8592777"}],{})}));