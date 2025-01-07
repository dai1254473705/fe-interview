---
title: 11. 输出金字塔1，2，3以下结构
order: 11
---

# 11. 输出金字塔1，2，3以下结构

```js
   如下：
    1
  2   3
4   5   6
…...
```

**根据 `n` 的值来控制输出的行数：**

```js
function outPutNum(n) {
    let currentNumber = 1;
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat((n - i) * 2);
        let numbers = "";
        for (let j = 1; j <= i; j++) {
            numbers += `${currentNumber}   `;
            currentNumber++;
        }
        console.log(spaces + numbers);
    }
}
outPutNum(4)
```

**输出**

```js
      如下：   
       1
     2   3   
   4   5   6   
 7   8   9   10  
```

以下是对上述 JavaScript 代码的解释：

1. 定义函数 `printPattern`，它接受一个参数 `n`，表示要输出的行数。
2. 初始化变量 `currentNumber` 为 1，这个变量用于在输出过程中依次显示数字。
3. 外部的 `for` 循环控制行数，从 1 循环到 `n`。
   - 首先计算出当前行需要输出的空格数，即 `(n - i) * 2` 个空格，并存储在变量 `spaces` 中。这是为了使数字能够居中对齐，随着行数的增加，每行前面的空格数逐渐减少。
   - 内部的 `for` 循环控制当前行输出的数字个数，从 1 循环到 `i`。
     - 在每次循环中，将当前数字拼接到 `numbers` 字符串中，并添加一定数量的空格（这里是三个空格）作为间隔。同时，将 `currentNumber` 自增，以便下一次循环输出下一个数字。
   - 最后，使用 `console.log` 输出当前行的空格和数字，形成逐渐展开的三角形结构。

当你调用 `printPattern(n)` 函数时，传入一个特定的 `n` 值，就可以在控制台输出相应行数的三角形数字结构。
