const boxen = require('boxen');
console.log(boxen('unicorn', {padding: 1}));
console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));
console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));