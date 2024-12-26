# 4. 代码注释规范(参考jsdoc)

> 参考：https://jsdoc.bootcss.com/tags-author.html
> 以下是常用的 JSDoc 3 标签及其描述，按照`@param [<type>] <name> [<description>]`格式进行描述：

### 常用标签及其描述

1. **@param**: `[<type>] <name> [<description>]`

> 描述函数的参数

```js
/**
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */
```

2.  **@returns**: `[<type>] <description>`

> 描述函数的返回值

```js
/**
 * @returns {boolean} - True if successful, false otherwise.
 */
```

3.  **@description**: `<description>`

> 描述一个函数、方法、类或模块的功能

```js
/**
 * @description This function does something important.
 */
```

4.  **@example**: `<example>`

> 提供代码示例

```js
/**
 * @example
 * // Example usage:
 * myFunction('example');
 */
```

5.  **@class**: `<name> [<description>]`

> 标示一个类

```js
/**
 * @class MyClass
 * @description This class represents a simple example.
 */
```

6.  **@constructor**: `<name> [<description>]`

> 标示一个构造函数

```js
/**
 * @constructor MyClass
 * @description Creates an instance of MyClass.
 */
```

7.  **@method**: `<name> [<description>]`

> 标示一个方法

```js
/**
 * @method myMethod
 * @description This method does something.
 */
```

8.  **@property**: `[<type>] <name> [<description>]`

> 描述对象的属性

```js
/**
 * @property {string} myProperty - This is a property of the class.
 */
```

9.  **@private**: `<description>`

> 标示一个私有成员

```js
/**
 * @private
 * @description This method is private.
 */
```

10. **@protected**: `<description>`

> 标示一个受保护的成员

```js
/**
 * @protected
 * @description This method is protected.
 */
```

11. **@public**: `<description>`

> 标示一个公共成员

```js
/**
 * @public
 * @description This method is public.
 */
```

12. **@readonly**: `<description>`

> 标示一个只读属性

```js
/**
 * @readonly
 * @description This property is read-only.
 */
```

13. **@static**: `<description>`

> 标示一个静态成员

```js
/**
 * @static
 * @description This method is static.
 */
```

14. **@memberof**: `<name> [<description>]`

> 指定成员所属的类、命名空间等

```js
/**
 * @memberof MyClass
 * @description This method belongs to MyClass.
 */
```

15. **@fires**: `[<event>] [<description>]`

> 标示一个方法可能触发的事件

```js
/**
 * @fires MyClass#event:myEvent
 * @description This method fires an event.
 */
```

16. **@event**: `[<event>] [<description>]`

> 标示一个事件

```js
/**
 * @event MyClass#myEvent
 * @description This event is fired when something happens.
 */
```

17. **@typedef**: `[<type>] <name> [<description>]`

> 定义复杂类型的别名

```js
/**
 * @typedef {Object} MyType
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 */
```

18. **@callback**: `[<type>] <name> [<description>]`

> 定义一个回调函数类型

```js
/**
 * @callback MyCallback
 * @param {string} name - The name of the person.
 */
```

19. **@async**: `<description>`

> 标示一个异步函数

```js
/**
 * @async
 * @description This function is asynchronous.
 */
```

20. **@deprecated**: `[<description>]`

> 标示一个不推荐使用的功能

```js
/**
 * @deprecated Use newFunction() instead.
 * @description This function is deprecated.
 */
```

21. **@see**: `[<reference>] [<description>]`

> 提供相关链接

```js
/**
 * @see {@link http://example.com|Example}
 * @description Refer to the Example documentation.
 */
```

22. **@throws**: `[<type>] [<description>]`

> 描述函数可能抛出的异常

```js
/**
 * @throws {Error} If something goes wrong.
 */
```

23. **@todo**: `<description>`

> 提示需要完成的任务

```js
/**
 * @todo Implement this function.
 */
```

24. **@version**: `<version>`

> 标示版本号

```js
/**
 * @version 1.0.0
 */
```

25. **@tutorial**: `<description>`

> 添加教程到 API 文档

```js
/**
 * @tutorial MyTutorial
 * @description This is a tutorial for using MyClass.
 */
```
