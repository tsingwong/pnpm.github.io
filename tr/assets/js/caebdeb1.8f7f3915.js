(self.webpackChunk=self.webpackChunk||[]).push([[767],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9357:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>d,default:()=>s});var r=n(1424),a=n(2489),i=(n(7689),n(9848)),l=["components"],o={id:"outdated",title:"pnpm outdated"},p={unversionedId:"cli/outdated",id:"cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/tr/next/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/tr",version:"current",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"docs",previous:{title:"pnpm list",permalink:"/tr/next/cli/list"},next:{title:"pnpm why",permalink:"/tr/next/cli/why"}},d=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],c={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),(0,i.kt)("p",null,"\u015eu \u015fekilde:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in every workspace package when executed inside a workspace."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/next/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List outdated global packages."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Print details."),(0,i.kt)("h3",{id:"--no-table"},"--no-table"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table. Good for small consoles."),(0,i.kt)("h3",{id:"--compatible"},"--compatible"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Doesn't check ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);