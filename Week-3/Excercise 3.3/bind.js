// Consider this object 

let fruits = {
    name: 'Apple',

}

function getFruit() {
    console.log(this.name)
}

//The getFruit method, when invoked with setTimeout returns undefined 

// setTimeout(fruits.getFruit, 1000); //undefined

//We can fix this by using a wrapping function like so

// setTimeout(() => fruits.getFruit(), 1000) //Apple


// fruits = {
//     name: 'Mango',
//     getFruit() {
//         console.log(this.name)
//     }
// }

//But this can also pose a problem.In case the value of fruits changes, the original
// value will be lose 

// We can use .bind() to bind the value of this to the intended context

bindApple = getFruit.bind(fruits)

setTimeout(bindApple, 1000);

//We can also use this to bind arguments

function mul(a, b) {
    return a * b
}

let double = mul.bind(null, 2) //a has been bound to the value 2

console.log(double(3)) //6