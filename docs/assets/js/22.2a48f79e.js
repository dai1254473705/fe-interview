(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{374:function(v,_,t){"use strict";t.r(_);var a=t(42),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"http协议那些事-从基础开始学起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http协议那些事-从基础开始学起"}},[v._v("#")]),v._v(" http协议那些事，从基础开始学起")]),v._v(" "),t("blockquote",[t("p",[v._v("http无处不在，那么什么是http呢？这篇文章会给大家做一个总结，也是前端面试常常遇到的问题，大家一起学习，一同进步吧！")])]),v._v(" "),t("h2",{attrs:{id:"http请求模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http请求模型"}},[v._v("#")]),v._v(" http请求模型")]),v._v(" "),t("p",[v._v("图片：")]),v._v(" "),t("h2",{attrs:{id:"浏览器行为与http协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器行为与http协议"}},[v._v("#")]),v._v(" 浏览器行为与http协议")]),v._v(" "),t("p",[v._v("处理流程：")]),v._v(" "),t("ul",[t("li",[v._v("1、输入网址并回车")]),v._v(" "),t("li",[v._v("2、解析域名")]),v._v(" "),t("li",[v._v("3、浏览器发送http请求")]),v._v(" "),t("li",[v._v("4、浏览器处理请求")]),v._v(" "),t("li",[v._v("5、服务器返回HTML响应")]),v._v(" "),t("li",[v._v("6、浏览器处理HTML页面")]),v._v(" "),t("li",[v._v("7、继续请求其他资源")])]),v._v(" "),t("h2",{attrs:{id:"什么是http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是http"}},[v._v("#")]),v._v(" 什么是http")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTTP是超文本传输协议，从www浏览器传输到本地浏览器的一种传输协议，网站是基于HTTP协议的，例如网站的图片、css、js等都是基于HTTP协议进行传输的。")])]),v._v(" "),t("li",[t("p",[v._v("HTTP协议是由客户机到服务器的请求，和从服务器到客户机的响应进行约束和规范。")])]),v._v(" "),t("li",[t("p",[v._v("应用层协议")])])]),v._v(" "),t("h2",{attrs:{id:"了解tcp-ip协议栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解tcp-ip协议栈"}},[v._v("#")]),v._v(" 了解TCP/IP协议栈")]),v._v(" "),t("ul",[t("li",[v._v("应用层\n"),t("ul",[t("li",[v._v("为用户提供所需要的各种服务，例如： HTTP、FTP、DNS、等")])])]),v._v(" "),t("li",[v._v("传输层\n"),t("ul",[t("li",[v._v("为应用层实体提供端到端的通信功能，保证数据包的顺序传递及数据的完整性。")]),v._v(" "),t("li",[v._v("该层定义了两个主要协议：传输控制协议（TCP）和用户数据报协议（UDP）")])])]),v._v(" "),t("li",[v._v("网络层\n"),t("ul",[t("li",[v._v("主要解决主机到主机的通信问题。")])])]),v._v(" "),t("li",[v._v("网络接口层\n"),t("ul",[t("li",[v._v("负责监视数据在主机个网络之间的交换")])])])]),v._v(" "),t("h2",{attrs:{id:"在tcp-ip协议栈中的位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在tcp-ip协议栈中的位置"}},[v._v("#")]),v._v(" 在TCP/IP协议栈中的位置")]),v._v(" "),t("ul",[t("li",[v._v("目前普遍应用版本HTTP 1.1")]),v._v(" "),t("li",[v._v("正在逐步向HTTP2迁移")]),v._v(" "),t("li",[v._v("HTTP默认端口号为80")]),v._v(" "),t("li",[v._v("HTTS默认端口号为443")])]),v._v(" "),t("h2",{attrs:{id:"http工作过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http工作过程"}},[v._v("#")]),v._v(" HTTP工作过程")]),v._v(" "),t("p",[v._v("一次HTTP操作称作为一个"),t("strong",[v._v("事务")]),v._v("，工作过程可分为四步")]),v._v(" "),t("ul",[t("li",[v._v("首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。")]),v._v(" "),t("li",[v._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号。")]),v._v(" "),t("li",[v._v("服务器接收到请求后，给予响应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功的或错误的代码")]),v._v(" "),t("li",[v._v("客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")])]),v._v(" "),t("p",[v._v("如果在以上过程中某一步出现错误，那么产生错误的信息将返回客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。")]),v._v(" "),t("h2",{attrs:{id:"请求与响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应"}},[v._v("#")]),v._v(" 请求与响应")]),v._v(" "),t("ul",[t("li",[v._v("HTTP请求组成：请求行，消息报头，请求正文")]),v._v(" "),t("li",[v._v("HTTP响应组成：状态行，消息报头，响应正文")]),v._v(" "),t("li",[v._v("请求行组成：以一个方法符号开头，后面跟着请求的URL和协议的版本")]),v._v(" "),t("li",[v._v("状态行组成：服务器HTTP协议的版本，服务器发回的响应状态代码和状态代码的文本描述")])]),v._v(" "),t("p",[t("strong",[v._v("请求")]),v._v("（浏览器发送单服务器）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("请求方法，请求URL，http协议版本号\n（POST/URL/http/1.1）")])]),v._v(" "),t("li",[t("p",[v._v("请求头报文")])]),v._v(" "),t("li",[t("p",[v._v("请求报文体")])])]),v._v(" "),t("p",[t("strong",[v._v("响应")]),v._v("（服务器返回给我们的）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("报文协议及版本，状态吗及状态描述\n（HTTP/1.1 200OK）")])]),v._v(" "),t("li",[t("p",[v._v("响应头")])]),v._v(" "),t("li",[t("p",[v._v("响应体")])])]),v._v(" "),t("h2",{attrs:{id:"请求方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[v._v("#")]),v._v(" 请求方法")]),v._v(" "),t("ul",[t("li",[v._v("GET：请求获取request-URI所标识的资源")]),v._v(" "),t("li",[v._v("POST：在request-URI所标识的资源后附加新的数据")]),v._v(" "),t("li",[v._v("HEAD：请求获取由request-URI所标识的资源的响应消息报头")]),v._v(" "),t("li",[v._v("PUT：请求服务器存储的一个资源，并用request-URI作为其标识")]),v._v(" "),t("li",[v._v("DELETE：请求服务器删除request-URI所标志的资源")]),v._v(" "),t("li",[v._v("TRACE：请求服务器回送收到的请求信息，主要用于测试或诊断")]),v._v(" "),t("li",[v._v("CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器")]),v._v(" "),t("li",[v._v("OPTIONS：请求查询服务器的性能，或者查询与资源相关的选项和需求")])]),v._v(" "),t("h2",{attrs:{id:"http状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[v._v("#")]),v._v(" HTTP状态码")]),v._v(" "),t("ul",[t("li",[v._v("1XX 指示信息--表示请求以接收，继续处理")]),v._v(" "),t("li",[v._v("2XX 成功--表示请求已被成功接收、立即、处理")]),v._v(" "),t("li",[v._v("3XX 重定向--要完成请求必须进行更进一步的操作")]),v._v(" "),t("li",[v._v("4XX 客户端错误--请求有语法错误或请求无法实现")]),v._v(" "),t("li",[v._v("5XX 服务端错误--服务器未能实现合法的请求")])]),v._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),t("p",[v._v("本篇概述了HTTP的大部分内容，如有兴趣进一步学习研究，可等待下回分享。")]),v._v(" "),t("h1",{attrs:{id:"感谢大家"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#感谢大家"}},[v._v("#")]),v._v(" 感谢大家")]),v._v(" "),t("ul",[t("li",[v._v("爱心三连击 "),t("strong",[v._v("点赞，转发，在看")]),v._v("，您的点赞，是我最大的动力")]),v._v(" "),t("li",[v._v("关注公众号"),t("strong",[v._v("前端小喵")]),v._v("，有更多好文推荐哦！")]),v._v(" "),t("li",[v._v("阅读往期推荐好文")])])])}),[],!1,null,null,null);_.default=l.exports}}]);