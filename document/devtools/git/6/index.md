---
title: 6. git fetch & git pull详解
order: 6
---
# 6. git fetch & git pull详解


## 1、简单概括
先用一张图来理一下`git fetch`和`git pull`的概念：
![90e14b750d27677866b4e34e4f52fd4a](./image/6114CA80-85A7-4A73-924A-F07A845A4F15.jpg)

可以简单的概括为：
`git fetch`是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。
而`git pull` 则是将远程主机的最新内容拉下来后直接合并，即：`git pull = git fetch + git merge`，这样可能会产生冲突，需要手动解决。
下面我们来详细了解一下`git fetch` 和`git pull` 的用法。 

## 2、分支的概念
在介绍两种方法之前，我们需要先了解一下分支的概念： 
分支是用来标记特定代码的提交，每一个分支通过SHA1sum值来标识，所以对分支的操作是轻量级的，你改变的仅仅是SHA1sum值。
如下图所示，当前有2个分支，A,C,E属于master分支，而A,B，D,F属于dev分支。

```sh
A----C----E（master）
 \
  B---D---F(dev)
```

它们的head指针分别指向`E`和`F`，对上述做如下操作：

```sh
git checkout master  //选择or切换到master分支
git merge dev        //将dev分支合并到当前分支(master)中
```

合并完成后：

```sh
A---C---E---G(master)
 \         /
  B---D---F（dev）
```

现在`ABCDEFG`属于master，`G`是一次合并后的结果，是将`E`和`Ｆ`的代码合并后的结果，可能会出现冲突。而`ABDF依然属于dev分支`。可以继续在dev的分支上进行开发:

```sh
A---C---E---G---H(master)
 \         /
  B---D---F---I（dev）
```
 
## 3、git fetch 用法

git fetch 命令,这个命令将某个远程主机的更新全部取回本地:

```sh
git fetch
```

如果只想取回特定分支的更新，可以指定分支名：

```sh
git fetch <分支名>
```

最常见的命令如取回`origin` 主机的`master` 分支：

```sh
git fetch origin master
```
fetch结果如下：

```sh
From github.com:dai1254473705/fe-interview
 * branch            master     -> FETCH_HEAD
```

取回更新后，会返回一个`FETCH_HEAD` ，指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚取回的更新信息：

```sh
git log -p FETCH_HEAD
```

如图： 
![](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621302905277-a2061367-d8cd-4637-9fd1-a5eb233821e5.png#height=437&id=rs16L&originHeight=437&originWidth=726&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=726)
可以看到返回的信息包括更新的文件名，更新的作者和时间，以及更新的代码（19行红色[删除]和绿色[新增]部分）。
我们可以通过这些信息来判断是否产生冲突，以确定是否将更新merge到当前分支。 

## 4、git pull 用法
前面提到，`git pull` 的过程可以理解为：

```sh
git fetch origin master //从远程主机的master分支拉取最新内容 
git merge FETCH_HEAD    //将拉取下来的最新内容合并到当前所在的分支中
```

即将远程主机的某个分支的更新取回，并与本地指定的分支合并，完整格式可表示为：

```sh
git pull <远程主机名> <远程分支名>:<本地分支名>
```

如果远程分支是与当前分支合并，则冒号后面的部分可以省略：

```sh
git pull origin next
```

