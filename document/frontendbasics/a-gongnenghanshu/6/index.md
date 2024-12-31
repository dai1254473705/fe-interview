# 6. JS实现颜色的10进制转化成rgba格式的方法

当我们在已知一个整数如（0~256x256x256x256 之间的颜色值），想获得关于它的3原色加一个透明度时，即alpha, red, green, blue，可采用如下方法：

## 方法一：
```js
function getColor(number) {

  let color = number;
  const blue = parseInt(color % 0x100, 10);
  color = color >>> 8;
  const green = parseInt(color % 0x100, 10);
  color = color >>> 8;
  const red = parseInt(color % 0x100, 10);
  const alpha = (parseInt(color >>> 8, 10) / 0xFF).toFixed(1);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;

}
```

## 方法二：

在 JavaScript 中，number >> 24 表示将 number 向右移动24位。这个操作通常用于处理大整数，特别是与网络字节序相关的场景，比如解析或构建网络协议中的数据包。
& 0xff 是位与操作，它将 number >> 24 的结果与二进制数 11111111（即十进制的255）进行位与操作。这通常用于提取右移后的8位，因为 0xff 只有最低8位为1，其余位为0。位与操作后，任何超过8位的高位都会被清除，只保留最低的8位。
这个表达式整体的作用是，从一个较大的数字中提取出右移24位后的低8位。这在处理颜色编码、IP地址或者某些特定格式的数据时非常有用。例如，如果 number 是一个表示RGB颜色的32位整数，那么 number >> 24 & 0xff 就会得到红色通道的值。

0x 开头的数值表示的是十六进制（Hexadecimal）数。在计算机科学和编程中，十六进制是一种常用的表示数值的方式，特别是在表示内存地址、颜色值、二进制数据的简化形式等方面。十六进制数系统使用16个符号，包括0-9的阿拉伯数字和A-F（或a-f）的字母，其中A代表10，B代表11，C代表12，D代表13，E代表14，F代表15。
例如，0x1A 在十六进制中表示10进制的26，因为 1 * 16 + A * 1 = 16 + 10 = 26。在编程中，0x 前缀告诉解释器或编译器接下来的数字是按照十六进制格式解析的。在某些语言中，如C、C++、Java、Python等，0x 用来区分十六进制数与十进制数或其他类型的数值表示。
此外，十六进制常用于颜色表示，例如网页设计中的颜色代码，如 #FF0000 表示红色，其中 FF 对应十进制的255，表示红色通道的最大值。
Ï
```js
function getColor(number) {

  const alpha = number >> 24 & 0xff;
  const red = number >> 16 & 0xff;
  const green = number >> 8 & 0xff;
  const blue = number & 0xff;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;

}
getColor('0xFFAABBCC')
```

## #999999转rgb方法

```js
function getColor(mystring) {
    var rgb;
    var r = parseInt(mystring.slice(1, 3), 16);
    var g = parseInt(mystring.slice(3, 5), 16);
    var b = parseInt(mystring.slice(5), 16);
    rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}
console.log(getColor('#999999')); // rgb(153,153,153)
```
