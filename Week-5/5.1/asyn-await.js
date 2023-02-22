async function performTask() {
    try {
        const task1Result = await task1();
        console.log(task1Result);
        const task2Result = await task2();
        console.log(task2Result);
        const task3Result = await task3();
        console.log(task3Result);
    } catch (error) {
        console.log(error);
    }
}

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task1 Completed');
        }, 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Rejected');
        }, 3000);
    });
}


