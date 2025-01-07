---
title: 1.  探索 JavaScript 中的队列与栈：基于数组的实现
order: 1
---
# 1.  探索 JavaScript 中的队列与栈：基于数组的实现

> 队列和栈是两种极为重要的数据结构，它们以独特的规则管理数据的进出，为各种复杂算法和程序逻辑提供了基础支撑。

## 一、队列（Queue）：先进先出的有序集合

1. **队列的特性**：
队列遵循 `FIFO（First In, First Out，先进先出`）原则，就好比排队买东西，先到的人先接受服务，先进入队列的元素也最先被处理。它有明确的两端，在尾部添加新元素，如同人们依次排在队尾；在顶部移除元素，恰似队伍最前面的人离开。最新添加的元素必然在队列的尾部乖乖等候。

2. **基于数组的模拟实现**：
```javascript
function QUEUE() {
    this.dataBase = []; 
    //入队（在队尾插入数据）
    this.enqueue = function(data) {
        this.dataBase.push(data);
    };
    //出队(移除顶部的数据)
    this.dequeue = function() {
        this.dataBase.shift();
    };
};
```
- 首先，我们创建了一个名为 `QUEUE` 的函数构造器，内部通过 `this.dataBase = []` 初始化了一个空数组，用于存储队列中的元素。这个数组作为数据的“容器”，承载着队列的核心数据。
- `enqueue` 方法，使用 `push` 函数将传入的数据添加到 `dataBase` 数组的末尾，完美模拟了在队列尾部添加新元素的操作。例如，当有新的数据到来，它就像新到的顾客自觉站到队伍最后。
- `dequeue` 方法，则借助 `shift` 函数移除并返回 `dataBase` 数组的第一个元素，精准实现了从队列顶部移除元素的功能，如同队伍前方的顾客完成服务后离开。
3. **使用示例**：
```javascript
var queue = new QUEUE();
queue.enqueue(1);
queue.enqueue(12);
console.log(queue.dataBase); //[1, 12]
queue.dequeue();
console.log(queue.dataBase); //[12]
```
这里，我们创建了一个队列实例 `queue`，先依次将 `1` 和 `12` 入队，此时 `queue.dataBase` 数组记录了队列的状态为 `[1, 12]`，符合先进先出原则，新入队的 `12` 在末尾。接着执行 `dequeue` 操作，移除了最先入队的 `1`，队列变为 `[12]`，直观展示了队列的工作方式。

## 二、栈（Stack）：后进先出的神奇结构
1. **栈的特性**：
栈支持 `LIFO（Last In, First Out，后进先出）`规则，想象一叠盘子，最后放上去的盘子最先被取用。在栈中，元素在顶部插入，也在顶部移除，后被插入的数据总是抢占“先机”先被取出。
2. **基于数组的模拟实现**：
```javascript
function STACK(){
    this.dataBase = [];
    //入栈
    this.enstack = function(data){
        this.dataBase.unshift(data);
    };
    //出栈
    this.destack = function(){
        this.dataBase.shift();
    };
};
```
- 类似地，`STACK` 函数构造器初始化了一个空的 `dataBase` 数组来存放栈元素。
- `enstack` 方法别出心裁地使用 `unshift` 函数，将传入的数据添加到 `dataBase` 数组的开头，模拟了在栈顶插入元素的过程，如同新的盘子总是放在一叠盘子的最上面。
- `destack` 方法同样运用 `shift` 函数，移除并返回 `dataBase` 数组的第一个元素，恰好对应从栈顶移除元素的操作，符合后进先出，最先拿走的是最后放上去的元素。
3. **使用示例**：
```javascript
var stack = new STACK();
stack.enstack(1);
stack.enstack(12);
console.log(stack.dataBase); //[12, 1]
stack.destack();
console.log(stack.dataBase); //[1]
```
创建栈实例 `stack` 后，先将 `1` 和 `12` 入栈，由于 `enstack` 的 `unshift` 操作，`stack.dataBase` 呈现 `[12, 1]` 的状态，新入栈的 `12` 在最上面。执行 `destack` 操作，移除了最后入栈的 `12`，栈变为 `[1]`，生动展现了栈的后进先出特性。

## 三、深入思考与拓展
虽然用 `JavaScript` 数组简单模拟了`队列和栈`，但这只是冰山一角。在实际应用中，还需考虑诸多因素：
1. **数据的合法性与边界处理**：例如，当队列或栈为空时，执行出队或出栈操作该如何优雅地处理错误，避免程序崩溃。
2. **性能优化**：频繁地使用 `shift` 函数在数组头部操作元素，在大规模数据场景下，可能会导致性能瓶颈，此时或许需要探索更高效的实现方式，如使用`链表结构来模拟队列和栈`，减少不必要的数组元素移动开销。
3. **应用场景拓展**：队列常用于任务排队、消息队列等场景，而栈在函数调用栈、表达式求值等方面大显身手。理解它们的特性，有助于在不同的编程挑战中精准选择合适的数据结构，提升程序的效率与可读性。
