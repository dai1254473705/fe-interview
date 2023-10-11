import { defineConfig } from 'dumi';

export default defineConfig({
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
});
