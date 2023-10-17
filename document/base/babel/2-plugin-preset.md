---
title: 插件和预设
group: babel
order: 2
---

# 插件和预设

## 一、插件

代码转换功能以插件的形式出现，**插件是小型的 JavaScript 程序**，用于指导 Babel 如何对代码进行转换。你甚至可以编写自己的插件将你所需要的任何代码转换功能应用到你的代码上。例如将 ES2015+ 语法转换为 ES5 语法，我们可以使用诸如 **@babel/plugin-transform-arrow-functions** 之类的官方插件：

```jsx | pure
yarn add --dev @babel/plugin-transform-arrow-functions

// babel.config.json 添加plugins(删除其他配置，只留plugins)
{
 "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

### 使用编译箭头函数插件前后对比如下：

使用`@babel/plugin-transform-arrow-functions`之前:

编译：

```jsx | pure
const ff = () => {};
// converted to
const ff = () => {};
```

使用`@babel/plugin-transform-arrow-functions`之后:

```jsx | pure
const ff = () => {};
// converted to
const ff = function ff() {};
```

## 二、预设

上面知道使用插件可以进行代码转化，但是对于浏览器不友好的语法来说，每个语法都需要一个插件来处理，plugins 需要配置很多插件，而预设（preset）就是为了解决手动添加多个插件而产生的； "preset" （即一组预先设定的插件）。

就像插件一样，你也可以根据自己所需要的插件组合创建一个自己的 preset 并将其分享出去。

最常用的预设如下，@babel/preset-env所包含的插件将支持所有最新的 JavaScript （ES2015、ES2016 等）特性：
```bash
yarn add --dev @babel/preset-env
```

### 配置
