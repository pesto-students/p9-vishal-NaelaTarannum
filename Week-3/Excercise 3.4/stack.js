function createStack() {
    const items = [];
    return {
        push(item) { items.push(item); },
        pop() { return items.pop(); },
        view() {
            return items;
        }


    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(67)
stack.pop();
console.log(stack.view());
// console.log(stack.vieww());// => 5stack.items;// => [10]stack.items= [10,100,1000