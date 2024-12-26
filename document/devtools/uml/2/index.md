# uml 常用箭头符号含义

## 泛化

- 泛化：表示类之间的继承关系。箭头从子类指向父类。
- 箭头：实线空心三角箭头

如下图所示，`Person`为父类，`Son`为子类

![01e05f37f6ab663004a481b5ccdeb2b0](./image/F5C520D9-8E82-49BC-A36D-3EC8CCE95C21.png)


```js
// 定义父类 Person
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`我叫${this.name}，是一个人。`);
  }
}

// 定义子类 Son 继承自 Person
class Son extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  introduce() {
    super.introduce();
    console.log(`我今年${this.age}岁。`);
  }
}

// 使用示例
const son = new Son('小明', 10);
son.introduce();
```

![f7f1e152f6870a55148c8238aece8227](./image/A23F6A5F-43DB-4E09-A109-E8E3D4D25B05.png)

## 实现

- 实现： 表示类之间的实现关系。箭头从子类指向接口，表示子类实现了接口的所有方法。
- 箭头： 虚线空心三角箭

![5c02ee85c66599a919c625eae4d304a0](./image/02BD8A86-61EF-4292-8810-9C52DAE5C454.png)

```js
// 定义接口
interface IPrintable {
  print(): void;
}

// 定义实现类
class Document implements IPrintable {
  print(): void {
    console.log('正在打印文档');
  }
}
```

![de7de4a755b58c01a548d31a1e93c2bd](./image/B9CC8E49-EFF0-45BC-AD38-F461323A2CB3.png)



## 依赖

- 依赖： 表示依赖关系，某个类的方法`必须依赖`另一个类`才可以执行`，箭头指向被依赖的类
- 箭头： 虚线箭头

![a98762e3e50bdb5c25e0fb5325b87f46](./image/0C9F5415-ABA2-4482-96F1-18324C337DA7.png)


```js
// 定义被依赖的类
class Utility {
  usefulMethod() {
    console.log('执行有用的方法');
  }
}

// 定义依赖类
class Main {
  doSomething(utility) {
    utility.usefulMethod();
  }
}
```

![7912f1d6ea0348f0aaf7f08251dae85c](./image/E975A96B-7ADA-46D6-9394-A0C3FBB5C09F.png)


## 关联

- 关联： 表示类之间的关联关系。箭头表示类之间的一种连接关系。两个类的关系是平等的，可以双向关联，`A 可以关联 B`，`B 也可以关联 A`，箭头指向被关联的类
- 箭头： 实线箭头

![b20455b049bd10c8d05ce333b50a3738](./image/5C8DA268-FDF6-4030-927C-1C5041E2739F.png)

```js
// 定义类 B
class B {
  doSomethingB() {
    console.log('B 执行操作');
  }
}

// 单向关联：类 A 中使用类 B 作为成员变量
class A {
  constructor() {
    this.b = new B();
  }

  doSomethingA() {
    this.b.doSomethingB();
  }
}

/**
* 双向关联：类 A 和类 B 相互作为成员变量
*
这种相互引用的代码在某些情况下是可以执行的，但需要 谨慎处理，否则可能会导致一些问题，比如无限递归调用或内存泄漏。
在上述代码中，如果在 doSomethingC 方法和 doSomethingD 方法中没有适当的条件控制或者终止逻辑，可能会导致无限的相互调用。
在实际开发中，双向关联需要仔细设计和管理，确保在使用这种关系时不会出现意外的错误。
**/
class C {
  constructor() {
    this.d = new D();
  }

  doSomethingC() {
    this.d.doSomethingD();
  }
}

class D {
  constructor() {
    this.c = new C();
  }

  doSomethingD() {
    this.c.doSomethingC();
  }
}
```

**单项关联：**

![7138eda6e745c51b25add008e2e450f4](./image/F5ABC3B4-5445-4298-935E-415D193DD587.png)

**双向关联：**

![47a08207369bb524c814c2334e90b89a](./image/4E78A74A-F709-49B1-B48B-006792BFA944.png)


## 聚合

描述的是`整体和部分`的关系，`整体`生命周期`结束`并`不代表部分声明周期的结束`。

- 聚合： 表示类之间的聚合关系。箭头从聚合类指向被聚合类，表示一个类包含另一个类的对象。
- 箭头： 空心菱形实线箭头，菱形指向被聚合类，箭头指向聚合类

![96fbd87d9a31362eba443a016d6f251e](./image/9E7484E8-7C0A-4BFE-A68F-34750BC821C6.png)

```js
// 定义班级类
class ClassRoom {
  constructor() {
    this.students = [];  // 班级包含学生的数组
  }

  addStudent(student) {
    this.students.push(student);
  }

  showStudents() {
    for (const student of this.students) {
      console.log(student.name);
    }
  }
}

// 定义学生类
class Student {
  constructor(name) {
    this.name = name;
  }
}

// 使用示例
const classRoom = new ClassRoom();
const student1 = new Student('张三');
const student2 = new Student('李四');

classRoom.addStudent(student1);
classRoom.addStudent(student2);

classRoom.showStudents();
```

![15f04c01f389ee8b83b57ed6f2b0eb9b](./image/14994BBA-B18C-4541-B9E4-04966D4D1C74.png)


## 组合

`整体和部分`的关系，整体生命周期结束，`部分的声明周期也结束`。比如一只毛毛虫死了，毛毛虫的腿部分也是死的。

- 组合：表示类之间的组合关系。箭头从组合类指向被组合类，表示一个类包含另一个类的对象，同时`控制对象的生命周期`。
- 箭头： 实心菱形实线箭头

![9a1e0fd2ca991d339791fbea519698af](./image/17CFD2B4-1871-4378-9244-1FAB3E48263F.png)

```js
// 定义腿部类
class Leg {
  move() {
    console.log('腿在移动');
  }
}

// 定义毛毛虫类
class Caterpillar {
  constructor() {
    this.leg = new Leg();  // 创建毛毛虫时创建腿部，并控制腿部的生命周期
  }

  die() {
    // 当毛毛虫死亡时，腿部也不再能移动
    this.leg = null;
    console.log('毛毛虫死了');
  }
}

// 使用示例
const caterpillar = new Caterpillar();
caterpillar.die();
```

![2205dcd4c053fa96200c90d0853f2619](./image/8483DC75-F6FC-425F-8155-215C98D99F0D.png)
