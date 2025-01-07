---
title: 1. html 基础
order: 1
---
# 1. html 基础

## 1. head， body，!Doctype他们的作用是什么？严格模式与混杂模式的区别？

### !DOCTYPE 标签：

用于告知浏览器该以何种模式来渲染文档

### 严格模式与混杂模式的区别

- 严格模式下：页面排版及JS解析是以该浏览器支持的最高标准来执行；
- 混杂模式：不严格按照标准执行，主要用来兼容旧的浏览器，向后兼容；

### head：

是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者
该标签下所包含的部分可加入的标签有,,,,和

### body :

用于定义文档的主体, 包含了文档的所有内容
该标签支持 html 的全局属性和事件属性.

## 2. h5 新特性

- 新增选择器 document.querySelector、document.querySelectorAll
- 拖拽释放(Drag and drop) API
- 媒体播放的 video 和 audio
- 本地存储 localStorage 和 sessionStorage
- 离线应用 manifest
- 桌面通知 Notifications
- 语意化标签 article、footer、header、nav、section
- 增强表单控件 calendar、date、time、email、url、search
- 地理位置 Geolocation
- 多任务 webworker
- 历史管理 history
- 跨域资源共享(CORS) Access-Control-Allow-Origin
- 页面可见性改变事件 visibilitychange
- 跨窗口通信 PostMessage
- Form Data 对象
- 绘画 canvas

## 3.H5 移除的元素：

- 纯表现的元素：basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素：frame、frameset、noframes

## 4. 伪类和伪元素

> 伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。

例如：当用户悬停在指定元素时，可以通过:hover 来描述这个元素的状态，虽然它和一般 css 相似，可以为 已有元素添加样式，但是它只有处于 DOM 树无法描述的状态下才能为元素添加样式，所以称为伪类。

> 伪元素：用于创建一些不在 DOM 树中的元素，并为其添加样式。

例如，我们可以通过:before 来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在 DOM 文档中。

## 5. html5 语义化以及语义化标签？

语义化元素是指那些具有明确含义的 HTML 元素，这些元素不仅仅是用于排版，还能够清晰地表达其内容的意义。相比于使用大量的 div 和 span 标签，使用语义化元素能够使 HTML 代码更加直观和易于理解。

### 语义化优点：

- **易于用户阅读**，样式丢失的时候能让页面呈现清晰的结构。
- **有利于 SEO**，搜索引擎根据标签来确定上下文和各个关键字的权重。
- **方便屏幕阅读器解析**，如盲人阅读器根据语义渲染网页
- **有利于开发和维护**，语义化更具可读性，代码更好维护，与 CSS3 关系更和谐。

### 语义化标签
```html
<title>      页面主体内容。
<hn>         h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。
<ul>         无序列表。
<li>         有序列表。
<header>     页眉通常包括网站标志、主导航、全站链接以及搜索框。
<nav>         标记导航，仅对文档中重要的链接群使用。
<main>         页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
<article>    定义外部的内容，其中的内容独立于文档的其余部分。
<section>    定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
<aside>         定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。
<footer>     页脚，只有当父级是body时，才是整个页面的页脚。
<small>      呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。
<strong>     和 em 标签一样，用于强调文本，但它强调的程度更强一些。
<em>         将其中的文本表示为强调的内容，表现为斜体。
<mark>       使用黄色突出显示部分文本。
<figure>     规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。
<figcaption>定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。
<cite>       表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。
<blockquoto>定义块引用，块引用拥有它们自己的空间。
<q>          短的引述（跨浏览器问题，尽量避免使用）。
<time>       datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。
<abbr>       简称或缩写。
<dfn>       定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。
<address>    作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。
<del>        移除的内容。
<ins>        添加的内容。
<code>       标记代码。
<meter>      定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）
<progress>    定义运行中的进度（进程）。
```

## 6. audio 标签的 api

audio 常用属性

| 属性     | 属性值                                           |
| -------- | ------------------------------------------------ |
| src      | 播放的音乐的 url 地址                            |
| preload  | 预加载，如果使用了 autoplay 的话那么该属性失效。 |
| loop     | 循环播放                                         |
| controls | 是否显示默认控制条（控制按钮）                   |
| autoplay | 自动播放                                         |

## 7. meta viewport 是做什么用的，怎么写？

`meta viewport` 是用来做移动端适配的，让网页可以在移动端上得到很好的呈现。

`meta` 标签里面有两个属性，`name` 和 `content` 。

**`name` 里面写**:
+ `viewport`;

**`content` 里面写** :
+ `width = device-width` ，宽度等于设备宽度；
+ `initial-scale = 1`(可以是小数) ，页面的初始缩放比例为 `1`;
+ `minimum-scale = 1`(可以是小数) , `maximum-scale = 1`(可以是小数) ，用户能够放大和缩小的比例都为1，这是用来禁止用户缩放的；
+ `user-scalable = no` ，也是用来禁止用户缩放的。`之所以重复禁止用户缩放，是因为在有些浏览器上其中一个可能会失效`。

**H5页面窗口自动调整到设备宽度，并禁止用户缩放页面：**

```sh
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
```
## 8. 表单中`readonly`和`disabled`的区别

- `readonly`（只读）：用于输入字段，允许用户查看但不允许修改其内容。只适用于 `<input>` 和 `<textarea>` 元素。
  
```html
<input type="text" value="只读内容" readonly>
```

- `disabled`（禁用）：用于禁用表单元素，用户无法与其交互，也不会提交其值。适用于所有表单元素。
  
```html
<input type="text" value="禁用内容" disabled>
```

- **`readonly`**：只读但可提交。
- **`disabled`**：完全禁用，不可提交。

## 9.简述一下src与href的区别

### 常用标签
+ `href`：`link`、`a`。
```html
<link href="reset.css" rel=”stylesheet“/>
<a href="https://www.xx.com">点击跳转</a>
```
+ `src`：`img`、`script`、`iframe`;

```html
<script src="script.js"></script>
```
### 主要区别
1. `href` 主要用于建立链接，可引导用户跳转到其他页面，也能并行下载资源（如 `CSS`，因此建议使用`link`方式来加载css，而不是使用`@import`方式）。
2. `src` 用于嵌入外部资源到当前文档，会暂停其他资源加载，例如js脚本，img图片和iframe等元素，因此通常将 JavaScript 脚本放在底部防止加载资源时阻塞。
3. `href` 对 SEO 有影响，`src` 一般不直接影响。
4. `href` 常用于链接，`src` 常用于嵌入资源。

## 10.浏览器的内核分别是什么?

1. **IE**：使用 Trident 内核。
2. **Chrome**：使用 Blink 内核。
3. **Firefox**：使用 Gecko 内核。
4. **Edge**：使用 Chromium 内核。
5. **Safari**：使用 WebKit 内核。
6. **Opera**：使用 Blink 内核。
7. **UC 浏览器**：使用 Chromium 内核。
8. **QQ 浏览器**：使用 Chromium 内核。
9. **360 浏览器**：使用 IE 和 Chromium 双内核。

## 11. HTML5 为什么只需要写 《!DOCTYPE HTML>?

HTML5 不基于 SGML，所以不需要引用 DTD，只需使用 <!DOCTYPE HTML> 来规范浏览器行为。而 HTML4.01 基于 SGML，需要引用 DTD 来告知浏览器文档类型。

在 HTML4.01 中：
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
在HTML5中：
```html
<!DOCTYPE html>
```

## 12. img标签中标签上title与alt属性的区别是什么?

**alt 属性**：

1. 用于在`图像无法显示`或被关闭时，为浏览器用户、视觉障碍用户和使用屏幕阅读器的用户提供替换文字。
2. 长度应`少于 100 个英文`字符。
3. 是 img 标签的`必需属性`，无特别意义的图片可写 alt=""。
4. 是搜索引擎判断图片与文字相关性的重要依据，主要目的是为了 `SEO`。

**title 属性**：

1. 不是必需的。
2. 规定元素的额外信息，`鼠标悬停时有文字显示`，具有视觉效果。
3. `不作为搜索引擎抓取图片的参考`，更倾向于用户体验。

## 13. 前端页面有哪三层构成

结构层 Html 表示层 CSS 行为层 js。

## 14. div+css的布局较table布局有什么优点？

1. **改版方便**：只需修改`css`文件，无需修改每个页面的`html`结构。
2. **页面加载速度快**：`div+css`布局结构简洁，代码量少，能更快地加载页面。
3. **结构化清晰**：`div+css`布局使页面结构更加清晰，易于维护和修改。
4. **表现与结构相分离**：`css`文件负责表现，`html`文件负责结构，便于团队协作和代码复用。
5. **搜索引擎优化友好**：`div+css`布局更符合搜索引擎的爬虫规则，有利于提高网站的排名。

## 15、从用户刷新网页开始，一次js请求一般情况下有哪些地方会有缓存处理？

1. **DNS 缓存**：浏览器会先检查本地 DNS 缓存，看是否有对应的域名解析记录。如果有，则直接使用缓存中的 IP 地址，减少 DNS 查询的时间。
2. **CDN 缓存**：如果网站使用了内容分发网络（CDN），CDN 会根据用户的地理位置和网络情况，将静态资源缓存到离用户较近的边缘节点上。当用户请求这些资源时，CDN 会直接返回缓存的内容，提高资源加载速度。
3. **浏览器缓存**：浏览器会根据 HTTP 头中的缓存控制信息，决定是否使用本地缓存的资源。常见的缓存控制策略包括强缓存（Expires、Cache-Control）和协商缓存（Last-Modified、ETag）。
4. **服务器缓存**：服务器端也可以设置缓存策略，将经常访问的资源缓存起来，以减少对后端服务器的请求压力。

## 16. 网页制作中常用的图片格式有哪些？
- jpg
- jpeg
- gif
- SVG
- png
- WebP

## 17.如何添加、移除、移动、复制、创建和查找节点

1. 添加节点：
    - 使用 `appendChild()` 方法将新节点添加到父节点的末尾。
    - 使用 `insertBefore()` 方法将新节点插入到指定节点之前。

2. 移除节点：
    - 使用 `removeChild()` 方法从父节点中移除指定子节点。

3. 移动节点：
    - 使用 `appendChild()` 或 `insertBefore()` 方法将节点从一个位置移动到另一个位置。

4. 复制节点：
    - 使用 `cloneNode()` 方法创建节点的副本。

5. 创建节点：
    - 使用 `createElement()` 方法创建新的元素节点。
    - 使用 `createTextNode()` 方法创建新的文本节点。

6. 查找节点：
    - 使用 `getElementsByTagName()` 方法通过标签名查找节点。
    - 使用 `getElementsByClassName()` 方法通过类名查找节点。
    - 使用 `getElementById()` 方法通过 ID 查找节点。
    - 使用 `querySelector()` 和 `querySelectorAll()` 方法通过 CSS 选择器查找节点。

## 18. 常见媒体格式的 MIME 类型：

### 视频：
- **MP4**：video/mp4
- **AVI**：video/x-msvideo
- **WMV**：video/x-ms-wmv
- **FLV**：video/x-flv
- **MKV**：video/x-matroska
- **WebM**：video/webm

### 音频：

- **MP3**：audio/mpeg
- **WAV**：audio/wav
- **OGG**：audio/ogg
- **FLAC**：audio/flac


## 19. BOM(browser object model 浏览器对象模型)对象有哪些

- **window 对象**：整个浏览器窗口相关的顶层对象。
- **document 对象**：与当前文档相关。
- **location 对象**：有关当前页面 URL 的信息。
- **navigator 对象**：关于浏览器的信息。
- **screen 对象**：涉及客户端屏幕的属性。
- **history 对象**：浏览器的历史记录操作对象。
