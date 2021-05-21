(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(8),s=(t(0),t(318)),r={id:"using-changesets",title:"Using Changesets with pnpm"},c={unversionedId:"using-changesets",id:"using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was",source:"@site/docs/using-changesets.md",slug:"/using-changesets",permalink:"/next/using-changesets",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/using-changesets.md",version:"current",lastUpdatedBy:"Juan Picado",lastUpdatedAt:1620654008,formattedLastUpdatedAt:"5/10/2021",sidebar:"docs",previous:{title:"Command line tab-completion",permalink:"/next/completion"},next:{title:"Continuous Integration",permalink:"/next/continuous-integration"}},o=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[{value:"Bumb up packages",id:"bumb-up-packages",children:[]},{value:"Publishing",id:"publishing",children:[]}]}],p={toc:o};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was\nv6.3.0. The latest ",Object(s.b)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},"Changesets")," version was v2.16.0."))),Object(s.b)("h2",{id:"setup"},"Setup"),Object(s.b)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency\nin the root of the workspace:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),Object(s.b)("p",null,"Then changesets' init command:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),Object(s.b)("h2",{id:"adding-new-changesets"},"Adding new changesets"),Object(s.b)("p",null,"To generate a new changeset, run ",Object(s.b)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository.\nThe generated markdown files in the ",Object(s.b)("inlineCode",{parentName:"p"},".changeset")," directory should be committed\nto the repository."),Object(s.b)("h2",{id:"releasing-changes"},"Releasing changes"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Run ",Object(s.b)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages\npreviously specified with ",Object(s.b)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and\nupdate the changelog files."),Object(s.b)("li",{parentName:"ol"},"Run ",Object(s.b)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),Object(s.b)("li",{parentName:"ol"},"Commit the changes."),Object(s.b)("li",{parentName:"ol"},"Run ",Object(s.b)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have\nbumped versions not yet present in the registry.")),Object(s.b)("h2",{id:"using-github-actions"},"Using GitHub Actions"),Object(s.b)("p",null,"To automate the process, you can use ",Object(s.b)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),Object(s.b)("h3",{id:"bumb-up-packages"},"Bumb up packages"),Object(s.b)("p",null,"The action will detect when changeset files arrive in the ",Object(s.b)("inlineCode",{parentName:"p"},"main")," branch, the action will open a new PR listing all the packages with bumped versions. Once merged, the packages will be updated and you can decide whether to publish or not by adding the ",Object(s.b)("inlineCode",{parentName:"p"},"publish")," property."),Object(s.b)("h3",{id:"publishing"},"Publishing"),Object(s.b)("p",null,"By adding ",Object(s.b)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish")," which is a script that executes ",Object(s.b)("inlineCode",{parentName:"p"},"changeset publish"),"\nwill publish to the registry once the PR is opened by ",Object(s.b)("inlineCode",{parentName:"p"},"changeset version"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),Object(s.b)("p",null,"More info and documentation regarding this action can be found\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."))}l.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||s;return t?i.a.createElement(d,c(c({ref:n},p),{},{components:t})):i.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=h;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<s;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);