(self.webpackChunk=self.webpackChunk||[]).push([[9123],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7689);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||p;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4215:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>s});var t=r(1424),o=r(2489),p=(r(7689),r(9848)),a=["components"],i={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},c={unversionedId:"pnpm-run",id:"version-4.x/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/pnpm-run.md",sourceDirName:".",slug:"/pnpm-run",permalink:"/fr/4.x/pnpm-run",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"}},l=[],u={toc:l};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Runs a defined package script."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),(0,p.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",(0,p.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),"."))}s.isMDXComponent=!0}}]);