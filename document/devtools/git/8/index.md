---
title: 8 .git clean 删除新增的没有track的文件
order: 8
---
# 8 .git clean 删除新增的没有track的文件


## 如下图，只对untracked files生效，其他的不生效
![48fab6b788be4a64b8663b76de8115fd](./image/9613B5F5-C413-48FE-B00C-2B437FD65B85.png)

![894591af64b8f189233b27665a3f115c](./image/43883EB2-FA88-4DD4-9570-20ADCB8B0BDD.png)

## git clean 参数
```sh
-n 显示 将要 删除的 文件 和  目录
-f 删除 文件，-df 删除 文件 和 目录
```

+ git clean -n
+ git clean -df
+ git clean -f
