# 10. 版本号管理规范

> [语义化版本号官网](https://semver.org/lang/zh-CN/)

## 摘要
版本格式：`主版本号.次版本号.修订号`，版本号递增规则如下：

- **主版本号**：当你做了不兼容的 API 修改，
- **次版本号**：当你做了向下兼容的功能性新增，
- **修订号**：当你做了向下兼容的问题修正。

先行版本号及版本编译信息可以加到`“主版本号.次版本号.修订号”`的后面，作为延伸。

## 简介
在软件管理领域存在“依赖地狱”，系统规模大、包多易陷入困境，依赖高可能版本控制被锁死，依赖松散会版本混乱。

作为解决方案，提议`用规则约束版本号配置和增长`，如采用“语义化的版本控制”

格式为 `X.Y.Z（主版本号.次版本号.修订号）`

- 修复问题不影响 API 递增`修订号`
- API `向下兼容的新增`及修改递增`次版本号`
- 不向下兼容的修改递增`主版本号`

需先定义好公共 API。