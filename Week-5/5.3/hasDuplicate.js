
// Write a function called hasDuplicate which accepts an array and returns true or false if that
//  array contains a duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;
console.log(hasDuplicate([1, 5, 5, - 1, 4]))