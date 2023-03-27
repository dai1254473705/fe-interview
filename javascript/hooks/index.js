// 保存effect栈
const effectStack = [];

function subscribe(effect,subs){
    // 订阅关系建立
    subs.add(effect);
    // 依赖关系建立
    effect.deps.add(subs);
}

function cleanup (effect) {
    // 从该effect订阅的所有state对应的subs中移除该effect
    for (const subs of effect.deps) {
        console.log(subs,'subs');
        subs.delete(effect);
    }
    // 将该effect依赖的所有state对应的subs移除
    effect.deps.clear();
}

function useState (value){
    // 保存订阅该state变化的effect
    const subs = new Set();
    const getter = ()=>{
        // 获取当前上下文的effect
        const effect = effectStack[effectStack.length - 1];
        if (effect ) {
            // 建立订阅发布关系
            subscribe(effect,subs);
        }
        return value;
    }
    const setter = (nextValue)=>{
        value = nextValue;
        // 通知所有订阅该state变化的effect执行
        for (const effect of [...subs]){
            effect.execute();
        }
    }
    return [getter, setter];
}

function useEffect (callback){
    const execute = ()=>{
        // 重置依赖
        cleanup(effect);
        // 将当前effect推入栈顶
        effectStack.push(effect);
        console.log(effectStack,'effectStackeffectStackeffectStack');
        try {
            // 执行回调
            callback();
        } finally {
            // effect 出栈
            effectStack.pop();
        }
    };
    const effect = {
        execute,
        deps: new Set(),
    };
    // 立即执行一次，建立订阅发布关系
    execute();
}
const [count,setCount] = useState(0);
const [count1,setCount1] = useState(0);

useEffect(()=>{
    const dd = count();
    const dd1 = count1();

    console.log(dd,dd1,'----', effectStack);
});
useEffect(()=>{
    const dd = count1();
    console.log(dd,'----', effectStack);
});
setCount(2);
setCount1(2);
