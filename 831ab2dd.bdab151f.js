(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{1808:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||s[d]||i;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},968:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(1808)),c=["components"],o={title:"Taro.reLaunch(OBJECT)",sidebar_label:"reLaunch"},p={unversionedId:"apis/interface/navigation/reLaunch",id:"version-1.x/apis/interface/navigation/reLaunch",isDocsHomePage:!1,title:"Taro.reLaunch(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.reLaunch\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/navigation/reLaunch.md",slug:"/apis/interface/navigation/reLaunch",permalink:"/taro/docs/1.x/apis/interface/navigation/reLaunch",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/navigation/reLaunch.md",version:"1.x",sidebar_label:"reLaunch",sidebar:"version-1.x/API",previous:{title:"Taro.navigateBack(OBJECT)",permalink:"/taro/docs/1.x/apis/interface/navigation/navigateBack"},next:{title:"Taro.getCurrentPages(OBJECT)",permalink:"/taro/docs/1.x/apis/interface/navigation/getCurrentPages"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.reLaunch.html"},Object(i.b)("inlineCode",{parentName:"a"},"wx.reLaunch")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.reLaunch(params).then(...)\n")),Object(i.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.reLaunch"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);