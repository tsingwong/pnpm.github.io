(self.webpackChunk=self.webpackChunk||[]).push([[6103],{3030:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(7689),l=a(1626),r=a(9848),i=a(9065),s=a(6758),o=a(7509),c=a(4988),m=a(627),d=a(5773);const u="blogPostTitle_2U_3",g="blogPostData_2Irf",v="blogPostDetailsFull_3bva";const p=function(e){var t,a,p,E=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,h=e.frontMatter,_=e.metadata,f=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,I=_.formattedDate,w=_.permalink,T=_.tags,L=_.readingTime,P=_.title,C=_.editUrl,x=h.author,M=h.image,y=h.keywords,A=h.author_url||h.authorURL,B=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:y,image:M}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},Z?P:n.createElement(s.Z,{to:w},P)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},I),L&&n.createElement(n.Fragment,null," \xb7 ",E(L))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:A},n.createElement("img",{src:R,alt:x})),n.createElement("div",{className:"avatar__intro"},x&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:A},x)),n.createElement("small",{className:"avatar__subtitle"},B)))))),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:c.Z},b)),(T.length>0||f)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},T.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),T.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:C})),!Z&&f&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+P},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},1557:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(7689),l=a(4926),r=a(3030),i=a(9065),s=a(6758);const o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(4935),m=a(1941),d=a(7509);const u=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,u=s.title,g=s.description,v=s.nextItem,p=s.prevItem,E=i.hide_table_of_contents;return n.createElement(l.Z,{title:u,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(c.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(r.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(v||p)&&n.createElement(o,{nextItem:v,prevItem:p})),!E&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))}},4935:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(7689),l=a(1626),r=a(6758);const i="sidebar_1SNI",s="sidebarItemTitle_3MD5",o="sidebarItemList_2DEw",c="sidebarItem_1Mn6",m="sidebarItemLink_10ee",d="sidebarItemLinkActive_16FA";var u=a(9065);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:d},e.title))}))))}},5773:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(7689),l=a(9065),r=a(2791),i=a(9698),s=a(1626);const o="iconEdit_Cl11";var c=["className"];const m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1941:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7689),l=a(1626);const r=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],m=c.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_1wtl";var s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}const c=function(e){var t=e.toc;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);