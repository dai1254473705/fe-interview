# 4. 数字金额转中文大写金额

### 单位展示
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 壹 | 贰 | 叁 | 肆 | 伍 | 陆 | 柒 | 捌 |
| 9 | 0 | 十 | 百 | 千 | 万 | 亿 | 兆 |
| 玖 | 零 | 拾 | 佰 | 仟 | 万| 亿 | 兆 |						

### 设计思想

- **整体思路**：
  - 首先将输入的数字分为整数部分和小数部分分别处理。对于整数部分，将每个数字转换为对应的中文大写数字，并加上相应的单位，然后处理连续的零和末尾的零。对于小数部分，同样将每个数字转换为中文大写数字，并加上小数单位，最后根据情况去掉末尾多余的零。如果输入的数字是负数，则在结果前面添加“负”字。

- **整数部分处理**：
  - 将整数部分转换为字符串，然后逐个字符处理。对于每个数字，通过索引从预先定义的中文大写数字数组中获取对应的大写数字，并从单位数组中获取相应的单位，拼接起来得到中文大写表示。
  - 处理连续的零是通过正则表达式将多个连续的零合并为一个零。去掉末尾的零时，判断如果末尾的零在“亿”或“万”后面则保留，否则去掉，并确保不会出现多个连续的零在末尾。

- **小数部分处理**：
  - 将小数部分乘以适当的倍数（这里是 10000 以处理到毫位）并取整，然后转换为字符串进行处理。对于每个数字，根据其位置从预先定义的小数单位数组中获取相应的单位，拼接成中文大写表示。
  - 最后根据情况去掉末尾多余的零，例如没有“角”时去掉“零角”，没有“分”时去掉“零分”等。

### 具体实现
```javascript
function convertToChinese(num) {
  // 中文大写数字
  const chineseDigits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  // 整数部分的单位
  const chineseUnits = ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟"];
  // 小数部分的单位
  const decimalUnits = ["角", "分", "厘", "毫"];

  // 判断是否为负数
  let isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = -num;
  }

  // 分离整数部分和小数部分
  let integerPart = Math.floor(num);
  let decimalPart = num - integerPart;

  let integerChinese = "";
  let decimalChinese = "";

  // 处理整数部分
  if (integerPart === 0) {
    integerChinese = "零";
  } else {
    // 将整数部分转换为字符串数组，便于逐个处理数字
    let integerArray = integerPart.toString().split("");
    for (let i = 0; i < integerArray.length; i++) {
      let digit = parseInt(integerArray[i]);
      // 拼接中文大写数字和单位
      integerChinese += chineseDigits[digit] + chineseUnits[integerArray.length - i - 1];
    }
    // 处理连续的零，将多个连续的零合并为一个零
    integerChinese = integerChinese.replace(/零+/g, "零");
    // 去掉末尾的零，但保留亿、万后面的零
    if (integerChinese.endsWith("零")) {
      if (integerChinese.indexOf("亿")!== -1 || integerChinese.indexOf("万")!== -1) {
        integerChinese = integerChinese.slice(0, -1);
      } else {
        integerChinese = integerChinese.slice(0, -1).replace(/零+$/, "");
      }
    }
  }

  // 处理小数部分（保留四位小数）
  if (decimalPart > 0) {
    // 将小数部分乘以 10000 并取整，以处理到毫位
    decimalPart = Math.round(decimalPart * 10000);
    let decimalArray = decimalPart.toString().split("");
    decimalChinese += "元";
    for (let i = 0; i < decimalArray.length; i++) {
      let digit = parseInt(decimalArray[i]);
      // 拼接中文大写数字和小数单位
      if (i === 0) {
        decimalChinese += chineseDigits[digit] + decimalUnits[i];
      } else {
        decimalChinese += chineseDigits[digit] + decimalUnits[i];
      }
    }
    // 去掉末尾的零（如没有角，则去掉角后面的零；没有分，则去掉分等）
    if (decimalChinese.endsWith("零毫")) {
      decimalChinese = decimalChinese.slice(0, -2);
    } else if (decimalChinese.endsWith("零厘")) {
      decimalChinese = decimalChinese.slice(0, -2);
    } else if (decimalChinese.endsWith("零分")) {
      decimalChinese = decimalChinese.slice(0, -2);
    } else if (decimalChinese.endsWith("零角")) {
      decimalChinese = decimalChinese.slice(0, -2);
    }
  } else {
    decimalChinese = "元整";
  }

  // 如果是负数，在结果前面添加"负"字
  if (isNegative) {
    return "负" + integerChinese + decimalChinese;
  }
  return integerChinese + decimalChinese;
}

// 示例用法
let amount = 123.4567;
console.log(convertToChinese(amount));// 壹佰贰拾叁元肆角伍分陆厘柒毫
```
