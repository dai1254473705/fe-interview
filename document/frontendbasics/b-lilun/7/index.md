---
title: 7. 什么是节流、防抖函数？作用及应用场景？如何实现？
order: 7
---
# 7. 什么是节流、防抖函数？作用及应用场景？如何实现？

## 函数防抖（debounce）：

    事件响应函数在一段时间后才会执行，如果在这段时间内再次调用，则重新计算执行时间；当预定时间内没有再次调用该函数，则执行响应逻辑。
    如： 设置某个函数2s钟内只能执行一次，如果2s内实际触发了大于2次，则2秒内不会执行，会等到最后一次触发结束2s后执行；
    
    
### 函数防抖应用场景(debounce)
- scroll事件滚动触发事件
- 搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
- 表单验证
- 按钮提交事件。
- 浏览器窗口缩放，resize事件(如窗口停止改变大小之后重新计算布局)等。

### 防抖实现：

```js
function debounce(callback,delay) {

    var timer = null;

    return function () {

        var args = arguments;

        var that = this;

        clearTimeout(timer);
        timer = setTimeout(function () {

            callback.apply(that, args);

        }, delay);

    };
};

// 使用方式
function dd(){
    console.log('dd');
}
window.onresize = debounce(dd,500);
```


## 函数节流（throttle）：

    可以理解为在函数防抖上多加了一个功能：函数节流会预定一个自动执行时间，到时自动执行一次。
    如： 设置某个函数2s钟内只能执行一次，如果2s内实际触发了大于2次，那最多只能执行1次；

## 共同点：

    函数节流与函数防抖都是为了限制函数的执行频次，是一种性能优化的方案，比如应用于window对象的resize、scroll事件，拖拽时的mousemove事件，文字输入、自动完成的keyup事件。


### 函数节流的应用场景(throttle)
- DOM 元素的拖拽功能实现（mousemove）
- 搜索联想（keyup）
- 计算鼠标移动的距离（mousemove）
- Canvas 模拟画板功能（mousemove）
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次.

### 节流实现：

```js
function throttle(callback,delay){

    var timerId = null;

    return function(){

        if (timerId) {

            return;
        }
        var args = arguments;

        var that = this;

        timerId = setTimeout(() => {

            timerId = null;

            callback.apply(that,args);
        }, delay);

    }
}
```
