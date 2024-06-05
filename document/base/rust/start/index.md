---
title: rust 入门
order: 1
---

# rust 入门

性能
Rust 可以给 Node.js 提供一个性能逃生通道，当我们使用 Node.js 遇到性能瓶颈或 CPU 密集计算场景的时候，便可以使用 Rust 编写 Native Addon 解决这个问题了，Native Addon 就是一个二进制文件，也就是 xxx.node 文件，比如 swc(对应 babel)、Rspack(对应Webpack)、Rome(对应 eslint、prettier、babel、webpack 等，目标是代替我们所熟悉的所有前端工具链...)，上面提到的工具链就都是使用 Rust 编写的，性能比 Node.js 对应功能的包都有了极大的提高，同时 Rust 也是支持多线程的，你编写的多线程代码在 Node.js 中一样可以跑，这就可以解决了 Node.js 不擅长 CPU 密集型的问题。在前端架构领域目前 Rust 已经差不多是标配了，阿里、字节内部的前端基建目前都开始基于 Rust 去重构了。

跨平台
可以编写高性能且支持跨平台的 WebAssembly 扩展，可以在浏览器、IOT 嵌入式设备、服务端环境等地方使用，并且也拥有很不错的性能；和上面提到的 Native Addon 不一样， Native Addon 在不同的平台上都需要单独的进行编译，不支持跨平台；但是 WebAssembly 不一样，虽然它的性能没 Native Addon 好，但是跨平台成本很低，我编写的一份代码在 Node.js 中执行没问题，在 Deno 中跑也没问题，在 Java 或者 Go 中跑也都没问题，甚至在单片机也可以运行，只要引入对应的 Wasm 运行时即可。现在 Docker 也已经有 WebAssembly 版本了；同时 Rust 也是目前编写 WebAssembly 最热门的语言，因为它没有垃圾回收，性能高，并且有一个超好用的包管理器 cargo。

安全
Rust 编译器真的是事无巨细，它保证你编写的代码不会出低级错误，比如一些类型上的错误和内存分配上的错误，基本上只要 Rust 代码能够编译通过，就可以安心上线，在服务端、操作系统等领域来说这也是个很好的特性，Linux 系统和安卓系统内核都已经开始使用 Rust ，这还信不过嘛？

> 官网地址
https://www.rust-lang.org/zh-CN/learn/get-started

## 1. 安装 Rust 的主要方式是通过 Rustup 这一工具，它既是一个 Rust 安装器又是一个版本管理工具。

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## 2. 升级

```sh
rustup update
```

## 3.Cargo：Rust 的构建工具和包管理器

> 您在安装 Rustup 时，也会安装 Rust 构建工具和包管理器的最新稳定版，即 Cargo。

Cargo 可以做很多事情：

- cargo build 可以构建项目
- cargo run 可以运行项目
- cargo test 可以测试项目
- cargo doc 可以为项目构建文档
- cargo publish 可以将库发布到 crates.io。

#### 要检查您是否安装了 Rust 和 Cargo，可以在终端中运行：

``cargo --version``
