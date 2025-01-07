---
title: 3. JavaScript深入之闭包
order: 3
---

# 3. JavaScript深入之闭包

## 什么是闭包？

**《JavaScript高级程序设计》中定义:**
`闭包是指有权访问另一个函数作用域中的变量的函数。`


```js
function outerFunction() {
  let outerVariable = 'I am an outer variable';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); 
```

在上述案例中，`outerFunction` 是一个外部函数，它定义了一个变量 `outerVariable`。然后，`outerFunction` 返回了一个内部函数 `innerFunction`。

当我们调用 `outerFunction` 并将其返回值赋值给 `closure`变量后，`closure` 就成为了一个闭包。此时，`closure` 可以访问 `outerFunction` 中的 `outerVariable` 变量。


## 为什么要用闭包？（闭包的作用？闭包的应用场景？）

> 闭包的作用域链包含着它自己的作用域、包含函数的作用域和全局作用域。

1. **实现私有变量**：保护函数内的变量安全，防止外部修改。
2. **延长变量的生命周期**：在内存中维持一个变量，防止被回收。
3. **实现模块模式**：闭包可以用来实现模块模式，将相关的功能封装在一个模块中，通过暴露特定的接口来与外部交互。

## 对页面有什么影响？

#### 闭包的缺点主要包括：

1. 内存消耗：闭包会保存函数中的变量，可能导致内存占用增加。
2. 内存泄漏风险：不正确使用或未释放闭包可能导致内存泄漏。
3. 性能影响：维护作用域链和变量引用会对性能有一定影响。
4. 可维护性降低：闭包增加了代码的复杂性。

#### 为避免缺点，可采取以下措施：

1. 谨慎使用闭包。
2. 及时释放资源。
3. 注意内存管理。
4. 优化性能。
5. 良好的代码组织。

## 如何销毁闭包？

> 要销毁闭包，可以将闭包所引用的`变量或函数设置为null`，或确保没有其他代码仍在引用闭包。这样可以让垃圾回收器回收闭包所占用的内存。

```js
function createClosure() {
  let value = 42;

  function closure() {
    console.log(value);
  }

  return closure;
}

let myClosure = createClosure();
myClosure(); 

// 销毁闭包
myClosure = null; 
```

## 必刷题
接下来，看这道刷题必刷，面试必考的闭包题：
```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();
```
答案是都是 3，让我们分析一下原因：
当执行到 `data[0]` 函数之前，此时全局上下文的 `VO` 为：
```javascript
globalContext = {
    VO: {
        data: [...],
        i: 3
    }
}
```
当执行 `data[0]` 函数的时候，`data[0]` 函数的作用域链为：
```javascript
// 因为i是全局变量，不在当前函数作用域，如果改为let定义 i，则作用域中就会有i，let为块级作用域
data[0]Context = {
    Scope: [AO, globalContext.VO]
}
```
`data[0]Context` 的`AO` 并没有 `i` 值，所以会从 `globalContext.VO` 中查找，`i` 为 `3`，所以打印的结果就是 `3`。
`data[1]` 和 `data[2]` 是一样的道理。

所以让我们改成闭包看看：
```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();
```
当执行到 `data[0]` 函数之前，此时全局上下文的 `VO` 为：
```javascript
globalContext = {
    VO: {
        data: [...],
        i: 3
    }
}
```
跟没改之前一模一样。
当执行 `data[0]` 函数的时候，`data[0]` 函数的作用域链发生了改变：
```js
data[0]Context = {
    Scope: [AO, 匿名函数Context.AO globalContext.VO]
}
```
匿名函数执行上下文的AO为：

```javascript
匿名函数Context = {
    AO: {
        arguments: {
            0: 0,
            length: 1
        },
        i: 0
    }
}
```
`data[0]Context` 的 `AO` 并没有 `i` 值，所以会沿着作用域链从匿名函数 `Context.AO` 中查找，这时候就会找 `i` 为 `0`，找到了就不会往 `globalContext.VO` 中查找了，即使 `globalContext.VO` 也有 `i` 的值(值为`3`)，所以打印的结果就是`0`。
`data[1]` 和`data[2]` 是一样的道理。

