(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1808:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return s}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),p=function(e){var r=n.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=p(e.components);return n.a.createElement(d.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},l=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),b=p(t),l=a,s=b["".concat(c,".").concat(l)]||b[l]||g[l]||o;return t?n.a.createElement(s,i(i({ref:r},d),{},{components:t})):n.a.createElement(s,i({ref:r},d))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},982:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return d})),t.d(r,"default",(function(){return b}));var a=t(3),n=t(7),o=(t(0),t(1808)),c=["components"],i={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},u={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"apis/media/background-audio/getBackgroundAudioManager",isDocsHomePage:!1,title:"Taro.getBackgroundAudioManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002",source:"@site/docs/apis/media/background-audio/getBackgroundAudioManager.md",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/background-audio/getBackgroundAudioManager.md",version:"current",sidebar_label:"getBackgroundAudioManager",sidebar:"API",previous:{title:"Taro.getBackgroundAudioPlayerState(option)",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/BackgroundAudioManager"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:d};function b(e){var r=e.components,t=Object(n.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u83b7\u53d6",Object(o.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002\n\u5c0f\u7a0b\u5e8f\u5207\u5165\u540e\u53f0\uff0c\u5982\u679c\u97f3\u9891\u5904\u4e8e\u64ad\u653e\u72b6\u6001\uff0c\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u3002\u4f46\u662f\u540e\u53f0\u72b6\u6001\u4e0d\u80fd\u901a\u8fc7\u8c03\u7528API\u64cd\u7eb5\u97f3\u9891\u7684\u64ad\u653e\u72b6\u6001\u3002"),Object(o.b)("p",null,"\u4ece\u5fae\u4fe1\u5ba2\u6237\u7aef6.7.2\u7248\u672c\u5f00\u59cb\uff0c\u82e5\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u540e\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u5728 ",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"},"app.json")," \u4e2d\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," \u5c5e\u6027\u3002\u5f00\u53d1\u7248\u548c\u4f53\u9a8c\u7248\u4e0a\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u6b63\u5f0f\u7248\u8fd8\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"() => BackgroundAudioManager\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.getBackgroundAudioManager"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}b.isMDXComponent=!0}}]);