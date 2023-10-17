---
title: 解析Url参数
order: 1
---

# 解析 Url 参数

> 解析 url 参数，返回键值对对象

```tsx | pure
const urlParse = (url: string) => {
  const query = url.replace(/.*\?/, '').replace(/#.*/, '');
  const reg = /([^=&]*)(=)([^=&]*)/g;
  const obj = {};
  while (reg.exec(query)) {
    obj[RegExp.$1] = RegExp.$3;
  }
  return obj;
};
```

<code src="./index.tsx"></code>
