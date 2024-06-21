---
title: eslint和prettier
order: 1
---

# eslint 和 prettier

eslint 和 prettier 参见官网自己配置符合自己团队的风格的规范即可。

- https://eslint.nodejs.cn/
- https://www.prettier.cn/

添加完成后记得在package.json中添加命令，以供方便使用

```bash
// 使用eslint 规范 ts,tsx,js,jsx的代码
"lint": "eslint --ext .ts,.tsx,.js,.jsx ./"
```