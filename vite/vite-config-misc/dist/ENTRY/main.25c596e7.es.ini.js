const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};f();const h="modulepreload",d={},u="/",p=function(r,i){return!i||i.length===0?r():Promise.all(i.map(o=>{if(o=`${u}${o}`,o in d)return;d[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":h,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((l,c)=>{n.addEventListener("load",l),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())};var m="/London.1db6cc12.asset.png",g='London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones. Since the 19th century, "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which largely comprises Greater London, governed by the Greater London Authority. The City of Westminster, to the west of the City of London, has for centuries held the national government and parliament.',b="/test.6635e4eb.asset.js";let x=document.getElementById("btn");x.onclick=()=>{p(()=>import("../click.28b18d01.es.chunk.js"),[]).then(({default:a})=>{a()})};let y=document.getElementById("img"),w=document.getElementById("txt");y.src=m;w.innerText=g;let s=document.createElement("script");s.src=b;document.head.append(s);