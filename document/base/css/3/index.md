---
title: CSS选择符（器）有哪些？优先级如何计算？哪些属性可以继承？
group: 选择符
order: 3
---

## CSS 选择符（选择器）有哪些？

1. **通配选择符**：选择所有元素。

```css
* {
  margin: 0px;
}
```

2. **类型（元素、标签）选择符**：选择所有指定类型的元素。

```css
a {
  text-decoration: none;
}
```

3. **属性选择符**：选择具有特定属性的元素。

```css
input[type='button'] {
  padding: 5px;
}
```

4. **包含（后代）选择符**：选择某元素内部的所有指定元素。

```css
.code a {
  text-decoration: none;
}
```

5. **子选择符**：选择父元素的直接子元素。

```css
.test > li {
  font-size: 14px;
}
```

6. **ID 选择符**：选择具有特定 ID 的元素。

```css
#test {
  color: red;
}
```

7. **类选择符**：选择具有特定类的元素。

```css
.test {
  color: red;
}
```

8. **选择符分组**：对多个选择符应用相同的样式。

```css
body,
ul,
li {
  margin: 0px;
}
```

9. **伪类选择符**：伪类选择符用于选择元素的特定状态，比如悬停、聚焦等。常见的伪类选择符有：

```css
a:hover {}
a:focus {}
a:nth-child(2) {}
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
```

10. **伪元素选择符**：伪元素选择符用于选中元素的一部分，比如第一个字、第一行等。常见的伪元素选择符有：

```css
p::before {}
p::after {}
```

11. **相邻选择符**：选择紧接在另一个特定元素后的元素。
> E+F（和E相邻的F，相隔一个都不算）

```css
h1 + p {
  font-weight: bold;
}
```

12. **兄弟选择符**：选择和当前元素同级的元素。
> E~F（和E同级的F）

```css
li ~ li {
  font-weight: bold;
}
```

## 内联和`!important`哪个优先？

- `!important` 的优先级最高
- 使用`!important`可以改变优先级别为最高
- 其次是`style`对象，然后是`id` > `class` > `tag`
- 在同级样式按照声明的顺序后出现的样式具有高优先级


```css
/* 例子 */
.example {
    color: red !important; /* 最高优先级 */
}

<div class="example" style="color: blue;"></div>
```

在上面的例子中，`div`元素的文本颜色将是红色，因为`!important`的优先级高于内联样式。

## 优先级计算规则

CSS 优先级是通过计算选择符的特定性来确定的。以下是优先级的计算规则：

1. 内联样式（行内样式）（inline style）：1-0-0-0
2. ID 选择符：0-1-0-0
3. 类选择符、属性选择符和伪类选择符：0-0-1-0
4. 类型选择符和伪元素选择符：0-0-0-1

例如：

```css
/* 优先级为 0-0-0-1 */
p { color: red; }

/* 优先级为 0-0-1-0 */
.test { color: blue; }

/* 优先级为 0-1-0-0 */
#test { color: green; }

/* 优先级为 0-1-1-1 */
div#test .example p { color: yellow; }

/* 优先级为 1-0-0-0 */
style="font-size:14px;"
```

## 关于 CSS 中的继承属性，常见的可继承属性包括：

### 字体相关
- `font-family`
- `font-size`
- `font-style`
- `font-variant`
-`font-weight`

### 文本相关

- `text-align`
- `text-indent`
- `white-space`
- `color`

这些属性的值会从父元素继承到其子元素，除非子元素明确地重写了这些属性。其他大多数 CSS 属性（如`width`、`height`、`margin`、`padding`等）通常不会被继承，它们会在每个元素上单独设置。
