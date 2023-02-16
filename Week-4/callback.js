function getNumber(resolveCallback, rejectCallback, runTime) {
    const randomNumber = Math.floor(Math.random() * 100);
    setTimeout(function () {
        console.log(`The random number is ${randomNumber}`)
        if (randomNumber % 5 === 0) {
            rejectCallback();
        }
        else {

            resolveCallback();
        }
    }, runTime);

}

getNumberCallbacksBound = getNumber.bind(null, () => console.log('The callback was resolved'), () => console.log('The callback was rejected'));
ret = getNumberCallbacksBound(1000);
console.log(ret)