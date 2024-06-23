---
title: 3. Git恢复删除或修改的文件 ls-files
order: 3
---
# 3. Git恢复删除或修改的文件 ls-files


## 一、git ls-files -d 查看删除了的文件

#### 1.查看当前状态可以看到删除了一个index.js；

```sh
git status 
```

 ![547b7a0091ad8bce07a67fe7779c8e63](./image/749C5FFE-0364-43AB-BEE9-8805530EE50B.webp)
 
#### 2.查看当前项目中删除了的文件

```sh
git ls-files -d
```
![d009a086f4711925aa56d0e923ef7b46](./image/50A59049-FECE-4249-A6A0-3E6AAB3B1D48.webp)


#### 3.恢复删除的单个文件 

```sh
git checkout  -- javascript/index.js
```
 
 ![7805e203fd6ff5a0ec82c288a5876efe](./image/ADE921C0-7E42-4CDD-8153-AD44ECB9FC29.webp)
 

#### 4.如果要恢复多个被删除的文件,直接输入

```sh
git ls-files -d | xargs git checkout --
```

![2482c37dda4720a71d5bc425cc55dc0c](./image/0E30BA14-6CF1-41E0-BA5C-75723E4F61F0.webp)

## 二、查看修改了的文件

```sh
git ls-files -m 
```
  恢复修改文件的方法与恢复删除文件的方法一样，只是 **-d** 换成 **-m**；
