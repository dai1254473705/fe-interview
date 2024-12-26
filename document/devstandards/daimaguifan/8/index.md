# 8. JS 命名规范

> ECMAScript 规范中标识符采用驼峰大小写格式，驼峰命名法由小写字母开始，后续每个单词首字母都大写。

**Camel Case 小驼峰式命名法**：首字母小写。

```js
studentInfo、userInfo、productInfo
```

标识符，则包括变量、函数名、类名、属性名和函数或类的参数，每个命名方法又略有不同，下面详细解释一下：

## 1.项目命名

全部采用小写方式， 以下划线分隔。
示例：`my_project_name`

## 2.目录命名
参照项目命名规则；有复数结构时，要采用复数命名法。
示例：`scripts, styles, images, data_models`

## 3.JS文件命名

#### 变量

必须采用小驼峰式命名法。

+ 命名规范：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)
+ 命名建议：尽量在变量名字中体现所属类型，如:`length`、`count`等表示数字类型；而包含`name`、`title`表示为字符串类型

```js
// 好的命名方式
let maxCount = 10;
let tableTitle = 'LoginTable';
// 不好的命名方式
let setCount = 10;
let getTitle = 'LoginTable';
```

#### 常量

必须采用`全大写`的命名，且单词`以_分割`，常量通常用于ajax请求url，和一些不会改变的数据;

+ 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

```js
const MAX_COUNT = 10;
const URL = 'http://www.foreverz.com';
```

#### 函数

+ 命名方法：小驼峰式命名法。
+ 命名规范：前缀应当为动词。
+ 命名建议：可使用常见动词约定

|动词|解释|返回值|
|--|--|--|
|can |判断是否可执行某个动作(权限) |函数返回一个布尔值。true：可执行；false：不可执行 |
|has|判断是否含有某个值|函数返回一个布尔值。true：含有此值；false：不含有此值|
|is|判断是否为某个值|函数返回一个布尔值。true：为某个值；false：不为某个值|
|get|获取某个值|函数返回一个非布尔值|
|set|设置某个值|无返回值、返回是否设置成功或者返回链式对象|
|load|加载某些数据|无返回值或者返回是否加载完成的结果|
 
```js
// 是否可阅读
function canRead(): boolean {
  return true;
}
// 获取名称
function getName(): string {
  return this.name;
}
```



#### 类 & 构造函数

+ 命名方法：大驼峰式命名法，首字母大写。
+ 命名规范：前缀为名称。


示例：
```js
class Person {
  public name: string;
  constructor(name) {
    this.name = name;
  }
}
const person = new Person('asfsa');
```

##### 类的成员

+ **公共属性和方法**：跟`变量和函数`的命名一样。
+ **私有属性和方法**：`前缀为_(下划线)`，后面跟公共属性和方法一样的命名方式。

示例：
```js
class Person {
  private _name: string;
  constructor() { }
  // 公共方法
  getName() {
    return this._name;
  }
  // 公共方法
  setName(name) {
    this._name = name;
  }
}
const person = new Person();
person.setName('asdf');
person.getName(); // ->asdf
```

##### 构造函数

+ 给对象原型分配方法，而不是使用一个新对象覆盖原型。覆盖原型将导致继承;
+ 出现问题：重设原型将覆盖原有原型！

```js
function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};
```

+ 方法可以返回 this 来实现方法链式使用。

```js
// bad
Jedi.prototype.jump = function jump() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function setHeight(height) {
  this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
Jedi.prototype.jump = function jump() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function setHeight(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump().setHeight(20);
```


## 4. 注释规范

**js 支持`三种`不同类型的注释**:

+ 行内注释
+ 单行注释
+ 多行注释

#### 1. 行内注释

+ 说明：行内注释以两个斜线开始，以行尾结束。
+ 语法：
```js
code // 这是行内注释
```
+ 使用方式：`//(双斜线)`与代码之间保留一个空格，并且`//(双斜线)`与注释文字之间`保留一个空格`。
+ 命名建议：
```js
// 用来显示一个解释的评论
// -> 用来显示表达式的结果，
// >用来显示 console 的输出结果
```
示例：
```js
function test() { // 测试函数
  console.log('Hello World!'); // >Hello World!
  return 3 + 2; // ->5
}
```

#### 2. 单行注释

+ 说明：单行注释以两个斜线开始，以行尾结束。
+ 语法：
```js
// 这是单行注释
code
```
+ 使用方式：`单独一行`：`//(双斜线)`与注释文字之间保留一个空格。

示例：
```js
// 调用了一个函数；单独在一行
setTitle();
```

#### 3. 多行注释

+ 说明：以 `/*` 开头， `*/` 结尾
+ 语法：
```js
/* 
 * 注释说明1
 * 注释说明2
 */
code1


/*  注释说明3 */
code2
```
+ 使用方法：若`开始/和结束/都在一行`，`推荐采用单行注释`。若至少三行注释时，第一行为/，最后行为/，其他行以开始，并且注释文字与保留一个空格。

示例:
```js
/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */
setTitle();
```

##### 函数(方法)注释

+ 说明：`函数(方法)注释也是多行注释的一种`，但是包含了特殊的注释要求，参照`JSDoc`:[4. 代码注释规范(参考jsdoc)](https://app.yinxiang.com/shard/s69/nl/15821309/43152e66-3ade-47ce-8602-779556c3fea8/)
+ 语法：
```js
/** 
* 函数说明 
* @关键字 
*/
```

## 5. 模块

+ 模块应该以 `!` 开始。这样确保了当一个不好的模块忘记包含最后的分号时，在合并代码到生产环境后不会产生错误。
+ 文件应该以`驼峰式命名`，并`放在同名的文件夹里`，且`与导出的名字一致`。
+ 增加一个名为 `noConflict()` 的方法来设置导出的模块为前一个版本并返回它。
+ 永远在模块顶部声明 `'use strict'`;。

```js
!function (global) {
 'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);
```

