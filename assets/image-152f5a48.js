import{j as n}from"./jsx-runtime-276775ef.js";import{r as f}from"./index-1cdf6ce0.js";import{u as E,s as F}from"./use-image-21444f3a.js";import{f as j}from"./forward-ref-86842115.js";import{d as g,y as u}from"./factory-75cc801c.js";const h=j((o,e)=>{let{fallback:a,src:b,srcSet:d,loading:i,ignoreFallback:r,crossOrigin:t,fallbackStrategy:k="beforeLoadOrError",referrerPolicy:I,size:l,fit:c,...s}=o;r=i!=null||r||!a;const p=E({...o,crossOrigin:t,ignoreFallback:r}),m=f.useMemo(()=>({boxSize:l,objectFit:c}),[l,c]);return F(p,k)?f.isValidElement(a)?a:n(g.img,{ref:e,className:"ui-image-fallback",src:a,__css:m,...r?s:u(s,["onError","onLoad"])}):n(g.img,{ref:e,src:b,srcSet:d,crossOrigin:t,loading:i,referrerPolicy:I,className:"ui-image",__css:m,...r?s:u(s,["onError","onLoad"])})});export{h as I};
//# sourceMappingURL=image-152f5a48.js.map