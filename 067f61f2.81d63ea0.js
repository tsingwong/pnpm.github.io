(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||r;return t?a.a.createElement(u,s(s({ref:n},d),{},{components:t})):a.a.createElement(u,s({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(7),r=(t(0),t(411)),i={id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},s={unversionedId:"symlinked-node-modules-structure",id:"symlinked-node-modules-structure",isDocsHomePage:!1,title:"Symlinked `node_modules` structure",description:"This article only describes how pnpm's node_modules are structured when",source:"@site/docs/symlinked-node-modules-structure.md",slug:"/symlinked-node-modules-structure",permalink:"/next/symlinked-node-modules-structure",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/symlinked-node-modules-structure.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615059027,sidebar:"docs",previous:{title:"Limitations",permalink:"/next/limitations"},next:{title:"How peers are resolved",permalink:"/next/how-peers-are-resolved"}},l=[],d={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This article only describes how pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," are structured when\nthere are no packages with peer dependencies. For the more complex scenario of\ndependencies with peers, see ",Object(r.b)("a",{parentName:"p",href:"how-peers-are-resolved"},"how peers are resolved"),"."))),Object(r.b)("p",null,"pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," layout uses symbolic links to create a nested structure of\ndependencies."),Object(r.b)("p",null,"Every file of every package inside ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," is a hard link to the\ncontent-addressable store. Let's say you install ",Object(r.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," that depends on\n",Object(r.b)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm will hard link both packages to ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n`-- .pnpm\n    |-- bar@1.0.0\n    |   `-- node_modules\n    |       `-- bar -> <store>/bar\n    |           |-- index.js\n    |           `-- package.json\n    `-- foo@1.0.0\n        `-- node_modules\n            `-- foo -> <store>/foo\n                |-- index.js\n                `-- package.json\n")),Object(r.b)("p",null,'These are the only "real" files in ',Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),". Once all the packages are\nhard linked to ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", symbolic links are created to build the nested\ndependency graph structure."),Object(r.b)("p",null,"As you might have noticed, both packages are hard linked into a subfolder inside\na ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," folder (",Object(r.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). This is needed to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"allow packages to import themselves.")," ",Object(r.b)("inlineCode",{parentName:"li"},"foo")," should be able to\n",Object(r.b)("inlineCode",{parentName:"li"},"require('foo/package.json')")," or ",Object(r.b)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"avoid circular symlinks.")," Dependencies of packages are placed in the same\nfolder in which the dependent packages are. For Node.js it doesn't make a\ndifference whether dependencies are inside the package's ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," or in\nany other ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," in the parent directories.")),Object(r.b)("p",null,"The next stage of installation is symlinking dependencies. ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," is going to be\nsymlinked to the ",Object(r.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules")," folder:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n`-- .pnpm\n    |-- bar@1.0.0\n    |   `-- node_modules\n    |       `-- bar -> <store>/bar\n    `-- foo@1.0.0\n        `-- node_modules\n            |-- foo -> <store>/foo\n            `-- bar -> ../../bar@1.0.0/node_modules/bar\n")),Object(r.b)("p",null,"Next, direct dependencies are handled. ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," is going to be symlinked into the\nroot ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," folder because ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," is a dependency of the project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n|-- foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n`-- .pnpm\n    |-- bar@1.0.0\n    |   `-- node_modules\n    |       `-- bar -> <store>/bar\n    `-- foo@1.0.0\n        `-- node_modules\n            |-- foo -> <store>/foo\n            `-- bar -> ../../bar@1.0.0/node_modules/bar\n")),Object(r.b)("p",null,"This is a very simple example. However, the layout will maintain this structure\nregardless of the number of dependencies and the depth of the dependency graph."),Object(r.b)("p",null,"Let's add ",Object(r.b)("inlineCode",{parentName:"p"},"qar@2.0.0")," as a dependency of ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),". This is how the new\nstructure will look:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n|-- foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n`-- .pnpm\n    |-- bar@1.0.0\n    |   `-- node_modules\n    |       |-- bar -> <store>/bar\n    |       `-- qar -> ../../qar@2.0.0/node_modules/qar\n    |-- foo@1.0.0\n    |   `-- node_modules\n    |       |-- foo -> <store>/foo\n    |       |-- bar -> ../../bar@1.0.0/node_modules/bar\n    |       `-- qar -> ../../qar@2.0.0/node_modules/qar\n    `-- qar@2.0.0\n        `-- node_modules\n            `-- qar -> <store>/qar\n")),Object(r.b)("p",null,"As you may see, even though the graph is deeper now (",Object(r.b)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), the\ndirectory depth in the file system is still the same."),Object(r.b)("p",null,"This layout might look weird at first glance, but it is completely compatible\nwith Node's module resolution algorithm! When resolving modules, Node ignores\nsymlinks, so when ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," is required from ",Object(r.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),",\nNode does not use ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," at ",Object(r.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/bar"),", but instead, ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," is\nresolved to its real location (",Object(r.b)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). As a consequence,\n",Object(r.b)("inlineCode",{parentName:"p"},"bar")," can also resolve its dependencies which are in ",Object(r.b)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),Object(r.b)("p",null,"A great bonus of this layout is that only packages that are really in the\ndependencies are accessible. With a flattened ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),' structure, all\nhoisted packages are accessible. To read more about why this is an advantage,\nsee "',Object(r.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"pnpm's strictness helps to avoid silly bugs"),'"'))}c.isMDXComponent=!0}}]);