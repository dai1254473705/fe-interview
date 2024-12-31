# 6. JavaScript深入之继承的多种方式和优缺点

本文讲解JavaScript各种继承方式和优缺点。
## 1.原型链继承
```javascript
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin
```

问题：
1.引用类型的属性被所有实例共享，举个例子：
```javascript
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy", "yayu"]
```
2.在创建 Child 的实例时，不能向Parent传参

## 2.借用构造函数(经典继承)

```javascript
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
```
优点：
1.避免了引用类型的属性被所有实例共享
2.可以在 Child 中向 Parent 传参
举个例子：
```javascript
function Parent (name) {
    this.name = name;
}

function Child (name) {
    Parent.call(this, name);
}

var child1 = new Child('kevin');

console.log(child1.name); // kevin

var child2 = new Child('daisy');

console.log(child2.name); // daisy
```
缺点：
方法都在构造函数中定义，函数复用无从谈起,每次创建实例都会创建一遍方法。

## 3.组合继承(原型链 + 借用构造函数)
`原型链继承`和`经典继承`双剑合璧。

```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);
    
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```
优点：
> 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
- 可以向超类传递参数
- 每个实例都有自己的属性
- 实现了函数复用

缺点：
> 无论什么情况下，都会调用两次超类型构造函数：

一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

## 4.原型式继承
```javascript
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
```
就是 ES5 `Object.create` 的模拟实现，将传入的对象作为创建的对象的原型。

**缺点：**
包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

```javascript
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.friends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]
```
注意：修改`person1.name`的值，`person2.name`的值并未发生改变，并不是因为`person1`和`person2`有独立的 name 值，而是因为`person1.name = 'person1'`，给`person1`添加了 name 值，并非修改了原型上的 name 值。

## 5. 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

就是给原型式继承外面套了个壳子

```javascript
function createObj (o) {
    var clone = Object.create(o);
    // 等价于 var clone = createObj(o);，createObj就是Object.create，参考原型式继承
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```
**缺点**：没用到原型，无法复用。跟借用构造函数模式一样，方法都在构造函数中定义，每次创建对象都会创建一遍方法。

**优点**：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。

    
## 6. 寄生组合式继承
为了方便大家阅读，在这里重复一下组合继承的代码：
```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1)
```
组合继承最大的缺点是会调用两次父构造函数。
一次是设置子类型实例的原型的时候：
```javascript
Child.prototype = new Parent();
```
一次在创建子类型实例的时候：
```javascript
var child1 = new Child('kevin', '18');
```
回想下 new 的模拟实现，其实在这句中，我们会执行：
```javascript
Parent.call(this, name);
```
在这里，我们又会调用了一次 `Parent` 构造函数。

所以，在这个例子中，如果我们打印 `child1` 对象，我们会发现 `Child.prototype` 和 `child1` 都有一个属性为`colors`，属性值为`['red', 'blue', 'green']`。

那么我们该如何精益求精，避免这一次重复调用呢？

如果我们不使用 `Child.prototype = new Parent()` ，而是间接的让 `Child.prototype` 访问到 `Parent.prototype` 呢？

看看如何实现：

```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(child1);
```

最后我们封装一下这个继承方法：

```javascript
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```

引用《JavaScript高级程序设计》中对`寄生组合式继承`的夸赞就是：

**这种方式的高效率体现它只调用了一次 `Parent` 构造函数，并且因此避免了在`Parent.prototype` 上面创建不必要的、多余的属性。**

与此同时，原型链还能保持不变；因此，还能够正常使用 `instanceof` 和 `isPrototypeOf`。

开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

## 7.es6 extends继承

```js
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class B extends A {
    constructor(name, age) {
        super(name, age);
        this.job = "IT";
    }
    getJob() {
        return this.job;
    }
    getNameAndJob() {
        return super.getName() + this.job;
    }
}

var b = new B("Tom", 20);
console.log(b.name); // Tom
console.log(b.age); // 20
console.log(b.getName());// Tom
console.log(b.getJob()); // IT
console.log(b.getNameAndJob()); // TomIT
```
