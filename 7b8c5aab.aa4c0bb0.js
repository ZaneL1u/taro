(window.webpackJsonp=window.webpackJsonp||[]).push([[843],{1808:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},911:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(1808)),o=["components"],c={title:"Taro.createLivePusherContext()",sidebar_label:"createLivePusherContext"},p={unversionedId:"apis/media/live/createLivePusherContext",id:"apis/media/live/createLivePusherContext",isDocsHomePage:!1,title:"Taro.createLivePusherContext()",description:"\u521b\u5efa live-pusher \u4e0a\u4e0b\u6587 LivePusherContext \u5bf9\u8c61\u3002",source:"@site/docs/apis/media/live/createLivePusherContext.md",slug:"/apis/media/live/createLivePusherContext",permalink:"/taro/docs/next/apis/media/live/createLivePusherContext",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/live/createLivePusherContext.md",version:"current",sidebar_label:"createLivePusherContext",sidebar:"API",previous:{title:"BackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/BackgroundAudioManager"},next:{title:"Taro.createLivePlayerContext(id, component)",permalink:"/taro/docs/next/apis/media/live/createLivePlayerContext"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u521b\u5efa ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"},"live-pusher")," \u4e0a\u4e0b\u6587 ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html"},"LivePusherContext")," \u5bf9\u8c61\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"() => LivePusherContext\n")),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.createLivePusherContext"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})))))}b.isMDXComponent=!0}}]);