---
title: 3. 排序算法
order: 3
---

# 3. 排序算法

## 冒泡排序

冒泡排序（`Bubble Sort`）是一种简单的排序算法。

它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果顺序（如从大到小、首字母从Z到A）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。

但冒泡排序的时间复杂度仍然是$O(n^2)$，在处理大规模数据时可能不是最优的选择。

对于更高效的排序算法，可以考虑使用快速排序、归并排序等。

![b7d216a5b292cf3a5412bbc7fbb56a9e](./image/201423871_3_20200906093145412.gif)

```js
function bubbleSort(arr) {
    // i< len-1,能让外层的 for循环少执行一次，因为最后一次 j=i+1会导致 j<len不成立，只执行外层 for循环
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            // 比较相邻元素，如果前一个元素大于后一个元素，则交换位置
            if (arr[i] > arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1, 23, 5, 6, 7, 5, 4, 2, 8, 5, 9, 10]));
//  输出：[1, 2, 4, 5, 5, 5, 6, 7, 8, 9, 10, 23]
```

## 快速排序

**"快速排序"的思想很简单，整个排序过程只需要三步：**

- 在数据集之中，选择第一个元素作为`"基准"（pivot）`。
- 所有`小于`"基准"的元素，都移到"基准"的`左边`；所有`大于`"基准"的元素，都移到"基准"的`右边`。
- 对"基准"左边和右边的两个子集，`不断重复第一步和第二步`，直到所有子集只剩下一个元素为止。

**代码：**

```js
const quickSort = function (arr, type) {
    // 如果数组长度小于等于1，直接返回数组
    if (arr.length <= 1) { return arr; }
    // 选择第一位作为基准，后面循环就可以从 1 开始，跳过当前基准
    const pivot = arr[0];
    // 分组
    const left = [];
    const right = [];

    // 循环,从 1 开始，因为第 0 位是pivot，会一直把当前 0 的元素，也就是pivot重复放到 left或者 right，导致死循环
    for (let i = 1, len = arr.length; i < len; i++) {
      const item = arr[i];
      // 小于基准放到左侧，大于基准放到右侧（从小到大排序）
      item < pivot ? left.push(item) : right.push(item);
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  };
  
  console.log(quickSort([1, 23, 5, 6, 7, 5, 4, 2, 8, 5, 9, 10])); 
  //  输出：[1, 2, 4, 5, 5, 5, 6, 7, 8, 9, 10, 23]
```




## 插入排序
一般也被称为`直接插入排序（Insert Sort）`。对于`少量元素的排序，它是一个有效的算法`。

插入排序是一种`最简单的排序方法`，它的基本思想是将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增1的有序表。

在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。

![be81c151f38d8923fe1ede31ac530ac4](./image/201423871_5_20200906093145755.gif)

```js
function insertSort(arr) {
    // 插入排序
    const sortArr = [arr[0]];
    for (let i = 1; i <= arr.length - 1; i++) {
        // 当前处理的数据
        const item = arr[i];
        // 从arr第一位开始（j=0）,对结果数组从后往前循环
        for (let j = sortArr.length - 1; j >= 0; j--) {
            console.log(j,sortArr[j]);
            // 如果当前处理的数据比当前结果数组的数据大，就插入到当前位置，小的就往前移动一个位置
            if (item > sortArr[j]) {
                sortArr.splice(j + 1, 0, item)
                break
            }
        }
    }
    return sortArr
}
console.log(insertSort([1, 23, 5, 6, 7, 5, 4, 2, 8, 5, 9, 10]));
//  输出：[1, 2, 4, 5, 5, 5, 6, 7, 8, 9, 10, 23]
```
## 希尔排序

希尔排序（Shell Sort）是直接插入排序算法的一种更`高效`的改进版本。它通过将数组按照一定的`增量序列`进行分组，然后对每组元素进行插入排序，逐步缩小增量，直到增量为 `1` 时完成排序。

希尔排序的主要思路是通过`分组`和`插入排序`的结合，使得数组在初始时就能够达到一定程度的有序性，从而减少后续排序的工作量。它的时间复杂度取决于增量序列的选择，在最坏情况下为$O(n^2)$，但在平均和最好情况下的时间复杂度都比直接插入排序要好。

以下是希尔排序的 JavaScript 代码实现：

```javascript
function shellSort(arr) {
  let n = arr.length;

  // 初始化增量序列
  let t = 1;
  while (t < n) {
    t = 2 * t + 1;
  }

  for (let gap = t; gap > 0; gap = Math.floor((gap - 1) / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
}

// 测试用例
let arr = [12, 11, 13, 5, 6];
console.log("排序前的数组为：");
console.log(arr.join(" "));

console.log("排序后的数组为：");
console.log(shellSort(arr).join(" "));
```

在上述代码中，`shellSort`函数接受一个数组作为参数。它首先通过一个循环计算初始的增量序列，然后使用外层循环按照增量序列进行分组。在每组中，使用插入排序的思想将元素插入到正确的位置。

希尔排序的增量序列可以有多种选择，这里使用的是 `Hibbard` 增量序列，即$t = 2^k - 1$。其他常见的增量序列还有 `Sedgewick` 增量序列等。

希尔排序的`时间复杂度`和`空间复杂度`都与增量序列的选择有关。在实际应用中，可以根据具体情况选择合适的增量序列来平衡排序的性能和效率。
