---
title: 10.【git revert】报错commit is a merge but no -m option was given.
order: 10
---
# 10.【git revert】报错commit is a merge but no -m option was given.

[https://blog.csdn.net/allanGold/article/details/103288645](https://blog.csdn.net/allanGold/article/details/103288645)

-m 1 表示保留当前分支的更改
-m 2 表示保留master更改
我们目的是为了保留dev1的代码，所以要保留当前代码，即使用 -m 1

```
git revert 4547e2dec5f8aeb4b0081d121c224dd094663606 -m 1
```
执行完上面的代码，我们就会发现，代码又回来了，和master没有回滚前的代码一样。
