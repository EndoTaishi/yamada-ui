import{j as r}from"./jsx-runtime-CKrituN3.js";import{U as s}from"./ui-provider-CKwqFPQ0.js";import{k as P}from"./factory-DKdOmnTE.js";import{e as a,a as g}from"./extend-theme-Dmiq6JP5.js";import{B as i}from"./box-CoyWgssb.js";import{C as f}from"./center-BQOEyiS1.js";import{I as k}from"./image-CWTe5GSv.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DwNw45vs.js";import"./theme-provider-6JRwGmsH.js";import"./environment-provider-Cgf-DIgC.js";import"./motion-JgkBPv6g.js";import"./loading-provider-Cb18XwbM.js";import"./index-CdZFaoT8.js";import"./Combination-DlzjZhkT.js";import"./loading-wACCLo5l.js";import"./index-CdrX07di.js";import"./index-mdwqubC6.js";import"./index-5LWoB8xm.js";import"./icon-1JWgpStP.js";import"./forward-ref-DuAegr0M.js";import"./motion-CLgphBsa.js";import"./index-_tcQm2Fk.js";import"./container-portal-D2xVMWUg.js";import"./index-BtM5VmRH.js";import"./notice-BXTSmgnh.js";import"./alert-BOxyDV5f.js";import"./use-component-style-CM81S9bB.js";import"./close-button-0-3R9bmA.js";import"./use-ripple-CmSVpGdD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-image--7EmtgUM.js";const nr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(s,{theme:T,children:r.jsxs(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(s,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(s,{theme:o,children:[r.jsx(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ["#2196F3", "#F44336"]
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="normal">
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors: ThemeTokens = extendToken("colors");
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const semantics: ThemeSemantics = {
    colors: {
      primary: "#FF7F0B",
      // override token primary
      newPrimary: "red.500",
      extendPrimary: "primary"
    }
  };
  const theme = extendTheme({
    semantics
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" w="full" p="4" rounded="md" color="white">
        override primary
      </Box>

      <Box bg="newPrimary" w="full" p="4" rounded="md" color="white">
        new primary
      </Box>

      <Box bg="extendPrimary" w="full" p="4" rounded="md" color="white">
        extend primary
      </Box>
    </UIProvider>;
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const tr=["useColorModeToken","useExtendToken","useSemanticToken"];export{tr as __namedExportsOrder,nr as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};