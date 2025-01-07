---
title: 9. 找出数组的最大差值
order: 9
---

# 9. 找出数组的最大差值


比如： 
- 输入`[10, 5, -1,-5,11, 7, 8, 9]` 
- 输出 `16`

这是通过一道题目去测试对于基本的数组的最大值的查找，很明显我们知道，最大差值肯定是一个数组中`最大值`与`最小值`的`差`。

```js
function getMaxDiff(arr) {
    // 从小到大排序
    const sortArr = arr.sort((a, b) => a - b);
    console.log(sortArr, arr);
    // 绝对值
    const maxDiff = Math.abs(sortArr[0] - sortArr[sortArr.length - 1]);
    return maxDiff;
}
console.log(getMaxDiff([10, 5, -1,-5,11, 7, 8, 9])); // 16
```
