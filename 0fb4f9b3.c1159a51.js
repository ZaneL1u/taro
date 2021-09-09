(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(1808)),a=["components"],c={title:"Taro.setInnerAudioOption(option)",sidebar_label:"setInnerAudioOption"},l={unversionedId:"apis/media/audio/setInnerAudioOption",id:"version-2.x/apis/media/audio/setInnerAudioOption",isDocsHomePage:!1,title:"Taro.setInnerAudioOption(option)",description:"\u8bbe\u7f6e InnerAudioContext \u7684\u64ad\u653e\u9009\u9879\u3002\u8bbe\u7f6e\u4e4b\u540e\u5bf9\u5f53\u524d\u5c0f\u7a0b\u5e8f\u5168\u5c40\u751f\u6548\u3002",source:"@site/versioned_docs/version-2.x/apis/media/audio/setInnerAudioOption.md",slug:"/apis/media/audio/setInnerAudioOption",permalink:"/taro/docs/2.x/apis/media/audio/setInnerAudioOption",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/audio/setInnerAudioOption.md",version:"2.x",sidebar_label:"setInnerAudioOption",sidebar:"version-2.x/API",previous:{title:"Taro.stopVoice(option)",permalink:"/taro/docs/2.x/apis/media/audio/stopVoice"},next:{title:"Taro.playVoice(option)",permalink:"/taro/docs/2.x/apis/media/audio/playVoice"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u8bbe\u7f6e ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html"},"InnerAudioContext")," \u7684\u64ad\u653e\u9009\u9879\u3002\u8bbe\u7f6e\u4e4b\u540e\u5bf9\u5f53\u524d\u5c0f\u7a0b\u5e8f\u5168\u5c40\u751f\u6548\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h3",{id:"option"},"Option"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"complete"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: CallbackResult) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(i.b)("tr",null,Object(i.b)("td",null,"fail"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: CallbackResult) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(i.b)("tr",null,Object(i.b)("td",null,"mixWithOther"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u4e0e\u5176\u4ed6\u97f3\u9891\u6df7\u64ad\uff0c\u8bbe\u7f6e\u4e3a true \u4e4b\u540e\uff0c\u4e0d\u4f1a\u7ec8\u6b62\u5176\u4ed6\u5e94\u7528\u6216\u5fae\u4fe1\u5185\u7684\u97f3\u4e50")),Object(i.b)("tr",null,Object(i.b)("td",null,"obeyMuteSwitch"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\uff08\u4ec5\u5728 iOS \u751f\u6548\uff09\u662f\u5426\u9075\u5faa\u9759\u97f3\u5f00\u5173\uff0c\u8bbe\u7f6e\u4e3a false \u4e4b\u540e\uff0c\u5373\u4f7f\u662f\u5728\u9759\u97f3\u6a21\u5f0f\u4e0b\uff0c\u4e5f\u80fd\u64ad\u653e\u58f0\u97f3")),Object(i.b)("tr",null,Object(i.b)("td",null,"success"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: CallbackResult) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.setInnerAudioOption"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0},1808:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,s=d["".concat(a,".").concat(O)]||d[O]||p[O]||i;return n?o.a.createElement(s,c(c({ref:t},b),{},{components:n})):o.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);