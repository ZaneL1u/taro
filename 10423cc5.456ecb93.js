(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1808:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,j=d["".concat(b,".").concat(m)]||d[m]||u[m]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(1808)),b=["components"],c={title:"Taro.uploadFile(param)",sidebar_label:"uploadFile"},i={unversionedId:"apis/network/fileTransfer/uploadFile",id:"version-1.x/apis/network/fileTransfer/uploadFile",isDocsHomePage:!1,title:"Taro.uploadFile(param)",description:"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-1.x/apis/network/fileTransfer/uploadFile.md",slug:"/apis/network/fileTransfer/uploadFile",permalink:"/taro/docs/1.x/apis/network/fileTransfer/uploadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/network/fileTransfer/uploadFile.md",version:"1.x",sidebar_label:"uploadFile",sidebar:"version-1.x/API",previous:{title:"Taro.createVideoContext(videoId, componentInstance)",permalink:"/taro/docs/1.x/apis/multimedia/video/createVideoContext"},next:{title:"Taro.downloadFile(param)",permalink:"/taro/docs/1.x/apis/network/fileTransfer/downloadFile"}},o=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"Promise&lt;object res&gt; promise",id:"promiseobject-res-promise",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002"),Object(l.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.uploadFile.html"},Object(l.b)("inlineCode",{parentName:"a"},"wx.uploadFile")),"\uff0c\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"object-param"},"object param"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"string")),Object(l.b)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"filePath"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"string")),Object(l.b)("td",{parentName:"tr",align:null},"\u8981\u4e0a\u4f20\u6587\u4ef6\u8d44\u6e90\u7684\u8def\u5f84")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"string")),Object(l.b)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5bf9\u5e94\u7684 key\uff0c\u5f00\u53d1\u8005\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a key \u83b7\u53d6\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[header]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"object")),Object(l.b)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[formData]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"object")),Object(l.b)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42\u4e2d\u5176\u4ed6\u989d\u5916\u7684 form data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[success()]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[fail()]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[complete()]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(l.b)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(l.b)("h3",{id:"promiseobject-res-promise"},"Promise","<","object res",">"," promise"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"promise.headersReceive(callback)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u7ed1\u5b9a\u63a5\u6536\u5230http header\u7684\u56de\u8c03")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"promise.progress(callback)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u7ed1\u5b9a\u8bf7\u6c42\u8fdb\u5ea6\u66f4\u65b0\u7684\u56de\u8c03")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"promise.abort()"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"function")),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d\u65ad\u8bf7\u6c42")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"res.statusCode"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"number")),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u8fd4\u56de\u72b6\u6001\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"res.data"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",null,"any")),Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u7684\u8fd4\u56de\u6570\u636e")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nconst uploadTask = Taro.uploadFile(params).then(...)\n")),Object(l.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.uploadFile"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"},"\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);