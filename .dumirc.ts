import { defineConfig } from 'dumi';

//github仓库名称
// const defaultPath = '/fe-interview';
const defaultPath = '';
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';
export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  resolve: {
    docDirs: ['document'],
    // atomDirs: [{ type: 'component', dir: '../src/components/' }],
    // entryFile: '../src/components/index.ts',
  },
  // favicons: [
  //   // 完整地址
  //   'https://cloud.static.chanjet.com/ydzee/ydzfavicon.ico',
  // ],
  outputPath: 'docs',
  themeConfig: {
    name: '前端面试题',
    hd: { rules: [] },
    rtl: true,
    // favicon: `https://cloud.static.chanjet.com/ydzee/ydzfavicon.ico`,
    // logo: '/image/default-icon.png',
    footer: ``,
    prefersColor: { default: 'auto' },
    socialLinks: {
      // github: 'https://gitlab.rd.chanjet.com/hsy_ng/ydz-workbench',
    },
  },
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
