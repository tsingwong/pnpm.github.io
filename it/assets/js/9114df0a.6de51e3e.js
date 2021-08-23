"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[585],{9848:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7689);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1258:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>m});var n=t(2951),i=t(9877),o=(t(7689),t(9848)),a=["components"],c={id:"exec",title:"pnpm exec"},l=void 0,p={unversionedId:"cli/exec",id:"version-5.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Forma abbreviata di pnpm -r exec.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/it/5.x/cli/exec",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"exec",title:"pnpm exec"}},u=[{value:"Opzioni",id:"opzioni",children:[{value:"--parallel",id:"--parallel",children:[]}]}],s={toc:u};function m(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Forma abbreviata di ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r exec"),"."),(0,o.kt)("p",null,"Visualizza la documentazione di ","[",(0,o.kt)("inlineCode",{parentName:"p"},"r exec"),"]"," per maggiori informazioni."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Disregards concurrency and topological sorting configuration entirely and runs the command immediately in all matching packages, with prefixed streaming output."),(0,o.kt)("p",null,"This is the preferred option for processes that take a long time to run. For example, running a build process with the watch flag over a large number of packages."))}m.isMDXComponent=!0}}]);