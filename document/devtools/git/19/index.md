# 19. 把原项目放到新的 git仓库
以下是具体的操作步骤，可以帮助你将 `test-demo-a` 项目的代码、分支以及提交记录等完整推送到 `test-demo-b` 项目仓库中：

### 步骤一：添加新的远程仓库

1. 首先，进入本地 `test-demo-a` 项目所在的目录，打开命令行终端（比如在 Linux 或 macOS 下使用终端，在 Windows 下可以使用 Git Bash 等）。

2. 执行以下命令添加 `test-demo-b` 仓库作为远程仓库，命令中的 `git@gitlab.rd.xxxx.com:cc_web/test-demo-b.git` 就是目标仓库的远程地址，你需要确保你有向该仓库推送的权限：

```bash
    git remote add saas_remote git@gitlab.rd.xxxx.com:cc_web/test-demo-b.git
```

这样就在本地 `test-demo-a` 项目中关联上了新的远程仓库，并且给它取了一个别名 `saas_remote`（别名可以根据你的喜好自行设定，方便后续操作引用这个远程仓库）。

### 步骤二：获取新远程仓库的信息（可选）

执行以下命令从新添加的远程仓库 `saas_remote` 获取分支等相关信息，不过这一步通常不是必须的，只是为了提前知晓远程仓库那边的初始状态：

```bash
git fetch saas_remote
```

### 步骤三：推送本地分支到新仓库

1. **推送主分支（通常是 `master` 或 `main` 分支）**：
   使用以下命令将本地的主分支推送到新的远程仓库 `saas_remote` 中对应的主分支上，如果远程仓库中对应的主分支不存在，会自动创建：

```bash
   git push saas_remote master
```

或者如果你的项目主分支是 `main` ，则执行：

```bash
   git push saas_remote main
```

2. **推送其他分支**：
   假如你有像 `feature_branch`、`bugfix_branch` 等其他分支，需要逐个推送这些分支到新仓库。以 `feature_branch` 为例，执行命令如下：

```bash
   git push saas_remote feature_branch
```

如果分支较多，为了方便，可以使用 `git push` 的 `--all` 选项一次性推送所有本地分支到新的远程仓库，但要谨慎使用这个选项，因为它会推送所有分支，可能会包含一些你暂时不想推送或者还没准备好推送的分支。命令如下：

```bash
   git push saas_remote --all
```

3. **推送所有标签（可选，如果项目中有标签的话）**：
   如果你希望把项目中的标签也一并推送到新仓库，可以使用以下命令：

```bash
   git push saas_remote --tags
```

### 步骤四：验证推送结果并清理（可选）

1. **验证推送结果**：
   推送完成后，你可以登录到 `git@gitlab.rd.xxxx.com:cc_web/test-demo-b.git` 对应的仓库页面（比如 GitLab 的网页界面）查看各个分支和提交记录等是否已经成功推送过去，并且是否符合你的预期。
2. **清理远程仓库关联（可选）**：
   如果你之后确定不再需要原来关联的旧仓库远程地址等信息，可以在本地 `test-demo-a` 项目中执行以下命令移除之前关联的其他远程仓库（假设之前还有别的远程仓库关联，这里以移除名为 `old_remote` 的远程仓库为例）：

```bash
    git remote rm old_remote
```

通过以上步骤，就可以将 `test-demo-a` 项目中的代码、分支以及提交记录等完整地推送到 `test-demo-b` 项目仓库中了。不过在整个操作过程中，建议提前备份好本地项目代码，以防出现意外情况导致数据丢失等问题。

### 查看本地仓库配置的所有远程仓库

使用`git remote -v`命令可以查看本地仓库配置的所有远程仓库及其对应的推送（push）和拉取（fetch）的 URL。例如：

```sh
daiyunzhou@daiyunzhoudeMacBook-Pro-2 test-demo-a % git remote -v
origin	git@gitlab.rd.xxxx.com:hsy_ng/test-demo-a.git (fetch)
origin	git@gitlab.rd.xxxx.com:hsy_ng/test-demo-a.git (push)
saas_remote	git@gitlab.rd.xxxx.com:cc_web/test-demo-b.git (fetch)
saas_remote	git@gitlab.rd.xxxx.com:cc_web/test-demo-b.git (push)
daiyunzhou@daiyunzhoudeMacBook-Pro-2 test-demo-a %
```

### 将saas_remote对应的某个分支代码同步到当前项目

```sh
git pull saas_remote branchName
```

请注意，整个操作都依赖于你拥有向 `test-demo-b` 仓库推送的相应权限，如果推送时遇到权限相关的错误提示，需要联系仓库管理员进行权限的核实与调整。
