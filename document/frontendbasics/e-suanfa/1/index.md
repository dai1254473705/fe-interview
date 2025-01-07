---
title: 1. 数组去重
order: 1
---

# 1. 数组去重

#### 相关api

+ `Set`类似于数组，但是成员的值都是唯一的，没有重复的值。
+ `indexOf`方法接受一个参数，表示要查找的元素。它会从数组的`开头开始查找`，直到找到匹配的元素或到达数组的末尾。如果找到匹配的元素，indexOf 方法会`返回该元素的索引位置`；如果`没有找到`匹配的元素，indexOf 方法会`返回 -1`。
+ `includes` 方法用于判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`。


#### **方法一：indexOf判断数据是否存在**

> 最简单数组去重法
> 利用一个新的`数组resArray`和`indexOf`处理,改为`includes`也是可以的

```js
function uniqueArray(arrayList) {
  // 去重后的数组
  const resArray = [];
  for (let i = 0, len = arrayList.length; i < len; i++) {
    const item = arrayList[i];
    // 判断arr2是否存在当前数据，
    if (resArray.indexOf(item) < 0) {
      resArray.push(item);
    }
  }
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```

#### **方法二：indexOf判断下标**
> 和方法一基本相同，只是在判断是否重复时通过`indexOf`原数组下标判断

```js
function uniqueArray(arrayList) {
  // 去重后的数组
  const resArray = [];
  for (let i = 0; i < arrayList.length; i++) {
    const item = arrayList[i];
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i，那么表示第i项是重复的，忽略掉。否则存入结果数组
    if (arrayList.indexOf(item) == i) {
      resArray.push(item);
    }
  }
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```
#### **方法三：对象键值对法**

> 和方法一基本相同，多增加了一个临时对象`cacheObj`缓存数据，来判断是否有重复，去重后的数据放到`resArray`中

>该方法执行的速度比其他任何方法都快， 就是占用的内存大一些

```js
function uniqueArray(arrayList) {
  // 去重后的数组
  const resArray = [];
  const cacheObj = {};
  for (let i = 0, len = arrayList.length; i < len; i++) {
    const item = arrayList[i];
    // 判断arr2是否存在当前数据，
    if (typeof cacheObj[item] === 'undefined') {
      cacheObj[item] = item;
      resArray.push(item);
    }
  }
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```

#### **方法四：利用Array.from和Set**

> 才用`Array.from`和 `Set`实现


```js
function uniqueArray(arrayList) {
  return Array.from(new Set(arrayList));
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```
#### **方法五：利用解构赋值和Set**

```js
function uniqueArray(arrayList) {
  const [...resArray] = new Set(arrayList);
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```

#### **方法六：排序后相邻去除法**

+ 虽然原生数组的”sort”方法排序结果不怎么靠谱，但在不注重顺序的去重里该缺点毫无影响。
+ 给传入数组排序，排序后相同值相邻，然后遍历时新数组只加入不与前一值重复的值。

```js
function uniqueArray(arrayList) {
  // 排序，目的是让相同数据相邻
  arrayList.sort();
  // 去重后的数组，默认放入第一个元素
  const resArray = [arrayList[0]];
  for (let i = 1; i < arrayList.length; i++) {
    // 当前的数据
    const item = arrayList[i];
    // 去重后的数组的最后一个元素
    const lastItem = resArray[resArray.length - 1];
    // 如果当前数据和去重后数组的最后一项不同，就插入到去重数组resArray中
    if (item !== lastItem) {
      resArray.push(item);
    }
  }
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```


#### **方法七：优化遍历数组法**

+ 该方法的实现代码相当酷炫，实现思路：获取没重复的最右一值放入新数组。（检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）推荐

```js
function uniqueArray(arrayList) {
  const resArray = [];
  for (let i = 0, len = arrayList.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // 如果前后两项相等，顶层循环+1，跳出当前循环
      // 当前循环 j 设置为顶层循环 i+1的值，重新比较前后两个是不是相等
      if (arrayList[i] === arrayList[j]) {
        j = ++i;
      }
    }
    resArray.push(arrayList[i]);
  }
  return resArray;
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```

#### **方法八：reduce遍历数组键值对法**
> 利用`reduce`遍历数组元素，将每个元素·作为键值对存储在一个新的对象中·，从而去除重复的元素。最后，将对象的键转换回数组即可得到去重后的结果。

+ `reduce`初始值设置为`{}`空对象，每次迭代时设置数据，和 `方法三：对象键值对法`原理相同，最后通过`Object.values`获取到数据


```js
function uniqueArray(array) {
  let resArray = array.reduce((accumulator, currentValue) => {
    if (typeof accumulator[currentValue] === 'undefined') {
      accumulator[currentValue] = currentValue;
    }
    return accumulator;
  }, {});
  return Object.values(resArray);
}
console.log(uniqueArray([1, 2, 2, 2, 3, 3, 3, 4, 5, 6])); // 1,2,3,4,5,6
```
