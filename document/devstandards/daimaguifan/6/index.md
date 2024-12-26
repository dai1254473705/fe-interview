# 6. HTML 代码规范

## 基本规范

### HTML5 doctype

在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现。
```javascript
<!-- bad -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
  </head>
</html>
	
<!-- good -->
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```
### 字符编码

由于历史原因，淘系不同产品都是采用了不同的字符编码。对于以后的新业务如无特殊要求，统一使用 UTF-8 字符编码，便于统一。


### Language attribute

根据 HTML5 规范：

> 鼓励网站作者在 html 元素上指定 lang 属性，来指出页面的语言。这样做会有助于语言合成工具来确定怎样发音，以及翻译工具决定使用的规则，等等。


通过[规范](http://www.w3.org/TR/html5/dom.html#attr-lang)中的 lang 属性了解更多相关内容。

[ISO Language Codes](http://www.w3schools.com/tags/ref_language_codes.asp)


### IE 兼容模式

Internet Explorer 支持使用兼容性 <meta> 标签来指定使用什么版本的 IE 来渲染页面。如果不是特殊需要，通常通过 edge mode 来通知 IE 使用最新的兼容模式。

```javascript
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```
### 引入 CSS 和 JavaScript

- 根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

```
<!-- bad -->
<!DOCTYPE html>
<head>
<link type="text/css" rel="stylesheet" href="code-guide.css">
<script type="text/javascript" src="example.js"></script>
</head>

<!-- good -->
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="code-guide.css">
<script src="example.js"></script>
</head>
```
此外，引入 CSS 必须在 `<head></head>` 标签里引入。对于引入 Javascript，除了基础库等比较基础性的脚本文件，其他都在靠近 `body` 结束标签前面引入。

```
<!-- bad -->
<!DOCTYPE html>
<html>
<head>
  <script src="mod-a.js"></script>
  <script src="jquery.js"></script>
</head>
<body>
  <style>
	  .mod-example {
		  padding-left: 15px
	  }
  </style>
</body>
</html>

<!-- good -->
<!DOCTYPE html>
<html>
<head>
  <style>
	  .mod-example {
	    padding-left: 15px
    }
  </style>
  <script src="jquery.js"></script>
</head>
<body>
</body>
</html>
```
### 缩进使用两个空格

```
<!-- bad -->
<div>
    <p>just a example</p>
</div>
<!-- good -->
<div>
  <p>just a example</p>
</div>
```

### 标签名称和标签属性统一使用小写

```
<!-- bad -->
<Div Id="test">
</Div>
<!-- good -->
<div id="test">
</div>
```

### Viewport
通用类设置

- width – viewport的宽度
- height – viewport的高度
- initial-scale – 初始的缩放比例
- minimum-scale – 允许用户缩放到的最小比例
- maximum-scale – 允许用户缩放到的最大比例
- user-scalable – 是否允许用户缩放

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, 
maximum-scale=1.0, user-scalable=no">
```

## 属性规范


### 属性引号用双引号

```
<!-- bad -->
<link rel='stylesheet' href='example.css'>
<!-- good -->
<link rel="stylesheet" href="example.css">
```


### Boolean 属性

Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。

了解更多内容，参考 [WhatWG section on boolean attributes]:

> 一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。


**简而言之，尽量不要为 Boolean 属性添加取值。**

```
<!-- bad -->
<input type="text" disabled="disabled">
<input type="checkbox" value="1" checked="checked">
<select>
  <option value="1" selected="selected">1</option>
</select>
<!-- good -->
<input type="text" disabled>
<input type="checkbox" value="1" checked>
<select>
  <option value="1" selected>1</option>
</select>
```


### 自定义属性

建议自定义属性必须以 `data-` 为前缀，便于阅读。

```
<!-- bad -->
<a modal="toggle" href="#">
  Example link
</a>
<!-- good -->
<a data-modal="toggle" href="#">
  Example link
</a>
```


### 属性顺序

HTML 属性应该按照特定的顺序出现以保证易读性，而且一致的属性顺序可能提升 1.5% 的 [gzip 压缩率](http://gtmetrix.com/enable-gzip-compression.html)

- `class`
- `id`, `name`
- `data-*`
- ...

Classes 是为高可复用组件设计的，所以他们处在第一位。Ids 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。

```
<!-- bad -->
<a href="#" data-modal="toggle" id="... class="..."">
  Example link
</a>
<input type="text" class="form-control">
<!-- good -->
<a class="..." id="..." data-modal="toggle" href="#">
  Example link
</a>
<input class="form-control" type="text">
```


## 标签规范

不要在自动闭合标签的结尾处使用斜线，如 `<br>`、`<hr>`、`<input>`、`<meta>`、`<source>`


## 命名规范

- 对于需要自定义属性，属性名命名统一使用 `data-` 前缀，具体参考 [custom-data-attribute](http://www.w3.org/html/wg/drafts/html/master/dom.html#custom-data-attribute)
- `class` 命名和 [CSS 编码规范中的保持一致](http://fusion-demo.alibaba-inc.com/guide/developer/2.css-style-guide.md#class)
- `id` 命名，当作为 **JS 钩子使用** 时，以 `J_` 为前缀，后面接大驼峰命名，且这类选择器不能出现在 css 中，例如 `J_ExampleIdForJs`。其他使用用法，例如充当锚点，`label` 对应 `input` 的 id，都正常默认使用即可。


## 多媒体退化

- 为 `img` 标签添加 `alt` 属性以声明替代文本；
- 在多媒体标签内部提供指示浏览器不支持该标签的说明，如 `object`、`audio`、`video`

例子：

```
<!-- bad -->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>
<!-- good -->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```


## 注释规范

由于 html 代码一般不会经过预处理，出于安全考虑，html 代码中不能出现任何关于业务相关敏感信息的注释。


标准写法：

```html
<!--Comment Text-->
```

错误的写法：

```html
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```

**单行注释**
> 一般用于简单的描述，如某些状态描述、属性描述等; 

注释内容`前后各一个空格字符`，注释位于要注释代码的上面，单独占一行

推荐：
```html
<!-- Comment Text -->
<div>...</div>
```

不推荐：
```html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```

**模块注释**
> 一般用于描述模块的名称以及模块`开始`与`结束`的位置

注释内容前后各一个空格字符，
``<!-- S Comment Text -->`` 
表示模块开始(`START`)，
``<!-- E Comment Text -->``
表示模块结束(`END`)，
模块与模块之间相隔一行

推荐写法：

```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

不推荐写法：

> 模块之间没有空一行

```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

## HTML标准模版

### HTML5标准模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5标准模版</title>
</head>
<body>
	
</body>
</html>
```

### web端
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta name="author" content="author,email address">
<meta name="robots" content="index,follow">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="ie-stand">
<title>PC端HTML模版</title>
</head>
<body>

</body>
</html>
```

### 移动端
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
<meta name="format-detection" content="telephone=no" >
<title>移动端HTML模版</title>
</head>
<body>

</body>
</html>
```
