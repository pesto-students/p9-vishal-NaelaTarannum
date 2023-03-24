



//Rotate a Linked list

class Solution {
    //Function to rotate a linked list.
    rotateRight(head, k) {
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
        let nodes_to_move = last_nodes.next
        last_nodes.next = null;
        temp.next = head
        head = nodes_to_move
        return head
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

    let n = 8;
    let input_ar1 = [1, 2, 3, 4, 5, 6, 7, 8]
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let i = 1; i < n; i++) {
        tail.next = new Node(input_ar1[i]);
        tail = tail.next;
    }
    let obj = new Solution();
    head = obj.rotateRight(head, 4);
    printlist(head);

}
main()

