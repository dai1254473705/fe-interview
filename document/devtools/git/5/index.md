---
title: 5. Git 分支命名规范
order: 5
---
# 5. Git 分支命名规范


## **Git 分支命名规范**

| 分支 | 命名 | 说明 |
| :--- | :--- | :--- |
| 主分支 | master | 主分支，所有提供给用户使用的正式版本，都在这个主分支上发布 |
| 开发分支 | dev | 开发分支，永远是功能最新最全的分支 |
| 功能分支 | feature-xx | 新功能分支，某个功能点正在开发阶段 |
| 发布版本 | release-xx | 发布定期要上线的功能 |
| 修复分支 | fixbug-xx | 修复线上代码的 bug |

### **主分支 Master**
首先，代码库应该`有且仅有一个主分支`。所有提供给用户使用的正式版本，都在这个主分支上发布。
Git主分支的名字，`默认叫做Master(现在默认为main)`。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。

### **开发分支 Dev**

主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做 `Dev`;

这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在 Master 分支上，对 Dev 分支进行”合并”（merge）。

Git创建 Dev 分支的命令：

```sh
git checkout -b dev master
```

### 将 `Dev` 分支发布到 `Master` 分支的命令：

切换到 Master 分支

```sh
git checkout master
```

对 Dev 分支进行合并

```sh
git merge –no–ff dev
```
这里稍微解释一下，上一条命令的`–no–ff`参数是什么意思。
默认情况下，Git执行”`快进式合并`”（fast-farward merge），会`直接将 Master 分支指向 Dev 分支`。
`使用–no–ff参数后，会执行正常合并，在 Master 分支上生成一个新节点`。为了保证版本演进的清晰，我们希望`采用这种做法`。

### **功能分支 Feature**

功能分支的名字，可以采用`feature-xx`的形式命名。

创建一个功能分支：

```sh
git checkout -b feature-x dev
```

开发完成后，将功能分支合并到dev 分支：

```sh
git checkout dev
git merge –no-ff feature-x
```

删除feature分支：

```sh
git branch -d feature-x
```

### 预发布分支 Release

第二种是`预发布分支`，它是指`发布正式版本之前`（即合并到 Master 分支之前），我们可能需要有一个`预发布的版本进行测试`。 

预发布分支是从 `Dev` 分支上面分出来的，预发布结束以后，必须合并进 `Dev` 和 `Master` 分支。它的命名，可以采用`release-xx`的形式。

创建一个预发布分支：

```sh
git checkout -b release-1.2 dev
```

确认没有问题后，合并到master分支：

```sh
git checkout master
git merge –no-ff release-1.2
```

对合并生成的新节点，做一个标签

```sh
git tag -a 1.2
```

再合并到dev 分支：

```sh
git checkout dev
git merge –no-ff release-1.2
```

最后，删除预发布分支：

```sh
git branch -d release-1.2
```

### 修补分支 Bug

最后一种是修补bug分支。

软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。 

`修补bug分支是从 Master 分支上面分出来的`。修补结束以后，再`合并进 Master 和 Dev 分支`。它的命名，可以采用`fixbug-xx`的形式。 

创建一个修补bug分支：

```sh
git checkout -b fixbug-0.1 master
```

修补结束后，合并到master分支：

```sh
git checkout master
git merge –no-ff fixbug-0.1
git tag -a 0.1.1
```

再合并到dev 分支：

```sh
git checkout dev
git merge –no-ff fixbug-0.1
```

最后，删除”修补bug分支”：

```
git branch -d fixbug-0.1
```

### git `tag` 使用

+ 添加： 

```sh
git tag -a V0.1.110811 -m "基本部署完成，有BUG待做"
```

+ 删除

```sh
git tag -d V0.1.110811
```

+ 推送到远程

```sh
git push origin V0.1.110811
git push –tags
```

