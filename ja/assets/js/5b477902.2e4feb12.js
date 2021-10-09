"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7251],{9613:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>c});var a=e(9496);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),m=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},d=function(t){var n=m(t.components);return a.createElement(o.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(e),c=l,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||r;return e?a.createElement(k,p(p({ref:n},d),{},{components:e})):a.createElement(k,p({ref:n},d))}));function c(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=e[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},8756:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>d,default:()=>u});var a=e(98),l=e(6862),r=(e(9496),e(9613)),p=["components"],i={id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},o=void 0,m={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ja/next/installation",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"docs",previous:{title:"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/next/motivation"},next:{title:"pnpm CLI",permalink:"/ja/next/pnpm-cli"}},d=[{value:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",children:[{value:"Node.js is not preinstalled",id:"nodejs-is-not-preinstalled",children:[]},{value:"Node.js is preinstalled",id:"nodejs-is-preinstalled",children:[]}]},{value:"npm \u3092\u4f7f\u7528",id:"npm-\u3092\u4f7f\u7528",children:[]},{value:"npx \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528",id:"npx-\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528",children:[]},{value:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",children:[]},{value:"\u4e92\u63db\u6027",id:"\u4e92\u63db\u6027",children:[]},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",children:[]},{value:"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"pnpm-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]}],s={toc:d};function u(t){var n=t.components,e=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"},"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"),(0,r.kt)("h3",{id:"nodejs-is-not-preinstalled"},"Node.js is not preinstalled"),(0,r.kt)("p",null,"On POSIX systems, you may install pnpm even if you don't have Node.js installed, using the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"If you don't have curl installed, you would like to use wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"You may use the ",(0,r.kt)("a",{parentName:"p",href:"/ja/next/cli/env"},"pnpm env")," command then to install Node.js."),(0,r.kt)("h3",{id:"nodejs-is-preinstalled"},"Node.js is preinstalled"),(0,r.kt)("p",null,"On Linux or macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"Windows (PowerShell) \u306e\u5834\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u7f72\u540d\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\u3053\u3061\u3089\u304b\u3089\u691c\u8a3c\u65b9\u6cd5\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"npm-\u3092\u4f7f\u7528"},"npm \u3092\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"npx-\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528"},"npx \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"),(0,r.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/ja/next/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"\u4e92\u63db\u6027"},"\u4e92\u63db\u6027"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,r.kt)("p",null,"pnpm \u304c\u58ca\u308c\u3066\u3044\u3066\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u4fee\u6b63\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001PATH \u304b\u3089\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u3001\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u307e\u305a\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm")," \u3092\u5b9f\u884c\u3057\u3066\u3001pnpm \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Windows \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Git Bash \u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u306e\u5834\u6240\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001 pnpm \u306e CLI \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u304c\u5206\u304b\u308a\u307e\u3057\u305f\u3002\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304d\u3001 pnpm \u95a2\u9023\u30d5\u30a1\u30a4\u30eb (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," \u306a\u3069) \u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u5b8c\u4e86\u3057\u305f\u3089\u3001pnpm \u3092\u518d\u5ea6\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3001\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"pnpm-\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"pnpm \u306e CLI \u3092\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c7\u30a3\u30b9\u30af\u306b\u3042\u308b\u95a2\u9023\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/next/uninstall"},"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);