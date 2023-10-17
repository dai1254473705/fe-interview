---
title: 伪数组转成数组方法
order: 3
---

# 伪数组转成数组方法

## 什么是伪数组：

- 1、拥有 length 属性；
- 2、不具有数组所具有的 push,pop 等方法。

## 案例
伪数组：``const divs = document.querySelectorAll('div');``

1. 循环方法

```jsx | pure
const arr = [];
console.log(divs instanceof Array);
for (let i = 0; i < divs.length; i++) {
  arr.push(divs[i]);
}
```

2. Array 的 slice 方法

```jsx | pure
[].slice.call(divs);
// 或者
Array.prototype.slice.call(divs);
```

3. Array.form

```jsx | pure
Array.form(divs);
```

4. 扩展运算符

```jsx | pure
[...divs];
```
