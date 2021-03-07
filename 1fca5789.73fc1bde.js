(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(411)),a={id:"outdated",title:"pnpm outdated",original_id:"outdated"},c={unversionedId:"cli/outdated",id:"version-5.x/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the",source:"@site/versioned_docs/version-5.x/cli/outdated.md",slug:"/cli/outdated",permalink:"/cli/outdated",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/cli/outdated.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,sidebar:"version-5.x/docs",previous:{title:"pnpm list",permalink:"/cli/list"},next:{title:"pnpm why",permalink:"/cli/why"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checks for outdated packages. The check can be limited to a subset of the\ninstalled packages by providing arguments (patterns are supported)."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in\nevery workspace package when executed inside a workspace."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"List outdated global packages."),Object(i.b)("h3",{id:"--long"},"--long"),Object(i.b)("p",null,"Added in: v4.0.0"),Object(i.b)("p",null,"Print details."),Object(i.b)("h3",{id:"--no-table"},"--no-table"),Object(i.b)("p",null,"Added in: v4.0.0"),Object(i.b)("p",null,"Prints the outdated dependencies in a list format instead of the default table.\nGood for small consoles."),Object(i.b)("h3",{id:"--compatible"},"--compatible"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Prints only versions that satisfy specifications in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Checks only ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Checks only ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(i.b)("h3",{id:"--no-optional"},"--no-optional"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Doesn't check ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,f=u["".concat(a,".").concat(s)]||u[s]||b[s]||i;return n?o.a.createElement(f,c(c({ref:t},d),{},{components:n})):o.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);