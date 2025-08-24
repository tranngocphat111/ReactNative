"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    sound() {
        console.log(`${this.name} makes a sound.`);
    }
    ;
    constructor(name) {
        this.name = name;
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says: Gau Gau!!!`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says: Meo Meo!!!`);
    }
}
exports.Cat = Cat;
