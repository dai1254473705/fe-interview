# 3. 前端命名规范

## 前端命名规范

### 一、文件和目录结构

#### 1.1 文件命名规则

- **统一小写**: 文件和目录名称一律使用小写字母、数字和连字符（`-`），避免使用下划线、空格和特殊字符。
- **语义化命名**: 使用具有描述性和语义化的命名，便于理解和维护。

**示例**:
- 页面: `index.html`
- 样式: `main.css`, `header.css`
- 脚本: `app.js`, `utils.js`
- 图片: `logo.png`, `background.jpg`

#### 1.2 目录结构

- **根目录**: 存放主要的HTML文件
- **assets**: 存放所有静态资源（图片、CSS、JavaScript等）
  - **css**: 样式文件
  - **js**: 脚本文件
  - **images**: 图片文件
  - **fonts**: 字体文件（如果有）

**示例**:
```
/project-root
  ├── index.html
  ├── about.html
  ├── assets
      ├── css
          ├── main.css
          ├── header.css
      ├── js
          ├── app.js
          ├── utils.js
      ├── images
          ├── logo.png
          ├── background.jpg
      ├── fonts
```

### 二、CSS规范

#### 2.1 命名规范

- **类名使用中横线**: 例如 `main-header`, `footer-links`
- **ID避免使用**: 尽量使用类选择器，避免使用ID选择器

#### 2.2 组织和结构

- **模块化**: CSS应按功能模块划分，便于管理和维护
- **避免全局样式污染**: 使用局部样式，避免全局样式影响

**示例**:
```css
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 基本布局 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 组件样式 */
.main-header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.footer-links li {
  margin-right: 15px;
}
```

### 三、JavaScript规范

#### 3.1 命名规范

- **变量和函数使用驼峰命名法**: 例如 `userName`, `getUserInfo`
- **常量使用全大写字母和下划线**: 例如 `API_KEY`, `MAX_HEIGHT`

#### 3.2 代码风格

- **使用`const`和`let`**: 避免使用`var`
- **函数声明**: 使用箭头函数语法（如果适用）

**示例**:
```javascript
// 变量声明
const userName = 'John Doe';
let userAge = 30;

// 函数声明
const getUserInfo = () => {
  return {
    name: userName,
    age: userAge,
  };
};

// 事件处理
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  alert('Button clicked');
});
```

### 四、HTML结构

#### 4.1 基本结构

HTML结构应符合W3C标准，统一使用HTML5的文档类型定义:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
  <header class="main-header">
    <h1>Site Title</h1>
  </header>
  <main class="container">
    <!-- 页面内容 -->
  </main>
  <footer>
    <ul class="footer-links">
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
  </footer>
  <script src="assets/js/app.js"></script>
</body>
</html>
```

### 五、其他规范

#### 5.1 注释

- **HTML**: 使用HTML注释标签 `<!-- 注释内容 -->`
- **CSS**: 使用CSS注释标签 `/* 注释内容 */`
- **JavaScript**: 使用单行 `// 注释内容` 和多行注释 `/* 注释内容 */`

#### 5.2 代码格式化

- **统一缩进**: 使用两个空格或一个Tab键进行缩进
- **一致的代码风格**: 团队应使用一致的代码风格，例如通过配置 `.editorconfig` 或使用代码格式化工具如Prettier

### 六、总结

上述规范旨在提高代码可读性、可维护性和团队协作效率，希望团队成员在开发过程中严格遵守，并根据项目实际情况进行适当调整和优化。
