(self.webpackChunk=self.webpackChunk||[]).push([[3822],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(h,c(c({ref:r},l),{},{components:t})):n.createElement(h,c({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7863:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>i,metadata:()=>p,toc:()=>s,default:()=>m});var n=t(1424),a=t(2489),o=(t(7689),t(9848)),c=["components"],i={id:"benchmark",title:"Benchmark"},p={unversionedId:"benchmark",id:"version-6.x/benchmark",isDocsHomePage:!1,title:"Benchmark",description:"pnpm is faster than npm and Yarn. See this benchmark which compares the three package managers on different types of applications.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/tr/benchmark",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"benchmark",title:"Benchmark"},sidebar:"version-6.x/docs",previous:{title:"Logolar",permalink:"/tr/logos"},next:{title:"K\u0131s\u0131tlar/S\u0131n\u0131rlamalar",permalink:"/tr/limitations"}},s=[],l={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm is faster than npm and Yarn. See ",(0,o.kt)("a",{parentName:"p",href:"https://r.pnpm.io/benchmarks"},"this")," benchmark which compares the three package managers on different types of applications."),(0,o.kt)("p",null,"Here are the benchmarks on a React app:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/pnpm/benchmarks-of-javascript-package-managers/main/results/imgs/alotta-files.svg",alt:null})))}m.isMDXComponent=!0}}]);