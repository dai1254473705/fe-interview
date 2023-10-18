---
title: lint-staged
order: 3
---

# lint-staged

配置 eslint 和 husky 后，提交都会格式化整个目录的所有问题，大大的降低了咱们编码的速度。所以咱们还需要做一件事情，那就是 只格式化需要提交的代码，其他的就不需要格式化了

使用下面命令安装依赖

```bash
yarn add -D lint-staged
```

然后在 package.json 中新增如下内容

```bash
  "lint-staged": {
    "*.{md,json}": [
      "prettier --write --no-error-on-unmatched-pattern"
    ],
    "*.{css,less}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --parser=typescript --write"
    ]
  },
```

> 具体使用什么格式化工具自己觉定，上面内容仅供参考

有了这个，还需要对 pre-commit 这个钩子就行修改内容

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```
