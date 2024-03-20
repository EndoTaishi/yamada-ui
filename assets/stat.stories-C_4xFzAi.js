import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as W}from"./components-B49bDsYR.js";import{f as p}from"./forward-ref-DuAegr0M.js";import{u as b,c as u,a as X,v as Y,O as f,a1 as Z,a2 as $}from"./factory-Dr9dj2_3.js";import{b as ee}from"./icon-BEP1qdzi.js";import{a as te}from"./use-component-style-hxhKhc0Q.js";import{o as se}from"./theme-provider-Bm2ANCLL.js";import{G as re}from"./grid-D69WHlr2.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-aOeTaPRo.js";import"./_basePickBy-BJO1BQlk.js";import"./iframe-YkpUdt4I.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-BIZneCWx.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-Co26Wf_K.js";import"./index-CcbIdHD-.js";import"./environment-provider-CVb8wJdv.js";import"./motion-JgkBPv6g.js";import"./loading-provider-DV4AK6pQ.js";import"./index-CafETBy0.js";import"./Combination-DlzjZhkT.js";import"./loading-93aTLmy8.js";import"./index-Cd5bWo2e.js";import"./index-BH_-S3fu.js";import"./index-C5SpnNA3.js";import"./motion-CQQhr11g.js";import"./index-_tcQm2Fk.js";import"./container-portal-ERwjpvWO.js";import"./notice-D3g8s_48.js";import"./alert-NX1pOus8.js";import"./close-button-hzIfFZD-.js";import"./use-ripple-D-hcQ8Cu.js";import"./container-B08OpQW3.js";import"./stack-WdGSMB3c.js";import"./box-BH0_Yzug.js";import"./text-DB123ecx.js";const c=p(({className:t,...s},r)=>{const a={...x().helperMessage};return e.jsx(b.dd,{ref:r,className:u("ui-stat__helper-message",t),__css:a,...s})}),C=p(({className:t,type:s="increase",...r},n)=>{const j={...x().icon};return e.jsx(ee,{ref:n,className:u("ui-stat__icon",t),"aria-label":s==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...r,children:s==="increase"?e.jsx("path",{fill:"var(--ui-increase)",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx("path",{fill:"var(--ui-decrease)",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),m=p(({className:t,...s},r)=>{const a={...x().label};return e.jsx(b.dt,{ref:r,className:u("ui-stat__label",t),__css:a,...s})}),i=p(({className:t,...s},r)=>{const a={...x().number};return e.jsx(b.dd,{ref:r,className:u("ui-stat__number",t),__css:a,...s})}),[ae,x]=X({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),o=p((t,s)=>{const[r,n]=te("Stat",t),{className:a,label:j,labelProps:A,number:G,numberProps:K,icon:w,iconProps:k,helperMessage:E,helperMessageProps:z,centerContent:O=!1,children:y,...R}=se(n),B={display:"flex",flexDirection:"column",alignItems:O?"center":"flex-start",...r.container},l=Y(y),[q]=f(l,m),[J]=f(l,i),[Q]=f(l,c),U=Z(l)?y:$(l,m,i,c);return e.jsx(ae,{value:r,children:e.jsxs(b.dl,{ref:s,className:u("ui-stat",a),__css:B,...R,children:[q??e.jsx(m,{...A,children:j}),J??e.jsx(i,{...K,children:G}),Q??e.jsxs(c,{...z,children:[w?e.jsx(C,{type:w,...k}):null,E]}),U]})})}),Je={title:"Components / Data Display / Stat",component:o},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(c,{children:[e.jsx(C,{type:"increase"}),"21% more than last month"]})]})]}),d=()=>e.jsx(re,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:W.map(t=>e.jsx(o,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),S=()=>e.jsx(e.Fragment,{children:e.jsx(o,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(c,{children:[e.jsx(C,{type:"decrease"}),"21% more than last month"]})]})]});var M,_,P;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="increase" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,T,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var V,D,v;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(v=(D=S.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var H,I,F;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="decrease" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="decrease" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const Qe=["basic","withColorScheme","withCenterContent","withDecrease"];export{Qe as __namedExportsOrder,h as basic,Je as default,S as withCenterContent,d as withColorScheme,g as withDecrease};