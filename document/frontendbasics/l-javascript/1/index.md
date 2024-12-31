# 1. 断言

#### 前端断言

断言(assertion)是一种在程序中的一阶逻辑(如：一个结果为真或假的逻辑判断式)，目的为了表示与验证软件开发者预期的结果——当程序执行到断言的位置时，对应的断言应该为真。若断言不为真时，程序会中止执行，并给出错误信息。

```js
// console.assert(condition, message)
const a = '1'
console.assert(typeof a === 'number', 'a should be Number')
```

当condition为false时，该方法则会将错误消息写入控制台。如果为true，则无任何反应。

实际上，很少使用console.assert方法，如果你阅读过vue或者vuex等开源项目，会发现他们都定制了断言方法：

```js
// Vuex源码中的工具函数
function assert (condition, msg) {
    if (!condition) {
      throw new Error(`[Vuex] ${msg}`)
    }
}
```
