# 1. 常用 util 方法

#### 1.去字符串前后空格

```js
/**f
 * @example
 * '  sdfasdf  asdf '.Trim(); // "sdfasdf  asdf"
 */
String.prototype.Trim = function() {
     return this.replace(/^\s+|\s+$/g, "");
}
```

#### 2.判断邮编是否合法
```js
/**
 * 判断邮编是否合法
 * @param {string} postalCode - 邮编字符串
 * @returns {boolean} - 如果合法返回true，否则返回false
 * @example
 * isValidPostalCode("123456"); // true
 * isValidPostalCode("12345");  // false
 * isValidPostalCode("1234567"); // false
 * isValidPostalCode("abc123"); // false
 */
function isValidPostalCode(postalCode) {
    return /^\d{6}$/.test(postalCode.trim());
}
```

#### 3.判断是否合法的email电子邮件格式

```js
/**
 * 判断是否合法的电子邮件格式
 * @param {string} email - 要检查的电子邮件地址
 * @returns {boolean} - 如果是有效的电子邮件格式则返回 true，否则返回 false
 * @example
 * console.log(isEmail("example@example.com")); // true
 * console.log(isEmail("invalid-email")); // false
 */
function isEmail(email) {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailReg.test(email);
}
```

#### 4. 判断电话号码格式是否合法

```js
/**
 * 判断电话号码格式是否合法
 * @param {string} telephone - 要检查的电话号码
 * @returns {boolean} - 如果是有效的电话号码格式则返回 true，否则返回 false
 * @example
 * console.log(isTelephone("123-456-7890")); // true
 * console.log(isTelephone("invalid-phone")); // false
 */
function isTelephone(telephone) {
    const telephoneReg = /^[0-9\-]+$/;
    return telephoneReg.test(telephone);
}
```

#### 5.验证日期格式是否正确
> 格式xxxx-xx-xx,yyyy-mm-dd

+ `/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/`：匹配日期字符串，格式为 yyyy-mm-dd 或 yyyy/mm/dd。
+ `\d{1,4}`：匹配1到4位数字（年份）。
+ `(-|\/)`：匹配一个横杠或斜杠作为分隔符。
+ `\d{1,2}`：匹配1到2位数字（月和日）。
+ `\2`：引用前面的分隔符（横杠或斜杠），匹配的是所获取的第2个()匹配的引用。


```js
/**
 * 验证日期格式是否正确
 * @param {string} str - 要验证的日期字符串，格式为 yyyy-mm-dd 或 yyyy/mm/dd
 * @returns {boolean} - 如果日期格式正确则返回 true，否则返回 false
 * @example
 * console.log(formatTime("2023-06-27")); // true
 * console.log(formatTime("2023/06/27")); // true
 * console.log(formatTime("2023-13-27")); // false
 */
function formatTime(str) {
    const r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (!r) return false;

    const [ , year, , month, day] = r;
    const d = new Date(year, month - 1, day);
    return d.getFullYear() == year && (d.getMonth() + 1) == month && d.getDate() == day;
}
```

#### 6. 验证输入值是否为有效的金额格式

1. **正则表达式说明**：
   - `/^\d+(\.\d{0,2})?$/`：匹配有效的金额格式。
     - `^\d+`：以一个或多个数字开头。
     - `(\.\d{0,2})?`：可选的小数部分，小数点后最多两位数字。
     - `$`：匹配字符串的结尾。

2. **返回值**：
   - 直接返回正则表达式的测试结果，如果匹配则返回 `true`，否则返回`false`。


```js
/**
 * 验证输入值是否为有效的金额格式
 * @param {string} value - 要验证的金额字符串
 * @returns {boolean} - 如果金额格式正确则返回 true，否则返回 false
 * @example
 * console.log(moneyValidate("123")); // true
 * console.log(moneyValidate("123.45")); // true
 * console.log(moneyValidate("123.4")); // true
 * console.log(moneyValidate("123.")); // true
 * console.log(moneyValidate("123.456")); // false
 * console.log(moneyValidate("abc")); // false
 */
function moneyValidate(value) {
    const moneyReg = /^\d+(\.\d{0,2})?$/;
    return moneyReg.test(value);
}
```


#### 7. 创建XMLHttpRequest

```js
function createXhr() {
     if (window.ActiveXObject) {
          return new ActiveXObject("Microsoft.XMLHTTP");
     } else if (window.XMLHttpRequest) {
          return new XMLHttpRequest();
     } else {
          throw new Error("Does not ajax programming");
     }
}
```

#### 8. 格式化金额/浮点数并添加千位分隔符

```js
/**
 * 格式化浮点数并添加千位分隔符
 *
 * @param {number|string} amount - 要格式化的金额，可以是数字或字符串
 * @param {number|null} [decimals=null] - 保留的小数位数，默认保留原本的小数位数
 * @param {boolean} [round=true] - 是否四舍五入，默认四舍五入
 * @param {boolean} [useThousandsSeparator=true] - 是否使用千位分隔符，默认使用
 * @returns {string} - 格式化后的金额字符串
 * @example
 * console.log(formatMoney(1234567.891)); // "1,234,567.891"
 * console.log(formatMoney(1234567.891, 2)); // "1,234,567.89"
 * console.log(formatMoney(-1234567.891, 3, false)); // "-1,234,567.891"
 * console.log(formatMoney("abc", 2)); // "0.00"
 * console.log(formatMoney(1234567.891, 2, true, false)); // "1234567.89"
 */
function formatMoney(amount, decimals = null, round = true, useThousandsSeparator = true) {
    // 将金额转换为浮点数
    let num = parseFloat(amount);
    if (isNaN(num)) {
        num = 0;
    }

    // 如果decimals为null，保留原始的小数位数
    if (decimals === null) {
        decimals = (num.toString().split('.')[1] || '').length;
    }

    // 根据是否需要四舍五入处理小数位数
    if (round) {
        num = num.toFixed(decimals);
    } else {
        const factor = Math.pow(10, decimals);
        num = Math.floor(num * factor) / factor;
        num = num.toFixed(decimals);
    }

    // 格式化金额
    if (useThousandsSeparator) {
        return Number(num).toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    } else {
        return num;
    }
}

```

#### 9. 使用正则表达式过滤指定的特殊字符

> 在正则表达式中，方括号 `[]` 用来定义一个字符类（character class），表示在其中列出的任意字符之一。例如，`[abc]` 表示匹配字符 `a`、`b` 或 `c` 中的任意一个。
如果你去掉了方括号，比如只使用 `/abc/` 而不是 `/[abc]/`，这时候正则表达式就会尝试匹配确切的字符序列 `abc`，而不是匹配字符 `a`、`b` 或 `c` 中的任意一个。

+ 使用了正则表达式 **`[`...`]`** 来定义特殊字符的字符类。
+ `replace()` 方法结合正则表达式 `specialCharsPattern`，将匹配到的特殊字符替换为空字符串。


```js
/**
 * 使用正则表达式过滤指定的特殊字符
 *
 * @param {string} str - 需要过滤的字符串
 * @returns {string} - 过滤后的字符串
 * @example
 * console.log(filterStr("Hello!@#$%^&*()_+World")); // "HelloWorld"
 */
function filterStr(str) {
    const specialCharsPattern = /[`~!@#$^&*()=|{}':;',\[\]<>\/?！￥…（）——|{}【】‘；：”“'。，、？%+_\-]/g;
    return str.replace(specialCharsPattern, "");
}
```

#### 10. 金额转大写
```js
function onlyNumber1(number, n) {
    let ret = '';
    if (number != '' && number != null && number != '0') {
      let unit = '仟佰拾亿仟佰拾万仟佰拾元角分',
        str = '';
      number += '00';
      const point = number.indexOf('.');
      if (point >= 0) {
        number = number.substring(0, point) + number.substr(point + 1, 2);
      }
      unit = unit.substr(unit.length - number.length);
      for (let i = 0; i < number.length; i++) {
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(number.charAt(i)) + unit.charAt(i);
      }
      ret =
        str
          .replace(/零(仟|佰|拾|角)/g, '零')
          .replace(/(零)+/g, '零')
          .replace(/零(万|亿|元)/g, '$1')
          .replace(/(亿)万|(拾)/g, '$1$2')
          .replace(/^元零?|零分/g, '')
          .replace(/元$/g, '元') + '整';
    }
    return ret;
  }
  onlyNumber1(123,2) // 壹佰贰拾叁元整
```

#### 11. 通过ua判断当前设备情况及客户端生态环境

```js
function getEnvInfo() {
  // 环境信息默认值
  const envInfo = {
    /* ------------- Os ------------- */
    ios: false,
    android: false,
    mac: false,
    window: false,
    /* ------------- Platform ------------- */
    dingtalk: false,
    wxwork: false,
    wechat: false,
    feishu: false,
    miniprogram: false,
  };
  // 从userAgent字符串中提取相关信息
  const matcher = navigator.userAgent
    .toLowerCase()
    .match(
      /android|ipad|iphone|macintosh|windows nt|dingtalk|wxwork|micromessenger|miniprogram|feishu|lark\//g
    );
  // 对提取到的关键字进行重命名
  const rename = {
    iphone: 'ios',
    ipad: 'ios',
    macintosh: 'mac',
    'windows nt': 'window',
    micromessenger: 'wechat',
    'lark/': 'feishu',// feishu pc端
  };
  // 将匹配到的关键字更新到envInfo对象中
  matcher?.forEach?.((it) => {
    const key = rename[it] || it;
    envInfo[key] = true;
  });
  return envInfo;
}
console.log(getEnvInfo());// -> 
  {
    "ios": false,
    "android": false,
    "mac": true,
    "window": false,
    "dingtalk": false,
    "wxwork": false,
    "wechat": false,
    "feishu": false,
    "miniprogram": false
 }
```

#### 12. 原生js复制

```js
/**
 * 原生js复制
 * @param {string} contentText - 要复制的内容
 * @returns
 * @example
 * console.log(clipBoard("12331231")); // 12331231
 */
const clipBoard = (contentText) => {
  const inputEle = document.createElement('textarea');
  inputEle.value = contentText;
  document.body.appendChild(inputEle);
  inputEle.select();
  document.execCommand('copy');
  document.body.removeChild(inputEle);
};
```

#### 13. 金额转为千分位

```js
/**
 * 金额转千分位
 * @param {String|Number} [num] 需要处理的数字
 * @param {String|Number} [fixedNum] 需要保留的小数位长度，默认有几位小数就保留几位
 * @example
 *      toThousandsFormat(2131232.3434); // 2,131,232.3434
 *      toThousandsFormat(2131232.3434,2); // 2,131,232.34
 */
export function toThousandsFormat(num?: string | number, fixedNum?: number): string | number {
  // 判断传进来的数字是否为非空数字
  if (isNaN(parseFloat(String(num)))) {
    return num as string;
  }
  // 处理小数位
  let fixedNumCache: number;
  if (typeof fixedNum === 'undefined') {
    const dotNum = String(num).split('.')[1];
    fixedNumCache = dotNum ? dotNum.length : 0;
  } else {
    fixedNumCache = fixedNum;
  }
  const thousandNum = Number(Number(num).toFixed(fixedNumCache)).toLocaleString('zh', {
    minimumFractionDigits: fixedNumCache,
  });
  return thousandNum;
}
```

#### 14. JS拉起或下载app的实现代码

> 在打开的页面判断当前用户是否安装了相应的APP，如果安装了就弹出打开APP的弹窗，如果没安装就跳转到下载页面


```js
function openApp() {
    var start = new Date(); //记录初始时间
    var t = 500;
    var ifr = document.createElement('iframe');
    ifr.src = 'bzp://123/'; //打开app（APP的schemes）
    document.body.appendChild(ifr);
    ifr.onload = function() {
        ifr.style.display = 'none';
    };
    setTimeout(function() {
        document.body.removeChild(ifr);
        var end = new Date(); //记录结束时间
        console.log(end - start)
        if(end - start -t <= 30 ) { //两者之差小于30ms时跳转到下载页
            window.location.href ="下载链接";
        }
    }, t);
}
document.querySelector("#openapp").addEventListener("click", function() {
    openApp();
}, false)
```

#### 15. 在Date的原型上扩展format方法

```js
Date.prototype.format = function (format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                    date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }

    console.log(new Date().format('yyyy-MM-dd h:m:s'));
    
====== 使用案例：======
var date = new Date();
var time = date.format('yyyy-MM-dd h:m:s');
// 2023-12-21 13:21:45
```

#### 16. 获取PC浏览器类型及版本号

```js
    /**
    * 获取PC浏览器类型及版本号
    * @example
    * console.log(getUAInfo()); // {"type": "Chrome","version": 119}
    */
    function getUAInfo() {
        var ua = window.navigator.userAgent;
        var versionMatch = ua.match(/(Chrome|Firefox|MSIE|Opera|Edge|OPR|Safari|Trident|Netscape)\/(\d+)/i);
        if (versionMatch) {
            var browserName = versionMatch[1];
            var browserVersion = parseInt(versionMatch[2]);
            return { type: browserName, version: browserVersion };
        } else {
            return { type: 'Other', version: '' };
        }
    }
```
#### 17. 判断当前设备是否是移动端

```js
/**
 * 判断当前设备是否是移动端
 * @returns {boolean} 如果是移动端返回true，否则返回false
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```

#### 18. input number maxlength失效问题

```js
<input type="number" class="mui-input-clear mobile mui-h5" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入您的手机号">
```

#### 19. 原生js解析 Cookie 字符串为键值对对象

```js
/**
 * 解析 Cookie 字符串为键值对对象
 * @returns {Object} 解析后的 Cookie 键值对对象
 */
function cookieParse() {
  // 获取 Cookie 字符串
  const cookieStr = document.cookie;
  // 按照分号和空格分割 Cookie 字符串为数组
  const cookieArray = cookieStr.split('; ');
  // 创建一个空对象用于存储解析后的 Cookie
  const cookieMap = {};
  // 遍历 Cookie 数组
  for (let i = 0, len = cookieArray.length; i < len; i++) {
    // 按照等号分割每个 Cookie 项为键值对
    const cookieItem = cookieArray[i].split('=');
    // 将键值对存储到对象中
    cookieMap[cookieItem[0]] = cookieItem[1];
  }
  // 返回解析后的 Cookie 键值对对象
  return cookieMap;
}
// 打印解析后的 Cookie 键值对对象
console.log(cookieParse());
```

#### 20. 解析url参数

##### 方法一：

> 通过切分 `?` ，然后再切分 `&` 或 `#` 来获取 `query` 和 `hash` 中带 `=` 的参数。

- 首先获取查询字符串。
- 然后通过分割得到参数数组，并遍历将参数名和值存储到对象中。

```js
const queryParse = function (query) {
     const searchUrl = query || location.href;
     const url = searchUrl.split('?')[1] || ''; // 获取url中"?"符后的字串
     const params = {};
     if (url) {
          const str = url;
          const strs = str.split(/&|#/);
          for (let i = 0; i < strs.length; i++) {
               params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
          }
     }
     return params;
};

var url = 'xxxx?ajs=fsdf&ff=234#sdf=adf';
console.log(queryParse(url)); // {ajs: 'fsdf', ff: '234', sdf: 'adf'}
```

##### 方法二：

> 利用正则表达式来处理。

- 定义一个正则表达式来匹配特定格式的参数。
- 通过循环不断提取参数并存储到对象中。

```js
function parseQueryString(url) {
     const params = {};
     if (url) {
          // 正则
          // 匹配开头不为?或者=或者&或者#的至少一个字符，以=连接，=后为非=或者&或者#至少一个字符。
          var reg = /([^?=&#]+)=([^=&#]+)/g;
          // reg必须以变量的形式传入，否则会陷入死循环
          while ((result = reg.exec(url)) !== null) {
               console.log(result);
               params[result[1]] = result[2];
          }
     }
     return params;
}
var url = 'xxxx?ajs=fsdf&ff=234#sdf=adf';
console.log(parseQueryString(url));{ajs: 'fsdf', ff: '234', sdf: 'adf'}
```

#### 21. 检测网络速度 📡

通过 JavaScript 的 `Network Information API`，你可以轻松检测用户的网络下载速度，从而动态调整页面加载的资源大小。

```js
if (navigator.connection) {
    const downlink = navigator.connection.downlink;
    console.log(`当前下载速度: ${downlink} Mbps`);
} else {
    console.log("Network Information API 不被支持");
}
{}
```

#### 22. 为移动端应用添加振动反馈 📳

如果你正在开发移动应用，可以使用 `Vibrate API` 来提供振动反馈，从而增强用户体验。

⚠️**ios 不支持**

```js
// 振动 500 毫秒
if (navigator.vibrate) {
    navigator.vibrate(500);
} else {
    console.log("Vibrate API 不被支持");
}

// 创建振动和暂停的模式
if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 200]);
}
```

#### 23. 禁止文本粘贴 🔒

阻止用户粘贴文本

```html
<input type="text" id="text-input" />

<script>
  const input = document.getElementById('text-input');
  input.addEventListener("paste", function(e){
    e.preventDefault();
    alert("禁止粘贴内容！");
  });
</script>
```
