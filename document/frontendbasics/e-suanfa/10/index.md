---
title: 10. 随机生成指定长度字符串
order: 10
---

# 10. 随机生成指定长度字符串

以下是一个使用 JavaScript 随机生成指定长度字符串的示例代码：

```js
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// 示例用法，生成一个长度为 10 的随机字符串
console.log(generateRandomString(10)); // zyQTMTA6ay
```
