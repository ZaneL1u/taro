(window.webpackJsonp=window.webpackJsonp||[]).push([[1458],{1525:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(1808)),c=["components"],i={slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://avatars1.githubusercontent.com/u/7202516?s=460&u=972eaf45558703424c613988fe3184f34b8f9c9d&v=4"},u={permalink:"/taro/blog/2019-06-13-taro-1-3",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-06-13-taro-1-3.md",source:"@site/blog/2019-06-13-taro-1-3.md",description:"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002",date:"2019-06-13T00:00:00.000Z",tags:[],title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",readingTime:2.215,truncated:!0,prevItem:{title:"Taro \u300c\u7269\u6599\u5e02\u573a\u300d\u53ca\u300c\u4ea4\u6d41\u793e\u533a\u300d \u60ca\u559c\u4e0a\u7ebf",permalink:"/taro/blog/2019-06-21-taro-ext-club"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro/blog/2019-03-12-mini-program-framework-full-review"}},l=[],p={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002"),Object(a.b)("p",null,"Taro 1.3 \u662f\u6211\u4eec\u915d\u917f\u6700\u4e45\u7684\u7248\u672c\uff1a\u7ecf\u5386\u4e86\u6a2a\u8de8 6 \u4e2a\u6708\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u8fd1 2000 \u6b21\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u8fd1\u767e\u4f4d\u5f00\u53d1\u8005\u7684\u5171\u540c\u53c2\u4e0e\u3002\u6211\u4eec\u7ec8\u4e8e\u5728\u4eca\u5929\u9a84\u50b2\u5730\u53d1\u5e03\u4e86 Taro 1.3\u3002"),Object(a.b)("p",null,"Taro 1.3 \u7684\u7279\u6027\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"),Object(a.b)("li",{parentName:"ul"},"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks"),Object(a.b)("li",{parentName:"ul"},"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027"),Object(a.b)("li",{parentName:"ul"},"Taro Doctor")))}b.isMDXComponent=!0},1808:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,s=b["".concat(c,".").concat(m)]||b[m]||f[m]||a;return r?o.a.createElement(s,i(i({ref:t},l),{},{components:r})):o.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);