(()=>{"use strict";var e,r={146:(e,r,t)=>{function n(e,r){let t=document.createElement(e);t.innerText=r,document.body.append(t)}t.d(r,{createElem:()=>n})},594:(e,r,t)=>{var n=t(232);(0,t(146).createElem)("h1",n.default)},232:(e,r,t)=>{t.d(r,{default:()=>o});var n=t(314);const o="REMOTE pkg: "+t.n(n)()}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.c=t,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},n.l=(r,t,o,a)=>{if(e[r])e[r].push(t);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var p=l[f];if(p.getAttribute("src")==r){i=p;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=r),e[r]=[t];var s=(t,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},r={};n.I=(t,o)=>{o||(o=[]);var a,i,u,l,f=r[t];if(f||(f=r[t]={}),!(o.indexOf(f)>=0)){if(o.push(f),e[t])return e[t];n.o(n.S,t)||(n.S[t]={});var p=n.S[t],s=void 0,c=[];return"default"===t&&(a="1.0.0",u=p.apple=p.apple||{},(!(l=u[a])||!l.loaded&&(1!=!l.eager?i:s>l.from))&&(u[a]={get:()=>n.e(323).then((()=>()=>n(323))),from:s,eager:!1})),e[t]=c.length?Promise.all(c).then((()=>e[t]=1)):1}}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var o=t[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,p,s=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(p=(typeof(f=n[i]))[0]))return!l||("u"==s?u>o&&!a:""==s!=a);if("u"==p){if(!l||"u"!=s)return!1}else if(l)if(s==p)if(u<=o){if(f!=t[u])return!1}else{if(a?f>t[u]:f<t[u])return!1;f!=t[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(a||u<=o)return!1;l=!1,u--}else{if(u<=o||p<s!=a)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var c=[],d=c.pop.bind(c);for(i=1;i<t.length;i++){var h=t[i];c.push(1==h?d()|d():2==h?d()&d():h?r(h,n):!d())}return!!d()},t=(t,n,o)=>{var a=t[n];return(n=Object.keys(a).reduce(((t,n)=>!r(o,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(t,n)?t:n),0))&&a[n]},o=(e=>function(r,t,o,a){var i=n.I(r);return i&&i.then?i.then(e.bind(e,r,n.S[r],t,o,a)):e(r,n.S[r],t,o,a)})(((e,r,o,a,i)=>{var u=r&&n.o(r,o)&&t(r,o,a);return u?(e=>(e.loaded=1,e.get()))(u):i()})),a={},i={314:()=>o("default","apple",[1,1,0,0],(()=>n.e(323).then((()=>()=>n(323)))))};[314].forEach((e=>{n.m[e]=r=>{a[e]=0,delete n.c[e];var t=i[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var u={};n.f.consumes=(e,r)=>{n.o(u,e)&&u[e].forEach((e=>{if(n.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,n.m[e]=t=>{delete n.c[e],t.exports=r()}},o=r=>{delete a[e],n.m[e]=t=>{throw delete n.c[e],r}};try{var u=i[e]();u.then?r.push(a[e]=u.then(t).catch(o)):t(u)}catch(e){o(e)}}))}})(),(()=>{var e={179:0,232:0,146:0,594:0,314:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=a);var i=n.p+n.u(r),u=new Error;n.l(i,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[i,u,l]=t,f=0;if(i.some((r=>0!==e[r]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);l&&l(n)}for(r&&r(t);f<i.length;f++)a=i[f],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n(594)})();