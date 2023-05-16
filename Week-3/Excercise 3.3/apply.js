// The apply method is similar to the call method except for the fact that apply methods take
//arguments as an array.
//This is especially useful when the number of parameters is unknown before run-time.


const fruits = {
    favFruit(firstFruit, lastFruit) {
        console.log(`My favourite fruits are ${firstFruit} and ${lastFruit}`)
    }
}

fruits.favFruit.apply(null, ["Apples", "Mangoes"])