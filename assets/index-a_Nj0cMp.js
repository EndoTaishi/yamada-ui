import{u as h}from"./index-gWY0u-sb.js";import{u as b}from"./index-gvcGOgrq.js";import{r as a}from"./index-IybTgENJ.js";import{f as u,w as f,i as g,x as w,s as v}from"./factory-K2EgzEzN.js";import{u as l}from"./theme-provider-WG22_9xQ.js";const y=t=>{const{theme:n}=l();return u(t)?t.map(c=>f(c,n)).join(", "):f(t,n)},C=(t,n)=>{const{theme:c}=l(),e=a.useRef(g(n)?void 0:u(n)?n.map(String):String(n)),r=a.useRef(new Map),[m,d]=a.useState(()=>{for(const[s,o]of Object.entries(t)){if(r.current.has(s))return;u(o)?r.current.set(s,o.map(i=>f(i,c)).join(", ")):r.current.set(s,f(o,c))}return u(e.current)?e.current.map(s=>r.current.get(s)).join(", "):r.current.get(e.current??"")}),p=a.useCallback(s=>{const o=!g(e.current)&&u(t)?u(e.current)?e.current.map(Number):Number(e.current):e.current,i=w(s,o);e.current=u(i)?i.map(String):String(i),u(e.current)?d(e.current.map(A=>r.current.get(A)).join(", ")):d(r.current.get(e.current??""))},[t]);return[m,p]},M=({isOpen:t,ref:n})=>{const[c,e]=a.useState(t),[r,{on:m}]=h();return a.useEffect(()=>{r||(e(t),m())},[t,r,m]),b(()=>n.current,"animationend",()=>e(t)),{present:!(t?!1:!c),onAnimationComplete(){var o;const p=v(n.current),s=new p.CustomEvent("animationend",{bubbles:!0});(o=n.current)==null||o.dispatchEvent(s)}}};export{C as a,M as b,y as u};