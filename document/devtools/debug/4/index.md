---
title: 在手机端使用vconsole调试h5页面
order: 4
---

# 在手机端使用vconsole调试h5页面

> [vconsole文档地址](https://www.npmjs.com/package/vconsole)

## 使用npm


+ 安装：

```sh
$ npm install vconsole
```

+ 使用：

```js
import VConsole from 'vconsole';

const vConsole = new VConsole();
// or init with options
const vConsole = new VConsole({ theme: 'dark' });

// call `console` methods as usual
console.log('Hello world');

// remove it when you finish debugging
vConsole.destroy();
```

## 使用cdn

```js
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  // VConsole will be exported to `window.VConsole` by default.
  var vConsole = new window.VConsole();
</script>
```
