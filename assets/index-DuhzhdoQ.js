import{u as F}from"./index-CsDlsuI0.js";import{r as m}from"./index-CBqU2yxZ.js";import{e as f,K as d,b as E,L as p,M as b,N as h,O as A}from"./factory-DBv693c8.js";const g=r=>{const e=r.current;if(!e)return!1;const s=h(e);return!s||e.contains(s)?!1:!!A(s)},L=(r,{shouldFocus:e,visible:s,focusRef:u})=>{const t=e&&!s;f(()=>{if(!t||g(r))return;const n=(u==null?void 0:u.current)||r.current;n&&requestAnimationFrame(()=>{n.focus()})},[t,r,u])},O=(r,{focusRef:e,preventScroll:s,shouldFocus:u,visible:t}={preventScroll:!0,shouldFocus:!1})=>{const n=d(r)?r.current:r,l=u&&t,c=m.useRef(l),a=m.useRef(t);E(()=>{!a.current&&t&&(c.current=l),a.current=t},[t,l]);const o=m.useCallback(()=>{if(!(!t||!n||!c.current)&&(c.current=!1,!n.contains(document.activeElement)))if(e!=null&&e.current)requestAnimationFrame(()=>{var i;(i=e.current)==null||i.focus({preventScroll:s})});else{const i=p(n);i.length>0&&requestAnimationFrame(()=>{i[0].focus({preventScroll:s})})}},[t,s,n,e]);f(()=>{o()},[o]),F(n,"transitionend",o)},V=({ref:r,elements:e,enabled:s})=>{const u=()=>{var t;return((t=r.current)==null?void 0:t.ownerDocument)??document};F(u,"pointerdown",t=>{if(!b()||!s)return;const n=t.target,c=(e??[r]).some(a=>{const o=d(a)?a.current:a;return(o==null?void 0:o.contains(n))||o===n});u().activeElement!==n&&c&&(t.preventDefault(),n.focus())})};export{L as a,O as b,V as u};