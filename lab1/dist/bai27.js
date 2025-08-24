"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`I am ${this.name}, I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
