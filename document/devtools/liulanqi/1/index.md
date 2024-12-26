# 1. Chrome使用调试技巧
#### 将当前页面快速添加到浏览器收藏夹

快捷键：
```sh
ctrol+d / command+d
```

#### 浏览器关闭/启用sourcemap调试源码

1. 进入控制台**Sources**面板；
2. 快捷键 **command + p**打开输入框；
3. 英文输入法输入 **?**，选择 **Run Command**;
 ![28c86b4d1e85f5902312b30ee55b5cc7](./image/B54B346F-B2C8-4043-B3C4-F448A8D5DC08.png)
4.输入 **source map** ,找到对应关闭/启用选项点一下；
![806f47a3b0563b5b0d02d64af0b1678f](./image/158630BC-BED3-4F29-B458-39B6013A0BEC.png)

#### 浏览器调试本地接口数据

> 局限性：如果接口后面有动态改变的数据，每次都不一致，可能不太适用

在浏览器控制台的`netWork` 下面找到要调试的接口，右键选择`“override content”`

![27ed73b22d42fe32ea9c07f892331faa](./image/1B5077C9-73B5-44B6-88E2-251D792FA6A3.png)

此时如果之前没有操作过，会让你`选择一个文件夹`(涉及到权限的，要点击同意)，我这里操作过，所以直接会在之前选择的文件夹下生成一个当前域名的目录，用来保存对应接口的数据

![6f0f9afec3353923c182c893e5224621](./image/EF7FBD1D-DB40-42EE-9EEB-3CCCD406B36F.png)

我们可以在浏览器的 source下面直接编辑，也可以在编辑器打开保存在本地的文件中的数据

![e11cd548a0091e73cb9ec5aade5e860c](./image/BB24B94A-70B8-4DAB-84DA-4F8DAD862568.png)

这里我把`courses_count`改为了 `10`

刷新浏览器，重新请求接口，可以看到请求本地的数据会添加标识：
![55d3aa6ff2e52e6516d0ba720595ef8b](./image/FE240CCE-7EF8-4F90-A300-92C2F1247AD0.png)

测试完成后，可以在`source`下删除对应接口，再次刷新就会正常请求了

![9d10bfaff1645a3c81f2ad8c25dd27ec](./image/1D7F1E3D-0553-4BFD-99F0-CD7B018E4B46.png)

