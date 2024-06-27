---
title: 面试题 2
group: 布局
order: 1
---

# 使用css实现一个自适应浏览器大小且宽高比为2：1 的块

## 原理
当margin/padding取形式为百分比的值时，无论是left/right，还是top/bottom，都是以父元素的width为参照物的

```bash
.css-demo-1 {
  width: 100%;
  height: 0;
  padding-top: 50%;
  background: #000;
}
```
