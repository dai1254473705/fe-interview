/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkData = function (i,j,k) {
    return Math.abs(i - j) <= k;
}
var findResFunc = function (nums,k){
    // 判断数据是否正常
    if (!Array.isArray(nums) || nums.length<2 || typeof k !== 'number') {
        return false;
    }
    // 找到相同key的下标
    const len = nums.length;
    let findRes = false;
    for (let i=0;i<len-1;i++){
        const item = nums[i];
        for (let j=i+1;j<len;j++){
            const item2 = nums[j];
            console.log(i,j,k);
            findRes = checkData(item,item2,k);
            if (findRes) {
                break;
            }
        }
        if (findRes) {
            break;
        }
    }
    return findRes;
};
var containsNearbyDuplicate = function(nums, k) {
    // 判断数据是否正常
    if (!Array.isArray(nums) || nums.length<2 || typeof k !== 'number') {
        return false;
    }
    const _keys = {};
    for (let i =0,len = nums.length;i<len;i++){
        const data = nums[i];
        if (_keys[data]) {
            _keys[data].push(i);
        } else {
            _keys[data] = [i];
        }
    }
    console.log(_keys);
    let cacheRes = false;
    for (let j in _keys){
        if (_keys[j].length>1) {
            cacheRes = findResFunc(_keys[j],k);
        }
        if (cacheRes) {
            break;
        }
    }
    return cacheRes;
};

console.log(containsNearbyDuplicate([1,2,3,1],3)); // true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false