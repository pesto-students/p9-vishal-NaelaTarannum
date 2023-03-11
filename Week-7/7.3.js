/**
 * Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder.
 */

var sortColors = function (nums) {
    let low = 0
    let high = nums.length - 1
    let mid = 0
    let a = nums
    while (low <= high && mid <= high) {
        if (a[mid] === 2) {
            [a[mid], a[high]] = [a[high], a[mid]];
            high = high - 1
        }
        else if (a[mid] === 0) {
            [a[mid], a[low]] = [a[low], a[mid]];

            low = low + 1
            mid = mid + 1
        }
        else if (a[mid] === 1) {
            mid = mid + 1
        }


    }
    return a
};

console.log(sortColors([0, 2, 1, 2, 0]))