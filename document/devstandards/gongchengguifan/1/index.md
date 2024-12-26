# 1. README 编写规范

REAMED.md 的结构如下（ 脚手架生成的已经有了 ）：

```markdown
# {英文组件名}
- category: Components
- chinese: {中文描述}
- type: 基本
---
## Guide
### Overview
首先描述组件的概要功能及何时使用及不适用的场景
### Usage (可选)
一些特殊的用法可以在这里说明，比如如何扩展组件，等等
### FAQ （可选）
如果这个组件在大家使用过程当中碰到一些问题可以记录在README中
### Know Issues (可选)
针对这个组件的已知无法解决问题给出hack方案或者说明
### ARIA Support (可选)
列出这个组件支持的键盘事件
## API
| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| trigger   | 触发元素       | Element        |   |
| triggerType   | 触发行为，可选 `hover/click`       | string        | hover  |
| align | 气泡框位置，可选 `t,r,b,l,tl,tr,rt,rb,bl,br,lt,lb` | string        | t    |
| closable | 是否有关闭按钮 |  bool        | true   |
| visible   | 用于手动控制浮层显隐                     | boolean       | false  |
| onClose   | 关闭时触发回调                     | function       |   |
| afterClose   | 关闭后触发回调                     | function       | false  |
```
