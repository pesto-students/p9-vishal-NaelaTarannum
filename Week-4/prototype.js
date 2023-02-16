function Person(name, age) {

    this.name = name;
    this.age = age;


}

Person.prototype.teach = function (subject) {
    return `${this.name} teacher teaches ${subject} subject.`
}

const teacher = new Person('Naela', 24);
console.log(teacher.teach('math'))