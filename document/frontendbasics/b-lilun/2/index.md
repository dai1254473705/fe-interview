---
title: 2.JavaScript：立即执行函数表达式（IIFE）
order: 2
---
# 2.JavaScript：立即执行函数表达式（IIFE）

## 它是什么
在 JavaScript 里，每个函数，当被调用时，都会创建一个新的执行上下文。因为在函数里定义的变量和函数是唯一在内部被访问的变量，而不是在外部被访问的变量，当调用函数时，函数提供的上下文提供了一个非常简单的方法创建私有变量。
```javascript
function makeCounter() {
    var i = 0;
    return function(){
        console.log(++i);
    };
}

//记住：`counter`和`counter2`都有他们自己的变量 `i`

var counter = makeCounter();
counter();//1
counter();//2

var counter2 = makeCounter();
counter2();//1
counter2();//2

i;//ReferenceError: i is not defined(它只存在于makeCounter里)
```
在许多情况下，你可能并不需要`makeWhatever`这样的函数返回多次累加值，并且可以只调用一次得到一个单一的值，在其他一些情况里，你甚至不需要明确的知道返回值。
### 它的核心
现在，无论你定义一个函数像这样`function foo(){}`或者`var foo = function(){}`，调用时，你都需要在后面加上一对圆括号，像这样`foo()`。
```javascript
//向下面这样定义的函数可以通过在函数名后加一对括号进行调用，像这样`foo()`，
//因为foo相对于函数表达式`function(){/* code */}`只是一个引用变量

var foo = function(){/* code */}

//那这可以说明函数表达式foo可以通过在其后加上一对括号自己调用自己吗？

function foo(){ /* code */}(); //Uncaught SyntaxError: Unexpected token ')'
```
正如你所看到的，这里捕获了一个错误。当圆括号为了调用函数出现在函数后面时，无论在全局环境或者局部环境里遇到了这样的`function`关键字，默认的，它会将它当作是一个函数声明，而不是函数表达式，如果你不明确的告诉圆括号它是一个表达式，它会将其当作没有名字的函数声明并且抛出一个错误，因为函数声明需要一个名字。
**问题1：**这里我么可以思考一个问题，我们是不是也可以像这样直接调用函数 `var foo = function(){console.log(1)}()`，答案是可以的。
**问题2：**同样的，我们还可以思考一个问题，像这样的函数声明在后面加上圆括号被直接调用，又会出现什么情况呢？请看下面的解答。
### 函数，圆括号，错误
有趣的是，如果你为一个函数指定一个名字并在它后面放一对圆括号，同样的也会抛出错误，但这次是因为另外一个原因。当圆括号放在一个函数表达式后面指明了这是一个被调用的函数，而圆括号放在一个声明后面便意味着完全的和前面的函数声明分开了，此时圆括号只是一个简单的代表一个括号(用来控制运算优先的括号)。
```javascript
//然而函数声明语法上是无效的，它仍然是一个声明，紧跟着的圆括号是无效的，因为圆括号里需要包含表达式
function foo(){ /* code */ }();//SyntaxError: Unexpected token
//现在，你把一个表达式放在圆括号里，没有抛出错误...,但是函数也并没有执行，因为：
function foo(){/* code */}(1)
//它等同于如下，一个函数声明跟着一个完全没有关系的表达式:
function foo(){/* code */}
(1);
```
## 立即执行函数表达式（IIFE）
幸运的是，修正语法错误很简单。最流行的也最被接受的方法是将函数声明包裹在圆括号里来告诉语法分析器去表达一个函数表达式，因为在Javascript里，圆括号不能**包含**声明。因为这点，当圆括号为了包裹函数碰上了 `function`关键词，它便知道将它作为一个函数表达式去解析而不是函数声明。**注意理解**这里的圆括号和上面的圆括号遇到函数时的表现是不一样的，也就是说。

- 当圆括号出现在匿名函数的末尾想要调用函数时，它会默认将函数当成是函数声明。

- 当圆括号包裹函数时，它会默认将函数作为表达式去解析，而不是函数声明。

```javascript
//这两种模式都可以被用来立即调用一个函数表达式，利用函数的执行来创造私有变量
(function(){/* code */}());//Crockford recommends this one，括号内的表达式代表函数立即调用表达式
(function(){/* code */})();//But this one works just as well，括号内的表达式代表函数表达式
// Because the point of the parens or coercing operators is to disambiguate
// between function expressions and function declarations, they can be
// omitted when the parser already expects an expression (but please see the
// "important note" below).
var i = function(){return 10;}();
true && function(){/*code*/}();
0,function(){}();
//如果你并不关心返回值，或者让你的代码尽可能的易读，你可以通过在你的函数前面带上一个一元操作符来存储字节
!function(){/* code */}();
~function(){/* code */}();
-function(){/* code */}();
+function(){/* code */}();
// Here's another variation, from @kuvos - I'm not sure of the performance
// implications, if any, of using the `new` keyword, but it works.
// http://twitter.com/kuvos/status/18209252090847232
new function(){ /* code */ }
new function(){ /* code */ }() // Only need parens if passing arguments
```
### 关于括号的重要笔记
在一些情况下，当额外的带着歧义的括号围绕在函数表达式周围是没有必要的(因为这时候的括号已经将其作为一个表达式去表达)，但当括号用于调用函数表达式时，这仍然是一个好主意。
这样的括号指明函数表达式将会被立即调用，并且变量将会储存函数的结果，而不是函数本身。当这是一个非常长的函数表达式时，这可以节约比人阅读你代码的时间，不用滚到页面底部去看这个函数是否被调用。
作为规则，当你书写清楚明晰的代码时，有必要阻止 JavaScript 抛出错误的，同样也有必要阻止其他开发者对你抛出错误 `WTFError`!
### 保存闭包的状态
就像当函数通过他们的名字被调用时，参数会被传递，而当函数表达式被立即调用时，参数也会被传递。一个立即调用的函数表达式可以用来锁定值并且有效的保存此时的状态，因为任何定义在一个函数内的函数都可以使用外面函数传递进来的参数和变量(这种关系被叫做闭包)。
```javascript
// 它的运行原理可能并不像你想的那样，因为`i`的值从来没有被锁定。
// 相反的，每个链接，当被点击时（循环已经被很好的执行完毕），因此会弹出所有元素的总数，
// 因为这是 `i` 此时的真实值。

var elems = document.getElementsByTagName('a');
for(var i = 0;i < elems.length; i++ ) {
    elems[i].addEventListener('click',function(e){
        e.preventDefault();
        alert('I am link #' + i)
        },false);
}

// 而像下面这样改写，便可以了，因为在IIFE里，`i`值被锁定在了`lockedInIndex`里。
// 在循环结束执行时，尽管`i`值的数值是所有元素的总和，但每一次函数表达式被调用时，
// IIFE 里的 `lockedInIndex` 值都是`i`传给它的值,所以当链接被点击时，正确的值被弹出。

var elems = document.getElementsByTagName('a');
for(var i = 0;i < elems.length;i++) {
    (function(lockedInIndex){
        elems[i].addEventListener('click',function(e){
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
            },false)
    })(i);
}

//你同样可以像下面这样使用IIFE，仅仅只用括号包括点击处理函数，并不包含整个`addEventListener`。
//无论用哪种方式，这两个例子都可以用IIFE将值锁定，不过我发现前面一个例子更可读

var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {
    elems[ i ].addEventListener( 'click', (function( lockedInIndex ){
        return function(e){
            e.preventDefault();
            alert( 'I am link #' + lockedInIndex );
        };
        })( i ),false);
    }
```
记住，在这最后两个例子里，`lockedInIndex`可以没有任何问题的访问`i`,但是作为函数的参数使用一个不同的命名标识符可以使概念更加容易的被解释。
立即执行函数一个最显著的优势是就算它没有命名或者说是匿名，函数表达式也可以在没有使用标识符的情况下被立即调用，一个闭包也可以在没有当前变量污染的情况下被使用。
#### 自执行匿名函数(“Self-executing anonymous function”)有什么问题呢？
你看到它已经被提到好几次了，但是它仍然不是那么清楚的被解释，我提议将术语改成**"Immediately-Invoked Function Expression"**，或者，**IIFE**，如果你喜欢缩写的话。
什么是**Immediately-Invoked Function Expression**呢？它使一个被立即调用的函数表达式。就像引导你去调用的函数表达式。
我想Javascript社区的成员应该可以在他们的文章里或者陈述里接受术语，**Immediately-Invoked Function Expression**和 **IIFE**，因为我感觉这样更容易让这个概念被理解，并且术语"self-executing anonymous function"真的也不够精确。
```javascript
//下面是个自执行函数，递归的调用自己本身

function foo(){foo();};

//这是一个自执行匿名函数。因为它没有标识符，它必须是使用`arguments.callee`属性来调用它自己

var foo = function(){arguments.callee();};

//这也许算是一个自执行匿名函数，但是仅仅当`foo`标识符作为它的引用时，如果你将它换成用`foo`来调用同样可行

var foo = function(){foo();};

//有些人像这样叫'self-executing anonymous function'下面的函数,即使它不是自执行的，因为它并没有调用它自己。然后，它只是被立即调用了而已。

(function(){ /*code*/ }());

//为函数表达式增加标识符(也就是说创造一个命名函数)对我们的调试会有很大帮助。一旦命名，函数将不再匿名。

(function foo(){/* code */}());

//IIFEs同样也可以自执行，尽管，也许他不是最有用的模式

(function(){arguments.callee();}())
(function foo(){foo();}())

// One last thing to note: this will cause an error in BlackBerry 5, because
// inside a named function expression, that name is undefined. Awesome, huh?

(function foo(){ foo(); }());
```
希望上面的例子可以让你更加清楚的知道术语'self-executing'是有一些误导的，因为他并不是执行自己的函数，尽管函数已经被执行。同样的，匿名函数也没用必要特别指出，因为，**Immediately Invoked Function Expression**，既可以是命名函数也可以匿名函数。
## 最后：模块模式
当我调用函数表达式时，如果我不至少一次的提醒我自己关于模块模式，我便很可能会忽略它。如果你并不属性 JavaScript 里的模块模式，它和我下面的例子很像，但是返回值用对象代替了函数。
```javascript
var counter = (function(){
    var i = 0;
    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment: function(){
            return ++i;
        }
    }
    }());
    counter.get();//0
    counter.set(3);
    counter.increment();//4
    counter.increment();//5

    conuter.i;//undefined (`i` is not a property of the returned object)
    i;//ReferenceError: i is not defined (it only exists inside the closure)
```
模块模式方法不仅相当的厉害而且简单。非常少的代码，你可以有效的利用与方法和属性相关的命名，在一个对象里，组织全部的模块代码即最小化了全局变量的污染也创造了使用变量。
