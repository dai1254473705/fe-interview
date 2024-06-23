---
title: 12. git add 使用方法
order: 12
---
# 12. git add 使用方法

### 介绍

**git add** 命令可将该文件添加到暂存区。
添加一个或多个文件到暂存区：

```
git add [file1] [file2] ...
```

添加指定目录到暂存区，包括子目录：
```
git add [dir]
```
添加当前目录下的所有文件到暂存区：
```
git add .
```
### 案例：
以下实例我们添加两个文件：

```
$ touch README                # 创建文件
$ touch hello.php             # 创建文件
$ ls
README        hello.php
$ git status -s
?? README
?? hello.php
$ 
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621905321370-d8c3c621-7849-4395-afb7-62a4919e8fb2.png#averageHue=%23f0f0f0&height=47&id=FJbXw&originHeight=94&originWidth=686&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25836&status=done&style=none&title=&width=343)

git status 命令用于查看项目的当前状态。
接下来我们执行 git add 命令来添加文件：

```
git add README hello.php
```
现在我们再执行 git status，就可以看到这两个文件已经加上去了。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621905431692-c01ef8b6-4590-420e-a473-1a5f2046d74e.png#averageHue=%23f1f1f1&height=48&id=eAZL1&originHeight=96&originWidth=722&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28496&status=done&style=none&title=&width=361)

新项目中，添加所有文件很普遍，我们可以使用 **git add .** 命令来添加当前项目的所有文件。
修改 README 文件，重新通过 git status -s 查看状态：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/21488966/1621905491228-f0385fbb-af65-468f-bbfc-002a64ee9b35.png#averageHue=%23f1f1f1&height=53&id=BLYMf&originHeight=106&originWidth=662&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26844&status=done&style=none&title=&width=331)

**AM** 状态的意思是这个文件在我们将它添加到缓存之后又有改动。改动后我们再执行 **git add .** 命令将其添加到缓存中：
```
$ git add .
$ git status -s
A  README
A  hello.php
```

### 扩展：


### git add . 
不加参数默认为将修改操作的文件和未跟踪新添加的文件添加到git系统的暂存区，注意不包括删除

### git add -u .
** -u  == --update **，表示将已跟踪文件中的修改和删除的文件添加到暂存区，不包括新增加的文件，注意这些被删除的文件被加入到暂存区再被提交并推送到服务器的版本库之后这个文件就会从git系统中消失了。

### git add -A .
** -A == --all  ，** 表示将所有的已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区。

### git add -h
查看帮助，使用git add --help可以查看更详细的内容
