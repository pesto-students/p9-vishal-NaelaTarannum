// Problem 8.6: Implement a Queue using 2 stackImplement a Queue using 2 stacks s1 and s2.A Query Q is of 2 Types(i) 1 x(a queryof this type means pushing 'x' into the queue)(ii) 2(a query of this type means to popelement from queue and print the poped element)
// Example 1: Input: 51 2 1 3 2 1 4 2Output: 2 3Explanation:In the first testcase1 2 the queue will be { 2 }
// 1 3 the queue will be { 2 3 } 2   poped element will be 2 the queue will be { 3 } 1 4 the queue will be { 3 4 } 2   poped element will be 3.
// Example 2: Input: 41 2 2 2 1 4Output: 2 - 1Explanation:In the second testcase1 2 the queue will be { 2 } 2   poped element will be 2 and then the queue will be empty 2 the queue is empty and hence - 11 4 the queue will be { 4 }.

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack1.length == 0) {
        console.log("Q is empty");
    }

    // if s2 is empty, move
    // elements from s1
    if (this.stack2.length == 0) {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1[0]);
            this.stack1.shift();
        }
    }

    // return the top item from s2
    let x = this.stack2[0];
    this.stack2.shift();
    while (this.stack2.length != 0) {
        this.stack1.push(this.stack2[0]);
        this.stack2.shift();
    }
    return x;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack1[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0
};


var obj = new MyQueue()
obj.push(1)
obj.push(2)
console.log(obj.peek())
obj.pop()
console.log(obj.empty())
obj.pop()
console.log(obj.empty())
