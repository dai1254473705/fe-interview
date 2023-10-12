/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        console.log(set,set.size);
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if(set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    console.log(set);
    return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1],3)); // true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false