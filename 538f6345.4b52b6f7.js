(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{1808:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?a.a.createElement(s,c(c({ref:t},b),{},{components:r})):a.a.createElement(s,c({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},633:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(1808)),o=["components"],c={title:"Taro.createLivePlayerContext(id, component)",sidebar_label:"createLivePlayerContext"},l={unversionedId:"apis/media/live/createLivePlayerContext",id:"version-2.x/apis/media/live/createLivePlayerContext",isDocsHomePage:!1,title:"Taro.createLivePlayerContext(id, component)",description:"\u521b\u5efa live-player \u4e0a\u4e0b\u6587 LivePlayerContext \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.x/apis/media/live/createLivePlayerContext.md",slug:"/apis/media/live/createLivePlayerContext",permalink:"/taro/docs/2.x/apis/media/live/createLivePlayerContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/live/createLivePlayerContext.md",version:"2.x",sidebar_label:"createLivePlayerContext",sidebar:"version-2.x/API",previous:{title:"Taro.createLivePusherContext()",permalink:"/taro/docs/2.x/apis/media/live/createLivePusherContext"},next:{title:"LivePlayerContext",permalink:"/taro/docs/2.x/apis/media/live/LivePlayerContext"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function d(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u521b\u5efa ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"},"live-player")," \u4e0a\u4e0b\u6587 ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html"},"LivePlayerContext")," \u5bf9\u8c61\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"(id: string, component?: Record<string, any>) => LivePlayerContext\n")),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"id"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",null,Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"},"live-player")," \u7ec4\u4ef6\u7684 id")),Object(i.b)("tr",null,Object(i.b)("td",null,"component"),Object(i.b)("td",null,Object(i.b)("code",null,"Record<string, any>")),Object(i.b)("td",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"},"live-player")," \u7ec4\u4ef6")))),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.createLivePlayerContext"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);