---
title: 2. 统计字符串中字母个数或统计最多字母数
order: 2
---

# 2. 统计字符串中字母个数或统计最多字母数

```javascript
/**
 * 统计字符串中字母的出现次数和出现次数最多的字母
 * @param {string} str - 要统计的字符串
 * @returns {Object} - 包含字母统计信息和出现次数最多的字母的对象
 */
function getLetterInfo(str) {
  const letterMap = {};
  let maxLetter = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letterMap[letter]) {
      letterMap[letter]++;
    } else {
      letterMap[letter] = 1;
    }

    if (!maxLetter || letterMap[letter] > letterMap[maxLetter]) {
      maxLetter = letter;
    }
  }

  return {
    letterMap,
    maxLetter,
  };
}

console.log(getLetterInfo("aaaabbbcccddfgh")); 
// {"letterMap":{"a":4,"b":3,"c":3,"d":2,"f":1,"g":1,"h":1},"maxLetter":"a"}
```
