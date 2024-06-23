---
title: 11. git rebase合并提交
order: 11
---
# 11. git rebase合并提交

## rebase合并提交步骤

1.使用 `git log`命令查看提交历史,找到`commit_id`;

2.`git rebase -i [commit_log]`，`commit_log`即`commit_id`，表示要合并commit_id之后的那些commit提交，commit_log一般是某功能第一个commit提交（commit_id）的前一个commit_id。

3.在出现的编辑器里，将除第一行外的其他行的 `pick` 改为 `s`，然后保存退出。

4.在接下来出现的编辑器里，修改提交信息，然后保存退出。

5.此时执行 `git log` ，会发现你的n个commit信息已经被合并为一个

6.`git rebase` 操作后，会产生一个`新的提交点`，所以需要执行 `git push -f` 来把本地的修改强推到远端，保证远端与本地的同步

至此，合并请求操作结束。

7.如果过程中想中止合并，可以执行 `git rebase --abort` 。

PS：`rebase最好只在自己的开发分支上操作`，不要通过rebase对任何已经提交到公共仓库中的commit进行修改（你自己一个人玩的分支除外）;


