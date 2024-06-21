const fs = require('fs');
const path = require('path');

function generatefile(fileData) {
  const { dir, name } = fileData;
  // 目标目录
  const targetDir = path.join(__dirname, '../document/', dir);
  // 获取子目录列表
  const subDirs = fs.readdirSync(targetDir).filter(subDir => {
    const subDirPath = path.join(targetDir, subDir);
    return fs.statSync(subDirPath).isDirectory();
  });

  // 读取 index.md 的标题
  const getTitleFromIndexMd = (dir) => {
    const indexPath = path.join(targetDir, dir, 'index.md');
    if (fs.existsSync(indexPath)) {
      const fileContent = fs.readFileSync(indexPath, 'utf8');
      const firstLine = fileContent.split('\n')[0];
      const titleMatch = firstLine.match(/^#\s*(.*)/);
      if (titleMatch) {
        return titleMatch[1];
      }
    }
    return dir;
  };

  // 生成内容
  const content = subDirs.map(subDir => {
    const title = getTitleFromIndexMd(subDir);
    return `+ [${title}](/${dir}/${subDir})`;
  }).join('\n');
  const fullContent = `# ${name}\n\n${content}`;
  console.log(targetDir, subDirs, fullContent);

  // 写入 index.md 文件
  const outputFilePath = path.join(targetDir, 'index.md');
  fs.writeFileSync(outputFilePath, fullContent, 'utf8');

  console.log('generate.md 文件已生成：');
  console.log(content);

}



const fileList = [
  {
    dir: 'backend',
    name: '后端相关',
  },
  {
    dir: 'devstandards',
    name: '开发规范',
  },
  {
    dir: 'devtools',
    name: '开发工具',
  },
  {
    dir: 'frameworktools',
    name: '框架工具',
  },
  {
    dir: 'frontendbasics',
    name: '前端基础',
  },
  {
    dir: 'nodejs',
    name: 'nodejs',
  },
  {
    dir: 'photography',
    name: '摄影',
  }];

fileList.forEach(item => {
  generatefile(item);
});
