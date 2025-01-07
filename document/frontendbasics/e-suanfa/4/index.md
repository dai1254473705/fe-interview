---
title: 4. 二分法查找
order: 4
---
# 4. 二分法查找

## JavaScript实现二分法查找

> 二分法查找，也称`折半查找`，是一种在`有序数组中查找特定元素`的搜索算法。

查找过程可以分为以下步骤：

（1）首先，从有序数组的`中间的元素开始搜索`，如果该元素`正好是目标元素`（即要查找的元素），则`搜索过程结束`，否则进行下一步。
（2）如果目标`元素大于或者小于中间元素`，则`在数组大于或小于中间元素的那一半区域查找`，然后重复第一步的操作。
（3）如果某一步`数组为空`，则表示`找不到目标元素`。

**参考代码:**

**非递归算法**
```js
/**
 * 非递归算法
 * @param { Array } arr - 当前要查找的数组
 * @param { Number } key - 当前要查找的目标元素
 */
function binary_search(arr, key) {
  // 定义要查找的开始结束位置
  let low = 0;
  let high = arr.length - 1;
  // 如果开始位置小于或者等于结束位置，需要循环，需要=的原因是，有可能目标是最后一个元素，此时也要进行 while循环
  while (low <= high) {
    // 找到中间值
    const mid = Math.floor((high + low) / 2);
    // 如果相等，直接返回目标值下标
    if (key == arr[mid]) {
      return mid;
    }
    // 如果目标大于中间值，说明目标值在右边，将开始位置移动到中间值+1
    else if (key > arr[mid]) {
      low = mid + 1;
    }
    // 如果目标小于中间值，说明目标值在左边，将结束位置移动到中间值-1
    else {
      high = mid - 1;
    }
  }
  // 找不到返回-1
  return -1;
};
const keyIndex = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86], 3);
console.log(keyIndex); // 2
```

```js
/**
 * 递归算法
 * @param { Array } arr - 当前要查找的数组
 * @param { Number } low - 当前查找的数组的开始下标
 * @param { Number } high - 当前查找的数组的结束下标
 * @param { Number } key - 当前要查找的目标元素
 */
function binary_search(arr, low, high, key) {
  // 如果开始位置超过了结束位置下标，就结束
  if (low > high) {
    return -1;
  }
  // 找到中间值
  const mid = Math.floor((high + low) / 2);
  // 如果相等，直接返回目标值下标
  if (key === arr[mid]) {
    return mid;
  }
  // 如果目标大于中间值，说明目标值在右边，将开始位置移动到中间值+1
  else if (key > arr[mid]) {
    low = mid + 1;
    // 开始递归重新查找
    return binary_search(arr, low, high, key);
  }
  // 如果目标小于中间值，说明目标值在左边，将结束位置移动到中间值-1
  else if (key < arr[mid]) {
    high = mid - 1;
    // 开始递归重新查找
    return binary_search(arr, low, high, key);
  }
};
const keyIndex = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86], 0, 13, 13321);
console.log(keyIndex); // -1
```
