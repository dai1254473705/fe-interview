---
title: 现代Web设计中的Flex布局：深入浅出新手指南
group: 布局
order: 5
---

# 现代Web设计中的Flex布局：深入浅出新手指南

## 一、Flex 布局是什么

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称”**容器**”。

它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称”**项目**”。

容器默认存在两根轴：**水平的主轴**（main axis）和**垂直的交叉轴**（cross axis）。

设为Flex布局以后，子元素的**float**、**clear**和**vertical-align**属性将失效。

如下：`flex-content` 为容器，`flex-item` 为项目；
```html
<div class="flex-content">
  <div class="flex-item">1</div>
  <div class="flex-item">1</div>
  <div class="flex-item">1</div>
</div>
```
![8b402883445b842ca38727fc09f60d00](./image/C10A0133-2617-4E3A-BE34-930A6C917D66.png)

## 二、容器和项目的属性简介

1. **容器的属性**

+ `flex-direction`  
+ `flex-wrap`  
+ `flex-flow`  
+ `justify-content`  
+ `align-items`  
+ `align-content`  

2. **项目的属性**

+ `order`
+ `flex-grow`
+ `flex-shrink`
+ `flex-basis`
+ `flex`
+ `align-self`  

## 三、属性详解

#### 1. 容器的属性详解

##### 1.1 `flex-direction` 属性
`flex-direction` 属性决定主轴的方向（即项目的排列方向）。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

![0ac377493a33869f2829c4b1d3d70100](./image/0006FA63-FD8E-41BB-91B2-1F9410341385.png)


##### 1.2 `flex-wrap` 属性
默认情况下，项目都排在一条线（又称”轴线”）上。`flex-wrap` 属性定义，如果一条轴线排不下，如何换行。

![940f145a234cc9972dc232668bb96766](./image/35301CC3-E8DB-47D7-862F-6E0C408CFAE5.png)

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
- `nowrap`（默认）：不换行。

![7e8a06a9347193bcb4a969962ebfa3aa](./image/756263A7-28E8-46CE-9ED1-7623F92E28B7.png)

- `wrap`：换行，第一行在上方。

![6215cf568af888a6442517b68a2825d8](./image/5E698F2B-92DD-4F01-91FE-85E86FBF4D4C.jpg)

- `wrap-reverse`：换行，第一行在下方。

![4a8a486060e81a05895277c987af5c96](./image/0BAEC92F-2804-4652-BADE-1F2D216E0DF3.jpg)

##### 1.3 `flex-flow` 属性

`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

##### 1.4 `justify-content` 属性

`justify-content` 属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`：居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边框的间隔大一倍。

![b1beedefc6a3eb52960a682ad0121926](./image/2C0B13BC-1F3D-48F9-97DF-6472AA584609.png)


##### 1.5 `align-items` 属性

`align-items` 属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`：项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为 `auto`，将占满整个容器的高度。

![0ec9e81c35c66f66b23e724c6063fce8](./image/D1ACA062-371C-40FF-9A87-5ECD192F0660.png)


##### 1.6 `align-content` 属性

`align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等，所以轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。

![aade7abc9eb8c177c66d0128b1cc6ca9](./image/3FA66FCE-B187-4626-A2E5-3BF3B9FD6B73.png)

#### 2. 项目的属性详解

##### 2.1 `order` 属性
`order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
.item:nth-of-type(2) { 
  order: -1;
}
```
![70f89eba41edc0a70278c44b74747294](./image/3DCBE6AF-A8AB-43FF-AF1D-7FBF6CEF1C92.png)

##### 2.2 `flex-grow` 属性
`flex-grow` 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
- 如果所有项目的 `flex-grow` 属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的 `flex-grow` 属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
![0c40e2971edc015685f43798e9a5b90f](./image/F32C9555-BB14-4071-8B82-834327A9DDDC.png)

##### 2.3 `flex-shrink` 属性
`flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
- 如果所有项目的 `flex-shrink` 属性都为1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为0，其他项目都为1，则空间不足时，前者不缩小。
- 负值对该属性无效。
![e24a8660e626cd488ee1e21645a92bb0](./image/23844D30-56DC-4EDD-96B1-92B1B3856743.jpg)

##### 2.4 `flex-basis` 属性
`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小。

⚠️设置 `flex-basis` 时要注意的是需要把 `flex-grow` (放大) & `flex-shrink` (缩小) 设置 `0`，不放大也不缩小，在这个状态下`flex-basis`才有效果

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
- 它可以设为跟 `width` 或 `height` 属性一样的值（比如 `350px`, `33.333%`），则项目将占据固定空间。

##### 2.5 `flex` 属性
`flex` 属性是 `flex-grow`，`flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto`。后两个属性可选。
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
- 该属性有两个快捷值：`auto`  == "1 1 auto " 和 `none`  == "0 0 auto"。
- 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

##### 2.6 `align-self` 属性
`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
- `auto`：继承父元素。
- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`：项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为 `auto`，将占满整个容器的高度。

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

![0d93c40b34a77529f71ddd927dd49c82](./image/FFC25EA4-446F-4D31-B8D2-98A77A292D38.png)
