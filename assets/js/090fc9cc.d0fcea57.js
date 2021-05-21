(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(318)),o={id:"why",title:"pnpm why",original_id:"why"},c={unversionedId:"cli/why",id:"version-4.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows the packages that depend on &lt;pkg>",source:"@site/versioned_docs/version-4.x/cli/why.md",slug:"/cli/why",permalink:"/4.x/cli/why",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-4.x/cli/why.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"version-4.x/docs",previous:{title:"pnpm outdated",permalink:"/4.x/cli/outdated"},next:{title:"pnpm run",permalink:"/4.x/cli/run"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Shows the packages that depend on ","<","pkg>"),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm why [-r] [--filter <package selector>]\n         [<package pattern> ...]\n\npnpm recursive why [--filter <package selector>]\n                   [<package pattern> ...]\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"Perform command on every package in subdirectories\nor on every workspace package, when executed inside a workspace."),Object(i.b)("h3",{id:"--json"},"--json"),Object(i.b)("p",null,"Added in: 3.7.0"),Object(i.b)("p",null,"Show information in JSON format."),Object(i.b)("h3",{id:"--long"},"--long"),Object(i.b)("p",null,"Show extended information."),Object(i.b)("h3",{id:"--parseable"},"--parseable"),Object(i.b)("p",null,"Show parseable output instead of tree view."),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(i.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(i.b)("p",null,"Display only the dependency tree for packages in ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(i.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(i.b)("p",null,"Display only the dependency tree for packages in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/4.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);