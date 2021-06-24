(self.webpackChunk=self.webpackChunk||[]).push([[8629],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>d});var a=r(7689);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=a.createContext({}),c=function(e){var n=a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=t,s=m["".concat(o,".").concat(d)]||m[d]||k[d]||p;return r?a.createElement(s,l(l({ref:n},u),{},{components:r})):a.createElement(s,l({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9172:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>i,metadata:()=>o,toc:()=>c,default:()=>k});var a=r(1424),t=r(2489),p=(r(7689),r(9848)),l=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},o={unversionedId:"pnpx-cli",id:"pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"\u0130lk defa kullananlar",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/tr/next/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/tr",version:"current",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/tr/next/pnpm-cli"},next:{title:"Yap\u0131land\u0131rma",permalink:"/tr/next/configuring"}},c=[{value:"\u0130lk defa kullananlar",id:"i\u0307lk-defa-kullananlar",children:[]},{value:"npm kullananlar",id:"npm-kullananlar",children:[]}],u={toc:c};function k(e){var n=e.components,r=(0,t.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"i\u0307lk-defa-kullananlar"},"\u0130lk defa kullananlar"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (a\xe7\u0131l\u0131m\u0131 PNPm eXecute) komutu, npm veritaban\u0131ndan ili\u015fkili paketi \xe7ekerek, projeye k\xfct\xfcphane olarak dahil etmeden, y\xfckleme yapmadan, hedef pakette varsay\u0131lan olarak tan\u0131ml\u0131 gelen binary (\xe7al\u0131\u015ft\u0131r\u0131labilir) komutunu \xe7al\u0131\u015ft\u0131r\u0131r."),(0,p.kt)("p",null,"\xd6rne\u011fin: ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," paketini kullanarak her hangi bir dizinde h\u0131zl\u0131ca React projesi olu\u015fturmak i\xe7in \u015fu komutu kullanabilirsin:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app yeni-proje\n")),(0,p.kt)("p",null,"Komutu girildikten sonra pnpm, veritaban\u0131ndan ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," uygulamas\u0131 \xe7ekerek belirlenen parametrelere birlikte \xe7al\u0131\u015ft\u0131racakt\u0131r. Daha detayl\u0131 bilgi i\xe7in, npm'in ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," d\xf6k\xfcman\u0131n\u0131 inceleyebilirsin. Temelde ikisi de ayn\u0131 \u015fekilde \xe7al\u0131\u015f\u0131yor fakat ",(0,p.kt)("inlineCode",{parentName:"p"},"npx"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," yerine ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," yap\u0131s\u0131n\u0131 kullanarak i\u015flemleri ger\xe7ekle\u015ftiriyor."),(0,p.kt)("p",null,"E\u011fer sadece projeye eklenmi\u015f bir k\xfct\xfcphaneyi (k\xfct\xfcphanenin binary dosyas\u0131n\u0131) \xe7al\u0131\u015ft\u0131rman gerekirse, ",(0,p.kt)("a",{parentName:"p",href:"/tr/next/cli/exec"},"pnpm exec")," komutunu kullanabilirsin."),(0,p.kt)("h2",{id:"npm-kullananlar"},"npm kullananlar"),(0,p.kt)("p",null,"npm'in, ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," ad\u0131nda harika bir paket \xe7al\u0131\u015ft\u0131r\u0131c\u0131s\u0131 bulunuyor. pnpm'in de bu \xe7al\u0131\u015ft\u0131r\u0131c\u0131yla ayn\u0131 yap\u0131ya sahip, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," ad\u0131nda paket \xe7al\u0131\u015ft\u0131r\u0131c\u0131s\u0131 bulunmakta. Aralar\u0131ndaki tek fark, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," paket y\xfcklemesi yaparken ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," yap\u0131s\u0131n\u0131 kullanarak paketi \xe7al\u0131\u015ft\u0131r\u0131r."))}k.isMDXComponent=!0}}]);