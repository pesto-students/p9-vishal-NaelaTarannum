function createIncrement() {
    let count = 0; function increment() { count++; }
    let message = `Count is ${count}`;
    function log() { console.log(message); }
    return [increment, log];
}
let [increment, log] = createIncrement();
increment();
increment();

increment();

log(); //0
//The log function logs 0 as message is being intialized to the string Count is 0 as
//initial value of count is 0 and count in the string is not being updated.

function createIncrementCount() {
    let count = 0; function increment() {
        count++;
        message = `Count is ${count}`;

    }
    let message = `Count is ${count}`;
    function log() { console.log(message); }
    return [increment, log];
}
[increment, log] = createIncrementCount();
increment();
increment();

increment();
log(); //3