
// Using Async/Await and Generators, create separate functions and achieve the samefunctionality.
// (3hours)Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().
// Guidelines:1.2 functions should be created. One for Async/Await and the other one for Generators.
// 2.3rd party libraries should not be used.
// 3.Custom Function should carry a meaningful name.
// 4.The program should execute without errors.
// 5.The program should achieve the desired result.
// 6.The program should take care of all 3 states of a Promise.
// 7.Should be committed to Git with meaningful commit messages.
// Outcome:1.Under the hood understanding of how a Generator works.2.Under the hood understanding of how Async/await works
function* generator() {
    try {
        const task1Result = yield task1();
        console.log(task1Result);
        const task2Result = yield task2();
        console.log(task2Result);
        const task3Result = yield task3();
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

const tasksGenerator = generator();
const task1Promise = tasksGenerator.next().value;
task1Promise.then(task1Result => {
    const task2Promise = tasksGenerator.next(task1Result).value;
    task2Promise.then(task2Result => {
        const task3Promise = tasksGenerator.next(task2Result).value;
        task3Promise.then(task3Result => {
            tasksGenerator.next(task3Result);
        }).catch(error => {
            console.log(error)
        });
    }).catch(error => {
        console.log(error)
    });
}).catch(error => {
    console.log(error)
});
