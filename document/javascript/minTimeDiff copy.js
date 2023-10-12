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
    // 循环，转换成相对于00:00到当前时间的分钟数
    const miniteList = [];
    let minDiffTime = null;

    for (let i=0,len=timePoints.length;i<len;i++){
        const data = timePoints[i].split(':');
        let diffMinite;
        if (data[0][0] === '0') {
            diffMinite =data[0] * 60  + parseInt(data[1]);
            miniteList.push(diffMinite);
            data[0] = 24 + parseInt(data[0]);
        }
        diffMinite =data[0] * 60  + parseInt(data[1]);
        miniteList.push(diffMinite);
    }

    // 计算两者间的差值
    for (let j=0,len=miniteList.length;j<len-1;j++){
        for (let k=1+j;k<len;k++){
            const diff = Math.abs(miniteList[j] - miniteList[k]);
            if (minDiffTime>diff || minDiffTime === null) {
                minDiffTime = diff;
            }
        }
        
    }
    return minDiffTime;
};
