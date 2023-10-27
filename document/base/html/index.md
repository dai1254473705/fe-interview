<!--
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2023-10-12 10:42:56
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2023-10-27 20:55:14
 * @FilePath: /fe-interview/document/base/html/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# html 基础

## 1.1 html 标签的类型（head， body，!Doctype） 他们的作用是什么

#### !DOCTYPE 标签：

它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令.

#### head：

是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者
该标签下所包含的部分可加入的标签有,,,,和

#### body :

用于定义文档的主体, 包含了文档的所有内容
该标签支持 html 的全局属性和事件属性.

## 1.2 h5 新特性

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
- 全双工通信协议 websocket
- 历史管理 history
- 跨域资源共享(CORS) Access-Control-Allow-Origin
- 页面可见性改变事件 visibilitychange
- 跨窗口通信 PostMessage
- Form Data 对象
- 绘画 canvas

#### H5 移除的元素：

- 纯表现的元素：basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素：frame、frameset、noframes

## 1.3 伪类和伪元素

> 伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。

例如：当用户悬停在指定元素时，可以通过:hover 来描述这个元素的状态，虽然它和一般 css 相似，可以为 已有元素添加样式，但是它只有处于 DOM 树无法描述的状态下才能为元素添加样式，所以称为伪类。

> 伪元素：用于创建一些不在 DOM 树中的元素，并为其添加样式。

例如，我们可以通过:before 来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在 DOM 文档中。

## 1.4 html5 语义化

在 HTML5 出来之前，我们习惯于用 div 来表示页面的章节或者不同模块，但是 div 本身是没有语义的。但是现在，HTML5 中加入了一些语义化标签，来更清晰的表达文档结构。

语义化优点：

> 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
> 有利于 SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
> 方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页
> 有利于开发和维护，语义化更具可读性，代码更好维护，与 CSS3 关系更和谐。

```bash
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

## 1.5 audio 标签的 api

audio 常用属性

| 属性     | 属性值                                           |
| -------- | ------------------------------------------------ |
| src      | 播放的音乐的 url 地址                            |
| preload  | 预加载，如果使用了 autoplay 的话那么该属性失效。 |
| loop     | 循环播放                                         |
| controls | 是否显示默认控制条（控制按钮）                   |
| autoplay | 自动播放                                         |

## 1.6 meta viewport 是做什么用的，怎么写？

meta viewport 是用来做移动端适配的，让网页可以在移动端上得到很好的呈现。

meta 标签里面有两个属性，name 和 content 。name 里面写 viewport ，content 里面写 width = device-width ，宽度等于设备宽度；initial-scale = 1 ，页面的初始缩放比例为 1 ; minimum-scale = 1 , maximum-scale = 1 ，用户能够放大和缩小的比例都为1，这是用来禁止用户缩放的；user-scalable = no ，也是用来禁止用户缩放的。之所以重复禁止用户缩放，是因为在有些浏览器上其中一个可能会失效。

```sh
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
```