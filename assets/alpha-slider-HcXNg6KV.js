import{a as S,j as t}from"./jsx-runtime-5BUNAZ9W.js";import{u as C}from"./use-color-slider-C1y63esH.js";import{o as N,c as n,a as c}from"./theme-provider-ePNg-PER.js";import{f as T}from"./forward-ref-A-8Arhkk.js";import{u as j}from"./use-component-style-zqeBCG90.js";import{u as r,a as I}from"./factory-Ddmu4EkR.js";const $=(s,o,e,i)=>{let a=[{bgImage:"linear-gradient(45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--ui-checkers) 75%), linear-gradient(-45deg, var(--ui-body) 75%, var(--ui-checkers) 75%)",bgSize:"8px 8px",bgPosition:"0 0, 0 4px, 4px -4px, -4px 0",var:[{name:"checkers",token:"colors",value:["blackAlpha.300","whiteAlpha.300"]},{name:"body",token:"colors",value:["whiteAlpha.500","blackAlpha.500"]}]},{bgGradient:`linear(to-r, ${n(s)("hex")+c(o)}, ${n(s)("hex")+c(e)})`}];return i&&(a=[...a,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),a},q=T((s,o)=>{const[e,i]=j("AlphaSlider",s),{className:a,inputProps:m,trackProps:u,thumbProps:h,color:d="#ffffff",min:l=0,max:p=1,withShadow:g=!0,overlays:f=$(d,l,p,g),__css:v,...b}=N(i),{getContainerProps:x,getTrackProps:_,getInputProps:k,getThumbProps:P}=C({min:l,max:p,step:.01,thumbColor:"transparent",...b}),y={position:"relative",...e.container,...v};return S(r.div,{className:I("ui-alpha-slider",a),__css:y,...x(),children:[t(r.input,{...k(m,o)}),f.map((w,A)=>t(r.div,{className:"ui-alpha-slider__overlay",__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...e.overlay},...w},A)),t(r.div,{className:"ui-alpha-slider__track",__css:{position:"relative",w:"full",h:"full",...e.track},..._(u),children:t(r.div,{className:"ui-alpha-slider__thumb",__css:{...e.thumb},...P(h)})})]})});export{q as A};
