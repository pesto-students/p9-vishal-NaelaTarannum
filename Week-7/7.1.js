/**
 * @param {number[]} nums
 * @return {number}
 * Find the contiguous subarray within an array, A of length N which has the largest sum.
 * Input Format:The first and the only argument contains an integer array, A. Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:Input 1: A = [1, 2, 3, 4, -10]Output 1: 10Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
 * Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.
 */
var maxSubArray = function (nums) {
    let maxsum = Number.MIN_SAFE_INTEGER;
    let max_so_far = 0;
    for (let i = 0; i < nums.length; i++) {
        max_so_far = max_so_far + nums[i]
        if (max_so_far < nums[i]) {
            max_so_far = nums[i]
        }
        if (maxsum <= max_so_far) {
            maxsum = max_so_far
        }
    }
    return maxsum;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))