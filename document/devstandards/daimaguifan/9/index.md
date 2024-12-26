# 9. 代码提交规范-约定式提交

> [约定式提交官网](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83)

## 提交说明的结构如下所示：

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
译文：
```sh
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

**提交说明包含了下面的结构化元素，以向类库使用者表明其意图：**

- `fix`: 表示在代码库中`修复了一个 bug`。
- `feat`: 表示在代码库中`新增了一个功能`。
- `BREAKING CHANGE`:引入了`破坏性 API 变更`。 破坏性变更`可以是任意 类型` 提交的一部分。
- `除 fix: 和 feat`: 之外，也可以使用其它提交 类型 ，例如 `@commitlint/config-conventional`（基于 Angular 约定）中推荐的 `build:`、`chore:`、 `ci:`、`docs:`、`style:`、refactor:、`perf:`、`test:`，等等。
    - `build`: 用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等；
    - `chore`: 用于对`非业务性代码进行修改`，例如修改构建流程或者工具配置等；
    - `ci`: 用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置；
    - `docs`: 用于修改文档，例如修改 README 文件、API 文档等；
    - `style`: 用于修改代码的样式，例如调整缩进、空格、空行等；
    - `refactor`: 用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑；
    - `perf`: 用于优化性能，例如提升代码的性能、减少内存占用等；
    - `test`: 用于修改测试用例，例如添加、删除、修改代码的测试用例等。
- 脚注中除了 `BREAKING CHANGE: <description>` ，其它条目应该采用类似 `git trailer format` 这样的惯例。

## 示例

### 包含了描述并且脚注中有破坏性变更的提交说明

```sh
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files

```

### 包含了 ! 字符以提醒注意破坏性变更的提交说明

```sh
feat!: 提交说明
```

### 包含了范围和破坏性变更 ! 的提交說明

```sh
feat(api)!: 提交说明
```

### 包含了 ! 和 BREAKING CHANGE 脚注的提交说明

```sh
chore!: 提交说明

BREAKING CHANGE: 提交说明
```

### 不包含正文的提交说明

```sh
docs: 提交说明
```
### 包含范围的提交说明
```sh
feat(lang): 提交说明
```

### 包含多行正文和多行脚注的提交说明

```sh
fix: 提交说明

提交说明1啊.

提交说明2啊.

Reviewed-by: Z
Refs: #123
```
