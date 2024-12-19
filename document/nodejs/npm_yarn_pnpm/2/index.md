---
title: 2. 基于nvm 管理多个node版本
order: 2
---

# 2. 基于nvm 管理多个node版本

> **nvm**可以帮助我们快速安装或者切换不同版本的**node**


#### 安装nvm
nvm地址：[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

或者

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

mac系统需要配置环境到``~/.bash_profile``, ``~/.zshrc``, ``~/.profile``, or ``~/.bashrc``:

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### 安装node

```sh
nvm install node # "node" is an alias for the latest version
```
#### 安装指定版本的node

```sh
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```

#### 查看可以安装的版本

```sh
nvm ls-remote
```

#### 查看当前nvm安装过的node

```sh
nvm ls
```

#### 切换当前的node版本

```sh
nvm use node
nvm use 14.7.0
```

#### 使用系统版本

```sh
nvm use system
nvm run system --version
```

#### 设置默认的nvm使用的node

```sh
nvm alias default node
nvm alias default v14.16.0
```

#### 卸载指定版本node

```sh
nvm uninstall <version>
```
