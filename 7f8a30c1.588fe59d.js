(window.webpackJsonp=window.webpackJsonp||[]).push([[872],{1808:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=o,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return r?n.a.createElement(f,c(c({ref:t},p),{},{components:r})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},940:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var o=r(3),n=r(7),a=(r(0),r(1808)),i=["components"],c={title:"Taro.closeBluetoothAdapter(OBJECT)",sidebar_label:"closeBluetoothAdapter"},l={unversionedId:"apis/device/bluetooth/closeBluetoothAdapter",id:"version-1.x/apis/device/bluetooth/closeBluetoothAdapter",isDocsHomePage:!1,title:"Taro.closeBluetoothAdapter(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.closeBluetoothAdapter\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/closeBluetoothAdapter.md",slug:"/apis/device/bluetooth/closeBluetoothAdapter",permalink:"/taro/docs/1.x/apis/device/bluetooth/closeBluetoothAdapter",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/bluetooth/closeBluetoothAdapter.md",version:"1.x",sidebar_label:"closeBluetoothAdapter",sidebar:"version-1.x/API",previous:{title:"Taro.onDeviceMotionChange(callback)",permalink:"/taro/docs/1.x/apis/device/deviceMotion/onDeviceMotionChange"},next:{title:"Taro.getBluetoothAdapterState(OBJECT)",permalink:"/taro/docs/1.x/apis/device/bluetooth/getBluetoothAdapterState"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],u={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.closeBluetoothAdapter.html"},Object(a.b)("inlineCode",{parentName:"a"},"wx.closeBluetoothAdapter")),"\uff0c\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.closeBluetoothAdapter(params).then(...)\n")))}s.isMDXComponent=!0}}]);