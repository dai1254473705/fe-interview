---
title: 5. 现代NPM打包规范
order: 5
---

# 5. 现代NPM打包规范

### CJS & ESM
Node.js 和 NPM 包的工作方式一直是CommonJS（**require('xxx')**) ，从2015年支持ECMAScript 模块(**import {} from 'xxx'**)

```js
// CJS
const circle = require('./circle.js')

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`)
```

```js
// ESM
import { area } from './circle.mjs'

console.log(`The area of a circle of radius 4 is ${area(4)}`)
```

> ECMAScript 模块是现行标准，NPM生态正在逐步迁移,且大部分常用的包都已完成ESM迁移

#### package.json同时兼容CJS和ESM

[https://nodejs.org/api/packages.html#package-entry-points](https://nodejs.org/api/packages.html#package-entry-points)

> In a package's package.json file, two fields can define entry points for a package: "main" and "exports". Both fields apply to both ES module and CommonJS module entry points.

```js
{
  "name": "my-package",
  // CJS
  "main": "./dist/index.js",      ===> require("my-package")
  // ESM
  "module": "./dist/index.mjs",   ===> import "my-package"
  // 类型声明
  "types": "./dist/index.d.ts",  
}
```

#### exports 字段

> “exports”提供了“main”的现代替代方案，允许定义多个入口点、环境之间的条件入口解析支持，并防止除“exports”中定义的入口点之外的任何其他入口点。这种封装允许模块作者清楚地定义其包的公共接口

> 对于针对当前支持的 Node.js 版本的新包，建议使用“exports”字段

##### 简单导出

```js
{
  "name": "my-package",
  "exports": "dist/index.mjs"
}
```

##### 条件导出

```js
{
  "name": "my-package",
  "exports": {
      ".": {
        "types": "./dist/index.d.ts",      // 类型声明
        "import": "./dist/index.mjs",      ==> import "my-package"
        "require": "./dist/index.js"       ==> require("my-package")
      }
  },
}
```

##### 导出子路径

```js
{
  "name": "my-package",
  "exports": {
    ".": "./lib/index.js",                ==> import "my-package"
    "./lib": "./lib/index.js",            ==> import "my-package/lib"
    "./lib/*": "./lib/*.js",              ==> import "my-package/lib/foo"
    "./lib/*.js": "./lib/*.js",           ==> import "my-package/lib/foo.js"
    "./feature": "./feature/index.js",    ==> import "my-package/feature"
    "./feature/*": "./feature/*.js",      ==> import "my-package/feature/foo"
    "./feature/*.js": "./feature/*.js",   ==> import "my-package/feature/foo.js"
    "./package.json": "./package.json"    ==> import "my-package/package.json"
  }
} 
```

#### webpack模块解析方式

[https://webpack.js.org/guides/package-exports/](https://webpack.js.org/guides/package-exports/)

> The exports field in the package.json of a package allows to declare which module should be used when using module requests like import "package" or import "package/sub/path". It replaces the default implementation that returns main field resp. index.js files for "package" and the file system lookup for "package/sub/path".
``When the exports field is specified, only these module requests are available. Any other requests will lead to a ModuleNotFound Error.``

优先判断是否存在 exports 字段，如果存在则按照exports字段中定义的导出方式解析模块路径

```js
{
  "exports": {
    ".": "./main.js",
    "./sub/path": "./secondary.js",
    "./prefix/": "./directory/",
    "./prefix/deep/": "./other-directory/",
    "./other-prefix/*": "./yet-another/*/*.js"
  }
}
```

![899f452625e4fc05d06bad8df32f632f.webp](evernotecid://60250CBF-F5E1-4B63-AF57-32369CA09388/appyinxiangcom/15821309/ENResource/p3502)

### unbuild构建兼容CJS和ESM规范的 npm 包

[https://antfu.me/posts/publish-esm-and-cjs](https://antfu.me/posts/publish-esm-and-cjs)

[https://github.com/unjs/unbuild](https://github.com/unjs/unbuild)

#### 打包成一个文件

package.json

```js
{
  "name": "my-package",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  },
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
}
```
执行编译

```sh
npx unbuild
```

输出

```js
dist
   index.mjs
   index.cjs
   index.d.ts
```

#### 按目录打包

build.config.ts

```ts
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    // 编译目标 esm
    {
      declaration: true,
      builder: 'mkdist',
      input: './src',
      pattern: [
        '**/*', 
        // 排除 __tests__
        '!**/__tests__/**'
      ],
      format: "esm",
      outDir: './dist',
      ext: 'js'
    },
  ],
  failOnWarn: false,
  outDir: './dist',
  rollup: {
    esbuild: {
      target: 'es2015',
      // @ts-ignore
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
});

```

输出

```js
dist/
   foo/
      foo.mjs
      foo.cjs
   bar/
      a.mjs
      b.cjs
   index.mjs
   index.cjs
   index.d.ts
```

### NPM包构建目标

1. js语法构建目标 ES2015
2. 支持ESM， 保留 export, import 
3. 禁用 require()  语法
4. nodejs 最小版本  18

```js
{
  "engines": {
    "node": ">=18", // 指定nodejs版本
  }
}
```


