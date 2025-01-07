---
title: 8. 斐波那契数列
order: 8
---
# 8. 斐波那契数列
## 什么是斐波那契数列

斐波那契数列是一个非常经典的数学序列。


## 定义

**从第三项开始，每一项都等于前两项的和。**
`fibo[i] = fibo[i-1]+fibo[i-2]`

最开始的两项通常定义为 `0` 和 `1`。

简单来说，斐波那契数列就是这样的一系列数字：
`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...`

## 案例

比如`计算第 6 个斐波那契数`。

在计算斐波那契数列时，通常从`第 0 项`开始计数，依次递增。

前两项是 `0` 和 `1`，然后 
`1 = 0 + 1`，
`2 = 1 + 1`，
`3 = 2 + 1`，
`5 = 3 + 2`，
所以`第 6 个斐波那契数就是 8`。

在编程中，可以通过`循环或递归`等方式来生成斐波那契数列。

以下是一个使用循环生成斐波那契数列`前 10 个`数的示例代码：

```js
let prev = 0;
let curr = 1;
console.log(prev);
console.log(curr);

for (let i = 2; i < 10; i++) {
  let next = prev + curr;
  prev = curr;
  curr = next;
  console.log(curr);
}
```


## 计算斐波那契数列

> 递归输出的，数字大了有性能问题

```js
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 示例用法
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
```

在这个函数中，通过递归的方式根据斐波那契数列的定义来计算出指定位置的数值。

## 生成斐波那契数组的方法

```js
function getFibonacci(n) {
    var fibarr = [];
    var i = 0;
    while (i < n) {
        if (i <= 1) {
            fibarr.push(i);
        } else {
            fibarr.push(fibarr[i - 1] + fibarr[i - 2])
        }
        i++;
    }
    return fibarr;
}
console.log(getFibonacci(10)); //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
