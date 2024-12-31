# 11. JavaScript深入之作用域链

## 前言
在[《JavaScript深入之执行上下文栈》](https://github.com/mqyqingfeng/Blog/issues/4)中讲到，当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。
对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

### 作用域

1. **全局作用域**：在代码的任何地方都可以访问的变量或函数的作用域。全局作用域中的变量在整个程序中都是可见的，可以在任何地方被访问和修改。
2. **函数作用域**：在函数内部定义的变量或函数的作用域。函数作用域中的变量只能在函数内部被访问和修改，在函数外部是不可见的。
3. **块级作用域**：在代码块（如 if 语句、for 循环等）内部定义的变量或函数的作用域。块级作用域中的变量只能在代码块内部被访问和修改，在代码块外部是不可见的。

需要注意的是，在 `ES6` 中引入了 `let` 和 `const` 关键字，它们可以创建块级作用域的变量。这意味着在使用 `let` 和 `const` 定义变量时，`变量的作用域是在代码块内部`，而不是在函数内部或全局作用域中。

## 作用域链
在[《JavaScript深入之变量对象》](https://github.com/mqyqingfeng/Blog/issues/5)中讲到，当`查找变量`的时候，会先从`当前上下文的变量对象中查找`，如果没有找到，就会`从父级执行上下文的变量对象中查找`，一直找到`全局上下文`的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做`作用域链`。


## JS执行上下文栈

`执行栈`，也叫做`调用栈`，具有 `LIFO` (`后进先出`) 结构，用于`存储`在代码执行期间创建的所有执行`上下文`。

- `首次`运行`JavaScript`代码的时候,会创建一个全局执行的`上下文`并`Push`到当前的`执行栈`中，每当发生`函数调用`，引擎都会为该函数`创建一个新的函数执行上下文`并Push当前执行栈的`栈顶`。
- 当`栈顶的函数运行完成`后，其对应的函数执行上下文将会从执行栈中`Pop出`，上下文的控制权将移动到当前执行栈的`下一个执行上下文`。



## 函数创建
在[《JavaScript深入之词法作用域和动态作用域》](https://github.com/mqyqingfeng/Blog/issues/3)中讲到，函数的作用域在函数定义的时候就决定了。
这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！
举个例子：
```javascript
 
function foo() {
    function bar() {
        ...
    }
}
```
函数创建时，各自的[[scope]]为：
```javascript
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
];
```
## 函数激活
当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。
这时候执行上下文的作用域链，我们命名为 Scope：
```javascript
Scope = [AO].concat([[Scope]]);
```
至此，作用域链创建完毕。
## 捋一捋
以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下函数执行上下文中作用域链和变量对象的创建过程：
```javascript
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
```
执行过程如下：
1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]
```javascript
checkscope.[[scope]] = [
    globalContext.VO
];
```

2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈
```javascript
ECStack = [
    checkscopeContext,
    globalContext
];
```
3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
```javascript
checkscopeContext = {
    Scope: checkscope.[[scope]],
}
```
4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
```javascript
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }，
    Scope: checkscope.[[scope]],
}
```
5.第三步：将活动对象压入 checkscope 作用域链顶端
```javascript
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}

```
6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值
```javascript
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
}
```
7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
```javascript
ECStack = [
    globalContext
];
```

