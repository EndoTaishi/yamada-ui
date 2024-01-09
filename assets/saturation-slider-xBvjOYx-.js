import{j as _,a as pt}from"./jsx-runtime-5BUNAZ9W.js";import{u as dt}from"./index-JMKbXlj-.js";import{u as mt,a as ft,b as gt}from"./index-DSIrOfFP.js";import{r as i}from"./index-4g5l5LRQ.js";import{u as ht,f as W,g as bt}from"./form-control-oXY4zBAU.js";import{g as Z,B as vt,e as yt,o as Pt,w as L,Q as U,K as St,h as q,s as Ct,u as g,a as tt}from"./factory-Ddmu4EkR.js";import{r as et,c as h}from"./number-RReIgE2V.js";import{h as wt,o as kt}from"./theme-provider-ePNg-PER.js";import{f as _t}from"./forward-ref-A-8Arhkk.js";import{u as xt}from"./use-component-style-zqeBCG90.js";const It=c=>{let p=[([u])=>({bg:`hsl(${u}, 100%, 50%)`,bgImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, transparent)"})];return c&&(p=[...p,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),p},Rt=({focusThumbOnChange:c=!0,...p})=>{c||(p.isReadOnly=!0);let{id:u,name:x,value:I,defaultValue:j=[0,0,1],onChange:A,onChangeStart:D,onChangeEnd:E,step:d=.01,thumbColor:R,required:F,disabled:b,readOnly:v,withShadow:T=!0,overlays:$=It(T),...s}=ht(p);const B=Z(D),y=Z(E),[m,P]=dt({value:I,defaultValue:j,onChange:A}),[Q,X]=i.useState(!1),V=!(b||v);let[f,r,o]=m;r=h(r,0,1),o=h(o,0,1);const Y=i.useRef(null),K=i.useRef(null),O=i.useRef(null),a=mt({value:m,step:d,isInteractive:V,eventSource:null,focusThumbOnChange:c}),N=ft(O),rt=i.useMemo(()=>$.map(t=>vt(t,[f,r,o])),[$,f,r,o]),nt=i.useCallback(t=>{var J;if(!K.current)return[];const{step:e}=a.current;a.current.eventSource="pointer";const{bottom:n,left:l,height:C,width:w}=K.current.getBoundingClientRect(),{clientX:k,clientY:ct}=((J=t.touches)==null?void 0:J[0])??t;let M=h((k-l)/w,0,1),z=h((n-ct)/C,0,1);return e&&(M=parseFloat(et(M,0,e)),z=parseFloat(et(z,0,e))),[M,z]},[a]),G=t=>{const{value:e}=a.current,[n,l]=nt(t);if(n==null||l==null)return;const[,C,w]=e;(n!==C||l!==w)&&P(([k])=>[k,n,l])},ot=i.useCallback(()=>{const{focusThumbOnChange:t}=a.current;t&&setTimeout(()=>{var e;return(e=O.current)==null?void 0:e.focus()})},[a]),S=i.useCallback(([t,e])=>{const{isInteractive:n}=a.current;n&&(t=h(t,0,1),e=h(e,0,1),P(([l])=>[l,t,e]))},[a,P]),H=i.useCallback(t=>{const n={ArrowRight:()=>S([r+d,o]),ArrowUp:()=>S([r,o+d]),ArrowLeft:()=>S([r-d,o]),ArrowDown:()=>S([r,o-d])}[t.key];n&&(t.preventDefault(),t.stopPropagation(),n(t),a.current.eventSource="keyboard")},[a,S,r,o,d]);gt(Y,{onSessionStart:t=>{const{isInteractive:e,value:n}=a.current;e&&(X(!0),ot(),G(t),B(n))},onSessionEnd:()=>{const{isInteractive:t,value:e}=a.current;t&&(X(!1),y(e))},onMove:t=>{const{isInteractive:e}=a.current;e&&G(t)}}),yt(()=>{const{eventSource:t,value:e}=a.current;t==="keyboard"&&y(e)},[m,y]);const st=i.useCallback((t={},e=null)=>({...t,...Pt(s,["aria-readonly"]),ref:L(e,Y),tabIndex:-1}),[s]),at=i.useCallback((t={},e=null)=>{const{width:n}=N??{width:0},l={...t.style,...s.style,padding:`${n/2}px`};return{...t,ref:e,style:l}},[s,N]),it=i.useCallback((t={},e=null)=>({...U(s,W),...t,id:u,ref:e,type:"hidden",name:x,value:[f,r,o].toString(),required:F,disabled:b,readOnly:v}),[b,u,x,v,F,s,f,r,o]),lt=i.useCallback((t={},e=null)=>({...U(s,bt({omit:["aria-readonly"]})),...t,ref:L(e,K)}),[s]),ut=i.useCallback((t={},e=null)=>{const{width:n,height:l}=N??{width:0,height:0},C=r*100,w=o*100,k={...t.style,position:"absolute",userSelect:"none",touchAction:"none",left:`calc(${C}% - ${n/2}px)`,bottom:`calc(${w}% - ${l/2}px)`};return{"aria-label":"Saturation and brightness thumb",bg:R??wt([f,r,o])(),...U(s,W),...t,ref:L(e,O),tabIndex:V&&c?0:void 0,role:"slider","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`saturation ${r}, brightness ${o}`,"data-active":St(Q&&c),onKeyDown:q(t.onKeyDown,H),onFocus:q(t.onFocus,s.onFocus),onBlur:q(t.onBlur,s.onBlur),style:k}},[f,r,o,R,c,Q,V,H,s,N]);return{value:m,overlays:rt,getContainerProps:st,getInnerProps:at,getTrackProps:lt,getInputProps:it,getThumbProps:ut}},Kt=_t((c,p)=>{const[u,x]=xt("SaturationSlider",c),{className:I,ratio:j=16/9,innerProps:A,inputProps:D,trackProps:E,thumbProps:d,__css:R,...F}=kt(x),{overlays:b,getContainerProps:v,getInnerProps:T,getTrackProps:$,getInputProps:s,getThumbProps:B}=Rt(F),y={position:"relative",_before:{content:'""',display:"block",h:0,pb:Ct(j,m=>`${1/m*100}%`)},"& > *":{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},...u.container,...R};return _(g.div,{className:tt("ui-saturation-slider",I),__css:y,...v(),children:pt(g.div,{className:tt("ui-saturation-slider__inner",I),__css:{...u.inner},...T(A),children:[_(g.input,{...s(D,p)}),b.map((m,P)=>_(g.div,{className:"ui-saturation-slider__overlay",__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...u.overlay},...m},P)),_(g.div,{className:"ui-saturation-slider__track",__css:{position:"relative",w:"full",h:"full",...u.track},...$(E),children:_(g.div,{className:"ui-saturation-slider__thumb",__css:{...u.thumb},...B(d)})})]})})});export{Kt as S};
