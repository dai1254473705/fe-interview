---
title: 7.git stash处理当前分支没有提交代码但要切换分支的情况
order: 7
---
# 7.git stash处理当前分支没有提交代码但要切换分支的情况

## Git stash save
这个命令类似于 Git stash。但这个命令可以有一些选项。我会在这里讨论一些重要的选项。

**带消息的 Git stash**

```sh
git stash save “Your stash message”
```
以上命令会将消息存放起来。我们将会看到这很有用。

**存储没有追踪的文件**
你也可以存储没有追踪的文件。

```sh
git stash save -u
or
git stash save --include-untracked
```

## Git stash list

在讨论这个命令之前，让我来告诉你 `git stash 的工作原理`。

当你输入 `Git stash` 或`Git stash save`，Git 会创建一个带名字的 Git 提交对象，然后保存到你的仓库。
这意味着你可以随时查看你的存储列表。

```sh
git stash list
```

效果是这样的：
![](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621476753910-d7ac1376-a32f-4f4e-92fd-fe344f8094d2.png#averageHue=%23040404&height=188&id=VLll0&originHeight=188&originWidth=733&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=733)

你可以查看 stash 创建的列表。最近的 stash 会放在最上面。
你可以看到最上面的那条有一条自定义消息（通过 Git stash sava “message” 命令生成的）。

## Git stash apply
这条命令会将工作栈中最上面的 stash 应用到仓库中。本例中是 **stash@{0}。**
你也可以通过 stash id 将某个 stash 应用到仓库中：
```
git stash apply stash@{1}
```

## Git stash pop
这个命令和 stash apply 非常相似，但它会在应用到仓库后删除这个 stash。
例如：
![](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621476753908-6f35f766-2aa9-4b19-a9f0-2d1f285ec8c2.png#averageHue=%23050504&height=118&id=rUK1g&originHeight=118&originWidth=730&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=730)
你可以看到最上面的 stash 被删除了，**stash@{0}** 变成了之前的 stash。
同样地，你也可以通过特定的 stash id 来 pop 某个 stash。
```
git stash pop stash@{1}
```

## Git stash show
这个命令会显示 stash 差异总结。这条命令只考虑和最近的 stash 比较。
![](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621476753913-cf097155-b916-4ce3-8976-2f2bb07a27ca.png#height=159&id=sY1Ig&originHeight=159&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=728)
如果你想看完整的差异，可以使用：
```
git stash show -p
```
和其他的命令相似，你可以通过 stash id 来查看某个 stash 的差异总结：
```
git stash show stash@{1}
```

## Git stash branch <name>
这条命令会根据最近的 stash 创建一个新的分支，然后删除最近的 stash（和 stash pop 一样）。
如果你需要某个 stash，你可以指明 stash id。
```
git stash branch <name> stash@{1}
```
当你将 stash 运用到最新版本的分支后发生了冲突时，这条命令会很有用。

## Git stash clear
这条命令会删除仓库中创建的所有的 stash。有可能不能恢复。

## Git stash drop
这条命令会删除工作栈中最近的 stash。但是要谨慎地使用，有可能很难恢复。
你可以声明 stash id。
```
git stash drop stash@{1}
```



