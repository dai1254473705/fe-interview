---
title: HTML5 语义化元素入门教程
group: html
order: 2
---

HTML5 引入了一系列新的语义化元素，这些元素能够更清晰地描述内容的结构和用途，提高代码的可读性和可维护性，同时也有助于搜索引擎优化（SEO）和辅助技术（如屏幕阅读器）的使用。

## 什么是 HTML5 语义化元素？

语义化元素是指那些具有明确含义的 HTML 元素，这些元素不仅仅是用于排版，还能够清晰地表达其内容的意义。相比于使用大量的 `div` 和 `span` 标签，使用语义化元素能够使 HTML 代码更加直观和易于理解。

## 常用的 HTML5 语义化元素

### 1. `header`

用于定义页面或章节的头部内容，通常包含导航链接、标题等。

```html
<header>
  <h1>我的网站</h1>
  <nav>
    <ul>
      <li><a href="#home">首页</a></li>
      <li><a href="#about">关于</a></li>
      <li><a href="#contact">联系</a></li>
    </ul>
  </nav>
</header>
```

### 2. `nav`

用于定义导航链接的部分。

```html
<nav>
  <ul>
    <li><a href="#home">首页</a></li>
    <li><a href="#services">服务</a></li>
    <li><a href="#contact">联系</a></li>
  </ul>
</nav>
```

### 3. `main`

用于定义文档的主要内容区域，应该是文档中唯一的。

```html
<main>
  <h2>主要内容</h2>
  <p>这是页面的主要内容部分。</p>
</main>
```

### 4. `footer`

用于定义页面或章节的底部内容，通常包含版权信息、联系信息等。

```html
<footer>
  <p>© 2024 我的公司. 版权所有.</p>
</footer>
```

### 5. `article`

用于定义独立的内容单元，例如博客文章、新闻报道等。

```html
<article>
  <h2>文章标题</h2>
  <p>这是文章的内容。</p>
</article>
```

### 6. `section`

用于定义文档中的章节，每个章节通常包含一个主题。

```html
<section>
  <h2>章节标题</h2>
  <p>这是该章节的内容。</p>
</section>
```

### 7. `aside`

用于定义和主内容相关的辅助内容，通常用于侧边栏。

```html
<aside>
  <h2>侧边栏标题</h2>
  <p>这是侧边栏的内容。</p>
</aside>
```

### 8. `figure` 和 `figcaption`

用于定义图像、图表等，并为其添加说明。

```html
<figure>
  <img src="image.jpg" alt="示例图片">
  <figcaption>图 1: 示例图片的说明。</figcaption>
</figure>
```


### 9. `mark`

用于高亮显示文本。

```html
<p>请注意 <mark>重要内容</mark> 在这里。</p>
```

### 10. `progress`

显示任务的进度。

```html
<progress value="70" max="100">70%</progress>
```

### 11. `time`

表示时间或日期。

```html
<time datetime="2023-06-29">2023年6月29日</time>
```

### 12. `video` 和 `audio`

用于嵌入视频和音频内容。

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  您的浏览器不支持 video 标签。
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  您的浏览器不支持 audio 标签。
</audio>
```

## 总结

使用 HTML5 语义化元素可以显著提升页面的结构和可读性，使代码更易于理解和维护，同时也有助于搜索引擎优化和辅助技术的使用。在实际开发中，建议尽量使用这些语义化元素来构建页面结构。
