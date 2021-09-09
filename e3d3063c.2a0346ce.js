(window.webpackJsonp=window.webpackJsonp||[]).push([[1565],{1632:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),b=n(7),r=(n(0),n(1808)),i=["components"],p={title:"Babel \u914d\u7f6e"},l={unversionedId:"babel-config",id:"version-3.x/babel-config",isDocsHomePage:!1,title:"Babel \u914d\u7f6e",description:"Taro \u9879\u76ee\u7684 Babel \u914d\u7f6e\u4f4d\u4e8e\u6839\u76ee\u5f55\u7684 babel.config.js \u6587\u4ef6\u4e2d\uff0c\u91cc\u9762\u9ed8\u8ba4\u6dfb\u52a0\u4e86\u4e00\u4e2a preset\uff1ababel-preset-taro\uff0c\u5b83\u4f1a\u6839\u636e\u9879\u76ee\u7684\u6280\u672f\u6808\u6dfb\u52a0\u4e00\u4e9b\u5e38\u7528\u7684 presets \u548c plugins\u3002",source:"@site/versioned_docs/version-3.x/babel-config.md",slug:"/babel-config",permalink:"/taro/docs/babel-config",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/babel-config.md",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"\u9879\u76ee\u914d\u7f6e",permalink:"/taro/docs/project-config"},next:{title:"\u6982\u8ff0",permalink:"/taro/docs/react-overall"}},c=[{value:"babel-preset-taro",id:"babel-preset-taro",children:[{value:"reactJsxRuntime",id:"reactjsxruntime",children:[]},{value:"hot",id:"hot",children:[]},{value:"vueJsx",id:"vuejsx",children:[]},{value:"targets",id:"targets",children:[]},{value:"useBuiltIns",id:"usebuiltins",children:[]},{value:"loose",id:"loose",children:[]},{value:"debug",id:"debug",children:[]},{value:"modules",id:"modules",children:[]},{value:"spec",id:"spec",children:[]},{value:"configPath",id:"configpath",children:[]},{value:"include",id:"include",children:[]},{value:"exclude",id:"exclude",children:[]},{value:"shippedProposals",id:"shippedproposals",children:[]},{value:"forceAllTransforms",id:"forcealltransforms",children:[]},{value:"decoratorsBeforeExport",id:"decoratorsbeforeexport",children:[]},{value:"decoratorsLegacy",id:"decoratorslegacy",children:[]},{value:"absoluteRuntime",id:"absoluteruntime",children:[]},{value:"version",id:"version",children:[]}]}],o={rightToc:c};function s(e){var t=e.components,n=Object(b.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Taro \u9879\u76ee\u7684 Babel \u914d\u7f6e\u4f4d\u4e8e\u6839\u76ee\u5f55\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"babel.config.js")," \u6587\u4ef6\u4e2d\uff0c\u91cc\u9762\u9ed8\u8ba4\u6dfb\u52a0\u4e86\u4e00\u4e2a preset\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"babel-preset-taro"),"\uff0c\u5b83\u4f1a\u6839\u636e\u9879\u76ee\u7684\u6280\u672f\u6808\u6dfb\u52a0\u4e00\u4e9b\u5e38\u7528\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"presets")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"plugins"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [\n    ['taro', {/** \u914d\u7f6e\u9879 */}]\n  ]\n}\n")),Object(r.b)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4fee\u6539 ",Object(r.b)("inlineCode",{parentName:"p"},"babel.config.js"),"\uff0c\u4fee\u6539 ",Object(r.b)("inlineCode",{parentName:"p"},"babel-preset-taro")," \u7684\u914d\u7f6e\u9879\uff0c\u6216\u6dfb\u52a0\u81ea\u5df1\u60f3\u8981\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"presets")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"plugins"),"\u3002"),Object(r.b)("h2",{id:"babel-preset-taro"},"babel-preset-taro"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"babel-preset-taro")," \u4f1a\u6839\u636e\u5f53\u524d\u9879\u76ee\u7684\u6280\u672f\u6808\uff0c\u9009\u62e9\u6027\u5730\u4f7f\u7528\u4ee5\u4e0b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"presets")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"plugins"),"\u3002"),Object(r.b)("h4",{id:"1-\u901a\u7528"},"1. \u901a\u7528"),Object(r.b)("h5",{id:"presets"},"presets"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/preset-env")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/preset-typescript"),"\uff08TypeScript \u73af\u5883\uff09")),Object(r.b)("h5",{id:"plugins"},"plugins"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-decorators")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-class-properties")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"babel-plugin-dynamic-import-node"),"\uff08\u5c0f\u7a0b\u5e8f\u73af\u5883\uff09")),Object(r.b)("h4",{id:"2-react"},"2. React"),Object(r.b)("h5",{id:"presets-1"},"presets"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/preset-react"))),Object(r.b)("h5",{id:"plugins-1"},"plugins"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react-refresh/babel"))),Object(r.b)("h4",{id:"3-vue"},"3. Vue"),Object(r.b)("h5",{id:"presetes"},"presetes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@vue/babel-preset-jsx"))),Object(r.b)("h4",{id:"4-vue3"},"4. Vue3"),Object(r.b)("h5",{id:"plugins-2"},"plugins"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@vue/babel-plugin-jsx"))),Object(r.b)("p",null,"\u4ee5\u4e0b\u5c06\u8be6\u7ec6\u4ecb\u7ecd ",Object(r.b)("inlineCode",{parentName:"p"},"babel-preset-taro")," \u7684\u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"reactjsxruntime"},"reactJsxRuntime"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u53ea\u5728\u4f7f\u7528 ",Object(r.b)("strong",{parentName:"p"},"React")," \u65f6\u751f\u6548\u3002"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"'automatic'")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-react")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-react#runtime"},"runtime")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"hot"},"hot"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u53ea\u5728\u4f7f\u7528 ",Object(r.b)("strong",{parentName:"p"},"React")," \u65f6\u751f\u6548\u3002"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,"\u662f\u5426\u5f15\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"react-refresh/babel")," \u6765\u652f\u6301\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"h5#fast-refresh"},"fast-refresh"),"\u3002"),Object(r.b)("h3",{id:"vuejsx"},"vueJsx"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u53ea\u5728\u4f7f\u7528 ",Object(r.b)("strong",{parentName:"p"},"Vue/Vue3")," \u65f6\u751f\u6548\u3002"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7c7b\u578b"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"true")," | ",Object(r.b)("inlineCode",{parentName:"p"},"false")," | ",Object(r.b)("inlineCode",{parentName:"p"},"object")),Object(r.b)("p",null,"\u662f\u5426\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"@vue/babel-preset-jsx"),"\uff08Vue\uff09\u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"@vue/babel-plugin-jsx"),"\uff08Vue3\uff09\u6765\u652f\u6301\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"jsx"),"\u3002"),Object(r.b)("p",null,"\u5f53\u4f20\u5165\u4e00\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"object")," \u65f6\uff0c\u7b49\u540c\u4e8e\u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e14\u8be5 ",Object(r.b)("inlineCode",{parentName:"p"},"object")," \u5c06\u4f1a\u4f5c\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"@vue/babel-preset-jsx"),"\uff08Vue\uff09\u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"@vue/babel-plugin-jsx"),"\uff08Vue3\uff09\u7684\u53c2\u6570\u3002"),Object(r.b)("h3",{id:"targets"},"targets"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  ios: '9',\n  android: '5'\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#targets"},"targets")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"usebuiltins"},"useBuiltIns"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6709\u6548\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"'entry'")," | ",Object(r.b)("inlineCode",{parentName:"p"},"'usage'")," | ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("h4",{id:"usebuiltins-entry"},"useBuiltIns: 'entry'"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a\u5168\u5c40\u5f7b\u5e95 polyfill\uff0c\u5c31\u7b97 ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684\u4f9d\u8d56\u5b58\u5728\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\uff0c\u4e5f\u80fd\u6210\u529f\u8fd0\u884c\u3002"),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a\u53ef\u80fd\u4f1a\u5f15\u5165\u5197\u4f59\u4ee3\u7801\u3001\u5f71\u54cd\u5168\u5c40\u53d8\u91cf\u3002"))),Object(r.b)("p",null,"\u5f53\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"'entry'")," \u65f6\uff0c\u4f1a\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"},"useBuiltIns")," \u9009\u9879\u8bbe\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"'entry'"),"\u3001",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#corejs"},"corejs")," \u9009\u9879\u8bbe\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"'3'"),"\u3002"),Object(r.b)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u5728\u5165\u53e3\u6587\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u5f15\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"core-js"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'},'import "core-js"\n')),Object(r.b)("p",null,"Babel \u4f1a\u6839\u636e ",Object(r.b)("a",{parentName:"p",href:"babel-config#targets"},"targets"),"\uff0c\u5f15\u5165\u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"core-js")," \u4f9d\u8d56\u3002\u4f8b\u5982\u4e0a\u8ff0\u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u4e3a\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="dist/app.js"',title:'"dist/app.js"'},'import "core-js/modules/es.string.pad-start";\nimport "core-js/modules/es.string.pad-end";\n// ...\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5f53\u7136\uff0c\u56e0\u4e3a\u8fd9\u65f6 Taro \u628a ",Object(r.b)("inlineCode",{parentName:"p"},"corejs")," \u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"'3'"),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"core-js@3")," ",Object(r.b)("strong",{parentName:"p"},"\u624b\u52a8\u6309\u9700\u5f15\u5165\u7684\u80fd\u529b"),"\uff0c\u8be6\u60c5\u8bf7\u89c1",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"},"\u6587\u6863"),"\u3002")),Object(r.b)("h4",{id:"usebuiltins-usage"},"useBuiltIns: 'usage'"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a\u6309\u9700\u5f15\u5165\u3001\u4e0d\u4f1a\u5f71\u54cd\u5168\u5c40\u53d8\u91cf\u3002"),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a\u9ed8\u8ba4\u4e0d\u4f1a\u5904\u7406 ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684\u4f9d\u8d56\uff0c\u9700\u8981\u624b\u52a8\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"babel-loader"),"\u3002"))),Object(r.b)("p",null,"\u5f53\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"'usage'")," \u65f6\uff0c\u4f1a\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs"},"corejs")," \u9009\u9879\u8bbe\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"3"),"\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"'usage'")," \u65f6\uff0c Taro \u6ca1\u6709\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"useBuiltIns: 'usage'")," \u800c\u662f\u4f7f\u7528\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"corejs: 3"),"\u3002\u539f\u56e0\u5728\u4e8e\uff1a\u4e00\u3001\u4e24\u8005\u540c\u65f6\u8bbe\u7f6e\u65f6\u4f1a\u4ea7\u751f\u51b2\u7a81\u3002\u4e8c\u3001\u540e\u8005\u76f8\u5bf9\u4e8e\u524d\u8005\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5168\u5c40\u53d8\u91cf\u3002")),Object(r.b)("h4",{id:"usebuiltins-false"},"useBuiltIns: false"),Object(r.b)("p",null,"\u5f53\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c\u4f1a\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"},"useBuiltIns")," \u9009\u9879\u8bbe\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\uff0c\u6b64\u65f6\u4e0d\u4f1a\u5f15\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"core-js"),"\u3002"),Object(r.b)("h3",{id:"loose"},"loose"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"\u540c\u65f6\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-class-properties")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"loose")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"debug"},"debug"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#debug"},"debug")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"modules"},"modules"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#modules"},"modules")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"spec"},"spec"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#spec"},"spec")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"configpath"},"configPath"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#configpath"},"configPath")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"include"},"include"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#include"},"include")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"exclude"},"exclude"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#exclude"},"exclude")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"shippedproposals"},"shippedProposals"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#shippedproposals"},"shippedProposals")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"forcealltransforms"},"forceAllTransforms"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#forcealltransforms"},"forceAllTransforms")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"decoratorsbeforeexport"},"decoratorsBeforeExport"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators#decoratorsbeforeexport"},"decoratorsBeforeExport")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"decoratorslegacy"},"decoratorsLegacy"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy"},"lagacy")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"absoluteruntime"},"absoluteRuntime"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a\u5f00\u53d1\u8005\u6839\u76ee\u5f55 ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684\u8def\u5f84\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7c7b\u578b"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"string")," "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#absoluteruntime"},"absoluteRuntime")," \u914d\u7f6e\u9879\u3002"),Object(r.b)("h3",{id:"version"},"version"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff1a\u5f00\u53d1\u8005\u6839\u76ee\u5f55 ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684\u7248\u672c\u53f7\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7c7b\u578b"),"\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"string")," "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u7684 ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime#version"},"version")," \u914d\u7f6e\u9879\u3002"))}s.isMDXComponent=!0},1808:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var c=b.a.createContext({}),o=function(e){var t=b.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return b.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(n),j=a,m=s["".concat(i,".").concat(j)]||s[j]||d[j]||r;return n?b.a.createElement(m,p(p({ref:t},c),{},{components:n})):b.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=j;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);