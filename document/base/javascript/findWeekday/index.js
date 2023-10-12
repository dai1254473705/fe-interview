/**
 * @param { Number } weekday 默认周五，指定的是查找周几
 * @param { Number } num 默认当前周，当前周之前或者之后几周的日期
 */
function findWeekday(weekday=5, num=1) {
    let diffNum = 0;
    const date = new Date();
    const currentDay = date.getDay();
    const arr = [1,2,3,4,5,6,7];
    console.log(currentDay,weekday);
    // 今天就是当前要查询的日期
    if (currentDay === weekday) {
        return 0;
    }
    // 如果已经过去了，需要查找下一周的
    if (currentDay > weekday) {
        return diffNum + 7 - currentDay + weekday;
    }
    // 如果还没过去
    return weekday - currentDay;
}
console.log(findWeekday(6));