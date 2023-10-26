import { defineConfig } from 'dumi';
// const logo = require('./images/logo.jpg');
// const ico = require('./images/favicon.ico');

//github仓库名称
const defaultPath = '/fe-interview';
// const defaultPath = '';
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';
export default defineConfig({
  base: defaultPath,
  // base: '/',
  publicPath: `${baseUrl}/`,
  resolve: {
    docDirs: ['document'],
    // atomDirs: [{ type: 'component', dir: '../src/components/' }],
    // entryFile: '../src/components/index.ts',
  },
  // favicons: [
  //   // 完整地址
  // ],
  favicons: ['/image/favicon.ico'],
  outputPath: 'docs',
  themeConfig: {
    name: '小代笔记',
    hd: { rules: [] },
    rtl: true,
    logo: '/image/logo.jpg',
    footer: ``,
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/dai1254473705/fe-interview',
    },
  },
  hash: true,
  // apiParser: {},
  locales: [{ id: 'zh-CN', name: '中文' }],
  chainWebpack(memo) {
    // memo 当前 webpack-chain 对象
    // memo.plugins.delete('copy'); // 会导致访问不到静态文件
  },
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd', //配置antd全局样式
  //       libraryDirectory: 'es',
  //       style: true,
  //     },
  //   ],
  // ],
});
