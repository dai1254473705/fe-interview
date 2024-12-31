const fs = require('fs');
const path = require('path');
const allContent = [];
const baseUrl = 'https://fe.netyali.cn';
const updateLog = [];
// 读取 index.md 的标题
const getTitleFromIndexMd = (dir) => {
  const indexPath = path.join(dir, 'index.md');
  if (fs.existsSync(indexPath)) {
    const fileContent = fs.readFileSync(indexPath, 'utf8');
    const firstLine = fileContent.split('\n')[0];
    const firstSecond = fileContent.split('\n')[1];
    const titleMatch = firstLine?.match?.(/^#\s*(.*)/)?.[1];
    const titleMatchTwo = firstSecond?.match?.(/^title:\s*(.*)/)?.[1]
    if (titleMatch || titleMatchTwo) {
      return titleMatch || titleMatchTwo;
    }
  }
  return dir + '无标题';
};

// 生成内容
const getFullContent = (targetDir, subDirs, title) => {
  const content = subDirs.map((subDir) => {
    const subDirPath = path.join(targetDir, subDir);
    const route = subDirPath.split('fe-interview/document')[1];
    const name = getTitleFromIndexMd(subDirPath);
    return `+ [${name}](${route})`;
  }).join('\n');
  const fullContent = `# ${title}\n\n${content}`;
  return fullContent;
}

// 写入文件
const writeMd = (targetDir, fullContent) => {
  // 写入 index.md 文件
  const outputFilePath = path.join(targetDir, 'index.md');
  if (outputFilePath.indexOf('document/index.md') > -1) {
    return;
  }
  allContent.push(fullContent);
  updateLog.push({
    path: outputFilePath,
    content: fullContent,
  });
  fs.writeFileSync(outputFilePath, fullContent, 'utf8');
  // console.log(`${targetDir}/index.md 文件已生成：`);
}

function start(targetDir) {
  // console.log(targetDir);
  // 获取当前目录 index.md 标题
  const title = getTitleFromIndexMd(targetDir);
  // 获取子目录列表
  const subDirs = fs.readdirSync(targetDir).filter(subDir => {
    const subDirPath = path.join(targetDir, subDir);
    return fs.statSync(subDirPath).isDirectory();
  });
  subDirs.sort((a, b) => {
    // 先尝试把a、b都转换为数字，看是否能转换成功
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    // 如果有不能转换为数字的情况，就按照字符串的自然顺序比较（类似字典序）
    return a.localeCompare(b);
  });
  // 找到子目录的标题及路由
  const content = getFullContent(targetDir, subDirs, title);
  writeMd(targetDir, content);
  // 递归处理子目录
  subDirs.forEach(subDir => {
    const subDirPath = path.join(targetDir, subDir);
    const indexPath = path.join(subDirPath, 'index.md');

    const hadSubDirectory = fs.readdirSync(subDirPath).filter(sb => {
      const sbp = path.join(subDirPath, sb);
      return fs.statSync(sbp).isDirectory() && !['image','demo'].includes(sb);
    });
    const hadIndexMd = fs.existsSync(indexPath);
    if (hadSubDirectory.length > 0 && hadIndexMd) {
      // console.log(subDirPath);
      start(subDirPath);
    }
  });
};
const targetDir = path.join(__dirname, '../document/');
start(targetDir);

// 写入 README.md 文件和首页
// 将(/替换成(baseUrl/)
const readmeContent = allContent.join('\n');
const replaceContent = readmeContent.replace(/\(\//ig, `(${baseUrl}/`);
const readmeFilePath = path.join(targetDir, '../README.md');
fs.writeFileSync(readmeFilePath, replaceContent, 'utf8');
console.log(`${readmeFilePath} 文件已生成：`);

// 提交后就会有更新日志
// return;
// 从 updateLog 目录中读取是否有上一次的更新记录，记录为 updateLog.json 文件
const updateLogDir = path.join(__dirname, '../updateLog.json');
// 判断上一次的文件内容的差异，找到新增的文件和移出的文件，放到两个不同的数组中
// 如果上一次文件不存在，则今天的文件就是新增的文件
const lastUpdateLog = fs.existsSync(updateLogDir) ? JSON.parse(fs.readFileSync(updateLogDir, 'utf8')) : [];
// 找到新增的文件
const addPath = updateLog.filter(item => {
  return !lastUpdateLog.find(lastItem => lastItem.path === item.path);
});
// 将removePath和addPath对应的content拼起来放到 updateLog.json 文件中
const todayContent = addPath.map(item => item.content).join('\n');
const todayFilePath = path.join(targetDir, '../updateLog.md');
fs.writeFileSync(todayFilePath, todayContent, 'utf8');
fs.writeFileSync(updateLogDir, JSON.stringify(updateLog), 'utf8');
