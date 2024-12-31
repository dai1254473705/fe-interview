# 2. 倒计时
#### 秒级倒计时(ss)

```js
  function countdown(seconds) {
  let remainingTime = seconds;

  const timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log('倒计时结束');
      return;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    console.log(`${minutes}分钟 ${seconds}秒`);

    remainingTime--;
  }, 1000);
}

// 示例用法：倒计时 10 秒
const seconds = 10;
countdown(seconds);
```

输出：
```
0分钟 10秒
0分钟 9秒
...
0分钟 1秒
倒计时结束
```

#### 日期倒计时(dd HH mm ss)

```js
function countdown(endTime) {
  const targetTime = new Date(endTime).getTime();

  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = targetTime - currentTime;

    if (distance <= 0) {
      clearInterval(timer);
      console.log('倒计时结束');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
  }, 1000);
}

// 示例用法：倒计时到未来的某个时间点
const endTime = '2023/12/14 16:06:30';
countdown(endTime);
```
输出:
```js
0天 0小时 0分钟 29秒
0天 0小时 0分钟 28秒
...
0天 0小时 0分钟 0秒
倒计时结束
```
