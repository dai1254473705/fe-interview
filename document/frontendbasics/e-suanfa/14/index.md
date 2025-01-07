---
title: 14. 计算时间列表最小时间差
order: 14
---

# 14. 计算时间列表最小时间差

### 一、题目

> 给定一个24小时制（小时:分钟 "HH:MM"）的时间列表，，且 `2 <= 时间列表长度 <= 2 * 104` 。找出列表中任意两个时间的最小时间差并以分钟数表示。

## 二、初始解法剖析
1. **思路**：先判断输入是否为合法数组，接着用 `Date` 对象把时间转成时间戳，对 `00:xx` 格式额外添加 `24:xx` 对应的时间戳，再双层循环算两两时间戳差值，每次更新最小差值。
2. **代码问题**：
    - 用 `null` 初始化最小时间差不妥，与数字比较易出错，应设为 `Infinity`。
    - 双层嵌套循环频繁比较更新最小差值，效率低。

## 三、优化解法解析
1. **思路**：同样先做输入合法性判断，然后将时间直接解析为分钟数存入数组，对该数组排序，只需依次比较相邻元素差值，同时考虑 `23:59` 与 `00:00` 这种跨天循环差值情况，取小值更新最小时间差。
2. **代码亮点**：
    - 避开 `Date` 对象复杂性，解析分钟数更简洁，如 `const totalMinutes = hour * 60 + minute`。
    - 排序后相邻比较，比较次数少，配合 `Math.min` 处理跨天差值很巧妙。

## 四、总结要点
处理时间算法要留意特殊格式与循环特性，尽量简化时间处理，排序相邻比较能提效。若时间列表允许重复，需在开头加重复检测环节。 

## 五、具体实现

```js
/**
 * 2 <= timePoints.length <= 2 * 104
 * timePoints[i]格式为 "HH:MM"
 *
 * @param {string[]} timePoints
 * @return {number}
 */
let findMinDifference = function (timePoints) {
  // 判断是不是数组
  if (!Array.isArray(timePoints) || timePoints.length < 2) {
    return 0;
  }
  // 将时间字符串转换为分钟数，处理00:xx格式
  const minutesList = [];
  for (let i = 0, len = timePoints.length; i < len; i++) {
    const [hour, minute] = timePoints[i].split(':').map(Number);
    const totalMinutes = hour * 60 + minute;
    minutesList.push(totalMinutes);
    if (hour === 0) {
      minutesList.push(totalMinutes + 1440); // 加上24小时对应的分钟数，处理00:xx格式
    }
  }
  // 对分钟数数组进行排序
  minutesList.sort((a, b) => a - b);
  // 初始化最小时间差为一个较大值
  let minDiffTime = Infinity;
  // 计算相邻元素间的差值，同时处理循环的情况（比如23:59和00:00）
  for (let i = 0, len = minutesList.length; i < len - 1; i++) {
    const diff = Math.min(
      minutesList[i + 1] - minutesList[i],
      1440 - (minutesList[i + 1] - minutesList[i])
    );
    minDiffTime = Math.min(minDiffTime, diff);
  }
  return minDiffTime;
};
// console.log(findMinDifference(["00:00", "23:59"]));
console.log(findMinDifference(["22:08", "00:35", "23:59"]));
```
