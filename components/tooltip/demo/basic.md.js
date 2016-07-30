webpackJsonp([88,158],{817:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(874),s(873)),e=t(p),o=s(1),c=t(o),l=s(4);t(l);n.exports={content:[],meta:{order:0,title:"Tooltip",filename:"components/tooltip/demo/basic.md",id:"components-tooltip-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tooltip <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> text <span class="token operator" >=</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u63d0\u793a\u6587\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tooltip-demo-basic<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0a\u5de6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0a\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0a\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span> float<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5de6\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5de6\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5de6\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> float<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u53f3\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u53f3\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u53f3\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> clear<span class="token punctuation" >:</span> <span class="token string" >\'both\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0a\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0b\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u4e0b\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createElement("span",null,"\u63d0\u793a\u6587\u5b57");return c["default"].createElement("div",{className:"tooltip-demo-basic"},c["default"].createElement("div",null,c["default"].createElement(e["default"],{placement:"topLeft",title:n},c["default"].createElement("span",null,"\u4e0a\u5de6")),c["default"].createElement(e["default"],{placement:"top",title:n},c["default"].createElement("span",null,"\u4e0a\u8fb9")),c["default"].createElement(e["default"],{placement:"topRight",title:n},c["default"].createElement("span",null,"\u4e0a\u53f3"))),c["default"].createElement("div",{style:{width:60,marginLeft:40,"float":"left"}},c["default"].createElement(e["default"],{placement:"leftTop",title:n},c["default"].createElement("span",null,"\u5de6\u4e0a")),c["default"].createElement(e["default"],{placement:"left",title:n},c["default"].createElement("span",null,"\u5de6\u8fb9")),c["default"].createElement(e["default"],{placement:"leftBottom",title:n},c["default"].createElement("span",null,"\u5de6\u4e0b"))),c["default"].createElement("div",{style:{width:60,"float":"left"}},c["default"].createElement(e["default"],{placement:"rightTop",title:n},c["default"].createElement("span",null,"\u53f3\u4e0a")),c["default"].createElement(e["default"],{placement:"right",title:n},c["default"].createElement("span",null,"\u53f3\u8fb9")),c["default"].createElement(e["default"],{placement:"rightBottom",title:n},c["default"].createElement("span",null,"\u53f3\u4e0b"))),c["default"].createElement("div",{style:{clear:"both"}},c["default"].createElement(e["default"],{placement:"bottomLeft",title:n},c["default"].createElement("span",null,"\u4e0a\u53f3")),c["default"].createElement(e["default"],{placement:"bottom",title:n},c["default"].createElement("span",null,"\u4e0b\u8fb9")),c["default"].createElement(e["default"],{placement:"bottomRight",title:n},c["default"].createElement("span",null,"\u4e0b\u53f3"))))},style:"\n.tooltip-demo-basic{\n  margin-top: 100px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n}\n.tooltip-demo-basic span {\n  display: inline-block;\n  line-height: 32px;\n  height: 32px;\n  width: 50px;\n  font-size: 14px;\n  text-align: center;\n  background: #ccc;\n  margin-right: 1em;\n  margin-bottom: 1em;\n  border-radius: 6px;\n}\n"}},873:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function l(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):e(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var u=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},i=s(1),k=p(i),r=s(156),g=t(r),m=function(n){function a(s){o(this,a);var t=c(this,n.call(this,s));return t.onVisibleChange=function(n){t.setState({visible:n}),t.props.onVisibleChange(n)},t.state={visible:!1},t}return l(a,n),a.prototype.render=function(){var n=this.props,a=n.children,s=n.prefixCls,t=n.title,p=n.overlay,e=this.state.visible;t||p||(e=!1),"visible"in this.props&&(e=this.props.visible);var o=Object.assign({},this.props);return["prefixCls","overlay","visible","trigger","onVisibleChange","children"].forEach(function(n){o.hasOwnProperty(n)&&delete o[n]}),k.createElement(g["default"],u({prefixCls:s,overlay:t,visible:e,trigger:["click"],onVisibleChange:this.onVisibleChange},o),a)},a}(k.Component);a["default"]=m,m.defaultProps={prefixCls:"am-tooltip",placement:"bootomLeft",onVisibleChange:function(){}},n.exports=a["default"]},874:function(n,a,s){"use strict";s(5),s(1257)},1257:function(n,a){}});