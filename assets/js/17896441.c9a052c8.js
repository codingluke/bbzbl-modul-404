"use strict";(self.webpackChunkbbzbl_modul_404=self.webpackChunkbbzbl_modul_404||[]).push([[7918],{1310:function(e,t,a){a.d(t,{Z:function(){return v}});a(7294);var n=a(512),s=a(5281),i=a(3438),l=a(8596),r=a(3692),o=a(5999),d=a(4996),c=a(5893);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}var m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,d.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(r.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}var b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:a,isLast:n}=e;const s="breadcrumbs__link";return n?(0,c.jsx)("span",{className:s,itemProp:"name",children:t}):a?(0,c.jsx)(r.Z,{className:s,href:a,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:s,children:t})}function x(e){let{children:t,active:a,index:s,addMicrodata:i}=e;return(0,c.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function v(){const e=(0,i.s1)(),t=(0,l.Ns)();return e?(0,c.jsx)("nav",{className:(0,n.Z)(s.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map(((t,a)=>{const n=a===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:n,index:a,addMicrodata:!!s,children:(0,c.jsx)(p,{href:s,isLast:n,children:t.label})},a)}))]})}):null}},230:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(7294),s=a(1944),i=a(902),l=a(5893);const r=n.createContext(null);function o(e){let{children:t,content:a}=e;const s=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(r.Provider,{value:s,children:t})}function d(){const e=(0,n.useContext)(r);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:a}=d();return(0,l.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var u=a(512),m=a(7524),h=a(4966);function b(){const{metadata:e}=d();return(0,l.jsx)(h.Z,{previous:e.previous,next:e.next})}var p=a(3120),x=a(4364),v=a(5281),j=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,l.jsx)(j.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(j.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:v.k.common.lastUpdated,children:[(0,l.jsx)(j.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?(0,l.jsx)(f,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var Z=a(3692),N={iconEdit:"iconEdit_Z9Sw"};function C(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(N.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,l.jsxs)(Z.Z,{to:t,className:v.k.common.editThisPage,children:[(0,l.jsx)(C,{}),(0,l.jsx)(j.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:a,count:n}=e;return(0,l.jsxs)(Z.Z,{href:t,className:(0,u.Z)(k.tag,n?k.tagWithCount:k.tagRegular),children:[a,n&&(0,l.jsx)("span",{children:n})]})}var U={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(j.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:U.tag,children:(0,l.jsx)(T,{label:t,permalink:a})},a)}))})]})}var y={lastUpdated:"lastUpdated_vwxv"};function A(e){return(0,l.jsx)("div",{className:(0,u.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w,{...e})})})}function M(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:n,formattedLastUpdatedAt:s}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(L,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",y.lastUpdated),children:(a||n)&&(0,l.jsx)(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:n})})]})}function B(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,r=i.length>0,o=!!(t||a||s);return r||o?(0,l.jsxs)("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,l.jsx)(A,{tags:i}),o&&(0,l.jsx)(M,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:n})]}):null}var I=a(6043),E=a(3743),H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:t,...a}=e;return(0,l.jsx)("button",{type:"button",...a,className:(0,u.Z)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,a.className),children:(0,l.jsx)(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}var D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:a,minHeadingLevel:n,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:r}=(0,I.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(D.tocCollapsible,!i&&D.tocCollapsibleExpanded,a),children:[(0,l.jsx)(V,{collapsed:i,onClick:r}),(0,l.jsx)(I.z,{lazy:!0,className:D.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:s})})]})}var S={tocMobile:"tocMobile_ITEo"};function z(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,S.tocMobile)})}var F=a(9407);function R(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(F.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var O=a(7955),Y=a(5042);function G(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=d();return t.hide_title||void 0!==a?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown"),children:[a&&(0,l.jsx)("header",{children:(0,l.jsx)(O.Z,{as:"h1",children:a})}),(0,l.jsx)(Y.Z,{children:t})]})}var W=a(1310),$=a(2212),q={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function J(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=d(),a=(0,m.i)(),n=e.hide_table_of_contents,s=!n&&t.length>0;return{hidden:n,mobile:s?(0,l.jsx)(z,{}):void 0,desktop:!s||"desktop"!==a&&"ssr"!==a?void 0:(0,l.jsx)(R,{})}}(),{metadata:{unlisted:n}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!a.hidden&&q.docItemCol),children:[n&&(0,l.jsx)($.Z,{}),(0,l.jsx)(p.Z,{}),(0,l.jsxs)("div",{className:q.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(W.Z,{}),(0,l.jsx)(x.Z,{}),a.mobile,(0,l.jsx)(G,{children:t}),(0,l.jsx)(B,{})]}),(0,l.jsx)(b,{})]})]}),a.desktop&&(0,l.jsx)("div",{className:"col col--3",children:a.desktop})]})}function X(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return(0,l.jsx)(o,{content:e.content,children:(0,l.jsxs)(s.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(J,{children:(0,l.jsx)(a,{})})]})})}},4966:function(e,t,a){a.d(t,{Z:function(){return o}});a(7294);var n=a(5999),s=a(512),i=a(3692),l=a(5893);function r(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return(0,l.jsxs)(i.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}function o(e){const{previous:t,next:a}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(r,{...t,subLabel:(0,l.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),a&&(0,l.jsx)(r,{...a,subLabel:(0,l.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:function(e,t,a){a.d(t,{Z:function(){return o}});a(7294);var n=a(512),s=a(5999),i=a(5281),l=a(4477),r=a(5893);function o(e){let{className:t}=e;const a=(0,l.E)();return a.badge?(0,r.jsx)("span",{className:(0,n.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},3120:function(e,t,a){a.d(t,{Z:function(){return x}});a(7294);var n=a(512),s=a(2263),i=a(3692),l=a(5999),r=a(143),o=a(5281),d=a(373),c=a(4477),u=a(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:a,onClick:n}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:a,onClick:n,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,s.Z)(),{pluginId:l}=(0,r.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,d.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,r.Jo)(l),x=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>c(p.name)})})]})}function x(e){let{className:t}=e;const a=(0,c.E)();return a.banner?(0,u.jsx)(p,{className:t,versionMetadata:a}):null}},8390:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),s=a(1226),i=a(4208),l=a(2991),r=(a(9345),"container_B1kA"),o="timeline_Ypeg",d="event_Xi2w",c="active_ZY81",u=(a(2263),a(512)),m=a(5893);var h=e=>{let{title:t,children:a}=e;const s=()=>{const e=new Date;return Number(`${e.getHours()}${e.getMinutes()}`)},[i,l]=(0,n.useState)(s());setInterval((()=>{l(s())}),3600);return(0,m.jsxs)("div",{className:r,children:[t&&(0,m.jsx)("h1",{children:(0,m.jsx)("div",{children:t})}),(0,m.jsx)("ul",{className:o,children:n.Children.map(a,((e,t)=>((e,t)=>{if(!e)return!1;const a=Number(e.replace(":",""));if(t){const e=Number(t.replace(":",""));return a<=i&&i<e}return a<=i})(e?.props.time,a[t+1]?.props.time)?n.cloneElement(e,{active:!0}):n.cloneElement(e)))})]})},b={...s.Z,YouTube:i.Z,DocCardList:l.Z,Timeline:h,Event:e=>{let{time:t,active:a,children:n}=e;return(0,m.jsx)("li",{className:(0,u.Z)(d,a?c:""),"data-date":t,children:n})}}}}]);