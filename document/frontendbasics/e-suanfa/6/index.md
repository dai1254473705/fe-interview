---
title: 6. 判断一个单词是否是回文
order: 6
---

# 6. 判断一个单词是否是回文

回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。

比如 `mamam` `redivider`；

很多人拿到这样的题目非常容易想到用for 将字符串颠倒字母顺序然后匹配就行了。

其实重要的考察的就是对于reverse的实现。

```js
function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
console.log(isPalindrome('mamam')); // true
console.log(isPalindrome('redivider')); // true
```
