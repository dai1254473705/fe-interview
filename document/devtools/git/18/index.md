# 查看分支是从哪个分支拉出来的

## git reflog --date=local | grep 分支名称

`refactor-menu`是从`feat-xxxx`分支拉出来的

> 可以看到最底下一条：checkout: moving from feat-xxxx to refactor-menu

```sh
daiyunzhou@daiyunzhoudeMacBook-Pro-2 fe-interview % git reflog --date=local | grep refactor-menu
3c9249f05 HEAD@{Tue Aug 6 10:30:27 2024}: commit (merge): Merge branch 'feat-240815' into refactor-menu
14f3e1b77 HEAD@{Tue Aug 6 10:25:18 2024}: checkout: moving from feat-240815 to refactor-menu
c665960ae HEAD@{Tue Aug 6 10:19:30 2024}: commit (merge): Merge branch 'refactor-menu' into test-220915
579bacf23 HEAD@{Tue Aug 6 09:57:01 2024}: checkout: moving from refactor-menu to test-220915
14f3e1b77 HEAD@{Tue Aug 6 09:56:55 2024}: checkout: moving from test-220915 to refactor-menu
393ca09fe HEAD@{Mon Aug 5 09:54:47 2024}: checkout: moving from refactor-menu to feat-240815
14f3e1b77 HEAD@{Mon Aug 5 09:38:57 2024}: checkout: moving from test-220915 to refactor-menu
fe271af02 HEAD@{Wed Jul 31 15:03:40 2024}: checkout: moving from refactor-menu to feat-240711-ybs
14f3e1b77 HEAD@{Wed Jul 31 14:51:29 2024}: checkout: moving from vitest to refactor-menu
b4eaf2c0e HEAD@{Wed Jul 31 11:36:53 2024}: checkout: moving from refactor-menu to feat-agentAccount-ybs
14f3e1b77 HEAD@{Wed Jul 31 11:36:49 2024}: checkout: moving from feat-240711-ybs to refactor-menu
14f3e1b77 HEAD@{Tue Jul 30 15:08:33 2024}: merge refactor-menu: Fast-forward
ea1038d8b HEAD@{Tue Jul 30 14:48:29 2024}: checkout: moving from refactor-menu to daiyunzhou
7c301d3e8 HEAD@{Tue Jul 30 11:08:46 2024}: checkout: moving from feat-240711-ybs to refactor-menu
418867ad1 HEAD@{Tue Jul 30 11:07:37 2024}: checkout: moving from refactor-menu to test-220915
7c301d3e8 HEAD@{Tue Jul 30 10:58:13 2024}: checkout: moving from feat-240711-ybs to refactor-menu
a96222299 HEAD@{Mon Jul 29 15:11:54 2024}: checkout: moving from refactor-menu to feat-240711-ybs
7c301d3e8 HEAD@{Mon Jul 29 14:55:02 2024}: checkout: moving from test-220915 to refactor-menu
418867ad1 HEAD@{Mon Jul 29 14:40:01 2024}: checkout: moving from refactor-menu to test-220915
262d72dbe HEAD@{Mon Jul 29 14:39:06 2024}: checkout: moving from test-220915 to refactor-menu
52987432e HEAD@{Mon Jul 29 13:48:01 2024}: checkout: moving from refactor-menu to feat-240711-ybs
da331489b HEAD@{Mon Jul 29 09:05:35 2024}: checkout: moving from feat-xxxx to refactor-menu
```
