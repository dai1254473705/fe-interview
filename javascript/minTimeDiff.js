/**
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 * 2 <= timePoints.length <= 2 * 104
 * timePoints[i] 格式为 "HH:MM"
 * 
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // 判断是不是数组
    if (!Array.isArray(timePoints) || timePoints.length < 2) {
        return 0;
    }
    // 默认为0
    // 循环 重新生成完整时间，处理00:xx格式
    const miniteList = [];
    let minDiffTime = null;
    for (let i =0,len = timePoints.length;i<len;i++) {
        const splitTime = timePoints[i].split(':');
        miniteList.push(new Date(`0000/${timePoints[i]}`).getTime());
        if ( splitTime[0] === '00') {
            miniteList.push(new Date(`0000/24:${splitTime[1]}`).getTime());
        }
    } 
    console.log(miniteList,'miniteList');
    // 计算两者间的差值
    let diff = null;
    for (let j=0,len=miniteList.length;j<len-1;j++){
        const first = miniteList[j];
        for (let k=1+j;k<len;k++){
            const end = miniteList[k];
            diff = Math.abs(first - end) / 60000;
            console.log('diff', diff);
            if (minDiffTime>diff || minDiffTime === null) {
                minDiffTime = diff;
            }
        }
    }
    return minDiffTime;
};
// console.log(findMinDifference(["00:00","23:59"]));
console.log(findMinDifference(["22:08","00:35"]));
