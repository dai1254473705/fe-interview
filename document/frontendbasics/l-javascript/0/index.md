# 0. JS基础问题汇总

## 1.（设计题）想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）

1. 给需要拖拽的节点绑定`mousedown`, `mousemove`, `mouseup`事件;
2. `mousedown`事件触发后，开始拖拽,`mousemove`时，需要通过`event.clientX`和`event.clientY`获取当前鼠标位置，并实时更新到节点的`left`,`top`;
3. `mouseup`时，拖拽结束,需要注意浏览器边界的情况;

```js
var box = document.getElementById("box");
box.onmousedown = function (evt) {
  evt = evt || window.event;
  var offX = evt.offsetX;
  var offY = evt.offsetY;

  document.onmousemove = function (evt) {

    evt = evt || window.event;
    var posX = evt.clientX;
    var posY = evt.clientY;
    console.log(posX);
    box.style.left = (posX - offX) + 'px';
    box.style.top = (posY - offY) + 'px';

  }
  box.onmouseup = function (evt) {
    evt = evt || window.event;
    document.onmousemove = null;
    document.onmousedown = null;
  }
}

```


## 2. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

#### **cookies**：
- 大小一般限制在 4KB 左右。
- 随 HTTP 请求发送到服务器，会增加网络开销。
- 可以设置过期时间，若未设置则在浏览器关闭时删除。
- 可跨页面和跨域使用。

#### **sessionStorage**：
- 存储在当前会话中，当前页面关闭数据即清除。
- 仅在当前浏览器窗口有效，不参与服务器通信。
- 存储容量一般比 cookies 大。

#### **localStorage**：
- 数据持久存储，除非手动删除或浏览器清除缓存，否则不会消失。
- 同 `sessionStorage` 一样不与服务器通信，仅在本地存储。
- 存储容量通常较大。 

> `localStorage`和`sessionStorage`都具有相同的操作方法，例如`setItem`、`getItem`和`removeItem`等

## 3. 浏览器记住当前 滚动位置

```js
// 浏览器记住当前
if ('scrollRestoration' in history) {
// 默认值为'auto'
history.scrollRestoration = 'manual';
}
```

## 4. 使用 JavaScript 获取当前页面`URL`不同部分信息：

假设当前的`URL`是:
`https://www.example.com:8080/page?param=value#fragment`：

+ `href`： 获取整个 URL 字符串（https://www.example.com:8080/page?param=value#fragment）
+ `hash`：获取 URL 中的哈希值（#fragment）
+ `host`：获取主机名和端口号（www.example.com:8080）
+ `hostname`：获取主机名（www.example.com）
+ `pathname`：获取路径名（/page）
+ `port`：获取端口号（8080）
+ `protocol`：获取协议（https）
+ `search`：获取问号后面的查询字符串部分（?param=value） 

## 5. 数据类型

在 JavaScript 中，数据类型分为两大类：基本数据类型和引用数据类型。

### 基本数据类型：
 - `Number`：表示整数和浮点数，例如 42, 3.14。
 - `String`：表示文本，例如 "Hello, World!"。
 - `Boolean`：逻辑值，只有 true 和 false 两个值。
 - `Undefined`：表示变量已被声明但尚未被赋予任何值。
 - `Null`：表示一个刻意的空值或缺少值，它只有一个值 null。
 - `Symbol`（ES6 新增）：符号类型，是唯一且不可变的值，常用于对象的键，以避免键名的冲突。
 - `BigInt`（ES10 新增）：可以安全地存储、操作大整数，超过 Number.MAX_SAFE_INTEGER 的整数。

### 引用数据类型：
 - `Object`：`复合数据类型`，可以包含多个键值对，包括数组(Array)、函数(Function)、日期(Date)、正则表达式(RegExp)等都是基于对象的。
 - `Function`：函数本身也是一种对象，可以作为值来传递和赋值。
 - `Array`：特殊类型的对象，用于存储有序的元素集合。
 - `Date`：用于处理日期和时间。
 - `RegExp`：正则表达式对象，用于匹配字符串中的模式。
 - `Map`, `Set`, `WeakMap`, `WeakSet`（ES6 新增）：这些是新的集合类型，提供了更灵活的数据结构。
 - `Promise`（ES6 新增）：用于异步计算。
 - `Buffer`（Node.js 特有）：处理二进制数据。
 - `Error`：错误对象，用于表示程序运行时发生的错误。
 - `Class`（ES6 新增）：用于实现面向对象编程中的类。

### 对于数据类型的判断方法：
 - `typeof`：可以判断除了 null 以外的所有原始类型，无法判断除了 function 以外的所有引用类型，直接输出类名。
 - `instanceof`：只能用来判断引用类型，输出 true 或 false 。
 - `Array.isArray()`：只能判断数组，输出 true 或 false 。
 - `Object.prototype.toString.call()`：是最为全面的判断方法，输出 `[object 类型名]` 。

以下是为您整理的内容：

### 数据类型与对应的 `Object.prototype.toString()` 输出结果：
```js
console.log(Object.prototype.toString.call([]));  // '[object Array]'
console.log(Object.prototype.toString.call(''));  // '[object String]'
console.log(Object.prototype.toString.call(true));  // '[object Boolean]'
console.log(Object.prototype.toString.call(123));  // '[object Number]'
console.log(Object.prototype.toString.call({}));  // '[object Object]'
console.log(Object.prototype.toString.call(function(){}));  // '[object Function]'
console.log(Object.prototype.toString.call(/^$/));  // '[object RegExp]'
console.log(Object.prototype.toString.call(new Date()));  // '[object Date]'
console.log(Object.prototype.toString.call(new Error()));  // '[object Error]'
console.log(Object.prototype.toString.call(new Map()));  // '[object Map]'
console.log(Object.prototype.toString.call(new Set()));  // '[object Set]'
console.log(Object.prototype.toString.call(new WeakMap()));  // '[object WeakMap]'
console.log(Object.prototype.toString.call(null));  // '[object Null]'
console.log(Object.prototype.toString.call(new WeakSet()));  // '[object WeakSet]'
```

## 6.简述同步和异步的区别

同步是`阻塞模式`，异步是`非阻塞模式`。
- **同步**:就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；
- **异步**:是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

## 7. 怎样添加、移除、移动、复制、创建和查找节点？

### (1) 创建新节点

  - `createDocumentFragment()`：创建一个 DOM 片段。
  - `createElement()`：创建一个具体的元素。
  - `createTextNode()`：创建一个文本节点。

### (2) 添加、移除、替换、插入节点

  - `appendChild()`：将一个节点添加到指定父节点的子节点列表的末尾。
  - `removeChild()`：从指定父节点的子节点列表中移除一个子节点。
  - `replaceChild()`：用一个新节点替换指定父节点的一个子节点。
  - `insertBefore()`：在指定父节点的子节点列表中，在指定的子节点之前插入一个新节点。

### (3) 查找节点

  - `getElementsByTagName()`：通过标签名称查找所有匹配的元素节点。
  - `getElementsByName()`：通过元素的 Name 属性的值查找所有匹配的元素节点。
  - `getElementById()`：通过元素的 ID 属性的值查找唯一的元素节点。
  - `querySelector()`: 方法返回文档中匹配指定 CSS 选择器的第一个元素。
  -`querySelectorAll()`: 方法接受一个 CSS 选择器作为参数，它也可以用于根据类名选择元素。
 - `getElementsByClassName()`: 方法接受一个或多个类名作为参数。
 
 
## 8.浏览器是如何渲染页面的
+ **CSSOM**: CSS 对象模型

浏览器渲染页面的过程可以大致分为以下几个步骤：

1. **解析 HTML**：浏览器首先会解析 HTML 文档，构建 DOM 树。DOM 树是一个表示页面结构的树形结构，其中每个节点表示一个 HTML 元素。
2. **解析 CSS**：浏览器会解析 CSS 样式表，构建 `CSSOM` 树。CSSOM 树是一个表示 CSS 样式的树形结构，其中每个节点表示一个 CSS 规则。
3. **构建渲染树**：浏览器会将 DOM 树和 CSSOM 树合并，构建渲染树。渲染树是一个表示页面内容的树形结构，其中每个节点表示一个可见的元素。
4. **布局**：浏览器会根据渲染树计算每个元素的位置和大小，确定它们在页面上的布局。
5. **绘制**：浏览器会根据渲染树绘制每个元素的内容，将它们显示在屏幕上。

需要注意的是，浏览器渲染页面的过程是一个复杂的过程，涉及到多个阶段和多个模块的协作。在实际应用中，还可能会受到网络延迟、JavaScript 执行等因素的影响，导致页面的渲染速度变慢。因此，在开发 Web 应用时，需要注意优化页面的性能，以提高用户体验。

## 9. 在Javascript中什么是伪数组？如何将伪数组转化为标准数组？

在 JavaScript 中，伪数组（也称为`类数组对象`）是具有类似数组结构的对象，但它们并`不具备数组的全部方法和特性`。伪数组通常具有以下特点：

1. 具有`length`属性，表示元素的数量。
2. 可以通过索引访问元素。
3. 不具备数组的方法，如`push`、`pop`、`slice`等。

常见的伪数组包括函数的`arguments`对象、`NodeList`对象（通过`document.getElementsByTagName`等方法获取的元素集合）等。

要将伪数组转换为标准数组，可以使用以下方法：

1. 使用`Array.prototype.slice.call()`方法：

```javascript
var pseudoArray = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
var realArray = Array.prototype.slice.call(pseudoArray);
console.log(realArray); 
```

2. 使用`Array.from()`方法（ES6 新增）：

```javascript
var pseudoArray = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
var realArray = Array.from(pseudoArray);
console.log(realArray); 
```
这两种方法都可以将伪数组转换为标准数组，使其具备数组的所有方法和特性。

## 10. 给原生数组扩展一个repeat方法，返回当前数组的双倍复制数组
> [1,2,3].repeat === [1,2,3,1,2,3]

```js
 Array.prototype.repeat = function () {
    // 方法 1
    this.push.apply(this,this);
    return this;
    // 方法 2
    return [...this,...this];
  }
  console.log([1, 2, 3].repeat());// [1,2,3,1,2,3]
```

## 11. 匿名函数/自执行函数
+ 匿名函数（Anonymous Function）是指没有名称的函数。它通常在需要一个函数但又不想为其命名的情况下使用。


```js
let anonymousFunction = function() {
  console.log("这是一个匿名函数");
};
```
+ 自执行函数（Self-Executing Function）是一种立即执行的匿名函数。它通过在函数定义后立即添加一对圆括号来调用自身。

```js
(function() {
  console.log("这是一个自执行函数");
})();
```


## 12. 如何让 (a == 1 && a == 2 && a == 3) 的值为true？

> `对象`与`原始类型`进行比较，会调用对象的 `[Symbol.toPrimitive]`或`toString` 或 `valueOf` 方法将其转换为原始类型若`返回的不是基本数据类型`，`抛出错误`；

**优先级：**
`Symbol.toPrimitive`>`valueOf`>`toString`

测试代码如下：
```js
let a = {
  i: 1,
  toString: function () {
    console.log('toString==');
    return this.i++;
  },
  valueOf: function () {
    console.log('valueof==');
    return this.i++;
  },
  [Symbol.toPrimitive]: (i) => {
    console.log('toPrimitive==');
    return a.i++;
  },
};
console.log(a == 1);// true
```
**toString:**
```js
let a = {
  i: 1,
  toString: function () {
    return this.i++;
  },
};
console.log(a == 1 && a == 2 && a == 3);// true
```

**valueOf:**
```js
let a = {
  i: 1,
  valueOf: function () {
    return this.i++;
  },
};
console.log(a == 1 && a == 2 && a == 3); // true
```
**[Symbol.toPrimitive]:**
```js
let a = {
  i: 1,
  [Symbol.toPrimitive]: (hint) => {
    return a.i++;
  },
};
console.log(a == 1 && a == 2 && a == 3); // true
```

## 13. ReferenceError和TypeError两种错误的区别

- `ReferenceError`：`引用错误`，即在作用域中没有找到该变量
- `TypeError`：`类型错误`，在作用域中已经声明变量并且找到，但是没有找到确切定义或者引用

## 14. 什么是面向对象?

`面向对象`是一种编程范式，它将`数据`和`操作数据`的方法封装在对象中。

`对象`(new 构造函数)是`类`的`实例`，类定义了对象的`属性`和`行为`。

通过将相关的`数据`和`方法`组织在一起，面向对象编程可以提高代码的`可维护性`、`可扩展性`和`复用性`。

## 15. json是什么

JSON 是一种`轻量级`的`数据交换格式`，具有简洁性、易读性、易于解析和生成等特点。它的`数据结构包括对象和数组`，对象是无序的键值对集合，数组是有序的值列表。`JSON` 常用于`前后端数据交互`、`配置文件`等场景。

## 16. slice()、substring()、subtr 区别

```js
var test = '123456789';
console.log(test.slice(2,-1)); // 345678
console.log(test.substring(2,4)); // 34
console.log(test.substr(2,4)); // 3456
```
- `slice`: 参数`(start,end)`, `start` 表示开始提取的位置（包括该位置的字符），`end` 表示结束提取的位置（`不包括`该位置的字符）。如果 end 省略，则提取到字符串的末尾。如果 `start` 或 `end` 为负数，则表示从字符串的`末尾`开始计数。
- `substring`:参数 `(start,end)`,`star`t 表示开始提取的位置（包括该位置的字符），`end` 表示结束提取的位置（不包括该位置的字符）。与 slice()方法不同的是，如果 `start` 大于`end`，则 substring()方法`会自动交换`这两个参数的值，以确保 `start` 小于 `end`。

- `substr`:`(from,length)` 指的是从下标为`from`开始,取长度为`length`个数；如果 `start` 为负数，则表示从字符串的末尾开始计数。

## 17. typeof 判断有哪几种类型？

在 JavaScript 中，`typeof` 操作符可以用于判断一个变量的数据类型。它返回一个字符串，表示变量的数据类型。`typeof` 判断的数据类型有以下几种：

1. `number`：表示数字类型，包括整数和浮点数。
2. `string`：表示字符串类型。
3. `boolean`：表示布尔类型，只有 `true` 和 `false` 两个值。
4. `object`：表示对象类型，包括普通对象、数组、函数等。
5. `function`：表示函数类型。
6. `undefined`：表示变量未定义。
7. `symbol`：表示符号类型，是 ES6 新增的数据类型。

需要注意的是，`typeof` 操作符对于 `null` 返回的是 `object`，这是一个历史遗留问题。如果你需要准确判断一个变量是否为 `null`，可以使用 `===` 运算符进行比较。

```js
typeof 42; // "number"
typeof NaN; // "number"
typeof true; // "boolean"
typeof [1, 2, 3]; // "object"
typeof {}; // "object"
typeof null; // "object"
typeof undefined; // "undefined"
typeof function () { }; // "function"
typeof Symbol(); // "symbol"
```

## 18. JavaScript事件绑定和普通事件区别

- `普通事件`只能绑定一次，再次绑定会被覆盖；
- `事件绑定`（符合 W3C 标准的addEventListener方法）多次绑定不会被覆盖；

```js
 var btn = document.getElementById("btn");
btn.onclick = function () {
  alert('普通事件1');//不执行
}
btn.onclick = function () {
  alert('普通事件2');//弹出
}

// 上面用普通方法添加两个事件，下面用事件绑定添加两个事件。

btn.addEventListener('click', function () {
  alert('事件绑定1');//弹出
}, false);
btn.addEventListener('click', function () {
  alert('事件绑定2');//弹出
}, false);
```

**上面代码执行后依次会弹出：**
普通事件2、事件绑定1、事件绑定2。

**总结**：普通事件中的`onclick`是DOM0级事件`只支持单个事件`，会被其他onclick事件`覆盖`，而事件绑定中的`addEventListener`是DOM2级事件`可以添加多个事件`而不用担心被覆盖。

## 19. JavaScript如何优雅地获取屏幕分辨率

### 获取屏幕宽度：
```js
window.screen.width * window.devicePixelRatio
```
### 获取屏幕高度：
```js
window.screen.height * window.devicePixelRatio
```

## 20. 强制类型转换和隐式类型转换

类型转换是指将一种数据类型转换为另一种数据类型的过程。

**强制类型转换**

`parseInt()`，`parseFloat()`，`Number()`;

**隐式类型转换**

> 隐式类型转换是指在不需要显式指定的情况下，JavaScript 引擎自动将一种数据类型转换为另一种数据类型。

1. 比较运算符：比较运算符（如 `==`、`>`、`<` 等）。
2. 算术运算符：算术运算符（如 `+`、`-`、`*`、`/` 等）。


## 22. ios、android和js交互

**（1）通过jsBridge实现**
https://github.com/lzyzsd/JsBridge

**（2）通过window对象实现**
+ js 注册全局方法在window上提供给原生调用
+ 原生在window上注册原生的方法给js调用

如，原生在全局注册了`AppBridge`方法：
```js
// js只需要调用window上AppBridge对应的一些提供的api即可
window.AppBridge.setViewTitle('设置title');
```
同样，如果原生要调用js的方法，前端只需要把方法注册在全局即可：
```js
window.jsMethodForNative = ()=>{
    console.log('给native调用的js方法');
};
```

## 23. 怎样使用事件以及DOM事件模型之间存在哪些主要差别

1. 事件：
    - 事件是指在网页中发生的用户交互或系统操作，例如点击、鼠标移动、键盘输入等。
    - 可以通过 JavaScript 来监听和处理这些事件，以实现与用户的交互。

2. 使用事件：
    - 通过添加事件监听器来监听特定事件的发生。
    - 事件监听器是一个函数，当事件发生时会被调用。
    - 可以使用 `addEventListener()` 方法来添加事件监听器。

3. DOM 事件模型的主要差别：
    - 冒泡型事件模型：事件从目标元素开始向上冒泡，直到到达文档的根节点。
    - 捕获型事件模型：事件从文档的根节点开始向下捕获，直到到达目标元素。
    - DOM 标准事件模型：同时支持冒泡和捕获阶段，可以在捕获阶段或冒泡阶段处理事件。

## 24. 事件委托是什么?

`事件委托`是一种利用`事件冒泡`机制的技术，它允许我们将事件处理程序`绑定到父元素`上，而不是直接绑定到每个子元素上。

当`子元素上`发生事件时，事件会`冒泡`到父元素，然后由父元素上的事件处理程序进行处理。

```js
// 获取父元素
var parent = document.getElementById('myList');
// 添加事件处理程序
parent.addEventListener('click', function (event) {
    // 获取点击的子元素
    var target = event.target;
    // 判断点击的是否为子元素
    if (target.tagName === 'LI') {
        // 执行相应的操作
        console.log('Clicked on item:' + target.innerHTML);
    }
});
```

## 25. 获取非行间样式的函数

```js
function getNonInlineStyles(element) {
  const styles = window.getComputedStyle(element);
  const nonInlineStyles = {};
  for (const property of styles) {
    if (!element.style[property]) {
      nonInlineStyles[property] = styles[property];
    }
  }
  return nonInlineStyles;
}
```

上述代码定义了一个 `getNonInlineStyles` 函数，它通过 `window.getComputedStyle` 方法获取指定元素的所有计算样式，然后遍历这些样式，将`不属于元素行间样式的属性`及其值存储在一个新的对象中并返回。

这样可以获取到元素除了直接在元素上设置的样式之外的其他样式信息。

## 26. **`history.back(-1)`和`history.go(-1)`的区别**：

- `history.back(-1)`：主要用于执行后退操作，相当于模拟用户点击浏览器的后退按钮，它会使页面导航到上一个历史记录页面。

- `history.go(-1)`：这个方法中的参数表示要移动的历史记录步数。当参数为 `-1` 时，效果与 `history.back(-1)` 相同，即也是执行后退一步的操作。

总的来说，在这种情况下，这两个方法的功能是一致的。

## 27. javascript的本地对象，内置对象和宿主对象

**本地对象（native object）**：“独立于宿主环境的ECMAScript实现提供的对象”

这些是由 ECMAScript 规范定义的对象，如 `Array`、`Object`、`RegExp`、`Function`、`Date` 等，可以通过 `new` 操作符来创建实例。

**内置对象**：开发者确实不必明确实例化内置对象，因为它们在运行环境中已经被实例化了。
ECMA 定义的两个内置对象为 `Global` 和 `Math`。需要注意的是，`Global` 对象`在浏览器环境中主要体现在与 window 对象的关联上`。同时，根据定义，所有内置对象也都是本地对象。

**宿主对象（host Object）**：在浏览器环境中，主要有 `document`、`window` 等这些浏览器自带的对象。并且由于不同浏览器的实现细节可能不同，所以会存在浏览器兼容性问题。
需要注意的是，在不同的运行环境中，`宿主对象`的具体表现和特性可能会有所差异。


## 28. typeof 与 instanceof 的比较

**相同点**：
JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。

**不同点**：
- `typeof`主要用于确定基本数据类型（如数字、布尔、字符串等）和函数、对象等，返回的是一个表示数据类型的字符串，但对于一些复杂对象（如数组、null）的判断不够准确。
- `instanceof`则是专门用于判断一个对象是否是某个特定类（构造函数）的实例，能更准确地确定对象的类型归属。

**应用场景**：

- `typeof`常用于简单的数据类型检查和变量是否已定义的判断。
- `instanceof`在处理对象继承关系和特定类的实例判断方面更具优势。

## 29. 可迭代对象的特点

- 具有 `Symbol.iterator` 属性，且通过 `Symbol.iterator()` 能返回一个遍历器对象。
- 可以使用 `for...of` 进行循环操作。
- 能够被 `Array.from` 转换为数组。

原生具有 `Iterator` 接口即属于可迭代对象的数据结构包括：
- `Array`（数组）。
- `Map`。
- `Set`。
- `String`（字符串）。
- `TypedArray`：`Int8Array`、`Uint8Array`、`Int16Array`、`Uint16Array`、`Int32Array`、`Uint32Array`、`Float32Array`、`Float64Array`。
- 函数的 `arguments` 对象。
- `NodeList` 对象。


## 待办

谈谈垃圾回收机制方式及内存管理

