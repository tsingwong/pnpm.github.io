"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9613:(I,i,e)=>{e.d(i,{Zo:()=>m,kt:()=>p});var t=e(9496);function l(I,i,e){return i in I?Object.defineProperty(I,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):I[i]=e,I}function a(I,i){var e=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),e.push.apply(e,t)}return e}function n(I){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?a(Object(e),!0).forEach((function(i){l(I,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(e,i))}))}return I}function g(I,i){if(null==I)return{};var e,t,l=function(I,i){if(null==I)return{};var e,t,l={},a=Object.keys(I);for(t=0;t<a.length;t++)e=a[t],i.indexOf(e)>=0||(l[e]=I[e]);return l}(I,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(I);for(t=0;t<a.length;t++)e=a[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(I,e)&&(l[e]=I[e])}return l}var r=t.createContext({}),d=function(I){var i=t.useContext(r),e=i;return I&&(e="function"==typeof I?I(i):n(n({},i),I)),e},m=function(I){var i=d(I.components);return t.createElement(r.Provider,{value:i},I.children)},j={inlineCode:"code",wrapper:function(I){var i=I.children;return t.createElement(t.Fragment,{},i)}},N=t.forwardRef((function(I,i){var e=I.components,l=I.mdxType,a=I.originalType,r=I.parentName,m=g(I,["components","mdxType","originalType","parentName"]),N=d(e),p=l,k=N["".concat(r,".").concat(p)]||N[p]||j[p]||a;return e?t.createElement(k,n(n({ref:i},m),{},{components:e})):t.createElement(k,n({ref:i},m))}));function p(I,i){var e=arguments,l=i&&i.mdxType;if("string"==typeof I||l){var a=e.length,n=new Array(a);n[0]=N;var g={};for(var r in i)hasOwnProperty.call(i,r)&&(g[r]=i[r]);g.originalType=I,g.mdxType="string"==typeof I?I:l,n[1]=g;for(var d=2;d<a;d++)n[d]=e[d];return t.createElement.apply(null,n)}return t.createElement.apply(null,e)}N.displayName="MDXCreateElement"},413:(I,i,e)=>{e.r(i),e.d(i,{frontMatter:()=>g,contentTitle:()=>r,metadata:()=>d,toc:()=>m,default:()=>N});var t=e(98),l=e(6862),a=(e(9496),e(9613)),n=["components"],g={},r="Benchmarks of JavaScript Package Managers",d={type:"mdx",permalink:"/pt/benchmarks",source:"@site/src/pages/benchmarks.md"},m=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:m};function N(I){var i=I.components,g=(0,l.Z)(I,n);return(0,a.kt)("wrapper",(0,t.Z)({},j,g,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,a.kt)("em",{parentName:"p"},"Oct 11, 2021, 2:49 AM")," (",(0,a.kt)("em",{parentName:"p"},"daily")," updated)."),(0,a.kt)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),(0,a.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,a.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,a.kt)("p",null,"The app's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"action"),(0,a.kt)("th",{parentName:"tr",align:null},"cache"),(0,a.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,a.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,a.kt)("th",{parentName:"tr",align:null},"npm"),(0,a.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,a.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,a.kt)("th",{parentName:"tr",align:null},"Yarn PnP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"44.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"22.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"40.9s"),(0,a.kt)("td",{parentName:"tr",align:null},"28.6s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"2.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"12.4s"),(0,a.kt)("td",{parentName:"tr",align:null},"5.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"12.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"18.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"9.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"18.4s"),(0,a.kt)("td",{parentName:"tr",align:null},"7.7s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"30.4s"),(0,a.kt)("td",{parentName:"tr",align:null},"17.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"32.6s"),(0,a.kt)("td",{parentName:"tr",align:null},"21.9s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"19.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"3s"),(0,a.kt)("td",{parentName:"tr",align:null},"8.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"22.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"17.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"7.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"28.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"update"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"2s"),(0,a.kt)("td",{parentName:"tr",align:null},"15.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"43.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"35.8s")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Graph of the alotta-files results",src:e(2005).Z})))}N.isMDXComponent=!0},2005:(I,i,e)=>{e.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY4LjAuMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjYiIHI9IjQiIGZpbGw9IiNmYmFlMDAiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjYwIiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBucG08L3RleHQ+CiAgPHRleHQgeD0iNjAiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djYuMTcuMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI3NiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9Ijc2IiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm48L3RleHQ+CiAgPHRleHQgeD0iNzYiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMC4yPC90ZXh0PgogIDxjaXJjbGUgY3g9IjkyIiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iOTIiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybiBQblA8L3RleHQ+CiAgPHRleHQgeD0iOTIiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMC4yPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PgogIDxsaW5lIHgxPSI5MCIgeTE9IjMxIiB4Mj0iOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PgogIDx0ZXh0IHg9IjkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjk8L3RleHQ+CiAgPGxpbmUgeDE9IjE0MCIgeTE9IjMxIiB4Mj0iMTQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjE0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE4PC90ZXh0PgogIDx0ZXh0IHg9IjE0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xODwvdGV4dD4KICA8bGluZSB4MT0iMTkwIiB5MT0iMzEiIHgyPSIxOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mjc8L3RleHQ+CiAgPHRleHQgeD0iMTkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI3PC90ZXh0PgogIDxsaW5lIHgxPSIyNDAiIHkxPSIzMSIgeDI9IjI0MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zNjwvdGV4dD4KICA8dGV4dCB4PSIyNDAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzY8L3RleHQ+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjMxIiB4Mj0iMjkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI5MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ1PC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40NTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjIwIiBjbGFzcz0iZm9udCBzNCB0ZXh0IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJlbmQiPkluc3RhbGxhdGlvbiB0aW1lIGluIHNlY29uZHMgKGxvd2VyIGlzIGJldHRlcik8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0MS41IiB3aWR0aD0iMTIzIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0OCIgd2lkdGg9IjIyNyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNTQuNSIgd2lkdGg9IjE1OSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNzEuNSIgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijc4IiB3aWR0aD0iMTMiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijg0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI5NSIgd2lkdGg9IjY5IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDEuNSIgd2lkdGg9IjMxIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDgiIHdpZHRoPSI2OSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTE0LjUiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjUiIHdpZHRoPSIxMDEiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzMS41IiB3aWR0aD0iNTIiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzOCIgd2lkdGg9IjEwMiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSI0MyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTY5IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9Ijk3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSIxODEiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE3NC41IiB3aWR0aD0iMTIyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxODUiIHdpZHRoPSIxMTAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5MS41IiB3aWR0aD0iMTciIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5OCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMDQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMjEuNSIgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIyOCIgd2lkdGg9IjEyNyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjM0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNDUiIHdpZHRoPSI5OCIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjUxLjUiIHdpZHRoPSI0MyIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjU4IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNjQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI3NSIgd2lkdGg9IjExIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyODEuNSIgd2lkdGg9Ijg1IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyODgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI5NC41IiB3aWR0aD0iMTk5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxsaW5lIHgxPSI0MCIgeTE9IjMxIiB4Mj0iNDAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIj48L2xpbmU+CiAgPHRleHQgeD0iMzgiIHk9IjQ0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj5jbGVhbiBpbnN0YWxsPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3MC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijc4LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTAyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMDYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEzNC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTY0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE5Ni41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyMi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyNi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjU0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjg0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj51cGRhdGU8L3RleHQ+CiAgPHRleHQgeD0iMjkwIiB5PSIzMTciIGNsYXNzPSJmb250IHM0IHRleHQiIHRleHQtYW5jaG9yPSJlbmQiPlRlc3RzIHdlcmUgcnVuIHVzaW5nIE5vZGUuanMgdjE2LjExLjAgYXQ6IE9jdCAxMSwgMjAyMSwgMjo0OSBBTTwvdGV4dD4KPC9zdmc+Cg=="}}]);