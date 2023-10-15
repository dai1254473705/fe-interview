class Observe {
    constructor(){
        // 订阅集合
        this.subscribes = {};
    }
    // 订阅
    addEventListener(type,fn){
        if (!this.subscribes[type]) {
            this.subscribes[type] = [];
        }
        if (typeof fn === 'function') {
            // 收集订阅者的处理
            this.subscribes[type].push(fn);
        }
    }
    // 发布
    on(type,data){
        const fns = this.subscribes[type];
        // 不存在的订阅类型，以及订阅时未传入处理回调的
        if (!fns || fns.length<1) {
            return;
        }
        for (let i=0,len=fns.length;i<len;i++){
            fns[i](data);
        }
    }
    // 移除
    removeEventListener(type,fn){
        // 删除全部
        if (typeof type === 'undefined') {
            this.subscribes = [];
            return;
        }
        const fns = this.subscribes[type];
        // 不存在的订阅类型，以及订阅时未传入处理回调的
        if (!fns || !fns.length) {
            return;
        }
        if (typeof fn === 'undefined') {
            fns.length = 0;
            return;
        }
        // 挨个处理删除
        for (let i = 0,len=fns.length; i < len; i++) {
            if (fns[i] === fn) {
                fns.splice(i, 1);
            }
        }
    }
};
// 实例化
const observer = new Observe();

const refresh = (data)=>{
    console.log('刷新1',data);
}
// 监听refresh事件
observer.addEventListener('refresh',refresh);
observer.addEventListener('refresh',(data)=>{
    console.log('刷新2',data);
});

// 触发refresh事件
observer.on('refresh',1231);
// 移除事件
observer.removeEventListener('refresh', refresh);
// 再次触发
observer.on('refresh',1231);