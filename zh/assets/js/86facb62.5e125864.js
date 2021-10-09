"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[486],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2224:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>s,default:()=>d});var n=r(98),i=r(6862),o=(r(9496),r(9613)),a=["components"],c={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"version-6.x/cli/pack",isDocsHomePage:!1,title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/zh/cli/pack",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-6.x/docs",previous:{title:"pnpm publish",permalink:"/zh/cli/publish"},next:{title:"pnpm recursive",permalink:"/zh/cli/recursive"}},s=[{value:"Options",id:"options",children:[{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",children:[]}]}],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a tarball from a package."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,o.kt)("p",null,"Directory in which ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}d.isMDXComponent=!0}}]);