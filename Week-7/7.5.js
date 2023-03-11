/** 
 * iven an one-dimensional unsorted array A containing N integers.
 * You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let i = 0;
    let j = 1;
    let count = 0;
    const map = {}
    let a = nums.sort(function (a, b) { return a - b });
    while (i < j && j < a.length) {
        if ((a[j] - a[i]) == k && map[a[j]] != a[i]) {
            map[a[j]] = a[i];
            count += 1
            i = i + 1
            j = j + 1
        }
        else if ((a[j] - a[i]) > k) {
            i = i + 1
        }
        else {
            j = j + 1
        }
        if (i == j) {
            j = j + 1
        }
    }
    return count

};