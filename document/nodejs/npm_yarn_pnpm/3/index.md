---
title: 3. 如何管理本地多个npm镜像源
order: 3
---

# 3. 如何管理本地多个npm镜像源

> 使用nrm管理镜像

全局安装：

```javascript
npm install nrm -g --save
```
用nrm ls命令查看默认配置
```javascript
nrm ls
 
输出：
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```
也可以直接输入以下命令查看当前使用的是哪个源
```javascript
nrm current
```

切换源
```javascript
nrm use cnpm
```

用nrm add 命令添加公司私有npm源
```javascript
nrm add xxxx https://xxxx.xx.xx.com/
```
测试下速度

```javascript
nrm test npm
```
