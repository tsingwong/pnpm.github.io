(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(411)),i={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},p={unversionedId:"pnpm-run",id:"version-5.x/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/pnpm-run.md",slug:"/pnpm-run",permalink:"/ru/pnpm-run",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/i18n/ru/docusaurus-plugin-content-docs/version-5.x/pnpm-run.md",version:"5.x"},c=[],u={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Runs a defined package script."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),Object(a.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",Object(a.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),"."))}s.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return t?o.a.createElement(b,p(p({ref:n},u),{},{components:t})):o.a.createElement(b,p({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);