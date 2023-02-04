
//The call method calls the fucntion with a given this value and arguments provided
//individually.

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};

const obj2 = {
    animal: "dogs",
    sleepDuration: "8 and 10 hours"
}

greet.call(obj);
// cats typically sleep between 12 and 16 hours

greet.call(obj2);

// dogs typically sleep between 8 and 10 hours
// We can also use this to call functions with different arguments

function greetAnimal(name) {
    console.log(name, "is a domestic animal")
}

greetAnimal.call(null, "Cat")



