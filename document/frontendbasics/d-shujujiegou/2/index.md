---
title: 2. 巧用链表结构模拟 JavaScript 中的队列与栈
order: 2
---
# 2. 巧用链表结构模拟 JavaScript 中的队列与栈

当涉及到`队列`与`栈`这两种基础且常用的数据结构时，除了用熟悉的数组进行模拟，`链表结构`同样能大放异彩，并且在一些场景下展现出独特的优势。今天，就让我们深入探究如何运用链表来模拟队列和栈，解锁更高效、更灵活的编程可能。

## 一、链表基础：构建基石
**链表是由一系列节点组成的数据结构**，每个节点包含两部分：`数据域（用于存储实际数据）和指针域（指向链表中的下一个节点）`。与数组不同，链表在内存中的存储并非连续的，而是通过指针串联起来，这使得链表在插入和删除操作时`无需像数组那样移动大量元素`，为模拟队列和栈提供了别样的思路。

## 二、用链表模拟队列：先进先出的高效实现
1. **队列类的构建**
```javascript
function LinkedListQueue() {
    // 链表头节点，队列头部元素从此处开始访问
    this.head = null; 
    // 链表尾节点，用于在队列尾部快速插入元素
    this.tail = null; 
    // 队列长度，方便追踪队列元素数量
    this.length = 0; 
}

// 链表节点构造函数
function Node(data) {
    this.data = data;
    this.next = null;
}
```
这里定义了 `LinkedListQueue` 作为队列类，内部维护着头节点 `head`、尾节点 `tail` 和队列长度 `length`。同时创建了 `Node` 函数来生成链表节点，每个节点持有数据及指向下一节点的指针。

2. **入队操作：在队列尾部添加元素**
```javascript
LinkedListQueue.prototype.enqueue = function(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
        // 若队列为空，新节点既是头节点也是尾节点
        this.head = newNode;
        this.tail = newNode;
    } else {
        /**
       * 将新节点添加到尾节点之后，并更新尾节点
       *
       * 在链表实现的队列中，虽然没有直接对 `head` 进行显式的修改操作，
       * 但当执行 `this.tail.next = newNode` 时，会间接影响到 `head` 的 `next` 指针。
       * 原因是在第一次入队 `queue.enqueue(1)` 时，`head` 和 `tail` 都指向了这个新创建的包含数据 `1` 的节点。
       * 当第二次执行 `queue.enqueue(12)` 时，`this.tail` 就是之前那个包含数据 `1` 的节点，
       * 执行 `this.tail.next = newNode` 就将包含数据 `1` 的节点的 `next` 指针指向了新创建的包含数据 `12` 的节点，
       * 所以看起来 `head` 的 `next` 就发生了改变，实际上是因为 `tail` 原本和 `head` 指向同一个初始节点，
       * 对 `tail` 的后继节点的操作自然会反映在链表的结构中，进而影响到 `head` 所能访问到的后续节点。
       */
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
};
```
入队时，先创建新节点。若队列为空，新节点成为头、尾节点；若队列不为空，将新节点接入尾节点之后，并更新尾节点指向新节点，最后队列长度加 1，完美模拟了元素在队列尾部依次排队的过程。

3. **出队操作：从队列头部移除元素**
```javascript
LinkedListQueue.prototype.dequeue = function() {
    if (this.length === 0) {
        return null;
    }
    const data = this.head.data;
    this.head = this.head.next;
    if (this.length === 1) {
        // 若队列仅剩一个元素，出队后尾节点也需置空
        this.tail = null;
    }
    this.length--;
    return data;
};
```
出队时，先判断队列是否为空，为空则返回 `null`。若不为空，取出头节点的数据，将头节点指向下一节点，若此时队列仅剩一个元素，还要将尾节点置空，最后队列长度减 1，恰似队列头部的元素依次离开。

4. **使用示例**
```javascript
const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(12);
// 此时 queue 结构为:LinkedListQueue {head: Node, tail: Node, length: 2}
// {
//     "head": {
//         "data": 1,
//         "next": {
//             "data": 12,
//             "next": null
//         }
//     },
//     "tail": {
//         "data": 12,
//         "next": null
//     },
//     "length": 2
// }
console.log(queue.dequeue()); // 1
console.log(queue.length); // 1
queue.enqueue(20);
console.log(queue.dequeue()); // 12
console.log(queue.length); // 1
```
通过创建队列实例，依次入队、出队操作，清晰展示了链表模拟队列的先进先出特性，队列长度也随着操作正确变化。

## 三、用链表模拟栈：后进先出的精妙演绎
1. **栈类的构建**
```javascript
function LinkedListStack() {
    // 栈顶节点，所有操作围绕栈顶进行
    this.top = null; 
    // 栈的深度，记录栈中元素数量
    this.depth = 0; 
}
```
定义 `LinkedListStack` 作为栈类，内部维护栈顶节点 `top` 和栈的深度 `depth`，相较于队列，栈只需关注栈顶即可实现后进先出逻辑。

2. **入栈操作：在栈顶插入元素**
```javascript
LinkedListStack.prototype.push = function(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.depth++;
};
```
入栈时，创建新节点，将新节点的指针指向当前栈顶节点，再将新节点设为栈顶，如此新元素就处于栈的最顶端，实现后进先出，同时栈深度加 1。

3. **出栈操作：从栈顶移除元素**
```javascript
LinkedListStack.prototype.pop = function() {
    if (this.depth === 0) {
        return null;
    }
    const data = this.top.data;
    this.top = this.top.next;
    this.depth--;
    return data;
};
```
出栈时，先判断栈是否为空，为空则返回 `null`。若不为空，取出栈顶节点的数据，将栈顶指向下一节点，栈深度减 1，如同从一叠盘子顶端依次取走盘子。

4. **使用示例**
```javascript
const stack = new LinkedListStack();
stack.push(1);
stack.push(12);
// 此时 stack 为：LinkedListStack {top: Node, depth: 2}
// {
//     "top": {
//         "data": 12,
//         "next": {
//             "data": 1,
//             "next": null
//         }
//     },
//     "depth": 2
// }
console.log(stack.pop()); // 12
console.log(stack.depth); // 1
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.depth); // 1
```
创建栈实例后，入栈、出栈操作展示了栈的后进先出特性，栈深度也相应变化，验证了链表模拟栈的有效性。

## 四、链表模拟队列与栈的优势剖析
1. **高效的插入与删除**：在数组模拟中，队列的 `shift` 操作和栈的 `unshift` 操作，当数据量较大时，频繁移动数组元素会导致性能下降。而链表通过改变节点指针实现插入和删除，无需移动大量数据，性能更优。
2. **动态内存管理**：链表节点按需分配内存，不像数组需要预先开辟连续的大块内存，在处理不确定数量的数据时，能更灵活地利用内存资源。

## 五、总结与展望
运用链表结构模拟队列和栈，为 JavaScript 编程带来了新的视角与高效的解决方案。虽然实现过程相较数组略复杂，但在面对大规模数据处理、对性能要求苛刻的场景时，链表的优势尽显。掌握这些知识，不仅丰富了我们的数据结构工具箱，更为攻克复杂编程难题奠定了坚实基础，开启探索更高级数据结构与算法的大门。 
