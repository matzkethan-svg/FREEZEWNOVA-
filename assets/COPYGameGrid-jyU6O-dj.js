import{B as A,b as I,c as z,r as c,z as M,j as t,i as w,g as d,ai as r,ah as P,ag as R,x as T,am as j}from"./index-pages.js";import{c as W,G as B,P as D,A as C,R as F,b as V}from"./RelatedCategories-DW6GJ7ge.js";import{u as H,L as O,G as U}from"./setAppPlayed-D8xCnCvx.js";import{B as q}from"./BottomMarkdown-HIxwo1p6.js";/* empty css                */import{S as J}from"./SEOHelmet-CX5-NIcH.js";import K from"./404-DLoeaAfh.js";import{u as Q}from"./useApps-CvWQUpGP.js";import"./testConts-vN1Nohsa.js";import"./useCategories-DpWsTn0J.js";import"./useCurUser-ZYBhaQ5O.js";import"./GameIframe-DX7E5bgd.js";import"./Icon-DBzLzxjf.js";const p={underPill:"slot-6",topRight:"slot-3",underGame:"slot-5"},X=["slot-1","slot-2","slot-4","slot-7","slot-8","slot-9","slot-10"],Y={width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%"},Z={display:"none"},g=({slotId:u})=>t.jsx("div",{className:"egg-container",children:t.jsx("div",{className:"egg-wrapper",children:t.jsx("div",{id:u,style:Y})})}),ge=()=>{var x,S,v;const b=(x=A().title)==null?void 0:x.toLowerCase(),o=Q(),n=I(z),E=n==null?void 0:n.Apps,_=n==null?void 0:n.Categories,[m,N]=c.useState(typeof window<"u"?window.innerWidth:1024),f=c.useRef(!1);c.useEffect(()=>{const s=()=>N(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),c.useEffect(()=>{if(typeof window>"u"||f.current)return;const s=document.head||document.getElementsByTagName("head")[0];if(!s)return;const a=[];if(!document.getElementById("vm-loader-script")){const i=document.createElement("script");i.id="vm-loader-script",i.innerHTML=`(function () {
  var script = document.createElement("script");
  script.src =
    "https://hb.vntsm.com/v4/live/vms/sites/" +
    window.location.hostname +
    "/index.js";
  script.async = true;
  document.head.appendChild(script);
})();`,a.push(i)}if(!document.getElementById("vm-config-script")){const i=document.createElement("script");i.id="vm-config-script",i.innerHTML=`self.__VM = self.__VM || [];
self.__VM.push(function (admanager, scope) {
  scope.Config.get("desktop_takeover").display("slot-1");
  scope.Config.get("mobile_takeover").display("slot-2");
  scope.Config.get("skyscraper").display("slot-3");
  scope.Config.get("billboard").display("slot-4");
  scope.Config.get("leaderboard").display("slot-5");
  scope.Config.get("double_mpu").display("slot-6");
  scope.Config.get("mpu").display("slot-7");
  scope.Config.get("mobile_banner").display("slot-8");
  scope.Config.get("mobile_mpu").display("slot-9");
  scope.Config.get("video").display("slot-10");
});`,a.push(i)}a.forEach(i=>s.appendChild(i)),a.length&&(f.current=!0)},[]);const L=b||"steal-a-brainrot",e=o==null?void 0:o.find(s=>{var a;return((a=s.title)==null?void 0:a.toLowerCase())===L});H(e);const $=M((e==null?void 0:e.title)||"");if(E||_||!(o!=null&&o.length))return t.jsx(O,{});if(!e)return t.jsx(K,{});const h=new Set(((S=e.categories)==null?void 0:S.split(" "))||[]),y=o.filter(s=>Array.from(h).some(a=>{var i;return((i=s.categories)==null?void 0:i.includes(a))||!1})).slice(0,50),l=Array.from(h)[0],k=w()&&l?W(e,d(!1),l,o):null,G=(v=e==null?void 0:e.categories)==null?void 0:v.split(" ").join(", ");return t.jsxs("div",{children:[t.jsx(J,{seo:{title:`${r(e.title)} Unblocked - ${d(!1)}`,description:(e==null?void 0:e.desc)||`Play ${r(e.title)} unblocked at school! Free online game with no downloads.`,keywords:`${G}, unblocked games, free games, online games, school games, unblocked`,image:e==null?void 0:e.icon},regular:{title:`${d(!1)} Study Set ${r(e.title)}`,description:`Study the ${r(e.title)} flashcard set. Master key concepts with spaced repetition and active recall.`,keywords:"flashcards, study, learning, education, memorization"},structuredData:k||void 0}),t.jsxs(B,{children:[t.jsx(D,{size:"1x1"}),t.jsx(U,{app:e}),m>564&&t.jsx("li",{className:"egg-vertical-under-pill",children:t.jsx(g,{slotId:p.underPill})}),m>=1074&&t.jsx("li",{className:"egg-vertical-top-right",children:t.jsx(g,{slotId:p.topRight})}),m>=834&&t.jsx("li",{className:"egg-horizontal-under-game",children:t.jsx(g,{slotId:p.underGame})}),y.slice(0,2).map(s=>t.jsx(C,{title:s.title,icon:s.icon,id:String(s.id),size:"1x1"},s.id)),y.slice(3).map(s=>t.jsx(C,{title:s.title,icon:s.icon,id:String(s.id),size:"1x1"},s.id)),t.jsx(F,{app:e})]}),t.jsx("div",{className:"vm-hidden-ad-slots","aria-hidden":"true",style:Z,children:X.map(s=>t.jsx("div",{id:s},s))}),w()&&t.jsx("div",{className:"px-4 pb-8",children:t.jsx(q,{rating:j(e).rating,totalRatings:j(e).totalVotes,title:r(e.title),breadcrumb:[{label:d(!1),href:"/"},{label:R(l),href:P(l)},{label:r(e.title),href:T($)}],content:`${e.desc||""}

## Developer

${e.developer_name||"N/A"}

## Controls

${e.controls||"N/A"}

## Devices

${r(e.title)} can be played on: ${e.devices||"N/A"}

${V(e,void 0,o)}`})})]})};export{ge as default};

