/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
 * Return the sum of the three integers.Assume that there will only beone solution
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    const a = nums.sort((a, b) => a - b);
    let l = 0;

    let newDiff = 1000000
    for (let i = 0; i < nums.length; i++) {
        l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            sum = a[i] + a[l] + a[r]
            if (Math.abs(1 * target - sum) < Math.abs(1 * target - newDiff)) {
                newDiff = sum;
            }
            if (sum > target) {
                r = r - 1
            }
            else {
                l = l + 1
            }
        }
    }
    return newDiff

};
