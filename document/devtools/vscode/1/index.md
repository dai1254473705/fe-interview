# vscode 常用插件

| 插件 | 功能 | 官网 |
| --- | --- | --- |
| 插件 | 功能 | 官网 |
| Git History | Git History, Search and More (including git log) |https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory|
| Git Project Manager | Git Project Manager (GPM) is a Microsoft VSCode extension that allows you to open a new window targeting a git 
repository directly from VSCode window. |https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager|
| GitLens —Git supercharged | GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more. |https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens|
| Jest | Jest测试辅助工具 |https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) |
| open in browser | This allows you to open the current file in your default browser or application. |https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser|

| gitlab-workflow | 代码review |  |

## Project Manager
> 用于多个项目之间的快速切换

![cb0932ef877e5ac2e56cf676120220a1](./image/30451DB1-CDE6-47D2-A9D9-5F630062208E.png)

输入：>`Project Manager:Edit Projects`，打开`project.json`,配置工程名和路径

```js
[
    {
        "name": "GitHubTest",
        "rootPath": "E:/RNworkspace/GitHubTest",
        "paths": [],
        "group": ""
    },
    {
        "name": "HelloReact",
        "rootPath": "E:/RNworkspace/HelloReact",
        "paths": [],
        "group": ""
    }

]
```

然后在PROJECTS/Favorites中切换项目：

![e054cb6cd4420d10998566a9d010717a](./image/10BA0395-0F2E-478A-AEB8-728681783E54.png)


## EditorConfig

> EditorConfig 通过在工程中增加一个配置文件以及安装对应的插件，实现在不同编辑器和 IDE 保持工程中代码文件编码格式的一致性，EdEitorConfig的配置文件具有良好的可读性，并能很好的和版本控制系统一起协作

![77f8869d6998fa8e82a67f971b297e94](./image/D035D54C-E1F5-4285-A534-E137ADA6FB84.png)

## Path autocomplete

> 在 VS Code 中支持自动补全文件路径名的插件。


![46e34b49d90e9c25b660ce9c3d19edf1](./image/75C1D981-2661-4B43-8D9E-1EAD64FE4EBF.png)

## project-tree

> ctrl+shift+p and enter `Project Tree` to enter. Generate a tree structure of the project in README.md.

![acf23f8e1afddecf2c240e6871e2d2fb](./image/5B81CD7E-9337-4753-84A2-36A416B2B05A.png)


## Ascii Tree Generator

> 生成文件目录树

![f88a4b684e0ef205d1add4ce548f95b8](./image/0D9B5029-5C96-4CFD-8514-61AAD912044C.png)

![9bafd0b6eec3b7c5c174ea90cb200de2](./image/3A2D3D0F-F714-4CC3-B270-FC933DAA3403.png)



## Rainbow Brackets

在 React Native 开发中经常会存在多种括号混合使用，为了能够更好的区分，这个插件支持不同类型的括号进行彩色着色，支持圆括号，方括号和花括号。



## Git Blame

![84a39f4730b77c56c7f643d148ee51dc](./image/62CDDEA3-BB93-49DF-9B3C-F4E03A3E1ACC.png)

在团队多人协作开发过程中，我们通常需要知道某行代码最近一次是谁修改的，Git Blame 插件就提供了这么一个便利的功能。

## Document This

> 在 VS Code 中支持在 TypeScript 和 JavaScript 文件中自动生成 JSDoc 注释的插件。

![3613a8dca33b315d82bc5b2459dea8aa](./image/B773BAFA-92E1-4FB0-A52E-A2976818AA43.png)



##  Color Highlight

> 代码中经常会出现设置颜色，通常是用十六进制格式来表示一个颜色值，例如 #EB6066，但这个值对开发者而言是没有意义的，我们看不出来到底对应的是什么颜色，这个插件帮忙开发者在 VS Code 中支持十六进制格式的颜色进行预览。

![6dbfb62b6575877da88510cf2e117bd0](./image/6F68BCEA-86B4-42EB-A227-900F313AC845.png)


##  Auto Rename Tag

> 提高开发效率的插件，在 VS Code 中支持重命名 HTML/XML 对应标签。

![d9475dead77f1142e92e887297de6699](./image/B7B4F6E6-3945-4D33-8A6E-6D60540EBE83.png)


## Auto Close Tag

> 提高开发效率的插件，在 VS Code 中支持自动补全 HTML/XML 关闭标签。

![4ca9126a2c08ea4a1c70e901c405f67f](./image/A90B9CAC-86BE-4FED-8C4A-2098D99CEC9E.png)


## Prettier 

> 每个公司每个团队都有自己的编码规范，而代码格式化功能是提高开发者输出符合规范代码效率的工具，这个插件是在 VS Code 中支持 Prettier 的插件，Prettier11 是一个 Javascript 代码的格式化工具。


https://prettier.io/ 

![7e55e4a33f65c2d09408f27bd3d11f42](./image/5FC1C660-B83B-40FE-9C4F-5D24F37A86A1.png)


## ESLint
> 静态代码检查主要用来对代码的编程规范，语法错误等进行扫描，从而在代码执行之前发现可能存在的问题。

https://eslint.org/

![84c135077ec1fa56e11f2beb7320e0fb](./image/34DE3007-5BB9-4064-A4E5-F28244F52355.png)


## React Native Tools

> 微软官方为 React Native 开发提供的专门的插件，按照官网的说明进行插件的安装即可。这个插件使得开发者可以在 VS Code 中调试 React Native 代码，快速执行 react-nativ命令，以及对 React Native 的 API 具备智能提醒功能


![ea34b0d94722f0d35b4b69e59291a6fe](./image/BBC4C035-84F7-41F0-84EC-14A0ADD1BD89.png)



## codesnap

> 好看的代码截图

![828461cdbd295fc392a549d0ea987621](./image/596402EA-AFDC-4982-9E71-5AFFBE4B2BD1.png)

## 通义灵码

![5d611350ae4ebddcc89da25d33fabd1d](./image/D0308481-43A5-4BE6-BB5D-9048437EB358.png)


## TODO Highlight

> 在 VS Code 中支持 TODO:，FIXME: 等类型注释关键词高亮的插件。

![ca102476ad0fb3b5919a0ed355b190c4](./image/52EF7AB7-0165-4A8B-BD78-014164EE5F57.png)

![1c4b32b155873871e570f0552c76ac10](./image/B832BACE-DFA2-427E-B3E0-53924F767623.png)


```json
{
    "typescript.tsdk": "node_modules/typescript/lib",
    "minapp-vscode.disableFormat": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "todohighlight.isEnable": true,
    "todohighlight.isCaseSensitive": true,
    "todohighlight.keywords": [
        "DEBUG",
        "REVIEW",
        "FIXME",
        "TODO",
    ],
    "todohighlight.include": [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.html",
        "**/*.php",
        "**/*.css",
        "**/*.scss"
    ],
    "todohighlight.exclude": [
        "**/node_modules/**",
        "**/bower_components/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/.github/**",
        "**/_output/**",
        "**/*.min.*",
        "**/*.map",
        "**/.next/**"
    ],
}
```

插件开发：
[https://juejin.cn/post/7033293116585017374](https://juejin.cn/post/7033293116585017374)
