# 2. Homebrew国内如何自动安装（国内地址）
![00ff4cae4896e52b29ba4fadc1bb8250](./image/1F64EDA9-4DD2-4A48-A7CA-02A27DBC8DD1.png)

## 自动脚本(全部国内地址)（在终端中复制粘贴回车下面脚本)

**苹果电脑 常规安装脚本（推荐 完全体 几分钟安装完成）：**
```javascript
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
**苹果电脑 极速安装脚本（精简版 几秒钟安装完成）：**
```javascript
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```
**苹果电脑 卸载脚本：**
```javascript
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```
**常见错误**去下方[地址](https://gitee.com/cunkai/HomebrewCN/blob/master/error.md)查看
```javascript
https://gitee.com/cunkai/HomebrewCN/blob/master/error.md
```
**Linux电脑** 安装脚本：
```javascript
rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh
```
**Linux电脑** 卸载脚本：
```javascript
rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
```

