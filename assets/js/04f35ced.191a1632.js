(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{318:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return t?r.a.createElement(b,p(p({ref:n},l),{},{components:t})):r.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(8),o=(t(0),t(318)),i={id:"pnpm-vs-npm",title:"pnpm vs npm"},p={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/docs/pnpm-vs-npm.md",slug:"/pnpm-vs-npm",permalink:"/next/pnpm-vs-npm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpm-vs-npm.md",version:"current",lastUpdatedBy:"Tyler J Russell",lastUpdatedAt:1614935457,formattedLastUpdatedAt:"3/5/2021"},s=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],l={toc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"npms-flat-tree"},"npm's flat tree"),Object(o.b)("p",null,"npm maintains a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less\ndisk space bloat, with a messy ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),Object(o.b)("p",null,"On the other hand, pnpm manages ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and\nsymbolic linking to a global on-disk content-addressable store. This nets you\nthe benefits of far less disk space usage, while also keeping your\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",Object(o.b)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish\nto learn more."),Object(o.b)("p",null,"The good thing about pnpm's proper ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it\n"',Object(o.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not\nspecified in the project's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"pnpm does not allow installation of packages without saving them to\n",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as\nregular dependencies. Like with npm, ",Object(o.b)("inlineCode",{parentName:"p"},"--save-dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--save-optional")," can be\nused to install packages as dev or optional dependencies."),Object(o.b)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages\nwhen they use pnpm unless they remove a dependency and leave it orphaned. That's\nwhy pnpm's implementation of the ",Object(o.b)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify\npackages to prune - it ALWAYS removes all extraneous and orphaned packages."),Object(o.b)("h2",{id:"directory-dependencies"},"Directory dependencies"),Object(o.b)("p",null,"Directory dependencies start with the ",Object(o.b)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in\nthe filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm\ndoes not perform installation for the file dependencies."),Object(o.b)("p",null,"This means that if you have a package called ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," (",Object(o.b)("inlineCode",{parentName:"p"},"<root>/foo"),") that has\n",Object(o.b)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for\n",Object(o.b)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install")," on ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),"."),Object(o.b)("p",null,"If you need to run installations in several packages at the same time, for\ninstance in the case of a monorepo, you should look at the documentation for\n",Object(o.b)("a",{parentName:"p",href:"cli/recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}c.isMDXComponent=!0}}]);