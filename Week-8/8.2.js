// 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) {
        return null
    }
    let temp = head;
    let length = 1
    // calculate the length of the linked list and get to the last node
    while (temp.next !== null) {
        temp = temp.next
        length++
    }
    //Mod by length in case the number of rotations are > length
    k = k % (length)
    if (k == 0) {
        return head
    }
    let to_rotate = length - k - 1;
    let last_nodes = head
    temp.next = head;
    while (to_rotate > 0) {
        to_rotate--;
        last_nodes = last_nodes.next
    }
    nodes_to_move = last_nodes.next
    last_nodes.next = null;
    temp.next = head
    head = nodes_to_move
    return head
};