import{j as t,a as n,F as i}from"./jsx-runtime-TtYKBvr-.js";import{I as r,f as e}from"./fontawesome-icon-ZfuIL68e.js";import{r as ut}from"./index-IybTgENJ.js";import{c as b}from"./components-ZfvGJ72a.js";import{P as o}from"./pagination-oF45URtl.js";import{W as dt}from"./flex-JMU2u5xt.js";import{V as C}from"./stack-XX7xMkh4.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./theme-provider-Wsw433nP.js";import"./factory-yYnGGCem.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./index-jxkA9W0j.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-QSpUaAIF.js";import"./environment-provider-AgGaubw6.js";import"./loading-provider-eLBvA5DO.js";import"./index-JFdRY6YH.js";import"./component-G3mliOEp.js";import"./loading-JdMW4dxy.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";import"./motion-ONtTX0Ck.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-C0JWommc.js";import"./index-xIHD0DlW.js";import"./notice-t31q7X58.js";import"./alert-k4hBOFJJ.js";import"./use-component-style-5-ma296Y.js";import"./close-button-Nk1l7Q8c.js";import"./use-ripple-oUvMmrsO.js";import"./container-8YcCAsLj.js";import"./box-rBvPdJwr.js";import"./text-Kd5_YHaX.js";import"./index-yP8_fdVn.js";const ao={title:"Components / Navigation / Pagination",component:o},s=()=>t(o,{total:10}),c=()=>n(i,{children:[t(o,{total:10,size:"xs"}),t(o,{total:10,size:"sm"}),t(o,{total:10,size:"md"}),t(o,{total:10,size:"lg"}),t(o,{total:10,size:"xl"})]}),l=()=>n(i,{children:[t(o,{total:10,variant:"solid"}),t(o,{total:10,variant:"outline"}),t(o,{total:10,variant:"ghost"}),t(o,{total:10,variant:"unstyled"})]}),m=()=>n(dt,{w:"full",gap:"md",children:[t(C,{w:"auto",children:b.map(a=>t(o,{total:10,variant:"solid",colorScheme:a},a))}),t(C,{w:"auto",children:b.map(a=>t(o,{total:10,variant:"outline",colorScheme:a},a))}),t(C,{w:"auto",children:b.map(a=>t(o,{total:10,variant:"ghost",colorScheme:a},a))})]}),p=()=>t(o,{defaultPage:3,total:10}),u=()=>t(o,{total:77}),d=()=>t(o,{total:10,withEdges:!0}),g=()=>t(o,{total:77,siblings:3}),h=()=>t(o,{total:77,boundaries:3}),P=()=>n(i,{children:[t(o,{total:10,variant:"solid",isDisabled:!0}),t(o,{total:10,variant:"outline",isDisabled:!0}),t(o,{total:10,variant:"ghost",isDisabled:!0}),t(o,{total:10,variant:"unstyled",isDisabled:!0})]}),S=()=>t(o,{total:10,withControls:!1}),w=()=>{const[a,pt]=ut.useState(1);return t(o,{page:a,total:10,onChange:pt})},v=()=>n(i,{children:[t(o,{total:10,controlProps:{children:t(r,{icon:e})}}),t(o,{total:10,controlPrevProps:{children:t(r,{icon:e})}}),t(o,{total:10,controlNextProps:{children:t(r,{icon:e})}})]}),f=()=>n(i,{children:[t(o,{total:10,withEdges:!0,edgeProps:{children:t(r,{icon:e})}}),t(o,{total:10,withEdges:!0,edgeFirstProps:{children:t(r,{icon:e})}}),t(o,{total:10,withEdges:!0,edgeLastProps:{children:t(r,{icon:e})}})]});var E,z,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Pagination total={10} />;
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var x,k,V;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <>
      <Pagination total={10} size="xs" />
      <Pagination total={10} size="sm" />
      <Pagination total={10} size="md" />
      <Pagination total={10} size="lg" />
      <Pagination total={10} size="xl" />
    </>;
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var B,I,y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Pagination total={10} variant="solid" />
      <Pagination total={10} variant="outline" />
      <Pagination total={10} variant="ghost" />
      <Pagination total={10} variant="unstyled" />
    </>;
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var F,W,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Wrap w="full" gap="md">
      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Pagination key={colorScheme} total={10} variant="solid" colorScheme={colorScheme} />)}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Pagination key={colorScheme} total={10} variant="outline" colorScheme={colorScheme} />)}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Pagination key={colorScheme} total={10} variant="ghost" colorScheme={colorScheme} />)}
      </VStack>
    </Wrap>;
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var N,L,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Pagination defaultPage={3} total={10} />;
}`,...(T=(L=p.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var _,O,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Pagination total={77} />;
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var A,G,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Pagination total={10} withEdges />;
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Pagination total={77} siblings={3} />;
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,R,U;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Pagination total={77} boundaries={3} />;
}`,...(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,Y,Z;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Pagination total={10} variant="solid" isDisabled />
      <Pagination total={10} variant="outline" isDisabled />
      <Pagination total={10} variant="ghost" isDisabled />
      <Pagination total={10} variant="unstyled" isDisabled />
    </>;
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,tt,ot;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Pagination total={10} withControls={false} />;
}`,...(ot=(tt=S.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var at,rt,et;w.parameters={...w.parameters,docs:{...(at=w.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [page, onChange] = useState<number>(1);
  return <Pagination page={page} total={10} onChange={onChange} />;
}`,...(et=(rt=w.parameters)==null?void 0:rt.docs)==null?void 0:et.source}}};var nt,it,st;v.parameters={...v.parameters,docs:{...(nt=v.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <>
      <Pagination total={10} controlProps={{
      children: <Icon icon={faPoo} />
    }} />
      <Pagination total={10} controlPrevProps={{
      children: <Icon icon={faPoo} />
    }} />
      <Pagination total={10} controlNextProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(st=(it=v.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ct,lt,mt;f.parameters={...f.parameters,docs:{...(ct=f.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  return <>
      <Pagination total={10} withEdges edgeProps={{
      children: <Icon icon={faPoo} />
    }} />
      <Pagination total={10} withEdges edgeFirstProps={{
      children: <Icon icon={faPoo} />
    }} />
      <Pagination total={10} withEdges edgeLastProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(mt=(lt=f.parameters)==null?void 0:lt.docs)==null?void 0:mt.source}}};const ro=["basic","withSize","withVariant","withColorScheme","withDefaultPage","withTotal","withEdge","withSiblings","withBoundaries","withDisabled","disabledControlButton","customControl","customControlButton","customEdgeButton"];export{ro as __namedExportsOrder,s as basic,w as customControl,v as customControlButton,f as customEdgeButton,ao as default,S as disabledControlButton,h as withBoundaries,m as withColorScheme,p as withDefaultPage,P as withDisabled,d as withEdge,g as withSiblings,c as withSize,u as withTotal,l as withVariant};