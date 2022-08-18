"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{8558:(e,t,n)=>{n.r(t),n.d(t,{default:()=>wt});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:n,assets:r}=c();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(4334),m=n(7524),u=n(3117),p=n(5999),h=n(9960);function f(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return a.createElement(h.default,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function g(){const{metadata:e}=c();return a.createElement(v,{previous:e.previous,next:e.next})}var b=n(2263),E=n(143),y=n(5281),k=n(373),N=n(4477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.default,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,b.default)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,k.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,E.Jo)(r),s=null!=i?i:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:c.label,to:s.path,onClick:()=>o(c.name)})))}function Z(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function B(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(B,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function M(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function S(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(M,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const U="tag_zVej",z="tagRegular_sFm0",P="tagWithCount_h2kH";function I(e){let{permalink:t,label:n,count:l}=e;return a.createElement(h.default,{href:t,className:(0,d.Z)(U,l?P:z)},n,l&&a.createElement("span",null,l))}const V="tags_jXut",O="tag_QGVx";function D(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(V,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:O},a.createElement(I,{label:t,permalink:n}))}))))}const R="lastUpdated_vwxv";function j(e){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(D,e)))}function W(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(S,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",R)},(n||l)&&a.createElement(H,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function F(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(j,{tags:o}),s&&a.createElement(W,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var q=n(6043),G=n(6668);function J(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function Q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=Q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function Y(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Y(e.parentNode):t}function X(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>Y(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Y(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function K(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,G.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function $(e){const t=(0,a.useRef)(void 0),n=K();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=X(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function ee(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(ee,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const te=a.memo(ee);function ne(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i,...c}=e;const s=(0,G.L)(),d=null!=o?o:s.tableOfContents.minHeadingLevel,m=null!=i?i:s.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>Q({toc:J(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return $((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:m}}),[l,r,d,m])),a.createElement(te,(0,u.Z)({toc:p,className:n,linkClassName:l},c))}const ae="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E";function re(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",ae,!t&&le,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const oe="tocCollapsible_ETCw",ie="tocCollapsibleContent_vkbj",ce="tocCollapsibleExpanded_sAul";function se(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,q.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(oe,!o&&ce,n)},a.createElement(re,{collapsed:o,onClick:i}),a.createElement(q.z,{lazy:!0,className:ie,collapsed:o},a.createElement(ne,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const de="tocMobile_ITEo";function me(){const{toc:e,frontMatter:t}=c();return a.createElement(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,de)})}const ue="tableOfContents_bqdL";function pe(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(ue,"thin-scrollbar",t)},a.createElement(ne,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function he(){const{toc:e,frontMatter:t}=c();return a.createElement(pe,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}const fe="anchorWithStickyNavbar_LWe7",ve="anchorWithHideOnScrollNavbar_WYt5";function ge(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:r}}=(0,G.L)();return"h1"!==t&&n?a.createElement(t,(0,u.Z)({},l,{className:(0,d.Z)("anchor",r?ve:fe),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,u.Z)({},l,{id:void 0}))}var be=n(3905),Ee=n(5742);var ye=n(2389),ke=n(6505);const Ne={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Le(e){let{children:t,className:n}=e;return a.createElement(ke.default,{as:"pre",tabIndex:0,className:(0,d.Z)(Ne.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Ne.codeBlockLines},t))}var Ce=n(6412),_e=n(7016);const Te={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ze(e,t){const[n,l]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=Te);const l=(0,r.zX)(t),o=(0,r.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(l);return e&&t.observe(e,o),()=>t.disconnect()}),[e,l,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const we={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var xe={Prism:n(1205).Z,theme:we};function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},He.apply(this,arguments)}var Ae=/\r\n|\r|\n/,Me=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Se=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Ue=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=He({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=He({},n,{backgroundColor:null}),l};function ze(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const Pe=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Be(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Ue(e.theme,e.language):void 0;return t.themeDict=n})),Be(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=He({},ze(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?He({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Be(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(i))}})),Be(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,o=He({},ze(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?He({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Be(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],r=0,o=0,i=[],c=[i];o>-1;){for(;(r=a[o]++)<l[o];){var s=void 0,d=t[o],m=n[o][r];if("string"==typeof m?(d=o>0?d:["plain"],s=m):(d=Se(d,m.type),m.alias&&(d=Se(d,m.alias)),s=m.content),"string"==typeof s){var u=s.split(Ae),p=u.length;i.push({types:d,content:u[0]});for(var h=1;h<p;h++)Me(i),c.push(i=[]),i.push({types:d,content:u[h]})}else o++,t.push(d),n.push(s),a.push(0),l.push(s.length)}o--,t.pop(),n.pop(),a.pop(),l.pop()}return Me(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Ie="codeLine_lJS_",Ve="codeLineNumber_Tfdd",Oe="codeLineContent_feaV";function De(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:r,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,d.Z)(n,l&&Ie)}),c=t.map(((e,t)=>a.createElement("span",(0,u.Z)({key:t},o({token:e,key:t})))));return a.createElement("span",i,l?a.createElement(a.Fragment,null,a.createElement("span",{className:Ve}),a.createElement("span",{className:Oe},c)):a.createElement(a.Fragment,null,c,a.createElement("br",null)))}var Re=n(5291);const je="wordWrapButtonIcon_Bwma",We="wordWrapButtonEnabled_EoeP";function Fe(e){let{className:t,onClick:n,isEnabled:l}=e;const r=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,d.Z)("clean-btn",t,l&&We),"aria-label":r,title:r},a.createElement("svg",{className:je,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function qe(e){var t;let{children:n,className:l="",metastring:r,title:o,showLineNumbers:i,language:c}=e;const{prism:{defaultLanguage:s,magicComments:m}}=(0,G.L)(),p=null!=(t=null!=c?c:(0,_e.Vo)(l))?t:s,h=(0,Ce.p)(),f=function(){const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),i=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");l(n)}),[r]);return Ze(r,i),(0,a.useEffect)((()=>{i()}),[e,i]),(0,a.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:o}}(),v=(0,_e.bc)(r)||o,{lineClassNames:g,code:b}=(0,_e.nZ)(n,{metastring:r,language:p,magicComments:m}),E=null!=i?i:(0,_e.nt)(r);return a.createElement(ke.default,{as:"div",className:(0,d.Z)(l,p&&!l.includes("language-"+p)&&"language-"+p)},v&&a.createElement("div",{className:Ne.codeBlockTitle},v),a.createElement("div",{className:Ne.codeBlockContent},a.createElement(Pe,(0,u.Z)({},xe,{theme:h,code:b,language:null!=p?p:"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,d.Z)(t,Ne.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,d.Z)(Ne.codeBlockLines,E&&Ne.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(De,{key:t,line:e,getLineProps:l,getTokenProps:r,classNames:g[t],showLineNumbers:E})))))})),a.createElement("div",{className:Ne.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&a.createElement(Fe,{className:Ne.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),a.createElement(Re.default,{className:Ne.codeButton,code:b}))))}function Ge(e){let{children:t,...n}=e;const l=(0,ye.default)(),r=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof r?qe:Le;return a.createElement(o,(0,u.Z)({key:String(l)},n),r)}var Je=n(7459);const Qe="details_lb9f",Ye="isBrowser_bmU9",Xe="collapsibleContent_i85q";function Ke(e){return!!e&&("SUMMARY"===e.tagName||Ke(e.parentElement))}function $e(e,t){return!!e&&(e===t||$e(e.parentElement,t))}function et(e){let{summary:t,children:n,...l}=e;const r=(0,ye.default)(),o=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,q.u)({initialState:!l.open}),[s,d]=(0,a.useState)(l.open);return a.createElement("details",(0,u.Z)({},l,{ref:o,open:s,"data-collapsed":i,className:(0,Je.Z)(Qe,r&&Ye,l.className),onMouseDown:e=>{Ke(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ke(t)&&$e(t,o.current)&&(e.preventDefault(),i?(c(!1),d(!0)):c(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(q.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),d(!e)}},a.createElement("div",{className:Xe},n)))}const tt="details_b_Ee";function nt(e){let{...t}=e;return a.createElement(et,(0,u.Z)({},t,{className:(0,d.Z)("alert alert--info",tt,t.className)}))}function at(e){return a.createElement(ge,e)}const lt="containsTaskList_mC6p";const rt="img_ev3q";const ot="admonition_LlT9",it="admonitionHeading_tbUL",ct="admonitionIcon_kALy",st="admonitionContent_S0QG";const dt={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},mt={secondary:"note",important:"info",success:"tip",warning:"danger"};function ut(e){var t;const{mdxAdmonitionTitle:n,rest:l}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:l}}const pt={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(Ee.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(Ge,e)},a:function(e){return a.createElement(h.default,e)},pre:function(e){var t;return a.createElement(Ge,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(nt,(0,u.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,u.Z)({},e,{className:(t=e.className,(0,d.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&lt))}));var t},img:function(e){return a.createElement("img",(0,u.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,rt))}));var t},h1:e=>a.createElement(at,(0,u.Z)({as:"h1"},e)),h2:e=>a.createElement(at,(0,u.Z)({as:"h2"},e)),h3:e=>a.createElement(at,(0,u.Z)({as:"h3"},e)),h4:e=>a.createElement(at,(0,u.Z)({as:"h4"},e)),h5:e=>a.createElement(at,(0,u.Z)({as:"h5"},e)),h6:e=>a.createElement(at,(0,u.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:r}=ut(e),o=function(e){var t;const n=null!=(t=mt[e])?t:e;return dt[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),dt.info)}(n),i=null!=l?l:o.label,{iconComponent:c}=o,s=null!=r?r:a.createElement(c,null);return a.createElement("div",{className:(0,d.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,ot)},a.createElement("div",{className:it},a.createElement("span",{className:ct},s),i),a.createElement("div",{className:st},t))}};function ht(e){let{children:t}=e;return a.createElement(be.Zo,{components:pt},t)}function ft(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(ge,{as:"h1"},n)),a.createElement(ht,null,t))}var vt=n(3438),gt=n(8596),bt=n(4996);function Et(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const yt={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function kt(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(h.default,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Nt(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Lt(){const e=(0,bt.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.default,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",yt.breadcrumbsItemLink),href:e},a.createElement(Et,{className:yt.breadcrumbHomeIcon})))}function Ct(){const e=(0,vt.s1)(),t=(0,gt.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,yt.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Lt,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(Nt,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(kt,{href:t.href,isLast:l},t.label))})))):null}const _t="docItemContainer_Djhp",Tt="docItemCol_VOVn";function Zt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(me,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(he,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&Tt)},a.createElement(Z,null),a.createElement("div",{className:_t},a.createElement("article",null,a.createElement(Ct,null),a.createElement(w,null),n.mobile,a.createElement(ft,null,t),a.createElement(F,null)),a.createElement(g,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function wt(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(Zt,null,a.createElement(n,null))))}},4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);