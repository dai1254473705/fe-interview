(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{369:function(r,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var r=this.$createElement,t=this._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"_25、请编写一个-javascript-函数-parsequerystring-它的用途是把-url-参数解析为一个对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25、请编写一个-javascript-函数-parsequerystring-它的用途是把-url-参数解析为一个对象"}},[this._v("#")]),this._v(" 25、请编写一个 JavaScript 函数 parseQueryString，它的用途是把 URL 参数解析为一个对象")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/*！\n* @param { String } url 需要解析的地址\n*/\nfunction parseQueryString(url){\n    // url 不存在\n    if (!url){\n      return {};\n    }\n\n    // 正则\n    // 匹配开头不为?或者=或者&或者#的至少一个字符，以=连接，=后为非=或者&或者#至少一个字符。\n    var reg = /([^?=&#]+)=([^=&#]+)/g;\n    var result = '';\n    var query = {};\n\n    // reg必须以变量的形式传入，否则会陷入死循环\n    while((result = reg.exec(url))!== null){\n      query[result[1]] = result[2];\n    }\n    return query;\n}\n\nvar url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E9%B8%AD%E6%A2%A8%E7%BD%91&oq=exec&rsv_pq=a22b221d00409c44&rsv_t=90a2Swt%2Bu8hcqaZADY6KrMwqnF4V45u%2BHfECpkeiPMZyzxxRpOPFSzeGBpA&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=10&rsv_sug1=10&rsv_sug7=101&rsv_sug2=0&inputT=2530&rsv_sug4=2529';\n\nconsole.log(parseQueryString(url));\n")])])]),t("img",{attrs:{src:this.$withBase("/20200925/001.jpg"),alt:"foo"}})])}),[],!1,null,null,null);t.default=e.exports}}]);