(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1808:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,m=d["".concat(c,".").concat(O)]||d[O]||u[O]||b;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),b=(n(0),n(1808)),c=["components"],i={title:"AudioContext",sidebar_label:"AudioContext"},o={unversionedId:"apis/media/audio/AudioContext",id:"version-2.x/apis/media/audio/AudioContext",isDocsHomePage:!1,title:"AudioContext",description:"AudioContext \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createAudioContext \u83b7\u53d6\u3002",source:"@site/versioned_docs/version-2.x/apis/media/audio/AudioContext.md",slug:"/apis/media/audio/AudioContext",permalink:"/taro/docs/2.x/apis/media/audio/AudioContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/audio/AudioContext.md",version:"2.x",sidebar_label:"AudioContext",sidebar:"version-2.x/API",previous:{title:"Taro.createAudioContext(id, component)",permalink:"/taro/docs/2.x/apis/media/audio/createAudioContext"},next:{title:"InnerAudioContext",permalink:"/taro/docs/2.x/apis/media/audio/InnerAudioContext"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"pause",id:"pause",children:[]},{value:"play",id:"play",children:[]},{value:"seek",id:"seek",children:[]},{value:"setSrc",id:"setsrc",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,c);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"AudioContext")," \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"Taro.createAudioContext")," \u83b7\u53d6\u3002\n",Object(b.b)("inlineCode",{parentName:"p"},"AudioContext")," \u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"id")," \u8ddf\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"p"},"audio")," \u7ec4\u4ef6\u7ed1\u5b9a\uff0c\u64cd\u4f5c\u5bf9\u5e94\u7684 audio \u7ec4\u4ef6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("h3",{id:"pause"},"pause"),Object(b.b)("p",null,"\u6682\u505c\u97f3\u9891\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.pause"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"play"},"play"),Object(b.b)("p",null,"\u64ad\u653e\u97f3\u9891\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.play"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"seek"},"seek"),Object(b.b)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(position: number) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"position"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u8df3\u8f6c\u4f4d\u7f6e\uff0c\u5355\u4f4d s")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.seek"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"setsrc"},"setSrc"),Object(b.b)("p",null,"\u8bbe\u7f6e\u97f3\u9891\u5730\u5740"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(src: string) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"src"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u97f3\u9891\u5730\u5740")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.setSrc"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.pause"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.play"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.seek"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"AudioContext.setSrc"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);