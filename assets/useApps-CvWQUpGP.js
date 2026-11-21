import{b as i,aJ as s,f as u,r as n}from"./index-pages.js";function a(){const r=i(s),t=u();return n.useMemo(()=>r?r.filter(e=>e.limit_platform?e.limit_platform.includes("maddox")?!1:e.limit_platform.includes("freezenova")?t:e.limit_platform.includes("duckmath")?!t:!0:!0):[],[r,t])}export{a as u};

