import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as de,m as xl,p as Dl,d as jl}from"./fontawesome-icon-UR0vgLdA.js";import{r as Ae}from"./index-CBqU2yxZ.js";import{u as cl,C as E}from"./index.esm-CEuCMWHm.js";import{u as bl,A as gl,a as fl,j as Ml,b as Sl,c as he,d as ve,e as Ce,f as wl,g as yl,h as u,i as m}from"./autocomplete-empty-8ALdsUUT.js";import{P as Il,a as Pl}from"./popover-content-CjO9YtPY.js";import{P as Ee}from"./container-portal-DETs5NTV.js";import{f as pl}from"./forward-ref-DuAegr0M.js";import{a as kl}from"./use-component-style-x77HgIAf.js";import{o as Vl}from"./theme-provider-B81-8twE.js";import{u as D,c as ml,h as ql}from"./factory-DBv693c8.js";import{T as Oe}from"./tag-BRoIHenE.js";import{F}from"./form-control-CAR7rGD8.js";import{V as Al}from"./stack-7GHzbDji.js";import{B as dl}from"./button-D6Xv5gej.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-CttZDCjD.js";import"./index-BLOGRGTX.js";import"./index-B97qfhL4.js";import"./index-CsDlsuI0.js";import"./index-BApQmalj.js";import"./index-CPkx3e3e.js";import"./index-DLf9ZhAh.js";import"./index-_9uB05C8.js";import"./index-CUiYxF6a.js";import"./index-rYLD436_.js";import"./index-DuhzhdoQ.js";import"./index-B_YMZWdv.js";import"./index-DT1MKHzI.js";import"./index-C_T8L7c2.js";import"./motion-JgkBPv6g.js";import"./slide-fade-DdOsQRD0.js";import"./index-_tcQm2Fk.js";import"./motion-B78TtHbt.js";import"./utils-A5OWcIbE.js";import"./scale-fade-wPjcuW5S.js";import"./close-button-Y2pf9k3r.js";import"./use-ripple-BGPrLyn5.js";import"./index-BtM5VmRH.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./loading-BZATwpJ-.js";const l=pl((o,t)=>{const[a,v]=kl("MultiAutocomplete",o);let{className:s,defaultValue:c=[],component:B,separator:A,isClearable:d=!0,color:r,h:i,height:n,minH:j,minHeight:b,closeOnSelect:O=!1,keepPlaceholder:x=!1,containerProps:re,listProps:g,inputProps:ie,iconProps:se,clearIconProps:h,portalProps:p={isDisabled:!0},children:C,...f}=Vl(v);const{value:M,descendants:ce,formControlProps:pe,getPopoverProps:Fl,getContainerProps:Bl,getFieldProps:hl,allowCreate:me,isEmpty:Fe,inputValue:Be,computedChildren:vl,onClear:Cl,...El}=bl({...f,defaultValue:c,closeOnSelect:O,children:C});i??(i=n),j??(j=b);const Ol={w:"100%",h:"fit-content",color:r,...a.container};return e.jsx(gl,{value:ce,children:e.jsx(fl,{value:{...El,value:M,formControlProps:pe,inputValue:Be,allowCreate:me,isEmpty:Fe,styles:a},children:e.jsx(Il,{...Fl(),children:e.jsxs(D.div,{className:ml("ui-multi-autocomplete",s),__css:Ol,...Bl(re),children:[e.jsxs(D.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(Wl,{component:B,separator:A,keepPlaceholder:x,h:i,minH:j,inputProps:ie,...hl({},t)}),d&&M.length?e.jsx(Ml,{...h,onClick:ql(h==null?void 0:h.onClick,Cl),...pe}):e.jsx(Sl,{...se,...pe})]}),Fe?e.jsx(Ee,{...p,children:e.jsx(he,{...g,children:me&&Be?e.jsx(ve,{}):e.jsx(Ce,{})})}):e.jsx(Ee,{...p,children:e.jsxs(he,{...g,children:[me?e.jsx(ve,{}):e.jsx(Ce,{}),C??vl]})})]})})})})}),Wl=pl(({className:o,component:t,separator:a=",",keepPlaceholder:v,h:s,minH:c,placeholder:B,inputProps:A,...d},r)=>{const{value:i,label:n,inputValue:j,onChange:b,isOpen:O,inputRef:x,styles:re}=wl(),{getInputProps:g}=yl(),ie=Ae.useMemo(()=>n!=null&&n.length?t?n.map((h,p)=>{const C=ce=>{ce.stopPropagation(),b(i[p]),x.current&&x.current.focus()},f=t({value:i[p],label:h,index:p,onRemove:C}),M={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return f?Ae.cloneElement(f,{key:p,style:M}):null}):n.map((h,p)=>{const C=n.length===p+1;return e.jsxs(D.span,{display:"inline-block",me:"0.25rem",children:[h,!C||O?a:null]},p)}):null,[n,t,i,b,O,x,a]),se={pe:"2rem",h:s,minH:c,display:"flex",flexWrap:"wrap",alignItems:"center",...re.field,cursor:"text"};return e.jsx(Pl,{children:e.jsxs(D.div,{className:ml("ui-multi-autocomplete__field",o),__css:se,py:n!=null&&n.length&&t?"0.125rem":void 0,...d,children:[ie,e.jsx(D.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!n||!(n!=null&&n.length)||v&&O?B:void 0,...g({...A,value:j??""},r)})]})})}),fo={title:"Components / Forms / MultiAutocomplete",component:l},S=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),e.jsx(l,{placeholder:"キャラクターを選択",items:o})]})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"extra small size",size:"xs"}),e.jsx(l,{placeholder:"small size",size:"sm"}),e.jsx(l,{placeholder:"medium size",size:"md"}),e.jsx(l,{placeholder:"large size",size:"lg"})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",placeholder:"outline"}),e.jsx(l,{variant:"filled",placeholder:"filled"}),e.jsx(l,{variant:"flushed",placeholder:"flushed"}),e.jsx(l,{variant:"unstyled",placeholder:"unstyled"})]}),I=()=>e.jsxs(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),P=()=>e.jsxs(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),k=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,onCreate:(t,a)=>console.log("created item",t,"new items",a)})},V=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowFree:!0,onChange:t=>console.log("new values",t)})},q=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"first"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"last"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},W=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"default border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),T=()=>e.jsxs(l,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(l,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",component:({label:o})=>e.jsx(Oe,{children:o}),children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",component:({label:o,onRemove:t})=>e.jsx(Oe,{onClose:t,children:o}),children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),R=()=>e.jsxs(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),_=()=>e.jsxs(l,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),H=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(l,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(l,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(F,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(F,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(F,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(de,{icon:xl})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),le=()=>e.jsxs(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(de,{icon:Dl,w:"0.5em"})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(de,{icon:jl,color:"green.500"})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),te=()=>{const[o,t]=Ae.useState(["孫悟空"]);return e.jsxs(l,{placeholder:"キャラクターを選択",value:o,onChange:t,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})},ne=()=>{var B,A,d;const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:t,handleSubmit:a,watch:v,formState:{errors:s}}=cl(),c=r=>console.log("submit:",r);return console.log("watch:",v()),e.jsxs(Al,{as:"form",onSubmit:a(c),children:[e.jsx(F,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(B=s.autocomplete1)==null?void 0:B.message,children:e.jsx(E,{name:"autocomplete1",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(l,{placeholder:"キャラクターを選択",...r,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(F,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(A=s.autocomplete2)==null?void 0:A.message,children:e.jsx(E,{name:"autocomplete2",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(l,{placeholder:"キャラクターを選択",...r,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(F,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(d=s.autocomplete3)==null?void 0:d.message,children:e.jsx(E,{name:"autocomplete3",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsx(l,{placeholder:"キャラクターを選択",...r,items:o})})}),e.jsx(dl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ae=()=>{var A,d,r;const o={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:v,watch:s,formState:{errors:c}}=cl({defaultValues:o}),B=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(Al,{as:"form",onSubmit:v(B),children:[e.jsx(F,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(A=c.autocomplete1)==null?void 0:A.message,children:e.jsx(E,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(F,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete2)==null?void 0:d.message,children:e.jsx(E,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(F,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(r=c.autocomplete3)==null?void 0:r.message,children:e.jsx(E,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(l,{placeholder:"キャラクターを選択",...i,items:t})})}),e.jsx(dl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var xe,De,je;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOptionGroup label="地球人">
          <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
          <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
          <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label="フリーザ軍">
          <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
          <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
          <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
          <AutocompleteOption value="バータ">バータ</AutocompleteOption>
          <AutocompleteOption value="ジース">ジース</AutocompleteOption>
          <AutocompleteOption value="グルド">グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(je=(De=S.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var be,ge,fe;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(fe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Me,Se,we;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(we=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ye,Ie,Pe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Pe=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var ke,Ve,qe;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(qe=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var We,Te,Ge;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate onCreate={(newItem, newItems) => console.log("created item", newItem, "new items", newItems)} />;
}`,...(Ge=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var ze,Re,_e;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowFree onChange={values => console.log("new values", values)} />;
}`,...(_e=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var He,Ne,Ke;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="first" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="last" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="地球人" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem={["フリーザ軍", "last"]} />
    </>;
}`,...(Ke=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Le,Je,Qe;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete focusBorderColor="green.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete isInvalid errorBorderColor="orange.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Qe=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;T.parameters={...T.parameters,docs:{...(Ue=T.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ye=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,eu;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(eu=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:eu.source}}};var uu,lu,ou;z.parameters={...z.parameters,docs:{...(uu=z.parameters)==null?void 0:uu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" component={({
      label
    }) => <Tag>{label}</Tag>}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(ou=(lu=z.parameters)==null?void 0:lu.docs)==null?void 0:ou.source}}};var tu,nu,au;R.parameters={...R.parameters,docs:{...(tu=R.parameters)==null?void 0:tu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" omitSelectedValues={true}>
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(au=(nu=R.parameters)==null?void 0:nu.docs)==null?void 0:au.source}}};var ru,iu,su;_.parameters={..._.parameters,docs:{...(ru=_.parameters)==null?void 0:ru.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" maxSelectValues={3}>
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(su=(iu=_.parameters)==null?void 0:iu.docs)==null?void 0:su.source}}};var cu,pu,mu;H.parameters={...H.parameters,docs:{...(cu=H.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(mu=(pu=H.parameters)==null?void 0:pu.docs)==null?void 0:mu.source}}};var Au,du,Fu;N.parameters={...N.parameters,docs:{...(Au=N.parameters)==null?void 0:Au.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Fu=(du=N.parameters)==null?void 0:du.docs)==null?void 0:Fu.source}}};var Bu,hu,vu;K.parameters={...K.parameters,docs:{...(Bu=K.parameters)==null?void 0:Bu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(vu=(hu=K.parameters)==null?void 0:hu.docs)==null?void 0:vu.source}}};var Cu,Eu,Ou;L.parameters={...L.parameters,docs:{...(Cu=L.parameters)==null?void 0:Cu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ou=(Eu=L.parameters)==null?void 0:Eu.docs)==null?void 0:Ou.source}}};var xu,Du,ju;J.parameters={...J.parameters,docs:{...(xu=J.parameters)==null?void 0:xu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ju=(Du=J.parameters)==null?void 0:Du.docs)==null?void 0:ju.source}}};var bu,gu,fu;Q.parameters={...Q.parameters,docs:{...(bu=Q.parameters)==null?void 0:bu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(fu=(gu=Q.parameters)==null?void 0:gu.docs)==null?void 0:fu.source}}};var Mu,Su,wu;U.parameters={...U.parameters,docs:{...(Mu=U.parameters)==null?void 0:Mu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(wu=(Su=U.parameters)==null?void 0:Su.docs)==null?void 0:wu.source}}};var yu,Iu,Pu;X.parameters={...X.parameters,docs:{...(yu=X.parameters)==null?void 0:yu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Pu=(Iu=X.parameters)==null?void 0:Iu.docs)==null?void 0:Pu.source}}};var ku,Vu,qu;Y.parameters={...Y.parameters,docs:{...(ku=Y.parameters)==null?void 0:ku.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(qu=(Vu=Y.parameters)==null?void 0:Vu.docs)==null?void 0:qu.source}}};var Wu,Tu,Gu;Z.parameters={...Z.parameters,docs:{...(Wu=Z.parameters)==null?void 0:Wu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Gu=(Tu=Z.parameters)==null?void 0:Tu.docs)==null?void 0:Gu.source}}};var zu,Ru,_u;$.parameters={...$.parameters,docs:{...(zu=$.parameters)==null?void 0:zu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_u=(Ru=$.parameters)==null?void 0:Ru.docs)==null?void 0:_u.source}}};var Hu,Nu,Ku;ee.parameters={...ee.parameters,docs:{...(Hu=ee.parameters)==null?void 0:Hu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ku=(Nu=ee.parameters)==null?void 0:Nu.docs)==null?void 0:Ku.source}}};var Lu,Ju,Qu;ue.parameters={...ue.parameters,docs:{...(Lu=ue.parameters)==null?void 0:Lu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Qu=(Ju=ue.parameters)==null?void 0:Ju.docs)==null?void 0:Qu.source}}};var Uu,Xu,Yu;le.parameters={...le.parameters,docs:{...(Uu=le.parameters)==null?void 0:Uu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Yu=(Xu=le.parameters)==null?void 0:Xu.docs)==null?void 0:Yu.source}}};var Zu,$u,el;oe.parameters={...oe.parameters,docs:{...(Zu=oe.parameters)==null?void 0:Zu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <Icon icon={faCheck} color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(el=($u=oe.parameters)==null?void 0:$u.docs)==null?void 0:el.source}}};var ul,ll,ol;te.parameters={...te.parameters,docs:{...(ul=te.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ol=(ll=te.parameters)==null?void 0:ll.docs)==null?void 0:ol.source}}};var tl,nl,al;ne.parameters={...ne.parameters,docs:{...(tl=ne.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(al=(nl=ne.parameters)==null?void 0:nl.docs)==null?void 0:al.source}}};var rl,il,sl;ae.parameters={...ae.parameters,docs:{...(rl=ae.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const defaultValues: Data = {
    autocomplete1: ["孫悟空"],
    autocomplete2: ["フリーザ"],
    autocomplete3: ["リクーム"]
  };
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(sl=(il=ae.parameters)==null?void 0:il.docs)==null?void 0:sl.source}}};const Mo=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Mo as __namedExportsOrder,S as basic,le as customClearIcon,te as customControl,ue as customIcon,oe as customOption,fo as default,K as disabledCloseOnBlur,N as disabledIsClearable,X as isDisabled,Z as isInvalid,$ as isOptionDisabled,ee as isOptionFocusable,Y as isReadonly,ne as reactHookForm,ae as reactHookFormWithDefaultValue,k as withAllowCreate,V as withAllowFree,W as withBorderColor,H as withCloseOnSelect,z as withComponent,I as withDefaultValue,U as withDuration,P as withEmptyMessage,Q as withGutter,q as withInsertPositionItem,G as withKeepPlaceholder,_ as withMaxSelectValues,J as withOffset,R as withOmitSelectedValues,L as withPlacement,T as withSeparator,w as withSize,y as withVariant};