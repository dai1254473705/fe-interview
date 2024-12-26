# 1. CSS命名规范：理解与应用BEM方法论

[https://getbem.com/naming/](https://getbem.com/naming/)


#### 1. BEM简介

> ``BEM（Block, Element, Modifier）``是一种用于CSS命名的规范化方法论，旨在解决样式冲突、提高代码可维护性和组件复用性。其基本命名格式为：

``模块名 __ 元素名 -- 修饰器名``:

```html
block-name__element-name--modifier-name
```

+ ``Block（模块）``：代表一个独立、完整的UI组件，通常对应界面中的一个较高层级结构或功能区域。例如，一个导航栏（``nav-bar``）就是一个Block。

+ ``Element（元素）``：模块内部的组成部分，依赖于模块存在。元素名紧随其所属模块名之后，通过双下划线（__）分隔。如导航栏中的链接项（``nav-bar__link``）。

+ ``Modifier（修饰符）``：表示模块或元素的状态、外观变化。修饰器名紧跟在模块名或元素名之后，通过双短横线（--）分隔。如导航栏在悬停状态下的样式变化（``nav-bar__link--hover``）。

#### 2. BEM优势

##### 2.1 避免样式冲突

BEM通过在选择器中明确指定``Block、Element和Modifier``，确保样式具有良好的作用域隔离。由于每个``Block的名称在整个项目中是唯一的``，其内部元素的命名也都包含Block名，因此样式不会与项目其他部分发生冲突。

##### 2.2 提高代码可维护性

+ 清晰的命名约定使开发者能直观地理解样式对应的具体界面元素，简化调试和维护过程。

+ 避免对DOM结构的依赖，使元素样式不受父级或兄弟元素变动的影响，增强代码稳定性。

+ 修饰符的使用便于管理元素的不同状态或主题样式，减少冗余代码。

##### 2.3 支持组件化开发

BEM方法论鼓励将``UI分解为可复用的组件（Blocks）``。这些组件内部样式独立，易于在不同页面或项目中迁移和复用。

#### 3. BEM实践指南

##### 3.1 命名规范

```html
block-name__element-name--modifier-name
```

+ 使用``双下划线（__）``连接``Block与Element名称``。

+ 使用``短横线（-）``连接单词形成``Element和Modifier``名称。

+ Modifier名称通常表示``状态、版本、皮肤``等，紧跟在Element名后，用``双短横线（--）``分隔。

##### 3.2 示例

```html
<!-- HTML -->
<div class="card">
  <h2 class="card__title">Title</h2>
  <p class="card__description">Description</p>
  <button class="card__action card__action--primary">Primary Action</button>
</div>

/* CSS */
.card {
  /* Block styles */
}

.card__title {
  /* Element styles */
}

.card__description {
  /* Element styles */
}

.card__action {
  /* Element styles */
}

.card__action--primary {
  /* Modifier styles */
}
```

##### 3.3 注意事项

+ 尽量保持Block的独立性，避免在Block样式中直接选择Element或使用后代选择器。

+ 不同Block间的相似样式应提取为通用的Mixin或原子类（Atomic Classes），而非通过修改Block名称实现复用。

+ 在大型项目中，可以结合预处理器（如Sass、Less）和CSS Modules等技术进一步提升BEM的可维护性和组织性。

#### 4. 总结

BEM作为一种CSS命名规范，通过明确的Block、Element和Modifier命名结构，有效地解决了样式冲突、提高了代码可维护性，并促进了组件化开发。遵循BEM原则，不仅可以构建出结构清晰、易于维护的CSS代码库，还能更好地适应现代Web开发的需求。


