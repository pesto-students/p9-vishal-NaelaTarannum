// // // Problem 8.1 : Reverse the Linked listGiven a linked list of N nodes.
// // The task is to reverse this list.Example 1:Input:LinkedList: 1->2->3->4->5->6Output: 6 5 4 3 2 1Explanation: After reversing the list,elements are 6->5->4->3->2->1.
// Example 2:Input:LinkedList: 2->7->8->9->10Output: 10 9 8 7 2Explanation: After reversing the list,elements are 10->9->8->7->2.
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 104

'use strict';





class Solution {
    //Function to reverse a linked list.
    reverseList(head) {
        //your code here
        if (head === null) return;
        let temp = null;
        let prev = null;
        while (head) {
            temp = head.next;
            head.next = prev;
            prev = head
            head = temp
        }
        return prev
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {

    let n = 6;
    let input_ar1 = [1, 2, 3, 4, 5, 6]
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let i = 1; i < n; i++) {
        tail.next = new Node(input_ar1[i]);
        tail = tail.next;
    }
    let obj = new Solution();
    head = obj.reverseList(head);
    printlist(head);

}
main()

