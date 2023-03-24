// Problem 8.3: Detect loop in a linked listGiven a linked list of N nodes. The task is to check if the linked list has a loop. 
// Linkedlist can contain self loop.
// xample 1:Input:N = 3value[] = {1,3,4}x = 2Output: TrueExplanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is givenwhich means last node is connected with xth node of linked list. Therefore, there exists a loop.
// Example 2:Input:N = 4value[] = {1,8,3,4}x = 0Output: FalseExplanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not containsany loop.Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103
// Javascript program to return first node of loop
// Linked list Node
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

// Head of list
let head;

/* Inserts a new Node at front of the list. */
function push(new_data) {
    /* 1 & 2: Allocate the Node &
            Put in the data*/
    let new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

// Function to detect first node of loop
// in a linked list that may contain loop
function detectLoop(head) {
    if (head == null || head.next == null) return false
    let slow_p = head, fast_p = head;

    while (slow_p != null && fast_p != null &&
        fast_p.next != null) {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p) return true
    }
    return false
}

// Driver Code
push(1);
push(2);
push(3);
push(4);
push(5);

/* Create a loop for testing */
head.next.next.next.next.next = head.next.next;

console.log(detectLoop(head))


