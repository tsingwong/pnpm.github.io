(self.webpackChunk=self.webpackChunk||[]).push([[2432],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1441:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(1424),i=n(2489),o=(n(7689),n(9848)),l=["components"],a={id:"audit",title:"pnpm audit"},p={unversionedId:"cli/audit",id:"version-5.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 4.3.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/ru/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/ru/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/ru/5.x/cli/list"}},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--audit-level &lt;\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c&gt;",id:"--audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 4.3.0"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438."),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("h3",{id:"--audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c"},"--audit-level ","<","\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 JSON \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e dev \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e production \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"\u041d\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}d.isMDXComponent=!0}}]);