// // Problem 8.5: Next Greater ELementGiven an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
// // Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. If there does not exist next greater of currentelement, then next greater element for current element is -1.
//  For example, next greaterof the last element is always -1.
//  Example 1:Input:N = 4, arr[] = [1 3 2 4]Output:3 4 4 -1Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
// Example 2:Input:N = 5, arr[] [6 8 0 1 3]Output:8 -1 1 3 -1Explanation:In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,for 1 it is 3 and then for 3 there is no larger element on right and hence -1.Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018

function nextGreaterElement(arr) {
    const stack = []
    stack.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i])
            continue
        }
        while (stack.length != 0 && stack[stack.length - 1] < arr[i]) {
            console.log(`${stack[stack.length - 1]} --> ${arr[i]}`)
            stack.pop()
        }
        stack.push(arr[i])

    }
    while (stack.length != 0) {
        console.log(`${stack[stack.length - 1]} --> -1}`)
        stack.pop();
    }
}






var arr = [11, 13, 3, 21];
nextGreaterElement(arr)