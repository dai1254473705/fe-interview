---
title: bind实现
order: 2
---

# bind 实现

请描述原生 js 里 bind 函数的作用，什么场景需要用到它，并手写 Function.bind 函数

- 主要作用是改变函数中的 this 指向

```jsx | pure
Function.prototype.bind = function (context) {
  // 获取到bind第一个参数（要绑定的函数）之外的参数数组；
  // args: [234,23443]
  var args = Array.prototype.slice.call(arguments, 1);

  // 缓存当前this
  var currentThis = this;
  // 创建一个新的函数
  var NewFunc = new Function();
  var bind = function () {
    // 获取到执行对应绑定方法时接手到的参数
    // innerArgs: [12]
    var innerArgs = Array.prototype.slice.call(arguments);
    // 合并所有参数
    // finalArgs: [234, 23443, 12]
    var finalArgs = args.concat(innerArgs);
    return currentThis.apply(
      this instanceof currentThis ? this : context,
      finalArgs,
    );
  };
  NewFunc.prototype = currentThis.prototype;
  bind.prototype = new NewFunc();
  return bind;
};

function ss() {
  this.state = {
    name: '12',
  };
}
function bb() {
  console.log(arguments, this); //[234, 23443, 12] , ss
}
bb.bind(ss, 234, 23443)(12);
```
