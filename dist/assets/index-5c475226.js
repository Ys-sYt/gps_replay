var q=(t,s)=>()=>(s||t((s={exports:{}}).exports,s),s.exports);import D from"https://unpkg.com/mp4-h264@1.0.7/build/mp4-encoder.js";import{simd as z}from"https://unpkg.com/wasm-feature-detect?module";var Y=q((S,j)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();(function(t,s){typeof S=="object"&&typeof j<"u"?s(S):typeof define=="function"&&define.amd?define(["exports"],s):s((t=typeof globalThis<"u"?globalThis:t||self).d3=t.d3||{})})(globalThis,function(t){function s(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function c(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var f=function e(r){function i(a){return Math.pow(a,r)}return r=+r,i.exponent=e,i}(3),o=function e(r){function i(a){return 1-Math.pow(1-a,r)}return r=+r,i.exponent=e,i}(3),n=function e(r){function i(a){return((a*=2)<=1?Math.pow(a,r):2-Math.pow(2-a,r))/2}return r=+r,i.exponent=e,i}(3),m=Math.PI,y=m/2;function g(e){return(1-Math.cos(m*e))/2}function p(e){return 1.0009775171065494*(Math.pow(2,-10*e)-.0009765625)}function h(e){return((e*=2)<=1?p(1-e):2-p(e-1))/2}function l(e){return((e*=2)<=1?1-Math.sqrt(1-e*e):Math.sqrt(1-(e-=2)*e)+1)/2}var b=4/11,w=7.5625;function O(e){return(e=+e)<b?w*e*e:e<.7272727272727273?w*(e-=.5454545454545454)*e+.75:e<.9090909090909091?w*(e-=.8181818181818182)*e+.9375:w*(e-=.9545454545454546)*e+.984375}var I=1.70158,v=function e(r){function i(a){return(a=+a)*a*(r*(a-1)+a)}return r=+r,i.overshoot=e,i}(I),x=function e(r){function i(a){return--a*a*((a+1)*r+a)+1}return r=+r,i.overshoot=e,i}(I),L=function e(r){function i(a){return((a*=2)<1?a*a*((r+1)*a-r):(a-=2)*a*((r+1)*a+r)+2)/2}return r=+r,i.overshoot=e,i}(I),P=2*Math.PI,N=function e(r,i){var a=Math.asin(1/(r=Math.max(1,r)))*(i/=P);function M(u){return r*p(- --u)*Math.sin((a-u)/i)}return M.amplitude=function(u){return e(u,i*P)},M.period=function(u){return e(r,u)},M}(1,.3),E=function e(r,i){var a=Math.asin(1/(r=Math.max(1,r)))*(i/=P);function M(u){return 1-r*p(u=+u)*Math.sin((u+a)/i)}return M.amplitude=function(u){return e(u,i*P)},M.period=function(u){return e(r,u)},M}(1,.3),T=function e(r,i){var a=Math.asin(1/(r=Math.max(1,r)))*(i/=P);function M(u){return((u=2*u-1)<0?r*p(-u)*Math.sin((a-u)/i):2-r*p(u)*Math.sin((a+u)/i))/2}return M.amplitude=function(u){return e(u,i*P)},M.period=function(u){return e(r,u)},M}(1,.3);t.easeBack=L,t.easeBackIn=v,t.easeBackInOut=L,t.easeBackOut=x,t.easeBounce=O,t.easeBounceIn=function(e){return 1-O(1-e)},t.easeBounceInOut=function(e){return((e*=2)<=1?1-O(1-e):O(e-1)+1)/2},t.easeBounceOut=O,t.easeCircle=l,t.easeCircleIn=function(e){return 1-Math.sqrt(1-e*e)},t.easeCircleInOut=l,t.easeCircleOut=function(e){return Math.sqrt(1- --e*e)},t.easeCubic=c,t.easeCubicIn=function(e){return e*e*e},t.easeCubicInOut=c,t.easeCubicOut=function(e){return--e*e*e+1},t.easeElastic=E,t.easeElasticIn=N,t.easeElasticInOut=T,t.easeElasticOut=E,t.easeExp=h,t.easeExpIn=function(e){return p(1-+e)},t.easeExpInOut=h,t.easeExpOut=function(e){return 1-p(e)},t.easeLinear=e=>+e,t.easePoly=n,t.easePolyIn=f,t.easePolyInOut=n,t.easePolyOut=o,t.easeQuad=s,t.easeQuadIn=function(e){return e*e},t.easeQuadInOut=s,t.easeQuadOut=function(e){return e*(2-e)},t.easeSin=g,t.easeSinIn=function(e){return+e==1?1:1-Math.cos(e*y)},t.easeSinInOut=g,t.easeSinOut=function(e){return Math.sin(e*y)},Object.defineProperty(t,"__esModule",{value:!0})});let B;function F(t,s,c){return(1-c)*t+c*s}const R=(t,s,c,f,o=!1)=>{var n=s/57.29,m=(90-t)/57.29,y=f/Math.tan(m)*Math.sin(-n)/7e4,g=f/Math.tan(m)*Math.cos(-n)/11e4,p=c.lng+y,h=c.lat-g;const l={lng:p,lat:h};return o&&B&&(l.lng=F(l.lng,B.lng,.7),l.lat=F(l.lat,B.lat,.7)),B=l,l},C=(t,s,c=64)=>{const f={latitude:t[1],longitude:t[0]},o=s,n=[],m=o/(111.32*Math.cos(f.latitude*Math.PI/180)),y=o/110.574;let g,p,h;for(let l=0;l<c;l+=1)g=l/c*(2*Math.PI),p=m*Math.cos(g),h=y*Math.sin(g),n.push([f.longitude+p,f.latitude+h]);return n.push(n[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[n]}}},H=async({map:t,targetLngLat:s,duration:c,startAltitude:f,endAltitude:o,startBearing:n,endBearing:m,startPitch:y,endPitch:g,prod:p})=>new Promise(async h=>{let l;var b,w,O;const I=async v=>{l||(l=v);let x=(v-l)/c;x>1&&(x=1),b=f+(o-f)*d3.easeCubicOut(x),w=n+(m-n)*d3.easeCubicOut(x),O=y+(g-y)*d3.easeCubicOut(x);var L=R(O,w,s,b);const P=t.getFreeCameraOptions();if(P.setPitchBearing(O,w),P.position=mapboxgl.MercatorCoordinate.fromLngLat(L,b),t.setFreeCameraOptions(P),x===1){h({bearing:w,altitude:b});return}await window.requestAnimationFrame(I)};await window.requestAnimationFrame(I)}),_=async({map:t,duration:s,path:c,startBearing:f,startAltitude:o,pitch:n,prod:m})=>new Promise(async y=>{const g=turf.lineDistance(c);let p;const h=async l=>{p||(p=l);const b=(l-p)/s;if(b>1){y();return}const w=turf.along(c,g*b).geometry.coordinates,O={lng:w[0],lat:w[1]};t.setPaintProperty("line-layer","line-gradient",["step",["line-progress"],"yellow",b,"rgba(0, 0, 0, 0)"]);const I=f-b*-200;var v=R(n,I,O,o,!0);const x=t.getFreeCameraOptions();x.setPitchBearing(n,I),x.position=mapboxgl.MercatorCoordinate.fromLngLat(v,o),t.setFreeCameraOptions(x),await window.requestAnimationFrame(h)};await window.requestAnimationFrame(h)}),J=new URLSearchParams(window.location.search);Object.fromEntries(J.entries());const A=!0;document.getElementById("map").style.height="1080px",document.getElementById("map").style.width="1080px";mapboxgl.accessToken="pk.eyJ1IjoieXNzeXlzc3kiLCJhIjoiY2wyZ2FhbHNuMDF6NjNjcGIwdDBtcHRmcSJ9.GjmchIhcpqOWWg0b21Pc0g";const d=new mapboxgl.Map({container:"map",style:"https://api.maptiler.com/maps/b532901a-8fd9-4516-ab5f-32a9f6b4aba7/style.json?key=xeycR1Jqna3Gkrzt6ZBw",center:[25.024,60.228],zoom:4});window.map=d;d.on("load",async()=>{k();const t=await z(),s=await D({simd:t}),c=d.painter.context.gl,f=c.drawingBufferWidth,o=c.drawingBufferHeight,n=s.create({width:f,height:o,fps:30,kbps:64e3,rgbFlipY:!0});let m=performance.now();mapboxgl.setNow(m);const y=n.getRGBPointer();function g(){m+=1e3/60,mapboxgl.setNow(m);const h=n.memory().subarray(y);c.readPixels(0,0,f,o,c.RGBA,c.UNSIGNED_BYTE,h),n.encodeRGBPointer()}d.on("render",g);const p=await fetch("./hel-hannja.geojson").then(h=>h.json());await Q(p),d.off("render",g),mapboxgl.restoreNow();{const h=n.end(),l=document.createElement("a");l.href=URL.createObjectURL(new Blob([h],{type:"video/mp4"})),l.download="hel-hannja",l.click()}});const k=()=>{d.setFog({range:[.5,10],color:"white","horizon-blend":.2}),d.addLayer({id:"sky",type:"sky",paint:{"sky-type":"atmosphere","sky-atmosphere-color":"rgba(85, 151, 210, 0.5)"}}),d.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.terrain-rgb",tileSize:512,maxzoom:14}),d.setTerrain({source:"mapbox-dem",exaggeration:1.5})},Q=async t=>new Promise(async s=>{U(t);var c={lng:t.geometry.coordinates[0][0],lat:t.geometry.coordinates[0][1]};const{bearing:f,altitude:o}=await H({map:d,targetLngLat:c,duration:3e3,startAltitude:3e5,endAltitude:1e5,startBearing:0,endBearing:180,startPitch:0,endPitch:10,prod:A});await _({map:d,duration:2e4,path:t,startBearing:f,startAltitude:o,pitch:10,prod:A});const n=turf.bbox(t);d.fitBounds(n,{duration:1500,pitch:0,bearing:0,padding:120}),setTimeout(()=>{s()},1e4)}),U=t=>{d.addSource("line",{type:"geojson",lineMetrics:!0,data:t}),d.addLayer({id:"line-layer",type:"line",source:"line",paint:{"line-color":"rgba(0,0,0,0)","line-width":9,"line-opacity":.8},layout:{"line-cap":"round","line-join":"round"}}),d.addSource("start-pin-base",{type:"geojson",data:C(t.geometry.coordinates[0],.04)}),d.addSource("start-pin-top",{type:"geojson",data:C(t.geometry.coordinates[0],.25)}),d.addSource("end-pin-base",{type:"geojson",data:C(t.geometry.coordinates.slice(-1)[0],.04)}),d.addSource("end-pin-top",{type:"geojson",data:C(t.geometry.coordinates.slice(-1)[0],.25)}),d.addLayer({id:"start-fill-pin-base",type:"fill-extrusion",source:"start-pin-base",paint:{"fill-extrusion-color":"#0bfc03","fill-extrusion-height":1e3}}),d.addLayer({id:"start-fill-pin-top",type:"fill-extrusion",source:"start-pin-top",paint:{"fill-extrusion-color":"#0bfc03","fill-extrusion-base":1e3,"fill-extrusion-height":1200}}),d.addLayer({id:"end-fill-pin-base",type:"fill-extrusion",source:"end-pin-base",paint:{"fill-extrusion-color":"#eb1c1c","fill-extrusion-height":1e3}}),d.addLayer({id:"end-fill-pin-top",type:"fill-extrusion",source:"end-pin-top",paint:{"fill-extrusion-color":"#eb1c1c","fill-extrusion-base":1e3,"fill-extrusion-height":1200}})}});export default Y();
