---
title: Charles拦截接口请求
order: 2
---

# Charles拦截接口请求

最近工作需要拦截接口做一些修改，记录一下用Charles的一些操作。以拦截登录接口场景举个例。

##### 1、设置代理自己的电脑

启动 Charles 后，需要将 Charles 设置成系统代理，选择菜单中的 `Proxy` –> `macOS Proxy` 来将 `Charles 设置成系统代理`。如下所示：

![ce3101d1992ddc8408414da321e1d917](./image/BA5FC8DF-086F-4B53-8D92-DF25512337F7.png)

##### 2、请求接口，给要拦截的接口设置断点。

选择接口，`右击`->`Breakpoints`如下所示：

![ba420b2bd43b59863140ee66517754f8](./image/EC9FD92B-3B2D-418A-A7C1-E54B0C2ED81A.png)

##### 3、拦截接口

我以登录结果为例的，`设置断点的接口重新发起接口请求时，会弹起Charles这个页面`，成功拦截到了接口，如下所示：

![f2341f8a61db0afb94fda5d9371457e3](./image/6BF22510-F3CC-4F70-B45C-171B4EC950D7.png)

##### 4、修改接口入参

切换到`Edit Request`，改变接口请求方法或者改变入参;修改入参两个方式：
第一种：直接URL页面add参数；
第二种：切换到text页面，按照格式改变相应的参数。修改之后点击Execute，如下所示：

![33a9c95f467f7cb42d35929be04b743c](./image/7A93DC4A-DDDF-4FF2-A6E5-62356EBB58EF.png)

##### 5、点击`Execute`之后，会拦截`Response`。

也可以对返回参数做修改，先不做修改直接点击`Execute`，看接口请求成功的返回数据是我们修改的账号登录成功，如图所示：

![36e03788ac258fbeb242143f738b7561](./image/3B524BAC-8257-40D4-A181-0C88553D822B.png)

![70c1d2adba426b1193b62fba367de35e](./image/B0475FF2-CEE9-4064-AA73-1893ABB21382.png)

##### 6、拦截Response

对返回参数值做修改，比如修改`displayName`字段的值，如图所示：
![de8c7593fdabf95fcae9956eb762f852](./image/EAF168EC-2545-49DB-B4E6-713C411FEEE1.png)

![cf5168f6a8c6280ebf380ebd20ab450b](./image/B6CF5617-1792-4182-A92C-B7E3E0776829.png)
