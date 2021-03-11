(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(394)),l={id:"filtering",title:"Filtering"},c={unversionedId:"filtering",id:"version-5.x/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0",source:"@site/versioned_docs/version-5.x/filtering.md",slug:"/filtering",permalink:"/filtering",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/filtering.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615336009,formattedLastUpdatedAt:"3/10/2021",sidebar:"version-5.x/docs",previous:{title:"Configuring",permalink:"/configuring"},next:{title:"pnpm add <pkg>",permalink:"/cli/add"}},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[]},{value:"Multiplicity",id:"multiplicity",children:[]},{value:"Excluding",id:"excluding",children:[]},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[]}],o={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),Object(i.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by\nrelation."),Object(i.b)("p",null,"Selectors may be specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's")))),Object(i.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select an exact package, just specify its name (",Object(i.b)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a\npattern to select a set of packages (",Object(i.b)("inlineCode",{parentName:"p"},"@scope/*"),")."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),Object(i.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the\npackage name with an ellipsis: ",Object(i.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next\ncommand will run tests of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),Object(i.b)("p",null,"You may use a pattern to select a set of root packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),Object(i.b)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct),\nsuffix the name with the aforementioned ellipsis preceded by a chevron. For\ninstance, the next command will run tests for all of ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"'s\ndependencies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),Object(i.b)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),Object(i.b)("p",null,"Added in: v2.14.0"),Object(i.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix\nthe package name with an ellipsis: ",Object(i.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will\nrun the tests of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),Object(i.b)("h2",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the\npackage name with an ellipsis followed by a chevron. For instance, this will\nrun tests for all packages dependent on ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),Object(i.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(i.b)("p",null,"Added in: v2.15.0"),Object(i.b)("p",null,"To only select packages under the specified directory, you may specify any\nabsolute path, typically in POSIX format."),Object(i.b)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Includes all projects that are under the specified directory."),Object(i.b)("p",null,"It may be used with the ellipsis and chevron operators to select\ndependents/dependencies as well:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(i.b)("p",null,"It may also be combined with ",Object(i.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed\nprojects inside a directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),Object(i.b)("p",null,"Or you may select all packages from a directory with names matching the given\npattern:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),Object(i.b)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),Object(i.b)("p",null,"Added in: v4.6.0"),Object(i.b)("p",null,"Selects all the packages changed since the specified commit/branch. May be\nsuffixed or prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(i.b)("p",null,"For example, the next command will run tests in all changed packages since\n",Object(i.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),Object(i.b)("h2",{id:"multiplicity"},"Multiplicity"),Object(i.b)("p",null,"When packages are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),Object(i.b)("h2",{id:"excluding"},"Excluding"),Object(i.b)("p",null,"Added in: v5.8.0"),Object(i.b)("p",null,'Any of the filter selectors may work as exclusion operators when they have a\nleading "!". In zsh (and possibly other shells), "!" should be escaped: ',Object(i.b)("inlineCode",{parentName:"p"},"\\!"),"."),Object(i.b)("p",null,"For instance, this will run a command in all projects except for ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),Object(i.b)("p",null,"And this will run a command in all projects that are not under the ",Object(i.b)("inlineCode",{parentName:"p"},"lib"),"\ndirectory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),Object(i.b)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),Object(i.b)("p",null,"Added in: v5.14.0"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests.\nIf they are, the dependent packages of such modified packages are not included."),Object(i.b)("p",null,'This option is useful with the "changed since" filter. For instance, the next\ncommand will run tests in all changed packages, and if the changes are in the\nsource code of the package, tests will run in the dependent packages as well:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,c(c({ref:t},o),{},{components:n})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);