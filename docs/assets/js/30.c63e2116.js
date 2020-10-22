(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"微信小程序开发笔记-你收藏了吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序开发笔记-你收藏了吗"}},[t._v("#")]),t._v(" 微信小程序开发笔记，你收藏了吗？")]),t._v(" "),s("p",[t._v("最近在开发微信小程序，把自己在项目中经常遇到的知识点记录下来，以便下次开发的时候查看。"),s("br"),t._v("\n开发小程序开发工具推荐vscode写代码，微信开发工具用于查看效果和调试。")]),t._v(" "),s("h2",{attrs:{id:"_1、自定义标题栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、自定义标题栏"}},[t._v("#")]),t._v(" 1、自定义标题栏")]),t._v(" "),s("p",[t._v("现在UI要求越来越高，高频出现自定义标题栏的情况")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"navigationStyle": "custom"\n')])])]),s("h2",{attrs:{id:"_2、获取用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取用户信息"}},[t._v("#")]),t._v(" 2、获取用户信息")]),t._v(" "),s("p",[t._v("用户授权是每个小程序中都会用到的，可以根据自己的项目流程编写自己的逻辑。\n用户授权")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{canIUse}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getUserInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindgetuserinfo")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bindGetUserInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("授权登录"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindGetUserInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到用户信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("已授权的情况下调用"),s("strong",[t._v("wx.getUserInfo")]),t._v("，"),s("strong",[t._v("wx.getSetting")]),t._v("进行判断该用户是否授权")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authSetting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.userInfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 已经授权，可以直接调用 getUserInfo 获取头像昵称")]),t._v("\n      wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 未授权")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3、input-设置placeholder样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、input-设置placeholder样式"}},[t._v("#")]),t._v(" 3、input 设置placeholder样式")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("请输入手机号码"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("placeholderinput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".placeholderinput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #CCCCCF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 36rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4、路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、路由"}},[t._v("#")]),t._v(" 4、路由")]),t._v(" "),s("p",[t._v("路由跳转用到的比较多，每次跳转的时候总是不能区分用哪一个方式进行跳转，记下来，加深一下印象。"),s("br"),t._v("\n跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../index/index'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面，并关闭当前页面")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirectTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../index/index'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../index/index'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5、image组件常用mode合法值梳理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、image组件常用mode合法值梳理"}},[t._v("#")]),t._v(" 5、image组件常用mode合法值梳理")]),t._v(" "),s("p",[t._v("为什么详细讲解image，每次后台上传的图片和我们前端界面的尺寸不一样，我们前端就要进行处理了，还有就是测试老是回提出一些图片变形上的问题，为了不让他们提出这些问题，我们详细分析一下，如果有不正确欢迎交流指正。\n在固定宽高的情况下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' <image src="/images/pic.jpg" class="pic" mode="aspectFill"></image>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".pic {\n  width: 600rpx;\n  height: 500rpx;\n  border: 1rpx solid #ccc;\n}\n")])])]),s("p",[t._v("设置以下属性图片会发生什么变化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("scaleToFill  图片的宽高完全拉伸至填满 image 元素，会改变图片的宽高比，图片变形\n"),s("img",{attrs:{src:"https://imgkr2.cn-bj.ufileos.com/37b80f55-d818-4c0f-8896-7041155b9df4.jpg?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=3ayz2f3C04doXPh4XAwKZ5sXm3I%253D&Expires=1601869624",alt:"scaleToFill"}})])]),t._v(" "),s("li",[s("p",[t._v("aspectFit\n图片完整的展示出来，图片的宽高比不变。\n"),s("img",{attrs:{src:"https://imgkr2.cn-bj.ufileos.com/5626b43b-1804-4562-aebb-43d9d227b5d7.jpg?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=6SUaGNEIP2oMjqAS7EBxk9g7jSg%253D&Expires=1601869653",alt:"aspectFit"}})])]),t._v(" "),s("li",[s("p",[t._v("aspectFill\n图片的宽高比不变，为完整的展示，会发生裁切"),s("br"),t._v(" "),s("img",{attrs:{src:"https://imgkr2.cn-bj.ufileos.com/c1e44f08-b7f0-4f81-895d-b5718bb7a61a.jpg?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=gQpDSBlpiIpoWPxsasqLuvcDP5A%253D&Expires=1601869673",alt:"aspectFill"}})])])]),t._v(" "),s("p",[t._v("常用的"),s("strong",[t._v("aspectFit")]),t._v(" "),s("strong",[t._v("aspectFill")]),t._v("这两个")]),t._v(" "),s("h2",{attrs:{id:"_6、设置input的confirm-type-的合法值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、设置input的confirm-type-的合法值"}},[t._v("#")]),t._v(" 6、设置input的"),s("strong",[t._v("confirm-type")]),t._v(" 的合法值")]),t._v(" "),s("p",[t._v('设置键盘右下角按钮的文字，type="text"时生效')]),t._v(" "),s("ul",[s("li",[t._v("send 右下角按钮为“发送”")]),t._v(" "),s("li",[t._v("search 右下角按钮为“搜索”")]),t._v(" "),s("li",[t._v("next 右下角按钮为“下一个”")]),t._v(" "),s("li",[t._v("go 右下角按钮为“前往”")]),t._v(" "),s("li",[t._v("done 右下角按钮为“完成”")])]),t._v(" "),s("p",[t._v("为了实现安卓ios的统一confirm-type的设置也是很有必要，默认值是 done，安卓默认是回车，ios默认是完成，所以设置同一只前四个是可以统一的。")]),t._v(" "),s("h2",{attrs:{id:"end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" END")]),t._v(" "),s("p",[t._v("这些都是最近项目中记录下来的，比较基础的也是比较常用的，欢迎大家交流指正。"),s("br"),t._v("\n关注微信公众号 "),s("strong",[t._v("前端小喵")]),t._v(" ，持续更新中，有兴趣的可以关注我，我们一起交流学习。"),s("br"),t._v("\n如果这篇文章对您有帮助的话记得点个赞哦！")])])}),[],!1,null,null,null);a.default=e.exports}}]);