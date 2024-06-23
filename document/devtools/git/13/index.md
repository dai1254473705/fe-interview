---
title: 13. git 放弃merge代码
order: 13
---

# 13. git 放弃merge代码

当我们使用`git merge`操作合并代码但还没add时，若想取消这次合并，使用“`git merge --abort`”命令即可

![6f5af22d660cf513b20b644a57abd09a](./image/image.png)


假如不幸已经 `git add` 了怎么办呢？ 其实也很简单，先用 `git reflog` 指令显示历史的操作
![614f1db5964c46c299ab469b2ca56c77](./image/image%20(1).png)

再用 'git reset --hard commit id’就可以回退到操作之前的状态了
